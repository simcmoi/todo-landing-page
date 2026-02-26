import { motion } from "framer-motion"
import { Users, TrendingUp, Zap } from "lucide-react"
import { useTranslation } from "react-i18next"

export function SocialProof() {
  const { t } = useTranslation()
  
  const stats = [
    {
      icon: Users,
      value: t("socialProof.usersCount"),
      label: t("socialProof.users"),
    },
    {
      icon: TrendingUp,
      value: t("socialProof.tasksCount"),
      label: t("socialProof.tasks"),
    },
    {
      icon: Zap,
      value: t("socialProof.speedCount"),
      label: t("socialProof.speed"),
    },
  ]
  
  return (
    <section className="py-16 bg-gradient-to-b from-background to-[#97acc8]/5">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-8"
        >
          <p className="text-muted-foreground">
            {t("socialProof.badge")}
          </p>
          
          <div className="grid gap-8 md:grid-cols-3">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center space-y-2"
                >
                  <div className="p-3 rounded-full bg-[#97acc8]/10">
                    <Icon className="h-6 w-6 text-[#97acc8]" />
                  </div>
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
