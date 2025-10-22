import { Sparkles, Search, TrendingUp, Shield, CheckSquare, Gift, ArrowRight, Heart } from "lucide-react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { ArticleCard } from "../components/ArticleCard";
import { Badge } from "../components/ui/badge";

interface Article {
  id: string;
  title: string;
  category: string;
  image: string;
  intro: string;
}

interface ArticleIndexPageProps {
  hanayumeAffiliateUrl: string;
  onNavigateToArticle: (articleId: string) => void;
  onNavigateToDiagnosis: () => void;
  onNavigateToMediaQuiz: () => void;
  onNavigateToVenueQuiz: () => void;
  onNavigateToContact: () => void;
  onNavigateToPrivacy: () => void;
  onNavigateToAbout: () => void;
}

const articlesData: Article[] = [
  {
    id: "article-1",
    title: "ゼクシィ vs ハナユメ vs 式場公式を徹底比較",
    category: "比較・検討",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGxhbm5pbmd8ZW58MXx8fHwxNzYxMDM0NTAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    intro: "結婚式場のブライダルフェアを予約する際、ゼクシィ、ハナユメ、式場公式サイトのどこから予約するかによって、受けられる特典が大きく異なります。"
  },
  {
    id: "article-2",
    title: "初めてのブライダルフェア参加ガイド｜失敗しない持ち物・服装・流れ",
    category: "式場見学",
    image: "https://images.unsplash.com/photo-1627364155535-9ed50e63aece?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZmFpciUyMGNvdXBsZSUyMHBsYW5uaW5nfGVufDF8fHx8MTc2MTA0ODU1MHww&ixlib=rb-4.1.0&q=80&w=1080",
    intro: "初めてのブライダルフェア、何を準備すればいいか不安ですよね。この記事では、当日の流れから持ち物・服装まで、失敗しないためのポイントを詳しく解説します。"
  },
  {
    id: "article-3",
    title: "式場フェアで絶対チェックすべき5つのポイント",
    category: "式場見学",
    image: "https://images.unsplash.com/photo-1719786624996-2616492705bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwdmVudWUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjA5OTc0NDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    intro: "ブライダルフェアに参加する目的は、ただ式場を見ることだけではありません。一生に一度の結婚式だからこそ、しっかり「見るべきポイント」を押さえておくことが大切です。"
  },
  {
    id: "article-4",
    title: "ブライダルフェア特典をしっかり活用する裏技",
    category: "お得情報",
    image: "https://images.unsplash.com/photo-1608111283577-43d930222227?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaWZ0JTIwY291cG9uJTIwc2F2aW5nc3xlbnwxfHx8fDE3NjEwNDg3NzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    intro: "ブライダルフェアには豪華な特典が用意されていることが多いですよね。でも、同じフェアに行っても「もらえる人」と「もらえなかった人」がいるのをご存知ですか？"
  },
  {
    id: "article-5",
    title: "【2025年版】ブライダルフェア特典の内容まとめ｜もらえるもの・条件・注意点まで徹底解説",
    category: "お得情報",
    image: "https://images.unsplash.com/photo-1657702732267-a037c6a324d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwYmVuZWZpdHMlMjBnaWZ0fGVufDF8fHx8MTc2MTA0OTA2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    intro: "ブライダルフェアの広告や予約ページを見ていると、「ギフト券○万円分プレゼント！」「来館で電子マネーがもらえる！」などの言葉をよく見かけますよね。"
  },
  {
    id: "article-6",
    title: "ブライダルフェアはどこから予約するのが一番お得？｜媒体別メリットと注意点を解説",
    category: "比較・検討",
    image: "https://images.unsplash.com/photo-1662520987500-7bac32d79fa7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBwbGFubmluZyUyMHJlc2VydmF0aW9ufGVufDF8fHx8MTc2MTA1MDUxM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    intro: "これから結婚式場を探し始めるとき、まず目にするのが「ブライダルフェア」の情報ですよね。でも、いざ参加しようと思った時に迷うのが、どこから予約するのが一番お得なのか？という問題。"
  }
];

