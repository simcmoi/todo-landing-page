import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Header } from './components/header'
import { Hero } from './components/hero'
import { SocialProof } from './components/social-proof'
import { ProblemSolution } from './components/problem-solution'
import { Features } from './components/features'
import { HowItWorks } from './components/how-it-works'
import { Screenshots } from './components/screenshots'
import { Testimonials } from './components/testimonials'
import { Pricing } from './components/pricing'
import { FounderStory } from './components/founder-story'
import { FAQ } from './components/faq'
import { Footer } from './components/footer'

function App() {
  const { i18n } = useTranslation()

  useEffect(() => {
    // Update HTML dir and lang attributes when language changes
    const currentLang = i18n.language
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = currentLang
  }, [i18n.language])

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Screenshots />
      <SocialProof />
      <ProblemSolution />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FounderStory />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
