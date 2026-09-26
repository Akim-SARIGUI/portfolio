import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.message.deleteMany();
  await prisma.skill.deleteMany();
  await prisma.experience.deleteMany();
  await prisma.project.deleteMany();
  await prisma.profile.deleteMany();

  await prisma.profile.create({
    data: {
      firstName: 'Akim',
      lastName: 'Sarigui',
      title: 'Développeur Fullstack',
      bio: "Passionné par le développement web depuis plus de 3 ans, je conçois des applications modernes qui allient performance et esthétique. Expert de l'écosystème JavaScript — Vue.js, Nuxt.js, Node.js — je m'engage à livrer un code propre, maintenable et des interfaces intuitives.",
      email: 'sariguiakim@gmail.com',
      phone: '+229 01 94 75 19 54',
      linkedin: 'https://www.linkedin.com/in/akim-sarigui-216a2b247',
      github: 'https://github.com/Akim-SARIGUI',
      location: 'Bénin',
      available: true,
      yearsXp: 3,
      photoUrl: '/images/im.jpeg',
      cvUrl: '/cv.pdf',
    },
  });

  await prisma.project.createMany({
    data: [
      {
        name: 'Kitungamama.com',
        description:
          'Plateforme e-commerce complète dédiée à la promotion et la vente de produits agroalimentaires locaux béninois. Une solution digitale pour connecter les producteurs locaux aux consommateurs.',
        features: [
          'Catalogue produits avec filtres avancés',
          'Système de commande et panier sécurisé',
          'Gestion des livraisons',
          "Interface d'administration complète",
        ],
        technologies: [
          { name: 'WordPress', icon: 'mdi-wordpress', color: '#21759B' },
          { name: 'WooCommerce', icon: 'mdi-cart', color: '#96588A' },
          { name: 'PHP', icon: 'mdi-language-php', color: '#777BB4' },
          { name: 'MySQL', icon: 'mdi-database', color: '#4479A1' },
        ],
        image: '/images/im4.png',
        liveUrl: 'https://kitungamama.com',
        githubUrl: null,
        category: 'E-commerce',
        icon: 'mdi-store',
        color: '#22c55e',
        gradient: 'linear-gradient(135deg, #22c55e, #16a34a)',
        status: 'live',
        year: '2024',
        sortOrder: 1,
      },
      {
        name: 'BIMA',
        description:
          'Fintech santé UEMOA : tiers payant, préfinancement 48h, OCR des dossiers et scoring anti-fraude pour assureurs et prestataires.',
        features: [
          'Portails prestataire, assureur & opérateur',
          'Ledger transactionnel NestJS + Temporal',
          'Pipeline OCR / ML anti-fraude (FastAPI)',
          'App mobile patient (Expo)',
        ],
        technologies: [
          { name: 'Next.js', icon: 'mdi-react', color: '#000000' },
          { name: 'NestJS', icon: 'mdi-nodejs', color: '#E0234E' },
          { name: 'FastAPI', icon: 'mdi-language-python', color: '#009688' },
          { name: 'PostgreSQL', icon: 'mdi-database', color: '#336791' },
        ],
        image: '/images/projects/bima.png',
        liveUrl: null,
        githubUrl: null,
        category: 'Fintech',
        icon: 'mdi-hospital-building',
        color: '#06b6d4',
        gradient: 'linear-gradient(135deg, #06b6d4, #0891b2)',
        status: 'dev',
        year: '2025',
        sortOrder: 2,
      },
      {
        name: 'Magasin Platform',
        description:
          'ERP retail complet : POS, stocks, achats, caisse, documents PDF et notifications temps réel multi-boutiques.',
        features: [
          'POS barcode + paiements mixtes',
          'Stocks, inventaires & alertes rupture',
          'Tickets / factures PDF (A4 & thermique)',
          'WebSocket notifications + audit avancé',
        ],
        technologies: [
          { name: 'Nuxt 4', icon: 'mdi-nuxt', color: '#00DC82' },
          { name: 'NestJS', icon: 'mdi-nodejs', color: '#E0234E' },
          { name: 'Prisma', icon: 'mdi-database-cog', color: '#2D3748' },
          { name: 'Socket.IO', icon: 'mdi-lightning-bolt', color: '#010101' },
        ],
        image: '/images/projects/magasin.png',
        liveUrl: null,
        githubUrl: null,
        category: 'ERP',
        icon: 'mdi-point-of-sale',
        color: '#f59e0b',
        gradient: 'linear-gradient(135deg, #f59e0b, #ea580c)',
        status: 'dev',
        year: '2025',
        sortOrder: 3,
      },
      {
        name: 'AgriManage Pro',
        description:
          'Application web de gestion agricole complète permettant aux agriculteurs de suivre leurs cultures, gérer leurs stocks et analyser leurs performances grâce à des tableaux de bord interactifs.',
        features: [
          'Suivi des cultures et récoltes',
          'Gestion des stocks et inventaires',
          'Tableau de bord analytique',
          'Rapports et statistiques en temps réel',
        ],
        technologies: [
          { name: 'Vue.js', icon: 'mdi-vuejs', color: '#42b883' },
          { name: 'Nuxt.js', icon: 'mdi-nuxt', color: '#00DC82' },
          { name: 'Node.js', icon: 'mdi-nodejs', color: '#339933' },
          { name: 'PostgreSQL', icon: 'mdi-database', color: '#336791' },
        ],
        image: '/images/im3.png',
        liveUrl: null,
        githubUrl: 'https://github.com/Akim-SARIGUI/AgriManage',
        category: 'SaaS',
        icon: 'mdi-sprout',
        color: '#667eea',
        gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
        status: 'dev',
        year: '2025',
        sortOrder: 4,
      },
      {
        name: 'CV Studio',
        description:
          'Générateur de CV professionnel : édition live, templates modernes et export PDF prêt à envoyer.',
        features: [
          'Éditeur de CV interactif',
          'Templates personnalisables',
          'Export PDF haute qualité',
          'Auth JWT + API NestJS',
        ],
        technologies: [
          { name: 'Nuxt 4', icon: 'mdi-nuxt', color: '#00DC82' },
          { name: 'NestJS', icon: 'mdi-nodejs', color: '#E0234E' },
          { name: 'Vuetify', icon: 'mdi-vuetify', color: '#1867C0' },
          { name: 'PDFKit', icon: 'mdi-file-pdf-box', color: '#E53935' },
        ],
        image: '/images/projects/cv-studio.png',
        liveUrl: null,
        githubUrl: 'https://github.com/Akim-SARIGUI/cv-generator',
        category: 'Productivité',
        icon: 'mdi-file-account',
        color: '#8b5cf6',
        gradient: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
        status: 'dev',
        year: '2025',
        sortOrder: 5,
      },
      {
        name: 'DGS Archives',
        description:
          'Plateforme GovTech de gestion documentaire : archivage, factures et preuves numériques centralisées.',
        features: [
          'Archivage & factures centralisés',
          'Espace preuves / evidence',
          'Tableaux AG Grid performants',
          'Tableaux de bord Chart.js',
        ],
        technologies: [
          { name: 'Nuxt', icon: 'mdi-nuxt', color: '#00DC82' },
          { name: 'NestJS', icon: 'mdi-nodejs', color: '#E0234E' },
          { name: 'AG Grid', icon: 'mdi-table-large', color: '#FF5722' },
          { name: 'Chart.js', icon: 'mdi-chart-line', color: '#FF6384' },
        ],
        image: '/images/projects/dgs.png',
        liveUrl: null,
        githubUrl: null,
        category: 'GovTech',
        icon: 'mdi-archive',
        color: '#0ea5e9',
        gradient: 'linear-gradient(135deg, #0ea5e9, #0369a1)',
        status: 'dev',
        year: '2025',
        sortOrder: 6,
      },
      {
        name: 'Alpaca Generator',
        description:
          'Générateur d’images Alpaca : interface créative et expérience front ludique pour personnaliser son avatar.',
        features: [
          'Personnalisation visuelle interactive',
          'UI responsive et animée',
          'Export d’image',
          'Expérience utilisateur légère',
        ],
        technologies: [
          { name: 'HTML5', icon: 'mdi-language-html5', color: '#E34F26' },
          { name: 'CSS3', icon: 'mdi-language-css3', color: '#1572B6' },
          { name: 'JavaScript', icon: 'mdi-language-javascript', color: '#F7DF1E' },
        ],
        image: '/images/projet3.png',
        liveUrl: null,
        githubUrl:
          'https://github.com/Akim-SARIGUI/Site-Web-du-generateur-d-images-alpaca-',
        category: 'Front-end',
        icon: 'mdi-palette',
        color: '#ec4899',
        gradient: 'linear-gradient(135deg, #ec4899, #be185d)',
        status: 'live',
        year: '2024',
        sortOrder: 7,
      },
    ],
  });

  await prisma.experience.createMany({
    data: [
      {
        position: 'Développeur Web Fullstack',
        company: 'Freelance',
        period: '2022 - Présent',
        description:
          "Conception et développement d'applications web modernes pour divers clients. Spécialisation dans l'écosystème Vue.js/Nuxt.js avec une approche orientée performance et expérience utilisateur.",
        achievements: [
          'Développement de plusieurs applications web complètes',
          'Amélioration des performances de 40%',
          'Mise en place de CI/CD et bonnes pratiques',
        ],
        skills: ['Vue.js', 'Nuxt.js', 'Node.js', 'PostgreSQL', 'Docker'],
        icon: 'mdi-code-braces',
        companyIcon: 'mdi-laptop',
        gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
        sortOrder: 1,
      },
      {
        position: 'Stagiaire Développeur',
        company: 'Tics Master',
        period: '2024 - 2025',
        description:
          "Stage en développement web et gestion de projets informatiques. Participation à la conception d'interfaces utilisateur et développement backend.",
        achievements: [
          'Contribution à 3 projets clients',
          'Apprentissage des méthodologies Agile',
          'Développement de compétences UI/UX',
        ],
        skills: ['HTML/CSS', 'JavaScript', 'Node', 'PostgreSQL'],
        icon: 'mdi-rocket-launch',
        companyIcon: 'mdi-domain',
        gradient: 'linear-gradient(135deg, #f59e0b, #ea580c)',
        sortOrder: 2,
      },
      {
        position: 'Enseignant Mathématiques',
        company: 'Collèges & Lycées',
        period: '2020 - Présent',
        description:
          'Enseignement des mathématiques avec des méthodes pédagogiques innovantes. Préparation aux examens nationaux et accompagnement personnalisé des élèves.',
        achievements: [
          'Taux de réussite de 85%+ aux examens',
          'Création de supports pédagogiques numériques',
          'Accompagnement de 200+ élèves',
        ],
        skills: ['Pédagogie', 'Communication', 'Organisation', 'Patience'],
        icon: 'mdi-school',
        companyIcon: 'mdi-school',
        gradient: 'linear-gradient(135deg, #22c55e, #16a34a)',
        sortOrder: 3,
      },
    ],
  });

  const skills = [
    {
      name: 'JavaScript / TypeScript',
      category: 'TECHNICAL' as const,
      level: 90,
      icon: 'mdi-language-typescript',
      color: '#3178C6',
      bgColor: 'rgba(49, 120, 198, 0.1)',
      gradient: 'linear-gradient(90deg, #3178C6, #60a5fa)',
      sortOrder: 1,
    },
    {
      name: 'Java',
      category: 'TECHNICAL' as const,
      level: 60,
      icon: 'mdi-language-java',
      color: '#ED8B00',
      bgColor: 'rgba(237, 139, 0, 0.1)',
      gradient: 'linear-gradient(90deg, #ED8B00, #f59e0b)',
      sortOrder: 2,
    },
    {
      name: 'HTML5 / CSS3',
      category: 'TECHNICAL' as const,
      level: 95,
      icon: 'mdi-language-html5',
      color: '#E34F26',
      bgColor: 'rgba(227, 79, 38, 0.1)',
      gradient: 'linear-gradient(90deg, #E34F26, #ef4444)',
      sortOrder: 3,
    },
    {
      name: 'SQL',
      category: 'TECHNICAL' as const,
      level: 80,
      icon: 'mdi-database-search',
      color: '#336791',
      bgColor: 'rgba(51, 103, 145, 0.1)',
      gradient: 'linear-gradient(90deg, #336791, #06b6d4)',
      sortOrder: 4,
    },
    {
      name: 'Vue.js',
      category: 'FRAMEWORK' as const,
      icon: 'mdi-vuejs',
      color: '#42b883',
      bgColor: 'rgba(66, 184, 131, 0.1)',
      sortOrder: 1,
    },
    {
      name: 'Nuxt.js',
      category: 'FRAMEWORK' as const,
      icon: 'mdi-nuxt',
      color: '#00DC82',
      bgColor: 'rgba(0, 220, 130, 0.1)',
      sortOrder: 2,
    },
    {
      name: 'NestJS',
      category: 'FRAMEWORK' as const,
      icon: 'mdi-nodejs',
      color: '#E0234E',
      bgColor: 'rgba(224, 35, 78, 0.1)',
      sortOrder: 3,
    },
    {
      name: 'Spring Boot',
      category: 'FRAMEWORK' as const,
      icon: 'mdi-leaf',
      color: '#6DB33F',
      bgColor: 'rgba(109, 179, 63, 0.1)',
      sortOrder: 4,
    },
    {
      name: 'Node.js',
      category: 'FRAMEWORK' as const,
      icon: 'mdi-nodejs',
      color: '#339933',
      bgColor: 'rgba(51, 153, 51, 0.1)',
      sortOrder: 5,
    },
    {
      name: 'Vuetify',
      category: 'FRAMEWORK' as const,
      icon: 'mdi-vuetify',
      color: '#1867C0',
      bgColor: 'rgba(24, 103, 192, 0.1)',
      sortOrder: 6,
    },
    {
      name: 'Tailwind',
      category: 'FRAMEWORK' as const,
      icon: 'mdi-tailwind',
      color: '#06B6D4',
      bgColor: 'rgba(6, 182, 212, 0.1)',
      sortOrder: 7,
    },
    {
      name: 'Git',
      category: 'TOOL' as const,
      icon: 'mdi-git',
      color: '#F05032',
      sortOrder: 1,
    },
    {
      name: 'Docker',
      category: 'TOOL' as const,
      icon: 'mdi-docker',
      color: '#2496ED',
      sortOrder: 2,
    },
    {
      name: 'VS Code',
      category: 'TOOL' as const,
      icon: 'mdi-microsoft-visual-studio-code',
      color: '#007ACC',
      sortOrder: 3,
    },
    {
      name: 'Postman',
      category: 'TOOL' as const,
      icon: 'mdi-api',
      color: '#FF6C37',
      sortOrder: 4,
    },
    {
      name: 'Figma',
      category: 'TOOL' as const,
      icon: 'mdi-pencil-ruler',
      color: '#F24E1E',
      sortOrder: 5,
    },
    {
      name: 'Linux',
      category: 'TOOL' as const,
      icon: 'mdi-linux',
      color: '#FCC624',
      sortOrder: 6,
    },
    {
      name: 'PostgreSQL',
      category: 'DATABASE' as const,
      icon: 'mdi-elephant',
      type: 'Relationnel',
      gradient: 'linear-gradient(135deg, #336791, #5A8BB8)',
      sortOrder: 1,
    },
    {
      name: 'MySQL',
      category: 'DATABASE' as const,
      icon: 'mdi-database',
      type: 'Relationnel',
      gradient: 'linear-gradient(135deg, #4479A1, #00758F)',
      sortOrder: 2,
    },
    {
      name: 'MongoDB',
      category: 'DATABASE' as const,
      icon: 'mdi-leaf',
      type: 'NoSQL',
      gradient: 'linear-gradient(135deg, #47A248, #4DB33D)',
      sortOrder: 3,
    },
    {
      name: 'Prisma',
      category: 'DATABASE' as const,
      icon: 'mdi-database-cog',
      type: 'ORM',
      gradient: 'linear-gradient(135deg, #2D3748, #5A67D8)',
      sortOrder: 4,
    },
    {
      name: 'Problem Solving',
      category: 'SOFT' as const,
      description: 'Analyse et résolution créative de problèmes complexes',
      icon: 'mdi-puzzle',
      gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
      sortOrder: 1,
    },
    {
      name: "Travail d'équipe",
      category: 'SOFT' as const,
      description: 'Collaboration efficace dans des environnements agiles',
      icon: 'mdi-account-group',
      gradient: 'linear-gradient(135deg, #22c55e, #16a34a)',
      sortOrder: 2,
    },
    {
      name: 'Communication',
      category: 'SOFT' as const,
      description: 'Transmission claire des idées techniques',
      icon: 'mdi-message-text',
      gradient: 'linear-gradient(135deg, #f59e0b, #ea580c)',
      sortOrder: 3,
    },
    {
      name: 'Adaptabilité',
      category: 'SOFT' as const,
      description: 'Apprentissage rapide des nouvelles technologies',
      icon: 'mdi-sync',
      gradient: 'linear-gradient(135deg, #ec4899, #be185d)',
      sortOrder: 4,
    },
    {
      name: 'Autonomie',
      category: 'SOFT' as const,
      description: 'Gestion efficace des projets en indépendance',
      icon: 'mdi-account-check',
      gradient: 'linear-gradient(135deg, #06b6d4, #0891b2)',
      sortOrder: 5,
    },
    {
      name: 'Créativité',
      category: 'SOFT' as const,
      description: 'Solutions innovantes et approche UX centrée',
      icon: 'mdi-lightbulb-on',
      gradient: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
      sortOrder: 6,
    },
  ];

  await prisma.skill.createMany({ data: skills });

  console.log('Seed OK');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
