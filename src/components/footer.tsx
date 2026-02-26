import { Github, Heart, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { config, getTrialLink } from "@/config"
import { useTranslation } from "react-i18next"
import { useGitHubReleases } from "@/hooks/use-github-releases"

export function Footer() {
  const { t } = useTranslation();
  const { release } = useGitHubReleases();

  return (
    <footer className="bg-background">
      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 border-t">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ffdd00] bg-opacity-20 rounded-full border border-[#ffdd00] mb-6">
              <Zap className="w-4 h-4 text-[#ffdd00]" fill="currentColor" />
              <span className="text-sm font-semibold text-gray-900">
                {t('footer.ctaBadge')}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('footer.ctaTitle')}
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('footer.ctaSubtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href={getTrialLink()} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#ffdd00] text-gray-900 rounded-lg font-semibold text-lg hover:bg-[#ffdd00]/90 transition-all hover:scale-105 shadow-lg shadow-[#ffdd00]/30"
              >
                {t('footer.downloadButton')}
              </a>
              <a 
                href={config.social.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold text-lg border-2 border-gray-200 hover:border-[#97acc8] transition-all inline-flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                {t('footer.githubButton')}
              </a>
            </div>

            <p className="text-sm text-gray-500 mt-6">
              {t('footer.platforms')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer Links */}
      <div className="border-t bg-background">
        <div className="container px-4 md:px-6 py-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-3">
              <h3 className="font-semibold">BlinkDo</h3>
              <p className="text-sm text-muted-foreground">
                {t('footer.description')}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold">{t('footer.links')}</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a 
                    href={config.social.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </li>
                <li>
                  <a 
                    href="#download" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t('footer.download')}
                  </a>
                </li>
                <li>
                  <a 
                    href="#features" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t('footer.features')}
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold">{t('footer.info')}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  {release ? `Version ${release.version}` : t('footer.version')}
                </li>
                <li>{t('footer.license')}</li>
                <li>{t('footer.copyright')}</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            <p className="inline-flex items-center gap-2">
              {t('footer.madeWith')} <Heart className="h-4 w-4 fill-red-500 text-red-500" /> {t('footer.by')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
