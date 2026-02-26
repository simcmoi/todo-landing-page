import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { getTrialLink } from '@/config';
import { useTranslation } from 'react-i18next';

export function ProblemSolution() {
  const { t } = useTranslation()
  
  const problems = [
    t("problemSolution.withoutProblems.0"),
    t("problemSolution.withoutProblems.1"),
    t("problemSolution.withoutProblems.2"),
    t("problemSolution.withoutProblems.3"),
  ];

  const solutions = [
    t("problemSolution.withSolutions.0"),
    t("problemSolution.withSolutions.1"),
    t("problemSolution.withSolutions.2"),
    t("problemSolution.withSolutions.3"),
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("problemSolution.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("problemSolution.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Sans BlinkDo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 border-2 border-gray-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                <X className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{t("problemSolution.without")}</h3>
            </div>
            
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">{problem}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 p-4 bg-red-50 rounded-lg border border-red-100">
              <p className="text-sm text-red-800 font-medium">
                {t("problemSolution.withoutResult")}
              </p>
            </div>
          </motion.div>

          {/* Avec BlinkDo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 border-2 border-[#ffdd00] shadow-lg shadow-[#ffdd00]/20 relative overflow-hidden"
          >
            {/* Decorative blob */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#ffdd00] rounded-full opacity-10 blur-3xl" />
            
            <div className="flex items-center gap-3 mb-6 relative">
              <div className="w-12 h-12 rounded-full bg-[#ffdd00] flex items-center justify-center">
                <Check className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{t("problemSolution.with")}</h3>
            </div>
            
            <ul className="space-y-4 relative">
              {solutions.map((solution, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-[#ffdd00] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{solution}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 p-4 bg-[#ffdd00] bg-opacity-20 rounded-lg border border-[#ffdd00] relative">
              <p className="text-sm text-gray-900 font-bold">
                {t("problemSolution.withResult")}
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a 
            href={getTrialLink()} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#ffdd00] text-gray-900 rounded-lg font-semibold text-lg hover:bg-[#ffdd00]/90 transition-all hover:scale-105 shadow-lg shadow-[#ffdd00]/30 inline-block"
          >
            {t("problemSolution.cta")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
