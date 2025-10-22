import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";

interface SiteHeaderProps {
  onNavigateToIndex?: () => void;
  onNavigateToDiagnosis?: () => void;
  onNavigateToContact?: () => void;
  onNavigateToPrivacy?: () => void;
  onNavigateToAbout?: () => void;
}

export function SiteHeader({
  onNavigateToIndex,
  onNavigateToDiagnosis,
  onNavigateToContact,
  onNavigateToPrivacy,
  onNavigateToAbout,
}: SiteHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={onNavigateToIndex}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Heart className="w-8 h-8 text-primary fill-primary/20" />
            <span className="text-xl text-foreground font-semibold">
              ブライダルフェア特典比較
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={onNavigateToIndex}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              トップページ
            </button>
            <button
              onClick={onNavigateToDiagnosis}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              診断
            </button>
            <button
              onClick={onNavigateToContact}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              お問い合わせ
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3 border-t border-border pt-4">
            <button
              onClick={() => {
                onNavigateToIndex?.();
                setMobileMenuOpen(false);
              }}
              className="text-left text-foreground/80 hover:text-primary transition-colors py-2"
            >
              トップページ
            </button>
            <button
              onClick={() => {
                onNavigateToDiagnosis?.();
                setMobileMenuOpen(false);
              }}
              className="text-left text-foreground/80 hover:text-primary transition-colors py-2"
            >
              診断
            </button>
            <button
              onClick={() => {
                onNavigateToContact?.();
                setMobileMenuOpen(false);
              }}
              className="text-left text-foreground/80 hover:text-primary transition-colors py-2"
            >
              お問い合わせ
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
