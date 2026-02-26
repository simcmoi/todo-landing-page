// Configuration centralisée des liens et URLs
export const config = {
  // Liens de téléchargement (Version compilée payante)
  downloads: {
    // Liens vers la plateforme de paiement (Gumroad/Lemon Squeezy)
    purchase: 'https://blinkdo.lemonsqueezy.com', // À configurer
    trial: 'https://github.com/simcmoi/blinkdo/releases/latest', // Essai gratuit 14 jours
    // Lien vers le code source pour compilation manuelle
    buildYourself: 'https://github.com/simcmoi/blinkdo#build-from-source'
  },
  
  // Liens sociaux et communauté
  social: {
    github: 'https://github.com/simcmoi/blinkdo',
    discord: 'https://discord.gg/blinkdo', // À configurer
    twitter: 'https://twitter.com/simonfessy',
    email: 'mailto:hello@blinkdo.app'
  },

  // Informations du produit
  app: {
    name: 'BlinkDo',
    version: '0.2.7',
    description: 'La to-do list ultra-rapide qui s\'affiche en un éclair. Open Source, 100% privé, zéro abonnement.',
    tagline: 'La to-do list qui apparaît en un éclair',
    url: 'https://blinkdo.app',
    author: 'Simon Fessy',
    license: 'GPL-3.0',
    keywords: [
      'todo',
      'productivity',
      'task management',
      'overlay',
      'keyboard shortcut',
      'macOS',
      'Windows',
      'Linux',
      'open source',
      'privacy-first',
      'local-first'
    ]
  },

  // Tarification (Paiement unique)
  pricing: {
    solo: {
      price: 29,
      devices: 1,
      currency: '€'
    },
    pro: {
      price: 49,
      devices: 3,
      currency: '€'
    },
    openSource: {
      price: 0,
      devices: 'unlimited',
      buildYourself: true
    }
  },

  // Support et documentation
  support: {
    docs: 'https://github.com/simcmoi/blinkdo#readme',
    issues: 'https://github.com/simcmoi/blinkdo/issues',
    changelog: 'https://github.com/simcmoi/blinkdo/releases'
  }
};

// Fonction utilitaire pour détecter l'OS de l'utilisateur
export function detectOS(): 'macOS' | 'Windows' | 'Linux' | 'unknown' {
  const userAgent = window.navigator.userAgent.toLowerCase();
  
  if (userAgent.includes('mac')) return 'macOS';
  if (userAgent.includes('win')) return 'Windows';
  if (userAgent.includes('linux')) return 'Linux';
  
  return 'unknown';
}

// Fonction pour obtenir le lien d'essai gratuit (14 jours)
export function getTrialLink(): string {
  return config.downloads.trial;
}

// Fonction pour obtenir le lien d'achat de licence
export function getPurchaseLink(): string {
  return config.downloads.purchase;
}

// Fonction pour obtenir le nom de l'OS formaté
export function getOSName(): string {
  const os = detectOS();
  return os === 'unknown' ? '' : os;
}
