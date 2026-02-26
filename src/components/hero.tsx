import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getPurchaseLink } from "@/config"
import { useTranslation } from "react-i18next"
import { DownloadButton } from "@/components/download-button"
import { GridPattern } from "@/components/ui/grid-pattern"

export function Hero() {
  const { t } = useTranslation()
  
  // Séparer le titre en mots pour l'animation
  const title = t("hero.title")
  const words = title.split(" ")
  
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Grid Pattern Background */}
      <GridPattern
        width={60}
        height={60}
        className="absolute inset-0 h-full w-full fill-[#97acc8]/[0.15] stroke-[#97acc8]/[0.2]"
        squares={[
          [0, 1],
          [1, 3],
          [3, 1],
          [5, 2],
          [2, 5],
          [7, 4],
          [4, 7],
          [6, 6],
          [8, 2],
          [9, 5],
          [1, 8],
          [5, 9],
          [10, 3],
          [3, 10],
          [12, 6],
          [6, 12],
        ]}
      />
      
      {/* Gradient background with #ffdd00 and #97acc8 accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#97acc8]/5 via-background to-[#ffdd00]/5" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#ffdd00]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#97acc8]/10 rounded-full blur-3xl" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-8 text-center">

          {/* Titre principal - Mots qui apparaissent un par un avec blur */}
          <div className="space-y-6 max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                    ease: "easeOut"
                  }}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </h1>
          </div>
          
          {/* Sous-titre - Apparaît après tous les mots du titre */}
          <motion.p 
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: words.length * 0.05 + 0.1, ease: "easeOut" }}
            className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl"
          >
            {t("hero.subtitle")}
          </motion.p>

          {/* Call to Action - Apparaît après le sous-titre */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: words.length * 0.05 + 0.3, ease: "easeOut" }}
            className="flex flex-col gap-4 sm:flex-row items-center"
          >
            <DownloadButton />
            <Button 
              size="lg"
              variant="outline"
              className="group text-lg px-8 py-6 border-[#ffdd00] hover:bg-[#ffdd00]/10 relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#ffdd00]/20"
              asChild
            >
              <a href={getPurchaseLink()} target="_blank" rel="noopener noreferrer">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ffdd00]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                <span className="relative z-10">{t("hero.ctaSecondary")}</span>
              </a>
            </Button>
          </motion.div>
          
          {/* Badge Open Source - Apparaît EN DERNIER avec blur */}
          <motion.div
            initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: words.length * 0.05 + 0.5, ease: "easeOut" }}
            className="max-w-2xl w-full flex justify-center"
          >
            <Badge className="bg-[#97acc8]/10 text-[#97acc8] border-[#97acc8]/30 px-4 py-1.5 text-sm">
              {t("hero.badge")}
            </Badge>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
