import { ArrowLeft, Sparkles, Home, ChevronRight, CheckCircle2, AlertCircle, Lightbulb, Star, TrendingUp, Users, Gift, Calendar, MessageCircle, Clock, MapPin, Camera, FileText } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

interface ArticleSection {
  heading: string;
  content: string;
}

interface ArticleData {
  id: string;
  title: string;
  category: string;
  image: string;
  intro: string;
  sections: ArticleSection[];
}

interface ArticlePageProps {
  article: ArticleData;
  hanayumeAffiliateUrl: string;
  onBackToIndex: () => void;
  onNavigateToContact?: () => void;
  onNavigateToPrivacy?: () => void;
  onNavigateToAbout?: () => void;
}

// コンテンツをパースして適切なコンポーネントを返す関数
function parseContent(content: string) {
  const blocks = content.split('\n\n');
  
  return blocks.map((block, blockIndex) => {
    // 【】で囲まれた見出し
    if (block.startsWith('【') && block.includes('】')) {
      const title = block.match(/【(.+?)】/)?.[1] || '';
      const restContent = block.replace(/【.+?】\n?/, '');
      
      return (
        <div key={blockIndex} className="mb-6">
          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-primary/20">
            <div className="w-1 h-5 bg-primary rounded-full"></div>
            <h4 className="text-foreground/90 font-medium">{title}</h4>
          </div>
          {restContent && (
            <div className="pl-4 space-y-2">
              {parseContent(restContent)}
            </div>
          )}
        </div>
      );
    }
    
    // Q&A形式
    if (block.startsWith('【Q')) {
      const lines = block.split('\n');
      const question = lines[0].replace(/【Q\d+：/, '').replace('】', '');
      const answer = lines.slice(2).join('\n');
      
      return (
        <div key={blockIndex} className="mb-6 p-5 bg-accent/20 rounded-xl border-l-4 border-primary">
          <div className="flex items-start gap-3 mb-3">
            <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-primary" />
            </div>
            <div>
              <span className="text-primary font-medium">Q. </span>
              <span className="text-foreground/90">{question}</span>
            </div>
          </div>
          <div className="pl-11 text-foreground/80 leading-relaxed whitespace-pre-line">
            {answer}
          </div>
        </div>
      );
    }
    
    // チェックリスト（✓で始まる）
    if (block.includes('\n✓')) {
      const items = block.split('\n').filter(line => line.trim().startsWith('✓'));
      const header = block.split('\n').find(line => !line.trim().startsWith('✓'));
      
      return (
        <div key={blockIndex} className="mb-6">
          {header && <p className="mb-3 text-foreground/80">{header}</p>}
          <div className="space-y-2">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">{item.replace('✓', '').trim()}</span>
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    // 箇条書き（•で始まる）
    if (block.includes('\n•')) {
      const lines = block.split('\n');
      const header = lines.find(line => !line.trim().startsWith('•') && line.trim().length > 0);
      const items = lines.filter(line => line.trim().startsWith('•'));
      
      return (
        <div key={blockIndex} className="mb-6">
          {header && <p className="mb-3 text-foreground/80 leading-relaxed">{header}</p>}
          <ul className="space-y-2 pl-1">
            {items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-primary text-xl leading-none mt-0.5">•</span>
                <span className="text-foreground/80 leading-relaxed flex-1">{item.replace('•', '').trim()}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    
    // 番号付きリスト
    if (/^\d+\./.test(block)) {
      const lines = block.split('\n');
      const items = lines.filter(line => /^\d+\./.test(line.trim()));
      
      return (
        <div key={blockIndex} className="mb-6">
          <ol className="space-y-3">
            {items.map((item, idx) => {
              const [number, ...textParts] = item.split('.');
              const text = textParts.join('.').trim();
              
              return (
                <li key={idx} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-primary/10 text-primary rounded-full flex items-center justify-center font-medium text-sm">
                    {idx + 1}
                  </span>
                  <span className="text-foreground/80 leading-relaxed flex-1 pt-0.5">{text}</span>
                </li>
              );
            })}
          </ol>
        </div>
      );
    }
    
    // ■で始まるサブセクション
    if (block.startsWith('■')) {
      const lines = block.split('\n');
      const title = lines[0].replace('■', '').trim();
      const content = lines.slice(1).join('\n');
      
      return (
        <div key={blockIndex} className="mb-6 p-5 bg-secondary/20 rounded-xl border border-secondary">
          <div className="flex items-center gap-2 mb-3">
            <Star className="w-5 h-5 text-primary" />
            <h5 className="text-foreground/90 font-medium">{title}</h5>
          </div>
          <div className="text-foreground/80 leading-relaxed whitespace-pre-line pl-7">
            {content}
          </div>
        </div>
      );
    }
    
    // ※で始まる注釈
    if (block.startsWith('※')) {
      return (
        <div key={blockIndex} className="mb-4 p-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
          <div className="flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-900 leading-relaxed whitespace-pre-line">{block}</p>
          </div>
        </div>
      );
    }
    
    // 通常のテキスト
    return (
      <p key={blockIndex} className="mb-4 text-foreground/80 leading-relaxed whitespace-pre-line">
        {block}
      </p>
    );
  });
}

export default function ArticlePage({
  article,
  hanayumeAffiliateUrl,
  onBackToIndex,
  onNavigateToContact,
  onNavigateToPrivacy,
  onNavigateToAbout,
}: ArticlePageProps) {
  // セクションごとにアイコンを返す関数
  const getSectionIcon = (heading: string, index: number) => {
    if (heading.includes('はじめに') || heading.includes('特典')) return <Gift className="w-5 h-5" />;
    if (heading.includes('流れ') || heading.includes('スケジュール')) return <Clock className="w-5 h-5" />;
    if (heading.includes('準備') || heading.includes('予約')) return <Calendar className="w-5 h-5" />;
    if (heading.includes('服装') || heading.includes('持ち物')) return <Camera className="w-5 h-5" />;
    if (heading.includes('Q&A') || heading.includes('質問')) return <MessageCircle className="w-5 h-5" />;
    if (heading.includes('チェック') || heading.includes('ポイント')) return <CheckCircle2 className="w-5 h-5" />;
    if (heading.includes('裏技') || heading.includes('コツ')) return <Lightbulb className="w-5 h-5" />;
    if (heading.includes('比較') || heading.includes('媒体')) return <TrendingUp className="w-5 h-5" />;
    if (heading.includes('まとめ')) return <FileText className="w-5 h-5" />;
    return <Star className="w-5 h-5" />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* SEO Meta Tags */}
      <title>{article.title} | ブライダルフェア特典比較メディア</title>

      {/* Header */}
      <SiteHeader
        onNavigateToIndex={onBackToIndex}
        onNavigateToContact={onNavigateToContact}
        onNavigateToPrivacy={onNavigateToPrivacy}
        onNavigateToAbout={onNavigateToAbout}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Breadcrumb */}
        <nav className="bg-muted/30 border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <button
                  onClick={onBackToIndex}
                  className="flex items-center gap-1 text-foreground/60 hover:text-primary transition-colors"
                >
                  <Home className="w-4 h-4" />
                  トップ
                </button>
              </li>
              <ChevronRight className="w-4 h-4 text-foreground/40" />
              <li>
                <button
                  onClick={onBackToIndex}
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  {article.category}
                </button>
              </li>
              <ChevronRight className="w-4 h-4 text-foreground/40" />
              <li className="text-foreground font-medium line-clamp-1">
                {article.title}
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Image */}
        <div className="w-full aspect-[21/9] bg-muted overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          {/* Category Badge */}
          <Badge
            variant="secondary"
            className="mb-4 bg-secondary text-secondary-foreground"
          >
            {article.category}
          </Badge>

          {/* Title */}
          <h1 className="mb-6 text-foreground leading-tight">{article.title}</h1>

          {/* Introduction */}
          <div className="mb-12 p-6 bg-gradient-to-r from-accent/30 to-secondary/20 border-l-4 border-primary rounded-r-xl">
            <p className="text-foreground/80 leading-relaxed">{article.intro}</p>
          </div>

          {/* CTA Button - Top */}
          <div className="mb-12 p-6 bg-gradient-to-br from-primary/5 to-secondary/20 rounded-2xl text-center border border-primary/20 shadow-sm">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-primary" />
              <p className="text-foreground/90 font-medium">
                ハナユメなら、100万円以上おトクになることも！
              </p>
            </div>
            <a
              href={hanayumeAffiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Gift className="w-5 h-5 mr-2" />
              フェア一覧を見る
            </a>
            <p className="mt-4 text-xs text-muted-foreground">
              ※ハナユメから式場見学を予約し成約いただくことが条件です。<br />
              ※式場、日時、人数によっては、割引額が100万円より下回る場合もあります。
            </p>
          </div>

          {/* Article Sections */}
          <div className="space-y-12">
            {article.sections.map((section, index) => (
              <section key={index} className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-primary/30">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    {getSectionIcon(section.heading, index)}
                  </div>
                  <h2 className="text-foreground flex-1">
                    {section.heading}
                  </h2>
                </div>
                <div className="prose prose-lg max-w-none">
                  {parseContent(section.content)}
                </div>
              </section>
            ))}
          </div>

          {/* Summary Box */}
          <div className="mt-16 p-8 bg-gradient-to-br from-muted/50 to-secondary/20 rounded-2xl border border-border shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-foreground">この記事のまとめ</h3>
            </div>
            <ul className="space-y-3 text-foreground/80">
              {article.sections.slice(0, 3).map((section, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium mt-0.5">
                    {index + 1}
                  </span>
                  <span className="flex-1 leading-relaxed">{section.heading}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 to-secondary/30 rounded-2xl text-center shadow-md">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Users className="w-6 h-6 text-primary" />
              <h3 className="text-foreground">
                お得にブライダルフェアを予約しよう
              </h3>
            </div>
            <p className="mb-6 text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              ハナユメなら専任コンシェルジュが無料でサポート。初めての式場探しでも安心です。
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
          </div>

          {/* Back to List Button */}
          <div className="mt-12 text-center">
            <button
              onClick={onBackToIndex}
              className="inline-flex items-center gap-2 px-6 py-3 text-foreground/70 hover:text-primary border border-border hover:border-primary rounded-xl transition-all hover:shadow-md"
            >
              <ArrowLeft className="w-4 h-4" />
              他のフェア特典も見てみる
            </button>
          </div>
        </article>
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
        style={{ border: 'none' }}
      />
    </div>
  );
}
