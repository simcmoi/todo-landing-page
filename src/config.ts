// Configuration centralisée des liens et URLs
export const config = {
  // Liens de téléchargement
  downloads: {
    // Remplacer par les vrais liens GitHub releases
    mac: 'https://github.com/simonfessy/todo-overlay/releases/latest/download/TodoOverlay-mac.dmg',
    windows: 'https://github.com/simonfessy/todo-overlay/releases/latest/download/TodoOverlay-windows.exe',
    linux: 'https://github.com/simonfessy/todo-overlay/releases/latest/download/TodoOverlay-linux.AppImage',
    // Lien générique qui redirige vers la page releases
    default: 'https://github.com/simonfessy/todo-overlay/releases/latest'
  },
  
  // Liens sociaux et communauté
  social: {
    github: 'https://github.com/simonfessy/todo-overlay',
    discord: 'https://discord.gg/todo-overlay', // À remplacer par le vrai lien Discord
    twitter: 'https://twitter.com/simonfessy',
    email: 'mailto:contact@todooverlay.app' // À remplacer par le vrai email
  },

  // Informations du produit
  app: {
    name: 'Todo Overlay',
    version: '0.2.0',
    description: 'La to-do list qui apparaît en un éclair. Shift+Space et gérez vos tâches instantanément.',
    tagline: 'La to-do list qui apparaît en un éclair',
    url: 'https://todooverlay.app', // À remplacer par le vrai domaine
    author: 'Simon Fessy',
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
      'gratuit'
    ]
  },

  // Support et documentation
  support: {
    docs: 'https://github.com/simonfessy/todo-overlay#readme',
    issues: 'https://github.com/simonfessy/todo-overlay/issues',
    changelog: 'https://github.com/simonfessy/todo-overlay/releases'
  }
};

// Fonction utilitaire pour détecter l'OS de l'utilisateur
export function detectOS(): 'mac' | 'windows' | 'linux' | 'unknown' {
  const userAgent = window.navigator.userAgent.toLowerCase();
  
  if (userAgent.includes('mac')) return 'mac';
  if (userAgent.includes('win')) return 'windows';
  if (userAgent.includes('linux')) return 'linux';
  
  return 'unknown';
}

// Fonction pour obtenir le bon lien de téléchargement selon l'OS
export function getDownloadLink(): string {
  const os = detectOS();
  
  if (os === 'unknown') {
    return config.downloads.default;
  }
  
  return config.downloads[os];
}

// Fonction pour obtenir le nom du bouton de téléchargement selon l'OS
export function getDownloadButtonText(): string {
  const os = detectOS();
  
  const osNames = {
    mac: 'Télécharger pour macOS',
    windows: 'Télécharger pour Windows',
    linux: 'Télécharger pour Linux',
    unknown: 'Télécharger Todo Overlay'
  };
  
  return osNames[os];
}
