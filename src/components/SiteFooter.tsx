import { Heart } from "lucide-react";

interface SiteFooterProps {
  onNavigateToIndex?: () => void;
  onNavigateToContact?: () => void;
  onNavigateToPrivacy?: () => void;
  onNavigateToAbout?: () => void;
}

export function SiteFooter({
  onNavigateToIndex,
  onNavigateToContact,
  onNavigateToPrivacy,
  onNavigateToAbout,
}: SiteFooterProps) {
  return (
    <footer className="bg-muted border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* About Section */}
        <div className="mb-8 pb-8 border-b border-border">
          <div className="flex items-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-primary fill-primary/20" />
            <span className="text-lg font-semibold text-foreground">
              ブライダルフェア特典比較メディア
            </span>
          </div>
          <p className="text-foreground/70 max-w-2xl leading-relaxed">
            ゼクシィ・ハナユメ・式場公式サイトの特典を比較し、どこから予約するのが一番お得かをわかりやすく紹介する比較メディアです。結婚式準備をお得に、そして楽しく進めるための情報をお届けします。
          </p>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">サイトマップ</h3>
            <nav className="flex flex-col gap-2">
              <button
                onClick={onNavigateToIndex}
                className="text-left text-sm text-foreground/70 hover:text-primary transition-colors"
              >
                トップページ
              </button>
              <button
                onClick={onNavigateToIndex}
                className="text-left text-sm text-foreground/70 hover:text-primary transition-colors"
              >
                比較記事一覧
              </button>
            </nav>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">お問い合わせ</h3>
            <nav className="flex flex-col gap-2">
              <button
                onClick={onNavigateToContact}
                className="text-left text-sm text-foreground/70 hover:text-primary transition-colors"
              >
                お問い合わせ
              </button>
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">サイト情報</h3>
            <nav className="flex flex-col gap-2">
              <button
                onClick={onNavigateToPrivacy}
                className="text-left text-sm text-foreground/70 hover:text-primary transition-colors"
              >
                プライバシーポリシー
              </button>
              <button
                onClick={onNavigateToAbout}
                className="text-left text-sm text-foreground/70 hover:text-primary transition-colors"
              >
                運営者情報
              </button>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-foreground/60">
          <p>© 2025 ブライダルフェア特典比較メディア All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