export default function ArticleIndexPage({
  hanayumeAffiliateUrl,
  onNavigateToArticle,
  onNavigateToDiagnosis,
  onNavigateToMediaQuiz,
  onNavigateToVenueQuiz,
  onNavigateToContact,
  onNavigateToPrivacy,
  onNavigateToAbout,
}: ArticleIndexPageProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* SEO Meta Tags - would be in <head> in real implementation */}
      <title>ブライダルフェア特典比較メディア｜ゼクシィ・ハナユメなどの式場予約サイトや公式サイトの特典を徹底比較</title>

      {/* Header */}
      <SiteHeader
        onNavigateToIndex={() => {}}
        onNavigateToDiagnosis={onNavigateToDiagnosis}
        onNavigateToContact={onNavigateToContact}
        onNavigateToPrivacy={onNavigateToPrivacy}
        onNavigateToAbout={onNavigateToAbout}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section - Luxurious Wedding Design */}
        <section className="relative bg-black overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1662838280625-ffda6ea08861?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMHZlbnVlJTIwY2hhcGVsfGVufDF8fHx8MTc2MTA1Nzk3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Wedding venue"
              className="w-full h-full object-cover opacity-35"
            />
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFB6C1]/10 via-transparent to-white/10"></div>
          </div>
          
          {/* Decorative Light Effects */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FFB6C1]/20 rounded-full blur-[120px] animate-pulse-soft"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/15 rounded-full blur-[120px]"></div>
          
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 lg:py-16 text-center">
            {/* Main Heading */}
            <div className="mb-5">
              <h1 className="leading-none">
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#F9C5D1] via-[#F8D7DD] to-[#E8E8E8] drop-shadow-[0_0_40px_rgba(249,197,209,0.4)]" style={{ fontFamily: '"Quicksand", "Poppins", -apple-system, sans-serif', letterSpacing: '0.02em' }}>
                  知りたい！
                </span>
                <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#F9C5D1] via-[#F8D7DD] to-[#E8E8E8] drop-shadow-[0_0_40px_rgba(249,197,209,0.4)]" style={{ fontFamily: '"Quicksand", "Poppins", -apple-system, sans-serif', letterSpacing: '0.02em' }}>
                  ブライダルフェア特典比較メディア
                </span>
              </h1>
            </div>
            
            {/* Subheading with elegant typography */}
            <div className="mb-8 space-y-2">
              <p className="text-base sm:text-lg md:text-xl text-white/90 font-medium leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)] max-w-3xl mx-auto">
                ゼクシィ・ハナユメなどの式場予約サイト<br />
                や公式サイトの特典をわかりやすく比較。<br />
                あなたにぴったりの予約先や式場タイプを診断できます。
              </p>
            </div>
            
            {/* Diagnostic CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 max-w-3xl mx-auto">
              <button
                onClick={onNavigateToMediaQuiz}
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#FECDD3] to-[#FCA5A5] text-foreground rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative drop-shadow-sm">
                  お得な予約媒体を診断する
                </span>
              </button>
              
              <button
                onClick={onNavigateToVenueQuiz}
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#FEE2E2] to-[#FECACA] text-foreground rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative drop-shadow-sm">
                  自分にあう最適な式場タイプを診断する
                </span>
              </button>
            </div>

            {/* Secondary CTA - Link to Hanayume */}
            <div className="mb-7">
              <a
                href={hanayumeAffiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors underline underline-offset-4"
              >
                お得なフェア一覧を見る
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            
            {/* Stats or highlights */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-5">
              <div className="text-center px-4 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                <div className="text-lg sm:text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#F9C5D1] to-[#F8D7DD] mb-1">100万円以上</div>
                <div className="text-xs sm:text-sm text-white/80">おトクになることも！※</div>
              </div>
              <div className="text-center px-4 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                <div className="text-lg sm:text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#F0F0F0] to-[#FFFFFF]">無料サポート</div>
                <div className="text-xs sm:text-sm text-white/80">専任コンシェルジュ</div>
              </div>
              <div className="text-center px-4 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                <div className="text-lg sm:text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#F9C5D1] to-[#F0F0F0]">簡単比較</div>
                <div className="text-xs sm:text-sm text-white/80">3つの媒体を徹底比較</div>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-white/60">
              ※当サイトは広告を含みます
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-10 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
                  <Search className="w-8 h-8 text-primary" />
                </div>
                <h3 className="mb-2 text-foreground">簡単比較</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  ゼクシィ・ハナユメなどの式場予約サイトや公式サイトの特典を一目で比較できます
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="mb-2 text-foreground">お得な情報</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  100万円以上おトクになることも！賢く予約する方法をご紹介
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="mb-2 text-foreground">安心サポート</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  初めての式場探しでも安心。わかりやすく丁寧に解説します
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Articles Section */}
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-foreground">お役立ち記事</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                ブライダルフェアをお得に、そして賢く活用するための情報をお届けします
              </p>
            </div>

            {/* Article Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articlesData.map((article) => (
                <ArticleCard
                  key={article.id}
                  id={article.id}
                  title={article.title}
                  category={article.category}
                  image={article.image}
                  excerpt={article.intro}
                  onClick={onNavigateToArticle}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Diagnosis - Redesigned */}
        <section className="py-10 sm:py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="relative bg-gradient-to-br from-[#FEF2F5] to-[#FFF5F7] rounded-3xl shadow-xl p-6 sm:p-10 border-2 border-[#F9C5D1]/20 overflow-hidden">
              {/* Decorative Background Pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#F9C5D1]/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#F8D7DD]/20 rounded-full blur-2xl"></div>
              
              <div className="relative text-center">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-lg mb-4">
                  <span className="text-3xl" aria-label="compass">🧭</span>
                </div>
                
                {/* Section Heading */}
                <h2 className="mb-3 text-foreground text-2xl sm:text-3xl">
                  診断であなたにぴったりの式場探しをサポート
                </h2>
                
                {/* Subtext */}
                <p className="mb-6 text-foreground/80 leading-relaxed max-w-2xl mx-auto">
                  簡単な質問に答えるだけで、あなたに最適な予約方法と式場タイプがわかります。
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-3xl mx-auto">
                  <button
                    onClick={onNavigateToMediaQuiz}
                    className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#FECDD3] to-[#FCA5A5] text-foreground rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                  >
                    お得な予約媒体を診断する
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <button
                    onClick={onNavigateToVenueQuiz}
                    className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#FEE2E2] to-[#FECACA] text-foreground rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                  >
                    自分にあう最適な式場タイプを診断する
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Special Offer Section - Hanayume - Redesigned */}
        <section className="py-10 sm:py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="relative bg-gradient-to-br from-white to-muted/30 rounded-3xl shadow-2xl border border-border overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl"></div>
              
              <div className="relative p-6 sm:p-10 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Left: Content */}
                  <div>
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-[#FEE2E2] text-foreground px-5 py-2 rounded-full mb-4 border-2 border-[#FECACA]">
                      <Gift className="w-4 h-4" />
                      <span className="font-semibold text-sm">限定特典</span>
                    </div>
                    
                    {/* Section Title with Gift Icon */}
                    <h2 className="mb-4 text-foreground text-2xl sm:text-3xl lg:text-4xl leading-tight">
                      <span className="text-3xl mr-2" aria-label="gift">🎁</span>
                      ハナユメなら<br />
                      <span className="font-bold" style={{ color: '#F9C5D1' }}>100万円以上</span>おトクになることも！
                    </h2>
                    
                    {/* Description */}
                    <p className="mb-6 text-foreground/80 leading-relaxed">
                      専任コンシェルジュが無料でサポート。<br />
                      特典つきフェアをまとめて紹介しています。
                    </p>
                    
                    {/* CTA Button */}
                    <a
                      href={hanayumeAffiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-[#FECDD3] to-[#FCA5A5] text-foreground rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 text-lg"
                    >
                      <Sparkles className="w-6 h-6 mr-2 group-hover:rotate-12 transition-transform" />
                      フェア一覧を見る
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                    
                    {/* Disclaimer */}
                    <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
                      ※ハナユメから式場見学を予約し成約いただくことが条件です。<br />
                      ※式場、日時、人数によっては、割引額が100万円より下回る場合もあります。
                    </p>
                  </div>
                  
                  {/* Right: Visual Highlight */}
                  <div className="relative">
                    {/* Savings Badge */}
                    <div className="relative bg-gradient-to-br from-[#FECDD3] to-[#FCA5A5] text-foreground rounded-3xl shadow-2xl p-6 sm:p-10 text-center transform hover:scale-105 transition-transform duration-300">
                      <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
                      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                      
                      <div className="relative">
                        <div className="mb-3">
                          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                            100万円以上
                          </p>
                          <p className="text-xl sm:text-2xl font-bold">おトク</p>
                        </div>
                        <div className="h-1 w-20 bg-foreground/30 mx-auto mb-3 rounded-full"></div>
                        <p className="text-foreground/80 text-sm leading-relaxed">
                          実際に80万円以上の<br />
                          割引を受けたカップルも！
                        </p>
                      </div>
                    </div>
                    
                    {/* Floating Icons */}
                    <div className="absolute -top-6 -left-6 w-12 h-12 bg-[#F8D7DD] rounded-full flex items-center justify-center shadow-lg animate-float">
                      <Heart className="w-6 h-6 text-foreground fill-foreground/20" />
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-[#FEF2F5] rounded-full flex items-center justify-center shadow-lg animate-pulse-soft">
                      <Gift className="w-8 h-8 text-foreground" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <SiteFooter
        onNavigateToIndex={() => {}}
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
