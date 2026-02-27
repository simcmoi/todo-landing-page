"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTranslation } from "react-i18next"
import { usePlatform } from "@/hooks/use-platform"
import { useGitHubReleases } from "@/hooks/use-github-releases"
import { motion } from "framer-motion"

interface FreeTrialModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function FreeTrialModal({ open, onOpenChange }: FreeTrialModalProps) {
  const { t } = useTranslation()
  const { platform } = usePlatform()
  const { release } = useGitHubReleases()
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Fonction pour obtenir l'URL de téléchargement selon la plateforme
  const getDownloadUrl = () => {
    if (!release) return 'https://github.com/simcmoi/blinkdo/releases/latest'

    switch (platform) {
      case 'macOS':
        return release.macOS.arm64 || release.macOS.intel || 'https://github.com/simcmoi/blinkdo/releases/latest'
      case 'Windows':
        return release.windows.exe || release.windows.msi || 'https://github.com/simcmoi/blinkdo/releases/latest'
      case 'Linux':
        return release.linux.appimage || release.linux.deb || 'https://github.com/simcmoi/blinkdo/releases/latest'
      default:
        return 'https://github.com/simcmoi/blinkdo/releases/latest'
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    
    // TODO: Envoyer l'email au backend pour l'ajouter à la liste
    // Pour l'instant, on simule un délai
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSubmitted(true)
    setIsSubmitting(false)
    
    // Télécharger automatiquement après soumission
    window.open(getDownloadUrl(), '_blank')
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            {t("freeTrial.title")}
          </DialogTitle>
          <DialogDescription className="text-center">
            {t("freeTrial.description")}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder={t("freeTrial.emailPlaceholder")}
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                required
                className="text-center h-12"
              />
              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-[#97acc8] to-[#7a92ad] hover:from-[#7a92ad] hover:to-[#6582a0]"
                disabled={isSubmitting}
              >
                {isSubmitting ? t("freeTrial.sending") : t("freeTrial.getDownloadLink")}
              </Button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-2"
            >
              <div className="text-green-600 font-semibold">
                ✓ {t("freeTrial.checkEmail")}
              </div>
              <p className="text-sm text-muted-foreground">
                {t("freeTrial.downloadStarting")}
              </p>
            </motion.div>
          )}

          <div className="space-y-3 pt-4 border-t">
            <p className="text-sm text-muted-foreground text-center">
              {t("freeTrial.notStarting")}
            </p>
            <div className="flex flex-col items-center gap-2">
              <Button
                variant="link"
                className="text-[#97acc8] hover:text-[#7a92ad]"
                onClick={() => window.open(getDownloadUrl(), '_blank')}
              >
                {t("freeTrial.clickHere")}
              </Button>
              <span className="text-xs text-muted-foreground">{t("freeTrial.or")}</span>
              <Button
                variant="link"
                className="text-[#97acc8] hover:text-[#7a92ad]"
                onClick={() => window.open('https://github.com/simcmoi/blinkdo/releases/latest', '_blank')}
              >
                {t("freeTrial.githubReleases")}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
