import { useState } from "react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Progress } from "../components/ui/progress";

interface VenueStyleQuizProps {
  hanayumeAffiliateUrl: string;
  onBackToIndex: () => void;
  onNavigateToContact: () => void;
  onNavigateToPrivacy: () => void;
  onNavigateToAbout: () => void;
}

type Answer = {
  text: string;
  nextQuestion?: number;
  result?: "専門式場" | "ホテル" | "ゲストハウス" | "レストラン";
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
    text: "理想の雰囲気は？",
    icon: "✨",
    answers: [
      { text: "クラシック・伝統的", nextQuestion: 2 },
      { text: "モダン・スタイリッシュ", nextQuestion: 2 }
    ]
  },
  {
    id: 2,
    text: "ゲスト人数の規模は？",
    icon: "👥",
    answers: [
      { text: "大人数（80名以上）", nextQuestion: 3 },
      { text: "少人数（80名未満）", nextQuestion: 3 }
    ]
  },
  {
    id: 3,
    text: "アットホームな雰囲気は重要？",
    icon: "🏡",
    answers: [
      { text: "はい、アットホームが良い", nextQuestion: 4 },
      { text: "いいえ、洗練された雰囲気が良い", nextQuestion: 4 }
    ]
  },
  {
    id: 4,
    text: "格式や信頼感を重視する？",
    icon: "🎩",
    answers: [
      { text: "はい、格式を重視したい", nextQuestion: 5 },
      { text: "いいえ、アクセスや設備重視", nextQuestion: 5 }
    ]
  },
  {
    id: 5,
    text: "料理へのこだわり度は？",
    icon: "🍽️",
    answers: [
      { text: "料理を最重視したい", nextQuestion: 6 },
      { text: "料理も大事だが雰囲気も重視", nextQuestion: 6 }
    ]
  },
  {
    id: 6,
    text: "アクセスの良さを重視？",
    icon: "🚃",
    answers: [
      { text: "はい、駅近が良い", nextQuestion: 7 },
      { text: "いいえ、郊外でも構わない", nextQuestion: 7 }
    ]
  },
  {
    id: 7,
    text: "写真映えを重視する？",
    icon: "📸",
    answers: [
      { text: "はい、写真映え重視", result: "ゲストハウス" },
      { text: "いいえ、伝統や格式重視", result: "専門式場" }
    ]
  }
];

const results = {
  専門式場: {
    title: "あなたには「専門式場」がおすすめです！",
    icon: "🏰",
    description: "伝統と格式ある結婚式を求める方にぴったりです。",
    features: [
      "チャペルや神殿など本格的な挙式会場",
      "結婚式のために作られた専用施設",
      "経験豊富なスタッフによるサポート",
      "格式と伝統を感じられる雰囲気",
      "大人数にも対応可能な広々とした会場"
    ],
    color: "from-purple-400 to-purple-600"
  },
  ホテル: {
    title: "あなたには「ホテルウェディング」がおすすめです！",
    icon: "🏨",
    description: "アクセス・設備・信頼感を重視する方に最適です。",
    features: [
      "駅近など抜群のアクセス",
      "宿泊施設完備で遠方ゲストも安心",
      "充実した設備とサービス",
      "ブランド力と信頼感",
      "親族の着付けや控室も充実"
    ],
    color: "from-blue-400 to-indigo-600"
  },
  ゲストハウス: {
    title: "あなたには「ゲストハウス」がおすすめです！",
    icon: "🏡",
    description: "貸切で自由な演出を楽しみたい方にぴったりです。",
    features: [
      "一日一組限定で完全貸切",
      "プライベート感のある空間",
      "自由度の高い演出が可能",
      "ガーデンやプールなど特別な空間",
      "写真映えする洗練されたデザイン"
    ],
    color: "from-green-400 to-emerald-600"
  },
  レストラン: {
    title: "あなたには「レストランウェディング」がおすすめです！",
    icon: "🍽️",
    description: "料理と会話を重視したカジュアル派にぴったりです。",
    features: [
      "料理のクオリティが高い",
      "アットホームで温かい雰囲気",
      "ゲストとの距離が近い",
      "比較的リーズナブルな費用",
      "自由でカジュアルな演出が可能"
    ],
    color: "from-orange-400 to-red-500"
  }
};

