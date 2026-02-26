import { motion } from "framer-motion"
import { 
  Zap, 
  ListTree, 
  Tag, 
  Bell, 
  Moon, 
  GripVertical,
  CheckSquare,
  Keyboard
} from "lucide-react"
import { useTranslation } from "react-i18next"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function Features() {
  const { t } = useTranslation()
  
  const featureIcons = [Zap, Keyboard, ListTree, Tag, CheckSquare, Bell, Moon, GripVertical]
  
  const features = Array.from({ length: 8 }, (_, i) => ({
    icon: featureIcons[i],
    title: t(`features.list.${i}.title`),
    description: t(`features.list.${i}.description`),
  }))
  return (
    <section className="py-24 bg-gradient-to-b from-background via-[#97acc8]/5 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-[#ffdd00]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#97acc8]/10 rounded-full blur-3xl" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {t("features.title")}
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            {t("features.subtitle")}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            const colors = [
              { bg: 'bg-[#97acc8]/10', icon: 'text-[#97acc8]', border: 'border-[#97acc8]/20', hover: 'hover:shadow-[#97acc8]/20' },
              { bg: 'bg-[#ffdd00]/10', icon: 'text-[#ffdd00]', border: 'border-[#ffdd00]/20', hover: 'hover:shadow-[#ffdd00]/20' },
              { bg: 'bg-[#97acc8]/15', icon: 'text-[#7a92ad]', border: 'border-[#97acc8]/30', hover: 'hover:shadow-[#97acc8]/30' },
              { bg: 'bg-[#ffdd00]/15', icon: 'text-[#f5cc00]', border: 'border-[#ffdd00]/30', hover: 'hover:shadow-[#ffdd00]/30' },
            ]
            const color = colors[index % 4]
            
            return (
              <motion.div
                key={index}
                variants={item}
                className="relative group"
              >
                <div className={`flex flex-col items-start space-y-3 p-6 rounded-lg border ${color.border} bg-card hover:shadow-lg ${color.hover} transition-all duration-300`}>
                  <div className={`p-2 rounded-md ${color.bg}`}>
                    <Icon className={`h-6 w-6 ${color.icon}`} />
                  </div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
