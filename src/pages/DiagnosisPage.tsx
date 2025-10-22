import { CheckCircle2, Sparkles, RotateCcw } from "lucide-react";
import { useState } from "react";
import { Progress } from "../components/ui/progress";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

interface DiagnosisPageProps {
  hanayumeAffiliateUrl: string;
  onBackToIndex: () => void;
  onNavigateToContact?: () => void;
  onNavigateToPrivacy?: () => void;
  onNavigateToAbout?: () => void;
}

export default function DiagnosisPage({
  hanayumeAffiliateUrl,
  onBackToIndex,
  onNavigateToContact,
  onNavigateToPrivacy,
  onNavigateToAbout,
}: DiagnosisPageProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "式場探しはこれから始めるところですか？",
      yesLabel: "はい、これから探します",
      noLabel: "いいえ、既に候補があります",
    },
    {
      question: "できるだけお得に結婚式を挙げたいですか？",
      yesLabel: "はい、予算を抑えたいです",
      noLabel: "予算は気にしません",
    },
    {
      question: "専門家のサポートを受けながら式場を選びたいですか？",
      yesLabel: "はい、サポートが欲しいです",
      noLabel: "自分で選びたいです",
    },
    {
      question: "複数の式場を効率的に見学したいですか？",
      yesLabel: "はい、効率的に見学したいです",
      noLabel: "じっくり一つずつ見たいです",
    },
    {
      question: "来館特典やギフト券に興味がありますか？",
      yesLabel: "はい、とても興味があります",
      noLabel: "特典は気にしません",
    },
  ];

  const handleAnswer = (answer: boolean) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  const getRecommendation = () => {
    const yesCount = answers.filter((a) => a).length;

    if (yesCount >= 4) {
      return {
        platform: "ハナユメ",
        reason:
          "お得さ・サポート・効率性を重視するあなたには、ハナユメが最適です。専任コンシェルジュが無料でサポートし、100万円以上おトクになることも！",
        cta: "ハナユメで式場を探す",
        isAffiliate: true,
      };
    } else if (yesCount >= 2) {
      return {
        platform: "ゼクシィ",
        reason:
          "幅広い選択肢の中から自分のペースで探したいあなたには、ゼクシィがおすすめ。来館特典も豊富です。",
        cta: "ゼクシィで式場を探す",
        isAffiliate: false,
      };
    } else {
      return {
        platform: "式場公式サイト",
        reason:
          "既に気になる式場がある、または自分のペースでじっくり探したいあなたには、式場公式サイトがおすすめです。",
        cta: "式場公式サイトで探す",
        isAffiliate: false,
      };
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* SEO Meta Tags */}
      <title>あなたにぴったりの予約先診断 | ブライダルフェア特典比較メディア</title>

      {/* Header */}
      <SiteHeader
        onNavigateToIndex={onBackToIndex}
        onNavigateToContact={onNavigateToContact}
        onNavigateToPrivacy={onNavigateToPrivacy}
        onNavigateToAbout={onNavigateToAbout}
      />

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
          {!showResult ? (
            <>
              {/* Title */}
              <div className="text-center mb-12">
                <h1 className="mb-4 text-foreground">
                  あなたにぴったりの予約先診断
                </h1>
                <p className="text-foreground/70">
                  簡単な質問に答えて、最適な予約方法を見つけましょう
                </p>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-foreground/60 mb-2">
                  <span>
                    質問 {currentQuestion + 1} / {questions.length}
                  </span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              {/* Question Card */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-border">
                <h2 className="mb-8 text-center text-foreground">
                  {questions[currentQuestion].question}
                </h2>
                <div className="grid gap-4">
                  <button
                    onClick={() => handleAnswer(true)}
                    className="p-6 bg-primary/5 hover:bg-primary/10 border-2 border-primary/20 hover:border-primary rounded-xl transition-all text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-foreground">
                        {questions[currentQuestion].yesLabel}
                      </span>
                    </div>
                  </button>
                  <button
                    onClick={() => handleAnswer(false)}
                    className="p-6 bg-muted hover:bg-muted/70 border-2 border-border hover:border-foreground/20 rounded-xl transition-all text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full border-2 border-foreground/30 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-foreground/30"></div>
                      </div>
                      <span className="text-foreground">
                        {questions[currentQuestion].noLabel}
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Result */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>
                <h1 className="mb-4 text-foreground">診断結果</h1>
                <p className="text-foreground/70">
                  あなたにおすすめの予約方法が見つかりました！
                </p>
              </div>

              {/* Recommendation Card */}
              <div className="bg-gradient-to-br from-primary/10 to-secondary/30 rounded-2xl shadow-lg p-8 mb-8 border-2 border-primary/30">
                <div className="text-center mb-6">
                  <h2 className="mb-2 text-foreground">
                    あなたにおすすめ
                  </h2>
                  <div className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-xl shadow-lg text-2xl font-semibold">
                    {getRecommendation().platform}
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-8 text-center">
                  {getRecommendation().reason}
                </p>
                {getRecommendation().isAffiliate ? (
                  <div className="text-center">
                    <a
                      href={hanayumeAffiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      <Sparkles className="w-5 h-5 mr-2" />
                      {getRecommendation().cta}
                    </a>
                    <p className="mt-4 text-xs text-muted-foreground">
                      ※ハナユメから式場見学を予約し成約いただくことが条件です。
                      <br />
                      ※式場、日時、人数によっては、割引額が100万円より下回る場合もあります。
                    </p>
                  </div>
                ) : (
                  <div className="text-center">
                    <button
                      onClick={onBackToIndex}
                      className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      記事一覧で詳しく見る
                    </button>
                  </div>
                )}
              </div>

              {/* Restart Button */}
              <div className="text-center">
                <button
                  onClick={handleRestart}
                  className="inline-flex items-center gap-2 px-6 py-3 text-foreground/70 hover:text-primary border border-border hover:border-primary rounded-xl transition-all"
                >
                  <RotateCcw className="w-4 h-4" />
                  もう一度診断する
                </button>
              </div>
            </>
          )}
        </div>
      </main>

      {/* Footer */}
      <SiteFooter
        onNavigateToIndex={onBackToIndex}
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
        style={{ border: "none" }}
      />
    </div>
  );
}
