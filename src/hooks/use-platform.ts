import { useState, useEffect } from 'react'

export type Platform = 'macOS' | 'Windows' | 'Linux' | 'unknown'

export interface PlatformInfo {
  platform: Platform
  displayName: string
  isAppleSilicon: boolean
}

export function usePlatform(): PlatformInfo {
  const [platformInfo, setPlatformInfo] = useState<PlatformInfo>({
    platform: 'unknown',
    displayName: '',
    isAppleSilicon: false
  })

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase()
    
    let platform: Platform = 'unknown'
    let displayName = ''
    let isAppleSilicon = false

    if (userAgent.includes('mac')) {
      platform = 'macOS'
      displayName = 'macOS'
      // Détection Apple Silicon (M1/M2/M3)
      // Note: Pas de méthode fiable côté client, on utilisera arm64 par défaut pour nouveaux Macs
      isAppleSilicon = true // Par défaut pour les nouveaux Macs
    } else if (userAgent.includes('win')) {
      platform = 'Windows'
      displayName = 'Windows'
    } else if (userAgent.includes('linux')) {
      platform = 'Linux'
      displayName = 'Linux'
    }

    setPlatformInfo({ platform, displayName, isAppleSilicon })
  }, [])

  return platformInfo
}
