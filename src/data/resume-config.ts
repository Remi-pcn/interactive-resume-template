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
      fr: 'Etudiant Réseau et Télécoms',
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
  experiences: [/**
    {
      id: 'utt-audiovisual-technician',
      company: { en: 'University of Technology of Troyes (UTT)', fr: 'Université de Technologie de Troyes (UTT)' },
      role: { en: 'Audiovisual Technician', fr: 'Technicien audiovisuel' },
      type: { en: 'Part-time / Student job', fr: 'Emploi étudiant' },
      period: { en: 'Jun 2025 - Present', fr: 'juin 2025 - aujourd\'hui' },
      description: {
        fr: 'Gestion du son, de la lumière et du stream lors d\'événements à l\'UTT. Résolution de problèmes matériel en temps réel et gestion du stress.',
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
            'Régie son et lumière pendant des événements (installation, tests, exploitation)',
            'Mise en place et supervision du stream',
            'Diagnostic et résolution de pannes matériel en temps réel',
            'Coordination avec les organisateurs pour respecter le déroulé',
          ],
          en: [
            'Operated audio and lighting during events (setup, checks, live operation)',
            'Set up and monitored live streaming',
            'Diagnosed and fixed hardware issues in real time',
            'Coordinated with organizers to keep the show running smoothly',
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
      id: 'tcp-warehouse-handler-intern',
      company: { en: 'TCP — Transport & Logistics', fr: 'TCP — Transport et Logistique' },
      role: { en: 'Warehouse Handler', fr: 'Manutentionnaire' },
      type: { en: 'Internship', fr: 'Stage' },
      period: { en: 'Jul 2024 - Aug 2024', fr: 'juil. 2024 - août 2024' },
      description: {
        fr: 'Employé de manutention : préparation de commandes, palettisation et filmage de palettes.',
        en: 'Warehouse operations: order picking, palletizing and pallet wrapping.',
      },
      techs: [],
      details: {
        context: {
          fr: 'Troyes, Grand Est, France — sur site.',
          en: 'Troyes, Grand Est, France — on-site.',
        },
        tasks: {
          fr: [
            'Préparation de commandes',
            'Palettisation et manutention',
            'Filmage et sécurisation de palettes',
          ],
          en: [
            'Order picking and preparation',
            'Pallet wrapping and securing',
            'Palletizing and general handling',
          ],
        },
        env: {
          fr: 'Logistique / entrepôt',
          en: 'Warehouse / logistics',
        },
      },
    },
  */],
  // ===== ASSOCIATIVE EXPERIENCES (optional) =====
  associativeExperiences: [
    {
      id: 'utt-net-group-treasurer',
      association: { en: 'UTT Net Group', fr: 'UTT Net Group' },
      role: { fr: 'Vice-président', en: 'Assistant President' },
      type: { fr: 'Association', en: 'Volunteer' },
      period: { fr: 'Août 2024 - aujourd’hui', en: 'Aug 2024 - Present' },
      description: {
        fr: 'Organisation d\'évènements et administrateur des serveurs étudiants.',
        en: 'Event organization and administration of student servers.',
      },
      techs: [ 'Linux', 'Proxmox', 'Docker', 'Kubernetes', 'Canva'],
      details: {
        context: {
          fr: 'UTT Net Group (Troyes, Grand Est, France)',
          en: 'UTT Net Group (Troyes, Grand Est, France)',
        },
        tasks: {
          fr: [
            'FAUT FORMULER EN FRANÇAIS',
          ],
          en: [
            'FORMULATE IN ENGLISH',
          ],
        },
        env: {
          fr: 'Canva / Réseaux Sociaux / Administration serveurs (Linux, Proxmox, Docker, Kubernetes)',
          en: 'Canva / Social Media / Server administration (Linux, Proxmox, Docker, Kubernetes)',
        },
      },
    },
    {
      id: 'utt-arena-organization',
      association: { en: 'UTT Arena (UTT Net Group)', fr: 'UTT Arena (UTT Net Group)' },
      role: { fr: 'Organisateur — UTT Arena (2024–2025)', en: 'Organizer — UTT Arena (2024–2025)' },
      type: { fr: 'Association', en: 'Association' },
      period: { fr: 'août 2024 - janv. 2025', en: 'Aug 2024 - Jan 2025' },
      description: {
        fr: 'Coordinateur de l\'UTT Arena 2025, compétition esport, et responsable développement sur l\'édition 2024.',
        en: 'Coordinator for UTT Arena 2025, an esports competition, and lead developer for the 2024 edition.',
      },
      techs: ['Git', 'TypeScript', 'React', 'Next.js', 'Node.js', 'GitHub', 'Prisma'],
      details: {
        context: {
          fr: 'UTT Arena : plus grande compétition esport du Grand Est, organisée à l’UTT. 23e édition (28–30 novembre 2025) : 496 joueurs et ~100 bénévoles.',
          en: 'UTT Arena: one of the largest esports competitions in the Grand Est region, hosted at UTT. 23rd edition (Nov 28–30, 2025): 496 players and ~100 volunteers.',
        },
        tasks: {
          fr: [
            "L'UTT Arena est la plus grande compétition esport du Grand-Est ayant lieu tous les ans dans les locaux de l'UTT. Accueillant 496 joueurs et une centaine de bénévoles poru sa 23ème édition du 28 au 30 novembre 2025, elle est un événement majeur du calendrier étudiant de l'UTT.",
            "Responsable du développement pour l'édition 2024, mes missions ont été de maintenir et implémenter les fonctionnalités nécessaires du site web. En plus de cela, j'ai également assuré un rôle de responsable de l'un des différents tournois nécessitant alors une forte préparation en amont de l'événement.",
            "Pour l'édition 2025, j'ai pris le poste de coordinateur et vice président de l'événement. Ma mission principale est alors de coordonner les différentes membres et assurrer la préparation de l'événement. Coordinateur de la communication et du graphisme j'ai été amené à me former afin d'alléger le travail des bénévoles en en assumant une partie. En plus de cela, j'ai également un rôle administratif important en lien avec les différents acteurs de l'événement ainsi qu'un important rôle de communication avec les participants aux vus de mon poste.",
            "Je m'occupe également de la gestion de deux pôles que sont l'animation et le développement sur lesquels j'effectue des tâches aux côtés des autres membres afin de les aider. Les 7 coordinateurs travaillent ensemble durant près d'un an afin de proposer un évenement de qualité aux joueurs et au public.", 
          ],
          en: [
            "UTT Arena is one of the largest esports competitions in the Grand Est region, held annually at UTT. With 496 players and around 100 volunteers for its 23rd edition from November 28 to 30, 2025, it is a major event in the UTT student calendar.",
            "As coordinator for the 2025 edition, I am primarily responsible for coordinating teams and distributing tasks. I also have a significant administrative role liaising with UTT, the prefecture, and partners.",
            "I also manage two key areas: animation and development, where I work alongside other members to assist them. The 7 coordinators work together for nearly a year to deliver a quality event for players and the public.",
          ],
        },
        env: {
          fr: 'Coordination événementielle / partenariats / gestion d’équipe / développement web (TypeScript, React, Next.js)',
          en: 'Event coordination / partnerships / team leadership / web development (TypeScript, React, Next.js)',
        },
      },
    },
  ],

  // ===== PROJECTS (optional) =====
  projects: [
    {
      id: 'project-a',
      title: { en: 'WeatherApp', fr: 'WeatherApp' },
      description: {
        en: 'A real-time weather dashboard built with React and OpenWeather API.',
        fr: 'Un tableau de bord météo en temps réel construit avec React et l\'API OpenWeather.',
      },
      techs: ['React', 'TypeScript'],
      url: 'https://weather-app.example.com',
      github: 'https://github.com/janedoe/weather-app',
    },
    {
      id: 'project-b',
      title: { en: 'TaskManager', fr: 'TaskManager' },
      description: {
        en: 'A Kanban-style task management tool with drag-and-drop.',
        fr: 'Un outil de gestion de tâches style Kanban avec glisser-déposer.',
      },
      techs: ['React', 'Node.js', 'PostgreSQL'],
      github: 'https://github.com/janedoe/task-manager',
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
      associativeExperience: { en: 'ASSOCIATIVE EXPERIENCE', fr: 'EXPÉRIENCES ASSOCIATIVES' },
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
