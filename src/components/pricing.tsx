import { motion } from "framer-motion"
import { Check, X, Github, Sparkles, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useTranslation } from "react-i18next"
import { config } from "@/config"

interface PricingFeature {
  text: string
  included: boolean
}

interface PricingPlan {
  id: 'solo' | 'pro' | 'openSource'
  icon: typeof Users | typeof Sparkles | typeof Github
  features: PricingFeature[]
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function Pricing() {
  const { t } = useTranslation()

  const pricingPlans: PricingPlan[] = [
    {
      id: 'solo',
      icon: Users,
      features: [
        { text: "1 appareil (Mac, Windows ou Linux)", included: true },
        { text: "Toutes les fonctionnalités incluses", included: true },
        { text: "Mises à jour à vie", included: true },
        { text: "Mises à jour automatiques", included: true },
        { text: "Application signée et notarisée", included: true },
        { text: "Support par email", included: true },
        { text: "Données 100% locales (aucun cloud)", included: true },
        { text: "Open Source (GPL-3.0)", included: true },
      ],
    },
    {
      id: 'pro',
      icon: Sparkles,
      features: [
        { text: "Jusqu'à 3 appareils", included: true },
        { text: "Toutes les fonctionnalités incluses", included: true },
        { text: "Mises à jour à vie", included: true },
        { text: "Mises à jour automatiques", included: true },
        { text: "Application signée et notarisée", included: true },
        { text: "Support prioritaire", included: true },
        { text: "Données 100% locales (aucun cloud)", included: true },
        { text: "Open Source (GPL-3.0)", included: true },
        { text: "Accès anticipé aux nouvelles fonctionnalités", included: true },
      ],
    },
    {
      id: 'openSource',
      icon: Github,
      features: [
        { text: "Appareils illimités", included: true },
        { text: "Toutes les fonctionnalités incluses", included: true },
        { text: "Code source complet disponible", included: true },
        { text: "Compilez-le vous-même", included: true },
        { text: "Aucune restriction", included: true },
        { text: "Contribuez au projet", included: true },
        { text: "Support communautaire (GitHub Issues)", included: true },
        { text: "Mises à jour manuelles", included: false },
        { text: "Application signée automatiquement", included: false },
      ],
    },
  ]

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-[#ffdd00]/5 via-background to-[#97acc8]/10 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-20 w-96 h-96 bg-[#97acc8]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-20 w-96 h-96 bg-[#ffdd00]/10 rounded-full blur-3xl" />
      
      <div className="container px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {t("pricing.title")}
          </h2>
          
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            {t("pricing.subtitle")}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto"
        >
          {pricingPlans.map((plan) => {
            const planData = t(`pricing.${plan.id}`, { returnObjects: true }) as {
              name: string
              description: string
              price: string
              priceLabel: string
              cta: string
              popular?: boolean
            }

            const Icon = plan.icon
            const isPopular = plan.id === 'pro'
            const isOpenSource = plan.id === 'openSource'

            return (
              <motion.div 
                key={plan.id} 
                variants={item}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card
                  className={`relative h-full ${
                    isPopular
                      ? "border-[#97acc8] shadow-lg shadow-[#97acc8]/20 bg-gradient-to-br from-[#97acc8]/5 to-background"
                      : isOpenSource
                      ? "border-[#ffdd00] shadow-lg shadow-[#ffdd00]/20 bg-gradient-to-br from-[#ffdd00]/5 to-background"
                      : "border-border shadow-sm bg-card"
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-3 left-0 right-0 flex justify-center z-10">
                      <Badge className="bg-gradient-to-r from-[#97acc8] to-[#7a92ad] text-white px-3 py-1 shadow-lg shadow-[#97acc8]/30">
                        Le plus populaire
                      </Badge>
                    </div>
                  )}
                  
                  {isOpenSource && (
                    <div className="absolute -top-3 left-0 right-0 flex justify-center z-10">
                      <Badge variant="outline" className="bg-gradient-to-r from-[#ffdd00] to-[#f5cc00] text-yellow-900 border-[#ffdd00] px-3 py-1 shadow-lg shadow-[#ffdd00]/30">
                        <Github className="h-3 w-3 mr-1" />
                        Open Source
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg ${
                        isPopular ? 'bg-[#97acc8]/10' : isOpenSource ? 'bg-[#ffdd00]/10' : 'bg-muted'
                      }`}>
                        <Icon className={`h-6 w-6 ${
                          isPopular ? 'text-[#97acc8]' : isOpenSource ? 'text-[#ffdd00]' : 'text-foreground'
                        }`} />
                      </div>
                      <CardTitle className="text-2xl">{planData.name}</CardTitle>
                    </div>
                    <CardDescription className="text-base">{planData.description}</CardDescription>
                    
                    <div className="mt-4">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold">{planData.price}</span>
                        <span className="text-muted-foreground text-sm">
                          {planData.priceLabel}
                        </span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <Button 
                      className={`w-full ${
                        isPopular 
                          ? 'bg-gradient-to-r from-[#97acc8] to-[#7a92ad] hover:from-[#7a92ad] hover:to-[#6582a0] shadow-lg shadow-[#97acc8]/30' 
                          : isOpenSource
                          ? 'bg-gradient-to-r from-[#ffdd00] to-[#f5cc00] hover:from-[#f5cc00] hover:to-[#ebc300] text-yellow-950 shadow-lg shadow-[#ffdd00]/30'
                          : ''
                      }`}
                      size="lg" 
                      variant={isPopular || isOpenSource ? "default" : "outline"}
                      asChild
                    >
                      <a 
                        href={isOpenSource ? config.social.github : config.downloads.purchase}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {planData.cta}
                      </a>
                    </Button>

                    <div className="mt-6 space-y-3">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          {feature.included ? (
                            <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                          ) : (
                            <X className="h-5 w-5 text-muted-foreground/30 shrink-0 mt-0.5" />
                          )}
                          <span
                            className={`text-sm ${
                              feature.included
                                ? "text-foreground"
                                : "text-muted-foreground/50 line-through"
                            }`}
                          >
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="flex-col gap-2">
                    {isPopular && (
                      <p className="text-xs text-muted-foreground text-center w-full">
                        {t("pricing.trial")}
                      </p>
                    )}
                    {plan.id === 'solo' && (
                      <p className="text-xs text-muted-foreground text-center w-full">
                        {t("pricing.trial")}
                      </p>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Footer notes */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center space-y-2"
        >
          <p className="text-sm text-muted-foreground">
            ✓ {t("pricing.moneyBack")} • ✓ Toutes les plateformes (macOS, Windows, Linux) • ✓ Code source vérifiable
          </p>
          <p className="text-xs text-muted-foreground">
            {t("pricing.faq")}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
