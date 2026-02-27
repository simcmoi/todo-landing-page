import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { getTrialLink } from '@/config';
import { useTranslation } from 'react-i18next';

export function FounderStory() {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 border-2 border-gray-200 shadow-xl relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#ff4D00] rounded-full opacity-10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#97acc8] rounded-full opacity-10 blur-3xl" />

          <div className="relative">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#ff4D00] flex items-center justify-center">
                <Heart className="w-6 h-6 text-gray-900" fill="currentColor" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                {t('founderStory.badge')}
              </h2>
            </div>

            {/* Story content */}
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                <span className="font-semibold text-gray-900">{t('founderStory.greeting')}</span>
              </p>

              <p>
                {t('founderStory.story.0')}
              </p>

              <p>
                {t('founderStory.story.1')}
              </p>

              <div className="bg-[#ff4D00] bg-opacity-20 border-l-4 border-[#ff4D00] p-6 rounded-r-lg my-8">
                <p className="font-semibold text-gray-900">
                  {t('founderStory.highlight')}
                </p>
              </div>

              <p>
                {t('founderStory.story.3')}
              </p>

              <p>
                {t('founderStory.story.4')}
              </p>

              <p className="text-gray-900 font-semibold">
                {t('founderStory.story.5')}
              </p>
            </div>

            {/* Signature */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#97acc8] to-[#ff4D00] flex items-center justify-center text-2xl font-bold text-white">
                  ?
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">{t('founderStory.author')}</p>
                  <p className="text-gray-600">{t('founderStory.role')}</p>
                </div>
              </div>
            </div>

            {/* Source Code Section */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 p-6 bg-muted/50 rounded-xl border border-border/50"
            >
              <p className="text-muted-foreground leading-relaxed mb-6 text-center">
                {t('founderStory.sourceCodeText')}
              </p>
              <div className="flex justify-center">
                <motion.a
                  href="https://github.com/simcmoi/blinkdo"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="group relative inline-flex items-center gap-2.5 px-6 py-3 bg-background border border-border rounded-lg font-medium text-foreground overflow-hidden transition-all duration-300 hover:border-foreground/60 hover:shadow-lg"
                >
                  {/* Shine effect on hover */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-foreground/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                  
                  <svg
                    className="w-5 h-5 transition-all duration-300 group-hover:scale-110"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  
                  <span className="relative z-10">
                    {t('founderStory.sourceCodeCta')}
                  </span>
                </motion.a>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 text-center"
            >
              <p className="text-gray-600 mb-4">
                {t('founderStory.ctaSubtext')}
              </p>
              <a 
                href={getTrialLink()} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#ff4D00] text-gray-900 rounded-lg font-semibold text-lg hover:bg-[#ff4D00]/90 transition-all hover:scale-105 shadow-lg shadow-[#ff4D00]/30 inline-block"
              >
                {t('founderStory.cta')}
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
