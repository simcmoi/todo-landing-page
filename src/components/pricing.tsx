import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Github, Sparkles, Users } from "lucide-react"
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
import { FreeTrialModal } from "@/components/free-trial-modal"

interface PricingFeature {
  text: string
  included: boolean
}

interface PricingPlan {
  id: 'solo' | 'pro' | 'openSource' | 'team'
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
  const [freeTrialOpen, setFreeTrialOpen] = useState(false)
  const [isTeamMode, setIsTeamMode] = useState(false)

  // Personal plans (Solo, Pro, Open Source) - Pro in the middle for emphasis
  const personalPlans: PricingPlan[] = [
    { id: 'solo', icon: Users, features: [] },
    { id: 'pro', icon: Sparkles, features: [] },
    { id: 'openSource', icon: Github, features: [] },
  ]

  // Team plan
  const teamPlans: PricingPlan[] = [
    { id: 'team', icon: Users, features: [] },
  ]

  const pricingPlans = isTeamMode ? teamPlans : personalPlans

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-[#ff4D00]/5 via-background to-[#97acc8]/10 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-20 w-96 h-96 bg-[#97acc8]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-20 w-96 h-96 bg-[#ff4D00]/10 rounded-full blur-3xl" />
      
      <div className="container px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-12"
        >
          {/* Buy Once, Own Forever Banner */}
          <div className="inline-flex flex-col items-center gap-2 mb-4">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight bg-gradient-to-r from-[#97acc8] via-[#7a92ad] to-[#97acc8] bg-clip-text text-transparent">
              {t("pricing.buyOnce")}
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground font-medium">
              {t("pricing.buyOnceSubtitle")}
            </p>
          </div>

          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {t("pricing.title")}
          </h2>
          
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            {t("pricing.subtitle")}
          </p>

          {/* Free Trial Button */}
          <div className="mt-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#97acc8] to-[#7a92ad] hover:from-[#7a92ad] hover:to-[#6582a0] text-white text-lg px-12 py-6 shadow-lg shadow-[#97acc8]/30"
              onClick={() => setFreeTrialOpen(true)}
            >
              {t("hero.cta")}
            </Button>
          </div>

          {/* Personal/Team Toggle - Modern Tab Style */}
          <div className="mt-10 flex justify-center">
            <div className="relative inline-flex items-center rounded-lg bg-muted p-1 text-muted-foreground shadow-sm">
              {/* Animated background slider */}
              <div 
                className={`absolute top-1 bottom-1 rounded-md bg-background shadow-sm transition-all duration-300 ease-out ${
                  isTeamMode ? 'left-[calc(50%)] right-1' : 'left-1 right-[calc(50%)]'
                }`}
              />
              
              <button
                onClick={() => setIsTeamMode(false)}
                className={`relative z-10 inline-flex items-center justify-center whitespace-nowrap rounded-md px-8 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                  !isTeamMode
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {t("pricing.personal")}
              </button>
              <button
                onClick={() => setIsTeamMode(true)}
                className={`relative z-10 inline-flex items-center justify-center whitespace-nowrap rounded-md px-8 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                  isTeamMode
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {t("pricing.teamMode")}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          key={isTeamMode ? 'team' : 'personal'} // Force re-animation on switch
          variants={container}
          initial="hidden"
          animate="show"
          viewport={{ once: true }}
          className={`grid gap-8 ${isTeamMode ? 'md:grid-cols-1 max-w-md' : 'md:grid-cols-3 max-w-6xl'} mx-auto transition-all duration-300`}
        >
          {pricingPlans.map((plan) => {
            const planData = t(`pricing.${plan.id}`, { returnObjects: true }) as {
              name: string
              description: string
              price: string
              priceLabel: string
              cta: string
              popular?: boolean
              features?: string[]
            }

            const Icon = plan.icon
            const isPopular = plan.id === 'pro'
            const isOpenSource = plan.id === 'openSource'
            const isTeam = plan.id === 'team'

            return (
              <motion.div 
                key={plan.id} 
                variants={item}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`flex ${isPopular ? 'md:scale-105 md:z-10' : 'md:scale-100'}`}
              >
                <Card
                  className={`relative flex flex-col w-full transition-all ${
                    isPopular
                      ? "border-[#97acc8] border-2 shadow-2xl shadow-[#97acc8]/30 bg-gradient-to-br from-[#97acc8]/10 to-background ring-2 ring-[#97acc8]/20"
                      : isOpenSource
                      ? "border-border/50 shadow-sm bg-card/50 opacity-90"
                      : isTeam
                      ? "border-[#97acc8] shadow-lg shadow-[#97acc8]/20 bg-gradient-to-br from-[#97acc8]/5 to-background"
                      : "border-border shadow-md bg-card"
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-4 left-0 right-0 flex justify-center z-10">
                      <Badge className="bg-gradient-to-r from-[#97acc8] to-[#7a92ad] text-white px-4 py-1.5 text-sm font-semibold shadow-xl shadow-[#97acc8]/40 border border-[#97acc8]/30">
                        ⭐ {t("pricing.pro.popular") || "Le plus populaire"}
                      </Badge>
                    </div>
                  )}

                  {isTeam && (
                    <div className="absolute -top-3 left-0 right-0 flex justify-center z-10">
                      <Badge className="bg-gradient-to-r from-[#97acc8] to-[#7a92ad] text-white px-3 py-1 shadow-lg shadow-[#97acc8]/30">
                        {t("pricing.team.badge") || "Best for Teams"}
                      </Badge>
                    </div>
                  )}
                  
                  {isOpenSource && (
                    <div className="absolute -top-3 left-0 right-0 flex justify-center z-10">
                      <Badge variant="outline" className="bg-background/80 text-muted-foreground border-border px-3 py-1 text-xs">
                        <Github className="h-3 w-3 mr-1" />
                        Open Source
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="pb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg ${
                        isPopular || isTeam ? 'bg-[#97acc8]/10' : isOpenSource ? 'bg-muted/50' : 'bg-muted'
                      }`}>
                        <Icon className={`h-6 w-6 ${
                          isPopular || isTeam ? 'text-[#97acc8]' : isOpenSource ? 'text-muted-foreground' : 'text-foreground'
                        }`} />
                      </div>
                      <CardTitle className="text-2xl">{planData.name}</CardTitle>
                    </div>
                    <CardDescription className="text-base min-h-[48px]">{planData.description}</CardDescription>
                    
                    <div className="mt-4">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold">{planData.price}</span>
                        <span className="text-muted-foreground text-sm">
                          {planData.priceLabel}
                        </span>
                      </div>
                      {isPopular && (
                        <p className="text-xs text-green-600 dark:text-green-500 font-medium mt-2 min-h-[20px]">
                          💰 Économisez 43% vs 3× Solo
                        </p>
                      )}
                      {!isPopular && (
                        <div className="min-h-[20px] mt-2" />
                      )}
                    </div>
                  </CardHeader>

                  {/* Features section - flex-grow to push button to bottom */}
                  <CardContent className="flex-grow">
                    <div className="space-y-3 mb-6">
                      {planData.features && planData.features.map((featureText, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">
                            {featureText}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>

                  {/* CTA Button - always at bottom */}
                  <CardContent className="pt-0">
                    <Button 
                      className={`w-full ${
                        isPopular || isTeam
                          ? 'bg-gradient-to-r from-[#97acc8] to-[#7a92ad] hover:from-[#7a92ad] hover:to-[#6582a0] shadow-lg shadow-[#97acc8]/30 text-lg font-semibold' 
                          : isOpenSource
                          ? 'text-muted-foreground border-muted-foreground/30 hover:bg-muted/50'
                          : ''
                      }`}
                      size="lg" 
                      variant={isPopular || isTeam ? "default" : "outline"}
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
                  </CardContent>

                  <CardFooter className="flex-col gap-2">
                    {(isPopular || plan.id === 'solo' || isTeam) && (
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

      {/* Free Trial Modal */}
      <FreeTrialModal open={freeTrialOpen} onOpenChange={setFreeTrialOpen} />
    </section>
  )
}
