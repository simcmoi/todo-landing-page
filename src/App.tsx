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
import { Separator } from './components/ui/separator'

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
      <Separator className="my-16 max-w-3xl mx-auto" />
      <SocialProof />
      <ProblemSolution />
      <Separator className="my-16 max-w-3xl mx-auto" />
      <Features />
      <HowItWorks />
      <Separator className="my-16 max-w-3xl mx-auto" />
      <Testimonials />
      <Pricing />
      <Separator className="my-16 max-w-3xl mx-auto" />
      <FounderStory />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
