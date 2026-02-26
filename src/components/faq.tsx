import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { config } from '@/config';
import { useTranslation } from 'react-i18next';

export function FAQ() {
  const { t } = useTranslation();

  // Build FAQs from translations
  const faqs = Array.from({ length: 10 }).map((_, index) => ({
    question: t(`faq.questions.${index}.q`),
    answer: t(`faq.questions.${index}.a`)
  }));

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('faq.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('faq.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-50 rounded-lg px-6 border border-gray-200 hover:border-[#97acc8] transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-[#97acc8] py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center bg-gradient-to-br from-[#97acc8]/10 to-[#ffdd00]/10 rounded-2xl p-8 border border-gray-200"
        >
          <h3 className="text-2xl font-bold mb-3">{t('faq.stillQuestions')}</h3>
          <p className="text-gray-600 mb-6">
            {t('faq.stillQuestionsSubtext')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={config.social.discord} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#97acc8] text-white rounded-lg font-semibold hover:bg-[#97acc8]/90 transition-all"
            >
              {t('faq.discord')}
            </a>
            <a 
              href={config.social.email}
              className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold border-2 border-gray-200 hover:border-[#ffdd00] transition-all"
            >
              {t('faq.email')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
