import { useState } from "react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Progress } from "../components/ui/progress";

interface MediaPlatformQuizProps {
  hanayumeAffiliateUrl: string;
  onBackToIndex: () => void;
  onNavigateToContact: () => void;
  onNavigateToPrivacy: () => void;
  onNavigateToAbout: () => void;
}

type Answer = {
  text: string;
  nextQuestion?: number;
  result?: "zexy" | "hanayume" | "mynavi";
};

type Question = {
  id: number;
  text: string;
  icon: string;
  answers: Answer[];
};

const questions: Question[] = [
  {
    id: 1,
    text: "式場探しの状況は？",
    icon: "🔍",
    answers: [
      { text: "まだ全く決まっていない", nextQuestion: 2 },
      { text: "候補がいくつかある", nextQuestion: 2 }
    ]
  },
  {
    id: 2,
    text: "何を重視したいですか？",
    icon: "💡",
    answers: [
      { text: "とにかく幅広く見たい", nextQuestion: 3 },
      { text: "サポートを受けながら探したい", nextQuestion: 3 }
    ]
  },
  {
    id: 3,
    text: "式場はほぼ決まっていますか？",
    icon: "🎯",
    answers: [
      { text: "はい、ほぼ決まっている", nextQuestion: 4 },
      { text: "いいえ、まだ比較中", nextQuestion: 4 }
    ]
  },
  {
    id: 4,
    text: "特典と割引、どちらを重視？",
    icon: "💰",
    answers: [
      { text: "来館だけでもらえる特典", nextQuestion: 5 },
      { text: "成約時の大幅割引", nextQuestion: 5 }
    ]
  },
  {
    id: 5,
    text: "スマホで完結したいですか？",
    icon: "📱",
    answers: [
      { text: "はい、スマホで簡単に", nextQuestion: 6 },
      { text: "いいえ、相談しながら決めたい", nextQuestion: 6 }
    ]
  },
  {
    id: 6,
    text: "初めての式場探しで不安はありますか？",
    icon: "🤝",
    answers: [
      { text: "はい、不安がある", nextQuestion: 7 },
      { text: "いいえ、自分で決められる", nextQuestion: 7 }
    ]
  },
  {
    id: 7,
    text: "LINEで気軽に相談できるのは魅力的？",
    icon: "💬",
    answers: [
      { text: "はい、LINEで相談したい", result: "hanayume" },
      { text: "いいえ、自分で調べたい", result: "zexy" }
    ]
  }
];

const results = {
  zexy: {
    title: "あなたにおすすめなのは「ゼクシィ」！",
    icon: "💰",
    description: "幅広い選択肢と充実した来館特典があなたにぴったりです。",
    features: [
      "日本最大級の掲載式場数",
      "来館特典が充実（ギフト券3〜5万円分など）",
      "詳しい口コミや実際の写真が豊富",
      "雑誌と連動で情報収集しやすい"
    ],
    color: "from-blue-400 to-blue-600",
    url: "https://zexy.net/"
  },
  hanayume: {
    title: "「ハナユメ」がぴったりです！",
    icon: "🤝",
    description: "専任コンシェルジュのサポートと大幅割引があなたに最適です。",
    features: [
      "100万円以上おトクになることも！※",
      "専任コンシェルジュが無料でサポート",
      "LINEで気軽に相談できる",
      "来館特典も充実（6万円分などのケースも）"
    ],
    disclaimer: "※ハナユメから式場見学を予約し成約いただくことが条件です。※式場、日時、人数によっては、割引額が100万円より下回る場合もあります。",
    color: "from-[#FFB6C1] to-[#FF8FAB]",
    url: null // Will use hanayumeAffiliateUrl
  },
  mynavi: {
    title: "「マイナビウェディング」がおすすめです！",
    icon: "🏛",
    description: "式場が決まっているなら、マイナビウェディングで特典を狙いましょう。",
    features: [
      "マイナビ限定の成約特典",
      "料理のグレードアップや衣装割引",
      "最新の空き状況がすぐわかる",
      "式場と直接やり取りできてスムーズ"
    ],
    color: "from-amber-400 to-amber-600",
    url: "https://wedding.mynavi.jp/"
  }
};

