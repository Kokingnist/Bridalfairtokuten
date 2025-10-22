import { Sparkles, Gift, HeartHandshake, Calendar, CheckCircle2, Home, ChevronRight } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

interface ComparisonPageProps {
  hanayumeAffiliateUrl: string;
  onBackToTop: () => void;
  onNavigateToContact?: () => void;
  onNavigateToPrivacy?: () => void;
  onNavigateToAbout?: () => void;
}

export default function ComparisonPage({
  hanayumeAffiliateUrl,
  onBackToTop,
  onNavigateToContact,
  onNavigateToPrivacy,
  onNavigateToAbout,
}: ComparisonPageProps) {
  const comparisonData = [
    {
      category: "ギフト券・割引内容",
      zexy: "Amazonギフト券 50,000円分など",
      hanayume: "100万円以上おトクになることも！※",
      official: "成約時の大幅割引",
    },
    {
      category: "特典がもらえる条件",
      zexy: "来館・アンケート回答",
      hanayume: "式場見学予約・成約※",
      official: "成約時",
    },
    {
      category: "特典額の目安",
      zexy: "1〜5万円程度",
      hanayume: "数十万〜100万円以上※",
      official: "10〜50万円程度",
    },
    {
      category: "対象式場数",
      zexy: "全国2,400以上",
      hanayume: "全国600以上",
      official: "1式場のみ",
    },
    {
      category: "サポートの有無",
      zexy: "専任アドバイザー",
      hanayume: "専任コンシェルジュ",
      official: "式場スタッフのみ",
    },
  ];

  const recommendationTypes = [
    {
      title: "とにかく特典額を狙いたい",
      platform: "ゼクシィ",
      icon: Gift,
      description:
        "来館でもらえるギフト券が豊富。複数の式場を見学して特典を集めたい方におすすめ。",
      color: "bg-blue-50 border-blue-200",
    },
    {
      title: "サクッと相談して決めたい",
      platform: "ハナユメ",
      icon: HeartHandshake,
      description:
        "コンシェルジュのサポートが手厚く、効率的に式場探しができます。割引額も大きめ。",
      color: "bg-primary/10 border-primary/30",
      isRecommended: true,
    },
    {
      title: "成約を前提に割引重視で探したい",
      platform: "式場公式",
      icon: Calendar,
      description:
        "すでに気になる式場がある場合、公式サイトから直接予約することで特別割引が受けられることも。",
      color: "bg-amber-50 border-amber-200",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* SEO Meta Tags */}
      <title>ゼクシィ vs ハナユメ vs 式場公式を徹底比較 | ブライダルフェア特典比較メディア</title>

      {/* Header */}
      <SiteHeader
        onNavigateToIndex={onBackToTop}
        onNavigateToContact={onNavigateToContact}
        onNavigateToPrivacy={onNavigateToPrivacy}
        onNavigateToAbout={onNavigateToAbout}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Breadcrumb */}
        <nav className="bg-muted/30 border-b border-border">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <button
                  onClick={onBackToTop}
                  className="flex items-center gap-1 text-foreground/60 hover:text-primary transition-colors"
                >
                  <Home className="w-4 h-4" />
                  トップ
                </button>
              </li>
              <ChevronRight className="w-4 h-4 text-foreground/40" />
              <li>
                <button
                  onClick={onBackToTop}
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  比較・検討
                </button>
              </li>
              <ChevronRight className="w-4 h-4 text-foreground/40" />
              <li className="text-foreground font-medium">
                ゼクシィ vs ハナユメ vs 式場公式
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Image */}
        <div className="w-full aspect-[21/9] bg-muted overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGxhbm5pbmd8ZW58MXx8fHwxNzYxMDM0NTAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="ブライダルフェア比較"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content */}
        <article className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
          {/* Category Badge */}
          <Badge
            variant="secondary"
            className="mb-4 bg-secondary text-secondary-foreground"
          >
            比較・検討
          </Badge>

          {/* Title */}
          <h1 className="mb-6 text-foreground leading-tight">
            ゼクシィ vs ハナユメ vs 式場公式を徹底比較
          </h1>

          {/* Introduction */}
          <div className="mb-12 p-6 bg-accent/30 border-l-4 border-primary rounded-r-xl">
            <p className="text-foreground/80 leading-relaxed">
              結婚式場のブライダルフェアを予約する際、ゼクシィ、ハナユメ、式場公式サイトのどこから予約するかによって、受けられる特典が大きく異なります。この記事では、それぞれの特徴とメリット・デメリットを詳しく解説していきます。
            </p>
          </div>

          {/* Comparison Table */}
          <section className="mb-16">
            <h2 className="mb-8 text-foreground pb-3 border-b-2 border-primary/30">
              3媒体の特典比較表
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-md">
                <thead>
                  <tr className="bg-muted">
                    <th className="p-4 text-left text-foreground border-b border-border">
                      比較項目
                    </th>
                    <th className="p-4 text-center text-foreground border-b border-l border-border">
                      ゼクシィ
                    </th>
                    <th className="p-4 text-center text-foreground border-b border-l border-border bg-primary/5">
                      ハナユメ
                    </th>
                    <th className="p-4 text-center text-foreground border-b border-l border-border">
                      式場公式
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="hover:bg-muted/30 transition-colors">
                      <td className="p-4 text-foreground/80 border-b border-border font-medium">
                        {row.category}
                      </td>
                      <td className="p-4 text-center text-foreground/70 border-b border-l border-border">
                        {row.zexy}
                      </td>
                      <td className="p-4 text-center text-foreground/70 border-b border-l border-border bg-primary/5">
                        {row.hanayume}
                      </td>
                      <td className="p-4 text-center text-foreground/70 border-b border-l border-border">
                        {row.official}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              ※ハナユメから式場見学を予約し成約いただくことが条件です。<br />
              ※式場、日時、人数によっては、割引額が100万円より下回る場合もあります。
            </p>
          </section>

          {/* Recommendation Cards */}
          <section className="mb-16">
            <h2 className="mb-8 text-foreground pb-3 border-b-2 border-primary/30">
              タイプ別おすすめの予約方法
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {recommendationTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <div
                    key={index}
                    className={`p-6 rounded-2xl border-2 ${type.color} ${
                      type.isRecommended ? "shadow-lg" : "shadow-md"
                    } transition-all hover:shadow-xl`}
                  >
                    {type.isRecommended && (
                      <Badge className="mb-3 bg-primary text-primary-foreground">
                        おすすめ
                      </Badge>
                    )}
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                      <h3 className="text-foreground">{type.title}</h3>
                    </div>
                    <p className="mb-4 text-sm text-foreground/70 leading-relaxed">
                      {type.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary">
                      <CheckCircle2 className="w-5 h-5" />
                      <span className="font-medium">{type.platform}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Detailed Sections */}
          <section className="mb-16 space-y-12">
            <div>
              <h2 className="mb-6 text-foreground pb-3 border-b-2 border-primary/30">
                ゼクシィの特徴とメリット
              </h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  ゼクシィは日本最大級のブライダル情報サイトで、全国2,400以上の式場情報を掲載しています。
                </p>
                <p>
                  大きな魅力は、来館だけでもらえるAmazonギフト券などの特典。複数の式場を見学することで、特典を積み重ねることができます。
                </p>
                <p>
                  また、雑誌と連動しているため、イメージを膨らませながら式場探しができるのも大きなメリットです。
                </p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-foreground pb-3 border-b-2 border-primary/30">
                ハナユメの特徴とメリット
              </h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  ハナユメの大きな特徴は「ハナユメ割」。式費用が100万円以上おトクになることもあり、費用を抑えたいカップルに大変人気です。
                </p>
                <p>
                  専任コンシェルジュが無料でサポートしてくれるため、初めての式場探しでも安心。LINEで気軽に相談できるのも魅力です。
                </p>
                <p>
                  来館特典に加えて、成約時の割引も大きいため、トータルで見ると非常にお得な予約方法と言えます。
                </p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-foreground pb-3 border-b-2 border-primary/30">
                式場公式サイトの特徴とメリット
              </h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  すでに気になる式場がある場合、公式サイトから直接予約するのも一つの手です。
                </p>
                <p>
                  公式サイト限定の成約特典や、料理のグレードアップ、衣装割引などが用意されていることがあります。
                </p>
                <p>
                  ただし、来館特典は少なめなことが多いため、複数の式場を比較検討したい段階では、ゼクシィやハナユメの方がおすすめです。
                </p>
              </div>
            </div>
          </section>

          {/* Summary Box */}
          <div className="mb-12 p-8 bg-muted/50 rounded-2xl border border-border">
            <h3 className="mb-4 text-foreground flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-primary/10 rounded-lg">
                ✓
              </span>
              この記事のまとめ
            </h3>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex gap-3">
                <span className="text-primary mt-1">•</span>
                <span>ゼクシィは来館特典が豊富で、複数見学したい方におすすめ</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1">•</span>
                <span>ハナユメは割引額が大きく、サポートも手厚い</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1">•</span>
                <span>式場公式は成約が決まっている場合に有利</span>
              </li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="p-8 bg-gradient-to-br from-primary/10 to-secondary/30 rounded-2xl text-center">
            <h3 className="mb-4 text-foreground">
              ハナユメで賢くお得に式場探し
            </h3>
            <p className="mb-6 text-foreground/70 max-w-2xl mx-auto">
              100万円以上おトクになることも！専任コンシェルジュが無料でサポートします。
            </p>
            <a
              href={hanayumeAffiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              フェア一覧を見る
            </a>
            <p className="mt-4 text-xs text-muted-foreground">
              ※ハナユメから式場見学を予約し成約いただくことが条件です。<br />
              ※式場、日時、人数によっては、割引額が100万円より下回る場合もあります。
            </p>
          </div>
        </article>
      </main>

      {/* Footer */}
      <SiteFooter
        onNavigateToIndex={onBackToTop}
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