export default function VenueStyleQuiz({
  hanayumeAffiliateUrl,
  onBackToIndex,
  onNavigateToContact,
  onNavigateToPrivacy,
  onNavigateToAbout
}: VenueStyleQuizProps) {
  const [history, setHistory] = useState<number[]>([1]);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<"専門式場" | "ホテル" | "ゲストハウス" | "レストラン" | null>(null);

  const currentQuestion = questions.find(q => q.id === history[history.length - 1]);
  const progress = ((history.length - 1) / 7) * 100;

  const calculateResult = (allAnswers: string[]): "専門式場" | "ホテル" | "ゲストハウス" | "レストラン" => {
    let 専門式場Score = 0;
    let ホテルScore = 0;
    let ゲストハウスScore = 0;
    let レストランScore = 0;

    // Q1: 理想の雰囲気
    if (allAnswers[0] === "クラシック・伝統的") { 専門式場Score += 2; ホテルScore += 1; }
    if (allAnswers[0] === "モダン・スタイリッシュ") { ゲストハウスScore += 2; ホテルScore += 1; }

    // Q2: ゲスト人数
    if (allAnswers[1] === "大人数（80名以上）") { 専門式場Score += 2; ホテルScore += 2; }
    if (allAnswers[1] === "少人数（80名未満）") { ゲストハウスScore += 2; レストランScore += 2; }

    // Q3: アットホーム
    if (allAnswers[2] === "はい、アットホームが良い") { ゲストハウスScore += 2; レストランScore += 2; }
    if (allAnswers[2] === "いいえ、洗練された雰囲気が良い") { ホテルScore += 2; 専門式場Score += 1; }

    // Q4: 格式や信頼感
    if (allAnswers[3] === "はい、格式を重視したい") { 専門式場Score += 3; ホテルScore += 1; }
    if (allAnswers[3] === "いいえ、アクセスや設備重視") { ホテルScore += 2; }

    // Q5: 料理へのこだわり
    if (allAnswers[4] === "料理を最重視したい") { レストランScore += 3; }
    if (allAnswers[4] === "料理も大事だが雰囲気も重視") { ゲストハウスScore += 1; ホテルScore += 1; }

    // Q6: アクセス
    if (allAnswers[5] === "はい、駅近が良い") { ホテルScore += 2; }
    if (allAnswers[5] === "いいえ、郊外でも構わない") { ゲストハウスScore += 2; 専門式場Score += 1; }

    // Q7: 写真映え
    if (allAnswers[6] === "はい、写真映え重視") { ゲストハウスScore += 2; }
    if (allAnswers[6] === "いいえ、伝統や格式重視") { 専門式場Score += 2; }

    // Determine winner
    const scores = {
      専門式場: 専門式場Score,
      ホテル: ホテルScore,
      ゲストハウス: ゲストハウスScore,
      レストラン: レストランScore
    };

    return Object.entries(scores).reduce((a, b) => scores[a[0]] > scores[b[0]] ? a : b)[0] as "専門式場" | "ホテル" | "ゲストハウス" | "レストラン";
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

              <a
                href={hanayumeAffiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-8 py-4 bg-gradient-to-r from-[#FECDD3] to-[#FCA5A5] text-foreground rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mb-2"
              >
                <span className="flex items-center justify-center gap-2">
                  {result}タイプの式場を探す
                  <ArrowRight className="w-5 h-5" />
                </span>
              </a>
              <p className="text-xs text-foreground/60 text-center mb-4">
                ※当サイトは広告を含みます
              </p>

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
      <title>式場タイプ診断 | ブライダルフェア特典比較メディア</title>
      
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
            <h1 className="mb-4 text-foreground">あなたにぴったりの式場タイプ診断</h1>
            <p className="text-foreground/70">
              7つの質問で、専門式場・ホテル・ゲストハウス・レストランのどれがあなたに最適か診断します
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
