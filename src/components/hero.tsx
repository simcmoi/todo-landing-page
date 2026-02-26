import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Github } from "lucide-react"
import { config, getTrialLink, getPurchaseLink } from "@/config"
import { useTranslation } from "react-i18next"

export function Hero() {
  const { t } = useTranslation()
  
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background with #ffdd00 and #97acc8 accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#97acc8]/5 via-background to-[#ffdd00]/5" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#ffdd00]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#97acc8]/10 rounded-full blur-3xl" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-8 text-center">
          
          {/* Alert annonce avec badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl w-full"
          >
            <Badge className="mb-4 bg-[#97acc8]/10 text-[#97acc8] border-[#97acc8]/30 px-4 py-1.5">
              {t("hero.badge")}
            </Badge>
            <Alert className="border-[#ffdd00]/30 bg-[#ffdd00]/5">
              <Sparkles className="h-4 w-4 text-[#ffdd00]" />
              <AlertTitle>Version {config.app.version} disponible !</AlertTitle>
              <AlertDescription>
                Dialog de téléchargement avec barre de progression en temps réel, affichage du débit réseau, et calcul du temps restant estimé.
              </AlertDescription>
            </Alert>
          </motion.div>

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
              <a href={getTrialLink()} target="_blank" rel="noopener noreferrer">
                {t("hero.cta")}
              </a>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-[#ffdd00] hover:bg-[#ffdd00]/10"
              asChild
            >
              <a href={getPurchaseLink()} target="_blank" rel="noopener noreferrer">
                {t("hero.ctaSecondary")}
              </a>
            </Button>
          </motion.div>
          
          {/* CTA Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm text-muted-foreground flex items-center gap-2 justify-center"
          >
            <Github className="h-4 w-4" />
            {t("hero.ctaSubtext")}
          </motion.p>
        </div>
      </div>
    </section>
  )
}
