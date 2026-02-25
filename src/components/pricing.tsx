import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, X, Zap, Infinity, GraduationCap } from "lucide-react"
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

interface PricingFeature {
  text: string
  included: boolean
}

interface PricingPlan {
  title: string
  description: string
  price?: number
  priceLabel?: string
  monthlyPrice?: number
  annualPrice?: number
  buttonText: string
  popular?: boolean
  lifetime?: boolean
  features: PricingFeature[]
}

const pricingPlans: PricingPlan[] = [
  {
    title: "Gratuit",
    description: "Ultra simple en local. Parfait pour commencer.",
    monthlyPrice: 0,
    annualPrice: 0,
    buttonText: "Télécharger",
    features: [
      { text: "Stockage local JSON", included: true },
      { text: "1 seule liste", included: true },
      { text: "Tâches illimitées", included: true },
      { text: "Sous-tâches simples", included: true },
      { text: "Rappels simples", included: true },
      { text: "Historique des tâches", included: true },
      { text: "Aucune création de compte", included: true },
      { text: "Synchronisation cloud", included: false },
      { text: "Multi-listes", included: false },
      { text: "Tâches récurrentes", included: false },
    ],
  },
  {
    title: "Pro",
    description: "Puissant quand tu en as besoin. Pour les power users.",
    monthlyPrice: 4,
    annualPrice: 29,
    buttonText: "Commencer l'essai",
    popular: true,
    features: [
      { text: "Tout du plan Gratuit", included: true },
      { text: "Synchronisation cloud", included: true },
      { text: "Multi-device", included: true },
      { text: "Multi-listes illimitées", included: true },
      { text: "Tâches récurrentes", included: true },
      { text: "Natural language input", included: true },
      { text: "Vue Aujourd'hui avancée", included: true },
      { text: "Snooze intelligent", included: true },
      { text: "Statistiques & insights", included: true },
      { text: "Support prioritaire", included: true },
    ],
  },
  {
    title: "Lifetime",
    description: "Un seul paiement, utilisez l'app à vie.",
    price: 29,
    priceLabel: "paiement unique",
    buttonText: "Acheter la licence",
    lifetime: true,
    features: [
      { text: "Mode local illimité", included: true },
      { text: "Multi-listes illimitées", included: true },
      { text: "Tâches récurrentes", included: true },
      { text: "Natural language input", included: true },
      { text: "Toutes les fonctionnalités", included: true },
      { text: "1 an de mises à jour incluses", included: true },
      { text: "Mises à jour suivantes : 12€/an", included: true },
      { text: "Tarif étudiant : mises à jour gratuites", included: true },
      { text: "Synchronisation cloud", included: false },
      { text: "Multi-device", included: false },
    ],
  },
]

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
  const [isAnnual, setIsAnnual] = useState(false)

  const savingsPercentage = Math.round(((4 * 12 - 29) / (4 * 12)) * 100)

  return (
    <section id="pricing" className="py-24 bg-secondary/20">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Choisissez votre plan
          </h2>
          
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Gratuit pour toujours, Pro pour la sync cloud, ou Lifetime pour un paiement unique.
          </p>

          {/* Toggle Monthly/Annual */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm font-medium transition-colors ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
              Mensuel
            </span>
            
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-16 h-8 rounded-full bg-secondary transition-colors hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className={`absolute top-1 ${isAnnual ? 'left-9' : 'left-1'} w-6 h-6 rounded-full bg-primary`}
              />
            </button>
            
            <div className="flex items-center gap-2">
              <span className={`text-sm font-medium transition-colors ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
                Annuel
              </span>
              <AnimatePresence mode="wait">
                {isAnnual && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Badge variant="secondary" className="text-primary">
                      <Zap className="h-3 w-3 mr-1" />
                      -{savingsPercentage}%
                    </Badge>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
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
            let displayPrice = ""
            let displayPeriod = ""
            let monthlyEquivalent = null

            if (plan.lifetime) {
              displayPrice = `${plan.price}€`
              displayPeriod = plan.priceLabel || ""
            } else {
              const price = isAnnual ? plan.annualPrice : plan.monthlyPrice
              displayPrice = `${price}€`
              displayPeriod = isAnnual ? "an" : "mois"
              if (isAnnual && plan.annualPrice! > 0) {
                monthlyEquivalent = (plan.annualPrice! / 12).toFixed(2)
              }
            }

            return (
              <motion.div 
                key={plan.title} 
                variants={item}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card
                  className={`relative h-full ${
                    plan.popular
                      ? "border-primary shadow-md"
                      : plan.lifetime
                      ? "border-muted-foreground/20 shadow-md"
                      : "border-border shadow-sm"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-0 right-0 flex justify-center z-10">
                      <Badge className="bg-primary text-primary-foreground px-3 py-1">
                        Le plus populaire
                      </Badge>
                    </div>
                  )}
                  
                  {plan.lifetime && (
                    <div className="absolute -top-3 left-0 right-0 flex justify-center z-10">
                      <Badge variant="outline" className="bg-background px-3 py-1">
                        <Infinity className="h-3 w-3 mr-1" />
                        Paiement unique
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.title}</CardTitle>
                    <CardDescription className="text-base">{plan.description}</CardDescription>
                    
                    <div className="mt-4">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`${plan.title}-${isAnnual}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-bold">{displayPrice}</span>
                            {displayPeriod && (
                              <span className="text-muted-foreground">
                                {plan.lifetime ? displayPeriod : `/ ${displayPeriod}`}
                              </span>
                            )}
                          </div>
                          {monthlyEquivalent && (
                            <p className="text-sm text-muted-foreground mt-1">
                              Soit {monthlyEquivalent}€/mois
                            </p>
                          )}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <Button 
                      className="w-full"
                      size="lg" 
                      variant={plan.popular || plan.lifetime ? "default" : "outline"}
                    >
                      {plan.buttonText}
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
                    {plan.popular && (
                      <p className="text-xs text-muted-foreground text-center w-full">
                        Essai gratuit de 14 jours • Sans engagement
                      </p>
                    )}
                    {plan.lifetime && (
                      <div className="text-xs text-muted-foreground text-center w-full space-y-1">
                        <p className="flex items-center justify-center gap-1">
                          <GraduationCap className="h-3 w-3" />
                          <span>Étudiants : mises à jour gratuites à vie</span>
                        </p>
                      </div>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center space-y-2"
        >
          <p className="text-sm text-muted-foreground">
            Plan Gratuit & Lifetime : données en local uniquement • Plan Pro : sync cloud sécurisé avec Supabase
          </p>
          <p className="text-xs text-muted-foreground">
            * Licence Lifetime : après 1 an, les mises à jour sont à 12€/an (gratuites pour les étudiants avec justificatif)
          </p>
        </motion.div>
      </div>
    </section>
  )
}
