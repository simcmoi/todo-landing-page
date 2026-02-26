import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { getDownloadLink, detectOS } from "@/config"
import { useTranslation } from "react-i18next"

export function Hero() {
  const { t } = useTranslation()
  const os = detectOS()
  const downloadButtonText = os ? t("hero.cta", { os }) : t("hero.ctaDefault")
  
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background with #ffdd00 and #97acc8 accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#97acc8]/5 via-background to-[#ffdd00]/5" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#ffdd00]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#97acc8]/10 rounded-full blur-3xl" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-8 text-center">
          {/* Titre principal - La promesse */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 max-w-4xl"
          >
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
            >
              {t("hero.title")}
            </motion.h1>
            
            {/* Sous-titre explicatif */}
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl"
            >
              {t("hero.subtitle")}
            </motion.p>
          </motion.div>

          {/* Call to Action principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-4 sm:flex-row items-center"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#97acc8] to-[#7a92ad] hover:from-[#7a92ad] hover:to-[#6582a0] shadow-lg shadow-[#97acc8]/30 text-lg px-8 py-6"
              asChild
            >
              <a href={getDownloadLink()} target="_blank" rel="noopener noreferrer">
                {downloadButtonText}
              </a>
            </Button>
            <p className="text-sm text-muted-foreground">
              {t("hero.ctaSubtext")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
