import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Send, CheckCircle2, Mail } from "lucide-react";
import { useState } from "react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

interface ContactPageProps {
  onBackToIndex: () => void;
  onNavigateToDiagnosis?: () => void;
  onNavigateToPrivacy?: () => void;
  onNavigateToAbout?: () => void;
}

export default function ContactPage({
  onBackToIndex,
  onNavigateToDiagnosis,
  onNavigateToPrivacy,
  onNavigateToAbout,
}: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = encodeURIComponent(
      "ブライダルフェア比較メディアへのお問い合わせ"
    );
    const body = encodeURIComponent(
      `お名前: ${formData.name}\n\nメールアドレス: ${formData.email}\n\nお問い合わせ内容:\n${formData.message}`
    );

    // Open email client
    window.location.href = `mailto:regrit0805@gmail.com?subject=${subject}&body=${body}`;

    // Simulate submission completion
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
      }, 3000);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* SEO Meta Tags */}
      <title>お問い合わせ | ブライダルフェア特典比較メディア</title>

      {/* Header */}
      <SiteHeader
        onNavigateToIndex={onBackToIndex}
        onNavigateToDiagnosis={onNavigateToDiagnosis}
        onNavigateToPrivacy={onNavigateToPrivacy}
        onNavigateToAbout={onNavigateToAbout}
      />

      {/* Main Content */}
      <main className="flex-1 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Page Title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h1 className="mb-4 text-foreground">お問い合わせ</h1>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              ご意見・ご質問・取材依頼などはこちらからご連絡ください
            </p>
          </div>

          {/* Contact Form */}
          {!isSubmitted ? (
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <Label htmlFor="name" className="mb-2 block text-foreground">
                    お名前 <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="山田 太郎"
                    className="bg-input-background border-border"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <Label htmlFor="email" className="mb-2 block text-foreground">
                    メールアドレス <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    className="bg-input-background border-border"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <Label
                    htmlFor="message"
                    className="mb-2 block text-foreground"
                  >
                    お問い合わせ内容 <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="お問い合わせ内容をご記入ください"
                    rows={8}
                    className="bg-input-background border-border resize-none"
                  />
                </div>

                {/* Disclaimer */}
                <div className="p-4 bg-muted/50 rounded-xl border border-border">
                  <p className="text-sm text-foreground/70">
                    ※ 通常48時間以内に返信いたします
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>送信中...</>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      送信する
                    </>
                  )}
                </button>
              </form>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-primary/10 to-secondary/30 rounded-2xl shadow-lg p-12 text-center border-2 border-primary/30">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>
              <h2 className="mb-4 text-foreground">送信完了</h2>
              <p className="text-foreground/70">
                お問い合わせありがとうございます。
                <br />
                メールクライアントが開きます。
              </p>
            </div>
          )}

          {/* Additional Info */}
          <div className="mt-12 p-6 bg-muted/30 rounded-xl border border-border">
            <h3 className="mb-4 text-foreground">お問い合わせ先</h3>
            <p className="text-foreground/70 mb-2">
              メールアドレス:{" "}
              <a
                href="mailto:regrit0805@gmail.com"
                className="text-primary hover:underline"
              >
                regrit0805@gmail.com
              </a>
            </p>
            <p className="text-sm text-foreground/60">
              お問い合わせの際は、上記フォームまたは直接メールにてご連絡ください。
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <SiteFooter
        onNavigateToIndex={onBackToIndex}
        onNavigateToDiagnosis={onNavigateToDiagnosis}
        onNavigateToPrivacy={onNavigateToPrivacy}
        onNavigateToAbout={onNavigateToAbout}
      />
    </div>
  );
}
