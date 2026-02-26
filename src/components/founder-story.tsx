import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { getDownloadLink } from '@/config';
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
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#ffdd00] rounded-full opacity-10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#97acc8] rounded-full opacity-10 blur-3xl" />

          <div className="relative">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#ffdd00] flex items-center justify-center">
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

              <div className="bg-[#ffdd00] bg-opacity-20 border-l-4 border-[#ffdd00] p-6 rounded-r-lg my-8">
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
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#97acc8] to-[#ffdd00] flex items-center justify-center text-2xl font-bold text-white">
                  ?
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">{t('founderStory.author')}</p>
                  <p className="text-gray-600">{t('founderStory.role')}</p>
                </div>
              </div>
            </div>

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
                href={getDownloadLink()} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#ffdd00] text-gray-900 rounded-lg font-semibold text-lg hover:bg-[#ffdd00]/90 transition-all hover:scale-105 shadow-lg shadow-[#ffdd00]/30 inline-block"
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
