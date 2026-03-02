import type { ResumeConfig } from './types'

/**
 * This is an example configuration file.
 * Copy this file to `resume-config.ts` and fill in your own information.
 *
 * All text fields that support multiple languages use the `LocalizedString` format:
 * { en: "English text", fr: "Texte français" }
 *
 * Add as many languages as you need — just make sure to list them in `languages.available`.
 */
export const resumeConfig: ResumeConfig = {
  // ===== PERSONAL INFO =====
  personal: {
    name: 'Rémi Poncin',
    // Auto-detected: just drop your photo or profile image in public/images/ (any .jpg, .png, .webp)
    // You can also set a specific path here to override auto-detection:
    photo: '/images/photo.jpg',
    photoBackEmoji: '👩‍💻', // Shown when clicking the photo (3D flip)
    title: {
      en: 'Student in Networks and Telecommunications',
      fr: 'Etudiant en Réseau et Télécoms',
    },
    subtitle: {
      en: 'UTT - University of Technology of Troyes',
      fr: 'UTT - Université de Technologie de Troyes',
    },
    location: 'Troyes, France',
  },

  // ===== SEO (used in <head> meta tags) =====
  seo: {
    title: 'Rémi Poncin — Student in Networks and Telecommunications',
    description: 'Interactive resume of Rémi Poncin, Student in Networks and Telecommunications at UTT.',
  },

  // ===== LANGUAGES =====
  languages: {
    default: 'en',
    available: ['en', 'fr'],
    labels: {
      en: 'EN',
      fr: 'FR',
    },
  },

  // ===== CONTACT =====
  contact: [
    { type: 'github', label: 'Remi-pcn', href: 'https://github.com/remi-pcn' },
    { type: 'linkedin', label: 'Rémi Poncin', href: 'https://www.linkedin.com/in/r%C3%A9mi-poncin-71978a2a4/' },
    { type: 'email', label: 'remi.poncin@utt.fr' },
    { type: 'phone', label: '+33 6 65 79 22 28' },
    { type: 'location', label: 'Troyes, France' },
  ],

  // ===== SKILLS =====
  skills: [
    {
      title: { en: 'Languages', fr: 'Langues' },
      type: 'languages',
      items: [
        { name: { en: 'French', fr: 'Français' }, level: { en: 'Native', fr: 'Natif' } },
        { name: { en: 'English', fr: 'Anglais' }, level: { en: 'Professional', fr: 'Professionnel' }, details: 'Linguaskill C1+' },
        { name: { en: 'Spanish', fr: 'Espagnol' }, level: { en: 'Intermediate', fr: 'Intermédiaire' }, details: 'SIELE B1' },
      ],
    },
    {
      title: { en: 'Frontend', fr: 'Frontend' },
      type: 'badges',
      items: [
        { name: 'React' },
        { name: 'TypeScript' },
        { name: 'Next.js' },
      ],
    },
    {
      title: { en: 'Backend', fr: 'Backend' },
      type: 'badges',
      items: [
        { name: 'Node.js' },
        { name: 'Python' },
      ],
    },
    {
      title: { en: 'Database', fr: 'Base de données' },
      type: 'badges',
      items: [
        { name: 'MySQL' },
        { name: 'Prisma' },
      ],
    },
    {
      title: { en: 'DevOps', fr: 'DevOps' },
      type: 'badges',
      items: [
        { name: 'Docker' },
        { name: 'Kubernetes' },
        { name: 'Portainer' },
        { name: 'Proxmox' },
      ],
    },
  ],


  // ===== PROFESSIONAL EXPERIENCES =====
  experiences: [
  {
    id: 'utt-audiovisual-technician',
    company: { en: 'University of Technology of Troyes (UTT)', fr: 'Université de Technologie de Troyes (UTT)' },
    role: { en: 'Audiovisual Technician', fr: 'Technicien audiovisuel' },
    type: { en: 'Part-time / Student job', fr: 'Emploi étudiant' },
    period: { en: 'September 2025 - Present', fr: 'Septembre 2025 - Aujourd’hui' },
    description: {
      fr: 'Gestion du son, de la lumière et du stream lors d’événements à l’UTT. Résolution de problèmes matériel en temps réel et gestion du stress.',
      en: 'Managed audio, lighting, and live streaming for university events. Troubleshot hardware issues in real time under pressure.',
    },
    techs: ['Audio', 'Lighting', 'Video', 'Streaming'],
    details: {
      context: {
        fr: 'Troyes, Grand Est, France — sur site.',
        en: 'Troyes, Grand Est, France — on-site.',
      },
      tasks: {
        fr: [
          'Régie son et lumière pendant des événements (installation, tests, exploitation).',
          'Mise en place et supervision du stream.',
          'Diagnostic et résolution de pannes matériel en temps réel.',
          'Coordination avec les organisateurs pour respecter le déroulé.',
        ],
        en: [
          'Operated audio and lighting during events (setup, checks, live operation).',
          'Set up and monitored live streaming.',
          'Diagnosed and fixed hardware issues in real time.',
          'Coordinated with organizers to keep the event running smoothly.',
        ],
      },
      env: {
        fr: 'Audiovisuel / streaming / support live',
        en: 'Audiovisual / live streaming / on-site live support',
      },
    },
    isHighlighted: true,
  },
  {
    id: 'intermarche-summer-job',
    company: { en: 'Intermarché', fr: 'Intermarché' },
    role: { en: 'Warehouse Assistant', fr: 'Ouvrier polyvalent' },
    type: { en: 'Summer job', fr: 'Job étudiant' },
    period: { en: 'Jul 2025 - Aug 2025', fr: 'Juil. 2025 - Août 2025' },
    description: {
      fr: 'Employé polyvalent, préparation de commandes drive, livraison de commandes drive, mise en rayon',
      en: 'General warehouse assistant, drive order preparation, drive order delivery, shelf stocking',
    },
    techs: [],
    details: {
      context: {
        fr: 'Troyes, Grand Est, France — sur site.',
        en: 'Troyes, Grand Est, France — on-site.',
      },
      tasks: {
        fr: [
          'Préparation de commandes.',
          'Mise en rayon et facing.',
          'Inventaire et rangement.',
        ],
        en: [
          'Order picking and preparation.',
          'Shelf stocking and facing.',
          'Inventory and general handling.',
        ],
      },
      env: {
        fr: 'Manutention / entrepôt',
        en: 'Warehouse / manual labor',
      },
    },
  },
  {
    id: 'utt-net-group-vice-president',
    company: { en: 'UTT Net Group', fr: 'UTT Net Group' },
    role: { en: 'Assistant President', fr: 'Vice-président' },
    type: { en: 'Volunteer', fr: 'Association' },
    period: { en: 'Aug 2024 – Present', fr: 'Août 2024 – Aujourd’hui' },
    description: {
      fr: 'Organisation d’événements et d’ateliers techniques pour les étudiants, et administration des serveurs étudiants.',
      en: 'Organization of student events and technical workshops, and administration of student servers.',
    },
    techs: ['Linux', 'Proxmox', 'Docker', 'Kubernetes', 'Canva'],
    details: {
      context: {
        fr: 'UTT Net Group (Troyes, Grand Est, France) — Association étudiante dédiée à l’informatique et aux réseaux.',
        en: 'UTT Net Group (Troyes, Grand Est, France) — Student association focused on IT and networking.',
      },
      tasks: {
        fr: [
          'Organisation d’ateliers techniques et d’événements au sein de l’UTT.',
          'Administration et maintenance des serveurs étudiants (virtualisation avec Proxmox, conteneurisation avec Docker, orchestration avec Kubernetes).',
          'Création de supports de communication visuelle (affiches, réseaux sociaux) avec Canva pour promouvoir les activités de l’association.',
          'Coordination avec les membres de l’association pour planifier et organiser les projets techniques et événementiels.',
        ],
        en: [
          'Organized technical workshops and events within UTT.',
          'Administered and maintained student servers (virtualization with Proxmox, containerization with Docker, orchestration with Kubernetes).',
          'Designed visual communication materials (posters, social media) using Canva to promote the association’s activities.',
          'Collaborated with association members to plan and coordinate technical and event-based projects.',
        ],
      },
      env: {
        fr: 'Canva / Réseaux sociaux / Administration serveurs (Linux, Proxmox, Docker, Kubernetes) / Gestion de projet / Communication',
        en: 'Canva / Social Media / Server administration (Linux, Proxmox, Docker, Kubernetes) / Project management / Communication',
      },
    },
  },
  {
    id: 'utt-arena-organizer',
    company: { en: 'UTT Arena (UTT Net Group)', fr: 'UTT Arena (UTT Net Group)' },
    role: { en: 'Organizer — UTT Arena (2024–2025)', fr: 'Organisateur — UTT Arena (2024–2025)' },
    type: { en: 'Volunteer', fr: 'Association' },
    period: { en: 'August 2024 - Jan 2026', fr: 'Août 2024 - Janv. 2026' },
    description: {
      fr: 'Coordinateur de l’UTT Arena 2025, compétition esport, et responsable développement sur l’édition 2024.',
      en: 'Coordinator for UTT Arena 2025, an esports tournament, and lead developer for the 2024 edition.',
    },
    techs: ['TypeScript', 'React', 'Next.js', 'Node.js', 'GitHub', 'Prisma'],
    details: {
      context: {
        fr: 'UTT Arena : plus grande compétition esport du Grand Est, organisée à l’UTT. 23e édition (28–30 novembre 2025) : 496 joueurs et ~100 bénévoles.',
        en: 'UTT Arena: one of the largest esports competitions in the Grand Est region, hosted at UTT. 23rd edition (Nov 28–30, 2025): 496 players and ~100 volunteers.',
      },
      tasks: {
        fr: [
          "L'UTT Arena est la plus grande compétition esport du Grand-Est, organisée chaque année à l’UTT. Pour sa 23e édition (28–30 novembre 2025), l’événement accueillera 496 joueurs et une centaine de bénévoles, ce qui en fait un temps fort de la vie étudiante.",
          "Responsable du développement pour l’édition 2024, j’ai maintenu et implémenté les fonctionnalités clés du site web. J’ai également assuré la gestion d’un des tournois, nécessitant une préparation rigoureuse en amont.",
          "Pour l’édition 2025, j’ai pris le rôle de coordinateur général et vice-président. **Ma mission principale est de coordonner les différentes équipes ainsi que de dialoguer avec les acteurs externes (partenaires, communes, etc.).**",
          "En tant que coordinateur des pôles communication et graphisme, j’ai été amené à me former à divers outils pour soutenir les bénévoles et alléger leur charge de travail. J’étais également l’interlocuteur principal des joueurs pour répondre à leurs questions ou résoudre leurs problèmes.",
        ],
        en: [
          "UTT Arena is the largest esports competition in the Grand Est region, held annually at UTT. The 23rd edition (November 28–30, 2025) will host 496 players and around 100 volunteers, making it a highlight of the student calendar.",
          "As lead developer for the 2024 edition, I maintained and implemented key features for the event’s website. I also managed one of the tournaments, requiring thorough preparation ahead of the event.",
          "For the 2025 edition, I took on the role of general coordinator and vice president. **My main responsibility is to coordinate teams and engage with external stakeholders (partners, local authorities, etc.).**",
          "As coordinator for the communication and design teams, I trained on various tools to support volunteers and reduce their workload. I was also the primary point of contact for players, addressing their questions and resolving issues.",
        ],
      },
      env: {
        fr: 'Coordination événementielle / partenariats / communication (interne et externe) / gestion d’équipe / développement web (TypeScript, React, Next.js)',
        en: 'Event coordination / partnerships / communication (internal & external) / team management / web development (TypeScript, React, Next.js)',
      },
    },
  },
],


  // ===== PROJECTS (optional) =====
  projects: [
    {
      id: 'project-a',
      title: { en: 'Personal Homelab', fr: 'Homelab personnel' },
      description: {
        en: 'A personal homelab setup with multiple virtual machines and containers.',
        fr: 'Homelab personnel hébergeant plusieurs services ayant pour vocation d\'être agrendis et améliorés au fil du temps.',
      },
      techs: ['Docker', 'Linux', 'Portainer'],
      url: 'https://poncinre.com',
    },
    {
      id: 'project-b',
      title: { en: 'TurboBouffe', fr: 'Turbobouffe' },
      description: {
        en: 'Real-time order and inventory management tool for food service venues',
        fr: 'Outil de gestion de commandes et d\'inventaire en temps réel pour des espaces de restauration',
      },
      techs: ['React', 'Node.js', 'Next.js', 'TypeScript', 'Prisma'],
    },
  ],

  // ===== EDUCATION =====
  education: [
    {
      school: { en: 'University of Technology of Troyes', fr: 'Université de Technologie de Troyes' },
      degree: { en: 'Engineer in Networks and Telecommunications', fr: 'Ingénieur en Réseaux et Télécommunications' },
      period: '2025 - 2028',
    },
    {
      school: { en: 'University of Technology of Troyes', fr: 'Université de Technologie de Troyes' },
      degree: { en: 'Preparatory Cycle for Engineering', fr: 'Cycle préparatoire à la formation d\'ingénieur' },
      period: '2023 - 2025',
    },
  ],

  // ===== HOBBIES (optional) =====
  hobbies: [
    {
      title: { en: 'Drum', fr: 'Batterie' },
      details: [
        { en: '14 years', fr: '14 ans' },
      ],
    },
    {
      title: { en: 'Sports', fr: 'Sport' },
      details: [
        { en: 'Running', fr: 'Course à pied' },
        { en: 'Badminton', fr: 'Badminton' },
        { en: 'Archery', fr: 'Tir à l\'arc' },
      ],
    },
    {
      title: { en: '3D printing', fr: 'Impression 3D' },
      details: [
        { en: 'Fusion 360', fr: 'Fusion 360' },
        { en: 'Cura', fr: 'Cura' },
        { en: 'Creality Ender 3 V2', fr: 'Creality Ender 3 V2' },
      ],
    },
  ],

  // ===== PDF (optional) =====
  // Auto-detected: just drop your PDF files in public/cv/fr/ and public/cv/en/
  // The download button will appear automatically — no config needed!
  // Uncomment below only if you need to override the auto-detection:
  // pdf: {
  //   label: { en: 'Download PDF', fr: 'Télécharger le PDF' },
  //   path: { en: '/cv/en/resume-en.pdf', fr: '/cv/fr/resume-fr.pdf' },
  // },

  // ===== THEME =====
  theme: {
    preset: 'warm', // 'minimal' | 'warm' | 'ocean' | 'forest' | 'slate' | 'lilac'
    // You can override individual colors:
    // colors: {
    //   primary: '#8B5A2B',
    //   primaryLight: '#D4A574',
    // },
  },

  // ===== UI LABELS =====
  labels: {
    sections: {
      contact: { en: 'CONTACT', fr: 'CONTACT' },
      skills: { en: 'SKILLS', fr: 'COMPÉTENCES' },
      experience: { en: 'PROFESSIONAL EXPERIENCE', fr: 'EXPÉRIENCES PROFESSIONNELLES' },
      education: { en: 'EDUCATION', fr: 'FORMATION' },
      projects: { en: 'PROJECTS', fr: 'PROJETS' },
      hobbies: { en: 'HOBBIES', fr: 'LOISIRS' },
    },
    experience: {
      mainTasks: { en: 'Main tasks:', fr: 'Tâches principales :' },
      moreTasks: { en: 'more tasks...', fr: 'autres tâches...' },
      training: { en: 'Training:', fr: 'Formations :' },
      techEnv: { en: 'Tech environment:', fr: 'Env. technique :' },
      technologies: { en: 'Technologies', fr: 'Technologies' },
    },
    actions: {
      clickHint: { en: 'Click on experiences to see more details', fr: 'Cliquez sur les expériences pour voir plus de détails' },
      switchTheme: { en: 'Toggle dark mode', fr: 'Changer le thème' },
      downloadPdf: { en: 'Download PDF', fr: 'Télécharger le PDF' },
    },
  },
}
