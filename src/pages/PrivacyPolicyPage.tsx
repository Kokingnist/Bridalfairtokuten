import { Shield } from "lucide-react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

interface PrivacyPolicyPageProps {
  onBackToIndex: () => void;
  onNavigateToDiagnosis?: () => void;
  onNavigateToContact?: () => void;
  onNavigateToAbout?: () => void;
}

export default function PrivacyPolicyPage({
  onBackToIndex,
  onNavigateToDiagnosis,
  onNavigateToContact,
  onNavigateToAbout,
}: PrivacyPolicyPageProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* SEO Meta Tags */}
      <title>プライバシーポリシー | ブライダルフェア特典比較メディア</title>

      {/* Header */}
      <SiteHeader
        onNavigateToIndex={onBackToIndex}
        onNavigateToDiagnosis={onNavigateToDiagnosis}
        onNavigateToContact={onNavigateToContact}
        onNavigateToAbout={onNavigateToAbout}
      />

      {/* Main Content */}
      <main className="flex-1 py-12">
        <article className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Page Title */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="mb-4 text-foreground">プライバシーポリシー</h1>
            <p className="text-foreground/70">
              当サイトにおける個人情報の取り扱いについて
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 border border-border space-y-8">
            {/* Introduction */}
            <section>
              <p className="text-foreground/80 leading-relaxed">
                ブライダルフェア比較メディア（以下、「当サイト」といいます）は、当サイトの利用者（以下、「ユーザー」といいます）の個人情報を適切に管理し、保護することを重要な責務と考えています。<br />
                本プライバシーポリシーでは、当サイトが取得する個人情報の種類、利用目的、管理方法について説明いたします。
              </p>
            </section>

            {/* 第1条 */}
            <section>
              <h2 className="mb-4 text-foreground pb-3 border-b-2 border-primary/30">
                第1条（個人情報の取得と利用目的）
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                当サイトでは、以下の目的のために個人情報を取得・利用する場合があります。
              </p>
              <ol className="space-y-2 text-foreground/80 list-decimal list-inside">
                <li>お問い合わせフォームへの回答、サポートの提供のため</li>
                <li>新サービスやキャンペーンの案内、アンケート実施のため</li>
                <li>不正行為の防止・調査など、サービス運営上必要な場合</li>
                <li>広告配信やアクセス解析など、サイトの改善・分析のため</li>
              </ol>
              <p className="text-foreground/80 leading-relaxed mt-4">
                当サイトは、これらの目的を超えて個人情報を利用することはありません。
              </p>
            </section>

            {/* 第2条 */}
            <section>
              <h2 className="mb-4 text-foreground pb-3 border-b-2 border-primary/30">
                第2条（個人情報の第三者提供）
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                当サイトは、法令に基づく場合を除き、ユーザー本人の同意なしに第三者へ個人情報を提供することはありません。<br />
                ただし、以下の場合には例外的に第三者へ情報を提供することがあります。
              </p>
              <ol className="space-y-2 text-foreground/80 list-decimal list-inside">
                <li>法令に基づく場合</li>
                <li>人の生命、身体または財産の保護のために必要がある場合</li>
                <li>業務委託先（お問い合わせ対応システムや分析ツール等）に業務を委託する場合</li>
              </ol>
              <p className="text-foreground/80 leading-relaxed mt-4">
                これらの場合も、適切な安全管理措置を講じた上で情報を共有いたします。
              </p>
            </section>

            {/* 第3条 */}
            <section>
              <h2 className="mb-4 text-foreground pb-3 border-b-2 border-primary/30">
                第3条（個人情報の管理）
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                当サイトでは、取得した個人情報を適切に管理し、漏えい・改ざん・紛失などの防止に努めます。<br />
                また、個人情報の保有期間を必要最小限に定め、利用目的が達成された時点で速やかに破棄・削除します。
              </p>
            </section>

            {/* 第4条 */}
            <section>
              <h2 className="mb-4 text-foreground pb-3 border-b-2 border-primary/30">
                第4条（アクセス解析ツールについて）
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                当サイトでは、Google LLC が提供する「Google Analytics」を利用しています。<br />
                このツールは Cookie を使用して匿名のトラフィックデータを収集します。<br />
                これにより、ユーザーの個人を特定することはありません。
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Google Analytics に関する詳細は、Google のプライバシーポリシーをご確認ください。<br />
                → <a href="https://policies.google.com/privacy?hl=ja" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://policies.google.com/privacy?hl=ja</a>
              </p>
            </section>

            {/* 第5条 */}
            <section>
              <h2 className="mb-4 text-foreground pb-3 border-b-2 border-primary/30">
                第5条（広告配信について）
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                当サイトは、第三者配信の広告サービス（例：A8.net、Amazonアソシエイト、バリューコマース等）を利用しています。<br />
                これらの広告配信事業者は、ユーザーの興味に応じた商品・サービスの広告を表示するために Cookie を使用することがあります。
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Cookie は匿名の情報であり、個人を特定するものではありません。<br />
                ブラウザ設定により Cookie を無効にすることも可能です。
              </p>
            </section>

            {/* 第6条 */}
            <section>
              <h2 className="mb-4 text-foreground pb-3 border-b-2 border-primary/30">
                第6条（アフィリエイトプログラムについて）
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                当サイトでは、A8.netなどのアフィリエイトプログラムを利用しています。<br />
                当サイトが紹介している商品やサービスのリンクには、アフィリエイトリンクが含まれる場合があります。<br />
                ユーザーがリンクを経由して商品・サービスを購入・利用した場合、当サイトに紹介料が支払われることがあります。
              </p>
              <p className="text-foreground/80 leading-relaxed">
                当サイトは、掲載している商品・サービスを直接販売・提供しているわけではありません。<br />
                ご購入やお申し込みに関するお問い合わせは、販売元・提供元の公式窓口へお願いいたします。
              </p>
            </section>

            {/* 第7条 */}
            <section>
              <h2 className="mb-4 text-foreground pb-3 border-b-2 border-primary/30">
                第7条（免責事項）
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                当サイトに掲載する情報は、正確な内容を提供するよう努めておりますが、必ずしもその正確性や安全性を保証するものではありません。<br />
                情報の利用によって生じた損害等について、当サイトは一切の責任を負いません。
              </p>
              <p className="text-foreground/80 leading-relaxed">
                また、当サイトからリンクやバナーなどを通じて他サイトに移動された場合、移動先サイトで提供される情報・サービス等についても責任を負いかねます。
              </p>
            </section>

            {/* 第8条 */}
            <section>
              <h2 className="mb-4 text-foreground pb-3 border-b-2 border-primary/30">
                第8条（著作権・引用について）
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                当サイトに掲載している文章、画像、イラストなどの著作権は当サイトまたは各権利者に帰属します。<br />
                無断転載・複製・引用・販売などの二次利用を禁止します。
              </p>
              <p className="text-foreground/80 leading-relaxed">
                ただし、著作権法第32条に基づく「引用」の範囲内であれば、出典を明記することで利用可能です。
              </p>
            </section>

            {/* 第9条 */}
            <section>
              <h2 className="mb-4 text-foreground pb-3 border-b-2 border-primary/30">
                第9条（プライバシーポリシーの変更）
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                当サイトは、法令の改定または運営上の必要に応じて、本ポリシーを変更することがあります。<br />
                改定後のポリシーは、当サイト上に掲載した時点で効力を生じるものとします。
              </p>
            </section>

            {/* 第10条 */}
            <section>
              <h2 className="mb-4 text-foreground pb-3 border-b-2 border-primary/30">
                第10条（お問い合わせ窓口）
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                プライバシーポリシーに関するお問い合わせは、以下のフォームよりお願いいたします。
              </p>
            </section>

            {/* Footer */}
            <section className="pt-6 border-t border-border">
              <p className="text-sm text-foreground/60">
                制定日：2025年10月25日<br />
                最終更新日：2025年10月25日<br />
                ブライダルフェア比較メディア　運営者：regrit0805@gmail.com
              </p>
            </section>
          </div>

          {/* Contact Link */}
          <div className="mt-8 text-center">
            <p className="text-foreground/70 mb-4">
              プライバシーポリシーに関するお問い合わせ
            </p>
            <button
              onClick={onNavigateToContact}
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              お問い合わせフォームへ
            </button>
          </div>
        </article>
      </main>

      {/* Footer */}
      <SiteFooter
        onNavigateToIndex={onBackToIndex}
        onNavigateToDiagnosis={onNavigateToDiagnosis}
        onNavigateToContact={onNavigateToContact}
        onNavigateToAbout={onNavigateToAbout}
      />
    </div>
  );
}
