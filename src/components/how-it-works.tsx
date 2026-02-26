import { motion } from 'framer-motion';
import { Download, Zap, CheckCircle2 } from 'lucide-react';
import { getTrialLink } from '@/config';
import { useTranslation } from 'react-i18next';

export function HowItWorks() {
  const { t } = useTranslation()
  
  const stepIcons = [Download, Zap, CheckCircle2]
  const stepColors = ["#97acc8", "#ffdd00", "#97acc8"]
  
  const steps = Array.from({ length: 3 }, (_, i) => ({
    number: t(`howItWorks.steps.${i}.number`),
    icon: stepIcons[i],
    title: t(`howItWorks.steps.${i}.title`),
    description: t(`howItWorks.steps.${i}.description`),
    color: stepColors[i],
    highlight: i === 1,
    badge: i === 1 ? t(`howItWorks.steps.${i}.badge`) : undefined,
  }))

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("howItWorks.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("howItWorks.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent z-0" />
              )}

              <div 
                className={`relative bg-white rounded-2xl p-8 border-2 transition-all hover:shadow-xl ${
                  step.highlight 
                    ? 'border-[#ffdd00] shadow-lg shadow-[#ffdd00]/20' 
                    : 'border-gray-200 hover:border-[#97acc8]'
                }`}
              >
                {/* Number badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div 
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                    step.highlight ? 'bg-[#ffdd00]' : 'bg-[#97acc8]'
                  } bg-opacity-20`}
                >
                  <step.icon 
                    className="w-8 h-8" 
                    style={{ color: step.color }}
                    strokeWidth={2}
                  />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Highlight indicator */}
                {step.highlight && step.badge && (
                  <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-[#ffdd00] bg-opacity-20 rounded-full border border-[#ffdd00]">
                    <Zap className="w-4 h-4 text-[#ffdd00]" fill="currentColor" />
                    <span className="text-sm font-semibold text-gray-900">
                      {step.badge}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6 text-lg">
            {t("howItWorks.ctaSubtext")}
          </p>
          <a 
            href={getTrialLink()} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#ffdd00] text-gray-900 rounded-lg font-semibold text-lg hover:bg-[#ffdd00]/90 transition-all hover:scale-105 shadow-lg shadow-[#ffdd00]/30 inline-block"
          >
            {t("howItWorks.cta")}
          </a>
          <p className="text-sm text-gray-500 mt-3">
            {t("howItWorks.platforms")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