export default function MediaPlatformQuiz({
  hanayumeAffiliateUrl,
  onBackToIndex,
  onNavigateToContact,
  onNavigateToPrivacy,
  onNavigateToAbout
}: MediaPlatformQuizProps) {
  const [history, setHistory] = useState<number[]>([1]);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<"zexy" | "hanayume" | "mynavi" | null>(null);

  const currentQuestion = questions.find(q => q.id === history[history.length - 1]);
  const progress = ((history.length - 1) / 7) * 100;

  const calculateResult = (allAnswers: string[]): "zexy" | "hanayume" | "mynavi" => {
    // Count preferences based on answer patterns
    let zexyscore = 0;
    let hanayumeScore = 0;
    let mynaviScore = 0;

    // Q1: 式場探しの状況
    if (allAnswers[0] === "まだ全く決まっていない") zexyscore += 2;
    if (allAnswers[0] === "候補がいくつかある") hanayumeScore += 1;

    // Q2: 何を重視
    if (allAnswers[1] === "とにかく幅広く見たい") zexyscore += 2;
    if (allAnswers[1] === "サポートを受けながら探したい") hanayumeScore += 2;

    // Q3: 式場は決まっているか
    if (allAnswers[2] === "はい、ほぼ決まっている") mynaviScore += 3;
    if (allAnswers[2] === "いいえ、まだ比較中") { zexyscore += 1; hanayumeScore += 1; }

    // Q4: 特典と割引
    if (allAnswers[3] === "来館だけでもらえる特典") zexyscore += 2;
    if (allAnswers[3] === "成約時の大幅割引") hanayumeScore += 2;

    // Q5: スマホで完結
    if (allAnswers[4] === "はい、スマホで簡単に") zexyscore += 1;
    if (allAnswers[4] === "いいえ、相談しながら決めたい") hanayumeScore += 1;

    // Q6: 不安はあるか
    if (allAnswers[5] === "はい、不安がある") hanayumeScore += 2;
    if (allAnswers[5] === "いいえ、自分で決められる") { zexyscore += 1; mynaviScore += 1; }

    // Q7: LINE相談
    if (allAnswers[6] === "はい、LINEで相談したい") hanayumeScore += 2;
    if (allAnswers[6] === "いいえ、自分で調べたい") zexyscore += 1;

    // Determine winner
    if (mynaviScore > zexyscore && mynaviScore > hanayumeScore) return "mynavi";
    if (hanayumeScore > zexyscore) return "hanayume";
    return "zexy";
  };

  const handleAnswer = (answer: Answer) => {
    const newAnswers = [...answers, answer.text];
    setAnswers(newAnswers);

    if (answer.result || history.length === 7) {
      // Calculate result after 7 questions
      const finalResult = calculateResult(newAnswers);
      setResult(finalResult);
    } else if (answer.nextQuestion) {
      setHistory([...history, answer.nextQuestion]);
    }
  };

  const handleBack = () => {
    if (history.length > 1) {
      setHistory(history.slice(0, -1));
      setAnswers(answers.slice(0, -1));
    } else {
      onBackToIndex();
    }
  };

  const handleRestart = () => {
    setHistory([1]);
    setAnswers([]);
    setResult(null);
  };

  if (result) {
    const resultData = results[result];
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <title>診断結果 | ブライダルフェア特典比較メディア</title>
        
        <SiteHeader
          onNavigateToIndex={onBackToIndex}
          onNavigateToDiagnosis={() => {}}
          onNavigateToContact={onNavigateToContact}
          onNavigateToPrivacy={onNavigateToPrivacy}
          onNavigateToAbout={onNavigateToAbout}
        />

        <main className="flex-1 py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            {/* Success Animation */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4 animate-pulse-soft">
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>
              <h1 className="mb-4 text-foreground">診断完了！</h1>
            </div>

            {/* Result Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-primary/20 mb-8">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{resultData.icon}</div>
                <h2 className={`mb-4 text-transparent bg-clip-text bg-gradient-to-r ${resultData.color}`}>
                  {resultData.title}
                </h2>
                <p className="text-foreground/70 text-lg">
                  {resultData.description}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                {resultData.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-secondary/30 rounded-xl"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-foreground/80">{feature}</p>
                  </div>
                ))}
              </div>

              {resultData.disclaimer && (
                <div className="p-4 bg-muted/50 rounded-xl border border-border mb-6">
                  <p className="text-xs text-foreground/60 leading-relaxed">
                    {resultData.disclaimer}
                  </p>
                </div>
              )}

              {/* CTA Button for each result */}
              {result && (
                <>
                  <a
                    href={result === "hanayume" ? hanayumeAffiliateUrl : resultData.url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-8 py-4 bg-gradient-to-r from-[#FECDD3] to-[#FCA5A5] text-foreground rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mb-2"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {result === "zexy" && "ゼクシィで式場を探す"}
                      {result === "hanayume" && "ハナユメで式場を探す"}
                      {result === "mynavi" && "マイナビウェディングで式場を探す"}
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </a>
                  {result === "hanayume" && (
                    <p className="text-xs text-foreground/60 text-center mb-4">
                      ※当サイトは広告を含みます
                    </p>
                  )}
                </>
              )}

              <button
                onClick={handleRestart}
                className="w-full px-8 py-4 bg-white text-foreground border-2 border-border rounded-xl hover:bg-muted/50 transition-all duration-300"
              >
                もう一度診断する
              </button>
            </div>

            <div className="text-center">
              <button
                onClick={onBackToIndex}
                className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                トップページに戻る
              </button>
            </div>
          </div>
        </main>

        <SiteFooter
          onNavigateToIndex={onBackToIndex}
          onNavigateToDiagnosis={() => {}}
          onNavigateToContact={onNavigateToContact}
          onNavigateToPrivacy={onNavigateToPrivacy}
          onNavigateToAbout={onNavigateToAbout}
        />

        {/* A8.net Tracking Pixel */}
        <img
          src="https://www17.a8.net/0.gif?a8mat=45G91I+FP0DV6+3DOK+5ZU2A"
          alt=""
          width="1"
          height="1"
          style={{ border: 'none' }}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <title>予約方法診断 | ブライダルフェア特典比較メディア</title>
      
      <SiteHeader
        onNavigateToIndex={onBackToIndex}
        onNavigateToDiagnosis={() => {}}
        onNavigateToContact={onNavigateToContact}
        onNavigateToPrivacy={onNavigateToPrivacy}
        onNavigateToAbout={onNavigateToAbout}
      />

      <main className="flex-1 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="mb-4 text-foreground">あなたにぴったりの予約媒体診断</h1>
            <p className="text-foreground/70">
              7つの質問で、ゼクシィ・ハナユメなどの式場予約サイトや公式サイトのどれがあなたに最適か診断します
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-foreground/60">
                質問 {history.length} / 7
              </span>
              <span className="text-sm text-foreground/60">
                {Math.round(progress)}%
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question Card */}
          {currentQuestion && (
            <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-primary/20 mb-6">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">{currentQuestion.icon}</div>
                <h2 className="text-foreground">{currentQuestion.text}</h2>
              </div>

              <div className="space-y-4">
                {currentQuestion.answers.map((answer, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(answer)}
                    className="w-full p-6 bg-secondary/30 hover:bg-secondary/50 border-2 border-transparent hover:border-primary/50 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                  >
                    <span className="flex items-center justify-between">
                      <span className="text-foreground group-hover:text-primary transition-colors">
                        {answer.text}
                      </span>
                      <ArrowRight className="w-5 h-5 text-foreground/40 group-hover:text-primary group-hover:translate-x-2 transition-all" />
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Back Button */}
          <div className="text-center">
            <button
              onClick={handleBack}
              className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {history.length > 1 ? "前の質問に戻る" : "トップページに戻る"}
            </button>
          </div>
        </div>
      </main>

      <SiteFooter
        onNavigateToIndex={onBackToIndex}
        onNavigateToDiagnosis={() => {}}
        onNavigateToContact={onNavigateToContact}
        onNavigateToPrivacy={onNavigateToPrivacy}
        onNavigateToAbout={onNavigateToAbout}
      />

      {/* A8.net Tracking Pixel */}
      <img
        src="https://www17.a8.net/0.gif?a8mat=45G91I+FP0DV6+3DOK+5ZU2A"
        alt=""
        width="1"
        height="1"
        style={{ border: 'none' }}
      />
    </div>
  );
}
