import { User, Mail, Calendar } from "lucide-react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

interface AboutPageProps {
  onBackToIndex: () => void;
  onNavigateToDiagnosis?: () => void;
  onNavigateToContact?: () => void;
  onNavigateToPrivacy?: () => void;
}

export default function AboutPage({
  onBackToIndex,
  onNavigateToDiagnosis,
  onNavigateToContact,
  onNavigateToPrivacy,
}: AboutPageProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* SEO Meta Tags */}
      <title>運営者情報 | ブライダルフェア特典比較メディア</title>

      {/* Header */}
      <SiteHeader
        onNavigateToIndex={onBackToIndex}
        onNavigateToDiagnosis={onNavigateToDiagnosis}
        onNavigateToContact={onNavigateToContact}
        onNavigateToPrivacy={onNavigateToPrivacy}
      />

      {/* Main Content */}
      <main className="flex-1 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Page Title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
              <User className="w-8 h-8 text-primary" />
            </div>
            <h1 className="mb-4 text-foreground">運営者情報</h1>
            <p className="text-foreground/70">
              当サイトの運営に関する情報
            </p>
          </div>

          {/* Site Info Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-border mb-8">
            <div className="space-y-8">
              {/* Site Name */}
              <div className="pb-6 border-b border-border">
                <h2 className="mb-3 text-foreground">サイト名</h2>
                <p className="text-foreground/80">
                  ブライダルフェア特典比較メディア
                </p>
              </div>

              {/* Site URL */}
              <div className="pb-6 border-b border-border">
                <h2 className="mb-3 text-foreground">サイトURL</h2>
                <p className="text-foreground/80">
                  現在準備中（独自ドメイン取得予定）
                </p>
              </div>

              {/* Operator */}
              <div className="pb-6 border-b border-border">
                <h2 className="mb-3 text-foreground">運営者</h2>
                <p className="text-foreground/80">個人運営</p>
              </div>

              {/* Contact Email */}
              <div className="pb-6 border-b border-border">
                <h2 className="mb-3 text-foreground flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  お問い合わせ先
                </h2>
                <p className="text-foreground/80 mb-2">
                  <a
                    href="mailto:regrit0805@gmail.com"
                    className="text-primary hover:underline"
                  >
                    regrit0805@gmail.com
                  </a>
                </p>
                <p className="text-sm text-foreground/60">
                  お問い合わせは、
                  <button
                    onClick={onNavigateToContact}
                    className="text-primary hover:underline"
                  >
                    お問い合わせフォーム
                  </button>
                  からもご連絡いただけます。
                </p>
              </div>

              {/* Launch Date */}
              <div className="pb-6 border-b border-border">
                <h2 className="mb-3 text-foreground flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  運営開始日
                </h2>
                <p className="text-foreground/80">2025年1月</p>
              </div>

              {/* About */}
              <div>
                <h2 className="mb-4 text-foreground">サイトについて</h2>
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>
                    「ブライダルフェア特典比較メディア」は、結婚式場のブライダルフェアをよりお得に、そして賢く活用していただくための比較情報サイトです。
                  </p>
                  <p>
                    ゼクシィ、ハナユメ、式場公式サイトなど、様々な予約方法がある中で、「どこから予約するのが一番お得なのか」「自分に合った予約方法はどれか」といった疑問にお答えします。
                  </p>
                  <p>
                    結婚式準備は、人生で一度きりの大切なイベント。
                    当サイトが、皆様の結婚式準備を少しでもお得に、そして楽しくするお手伝いができれば幸いです。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Disclosure Note */}
          <div className="p-6 bg-muted/50 rounded-xl border border-border">
            <h3 className="mb-3 text-foreground">広告の掲載について</h3>
            <p className="text-sm text-foreground/70 leading-relaxed">
              当サイトは、A8.net等のアフィリエイトプログラムに参加しています。
              記事内のリンク経由で商品・サービスの申し込みがあった場合、当サイトに報酬が支払われることがあります。
              ただし、掲載している情報は客観的な視点で作成しており、広告主の意向によって内容が左右されることはありません。
            </p>
          </div>

          {/* Links */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <button
              onClick={onNavigateToPrivacy}
              className="p-6 bg-white rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all text-left"
            >
              <h3 className="mb-2 text-foreground">プライバシーポリシー</h3>
              <p className="text-sm text-foreground/60">
                個人情報の取り扱いについて
              </p>
            </button>
            <button
              onClick={onNavigateToContact}
              className="p-6 bg-white rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all text-left"
            >
              <h3 className="mb-2 text-foreground">お問い合わせ</h3>
              <p className="text-sm text-foreground/60">
                ご質問・ご意見はこちらから
              </p>
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <SiteFooter
        onNavigateToIndex={onBackToIndex}
        onNavigateToDiagnosis={onNavigateToDiagnosis}
        onNavigateToContact={onNavigateToContact}
        onNavigateToPrivacy={onNavigateToPrivacy}
      />
    </div>
  );
}
