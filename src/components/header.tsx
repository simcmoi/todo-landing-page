import { useState } from "react"
import { Menu, X, Globe, Github, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { config } from "@/config"
import { useTranslation } from "react-i18next"
import { useGitHubStars } from "@/hooks/use-github-stars"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [langMenuOpen, setLangMenuOpen] = useState(false)
  const { t, i18n } = useTranslation()
  const { stars, loading } = useGitHubStars(config.social.github)

  // Fonction pour scroller vers Pricing
  const handleScrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsOpen(false)
    const pricingSection = document.getElementById('pricing')
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const navItems = [
    { label: t("nav.features"), href: "#features" },
    { label: t("nav.pricing"), href: "#pricing" },
    { label: t("nav.faq"), href: "#faq" },
  ]

  const languages = [
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "zh", name: "中文", flag: "🇨🇳" },
    { code: "ar", name: "العربية", flag: "🇸🇦" },
  ]

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[1]

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode)
    setLangMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-2">
      <div className="max-w-6xl mx-auto bg-background/80 backdrop-blur-md border border-border rounded-2xl shadow-lg">
        <div className="px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo avec icône SVG */}
            <div className="flex items-center gap-3">
              <a href="/" className="flex items-center gap-3">
                {/* Icône SVG temporaire */}
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="8" fill="url(#gradient)" />
                  <path d="M9 16L14 21L23 11" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#97acc8" />
                      <stop offset="1" stopColor="#ff4D00" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="text-xl font-bold">BlinkDo</span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA Buttons - Desktop */}
            <div className="hidden md:flex items-center gap-3">
              {/* Language Selector */}
              <div className="relative">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setLangMenuOpen(!langMenuOpen)}
                  className="gap-2"
                >
                  <Globe className="h-4 w-4" />
                  {currentLanguage.flag}
                </Button>
                {langMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-lg border border-border bg-background/95 backdrop-blur-md shadow-lg z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-muted transition-colors first:rounded-t-lg last:rounded-b-lg ${
                          i18n.language === lang.code ? "bg-muted font-medium" : ""
                        }`}
                      >
                        <span className="mr-2">{lang.flag}</span>
                        {lang.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* GitHub Stars Badge */}
              <Button 
                variant="outline" 
                size="sm" 
                asChild
                className="gap-2 hover:bg-muted"
              >
                <a href={config.social.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  <Star className="h-3.5 w-3.5 fill-orange-400 text-orange-400" />
                  <span className="font-semibold">
                    {loading ? "..." : stars?.toLocaleString()}
                  </span>
                </a>
              </Button>

              <Button 
                size="sm" 
                className="bg-gradient-to-r from-[#97acc8] to-[#7a92ad] hover:from-[#7a92ad] hover:to-[#6582a0]" 
                onClick={handleScrollToPricing}
              >
                {t("nav.download")}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden pb-4 space-y-4 border-t border-border mt-2 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                {/* Language Selector Mobile */}
                <div className="grid grid-cols-5 gap-2 pb-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code)
                        setIsOpen(false)
                      }}
                      className={`p-2 text-2xl rounded-lg hover:bg-muted transition-colors ${
                        i18n.language === lang.code ? "bg-muted ring-2 ring-[#97acc8]" : ""
                      }`}
                      title={lang.name}
                    >
                      {lang.flag}
                    </button>
                  ))}
                </div>

                {/* GitHub Stars Badge Mobile */}
                <Button 
                  variant="outline" 
                  size="sm" 
                  asChild
                  className="w-full justify-center gap-2"
                >
                  <a href={config.social.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Github className="h-4 w-4" />
                    <Star className="h-3.5 w-3.5 fill-orange-400 text-orange-400" />
                    <span className="font-semibold">
                      {loading ? "..." : stars?.toLocaleString()}
                    </span>
                    <span className="text-muted-foreground text-xs">stars</span>
                  </a>
                </Button>

                <Button 
                  size="sm" 
                  className="bg-gradient-to-r from-[#97acc8] to-[#7a92ad] hover:from-[#7a92ad] hover:to-[#6582a0] w-full" 
                  onClick={handleScrollToPricing}
                >
                  {t("nav.download")}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
