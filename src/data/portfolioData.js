export const profile = {
  name: 'Subhakanta Sahu',
  title: 'Full-Stack Web Developer',
  stack: 'PHP, Laravel, WordPress, JavaScript, React.js',
  location: 'Bhubaneswar, Odisha, India',
  currentLocation: 'Currently working in Pune, India',
  phone: '+91 8328850358',
  phoneLink: 'tel:+918328850358',
  email: 'subhakanta.sahu.dev@outlook.com',
  linkedin: 'https://linkedin.com/in/subhakanta-sahu',
  github: 'https://github.com/Chiku23',
  summary: 'Full-stack web developer with 4.5+ years of experience building and maintaining enterprise web applications and custom CMS solutions using PHP, Laravel, WordPress, MySQL, and JavaScript. Delivered real-time analytics dashboards, secure document workflows, ticketing, and catalog automation across 400+ multi-tenant sites. Strong in REST APIs, responsive UI, and client-side security, with experience leading frontend architecture and building modern React.js and TypeScript interfaces.',
}

export const skillGroups = [
  { name: 'Languages & Frontend', filter: 'Languages & Frontend', items: ['PHP', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'React.js', 'jQuery', 'Highcharts JS', 'Bootstrap', 'Tailwind CSS', 'Blade'] },
  { name: 'Backend & APIs', filter: 'Backend & APIs', items: ['Laravel', 'RESTful APIs', 'OpenAPI / Swagger', 'Webhooks (Jira, Slack)', 'JWT & Sanctum Authentication', 'Eloquent ORM', 'AJAX', 'Cron Jobs', 'Google reCAPTCHA'] },
  { name: 'CMS & Database', filter: 'CMS & Database', items: ['WordPress (Custom Themes, Plugins & APIs)', 'Elementor', 'Shortcodes', 'MySQL (Schema Design & Query Optimization)'] },
  { name: 'DevOps & Practices', filter: 'DevOps & Practices', items: ['Git', 'GitHub', 'CI/CD', 'GridPane WP Hosting', 'Apache', 'Linux (Ubuntu, Fedora)', 'Litmus (Email Template Development)', 'Cursor', 'Antigravity', 'Jira', 'Shortcut', 'Slack', 'Microsoft Teams', 'Zoho', 'Agile/Scrum', 'Code Reviews', 'Refactoring', 'Third-Party API & Payment Integrations', 'Responsive Design', 'Data Visualization', 'Client Communication', 'Performance Optimization'] },
]

export const experience = {
  company: 'Aloha Technology Pvt Ltd',
  location: 'Pune, India',
  duration: 'April 2022 – Present',
  initialRole: 'Software Developer',
  roleStartDate: 'June 2024',
  currentRole: 'Senior Frontend Developer & Senior Full-Stack Developer',
  overview: [
    'Developed and maintained web applications and custom CMS solutions for US clients across analytics, credit-union document workflows, cinema ticketing, event distribution, and digital publishing.',
    'Implemented PHP/Laravel functionality, REST API integrations, MySQL queries, and responsive interfaces.',
    'Took on Senior Frontend and Senior Full Stack project responsibilities, including code reviews, refactoring, client discussions, and release demonstrations.',
  ],
}

export const enterpriseProjects = [
  {
    title: 'Business Intelligence & Real-Time Analytics Dashboards', role: 'Senior Full Stack Developer', domain: 'Digital Experience Analytics Client (US)', category: 'JavaScript / Analytics',
    context: 'Business intelligence and live monitoring for a digital experience analytics platform, with 10–15 dashboard pages, 10–20 visualizations per page, and 2–3 years of historical data.',
    highlights: [
      'Developed analytics dashboards with Highcharts visualizations and filters for date, device, page, and time period.',
      'Optimized payload rendering and query caching to display 2–3 years of historical data across 20+ visualizations without blocking the UI.',
      'Integrated Jira APIs and webhooks to create tickets and synchronize data bidirectionally between platform modules and Jira.',
      'Integrated Slack webhooks to share AI-generated fix recommendations with client teams.',
      'Reviewed peer pull requests, refactored legacy PHP/JavaScript modules, and led post-release feature demos.',
    ], tech: ['JavaScript', 'Highcharts JS', 'PHP', 'Jira API', 'Slack Webhooks'],
  },
  {
    title: 'Secure Document Vault & Workflow Platform', role: 'Senior Frontend Developer', domain: 'Credit-Union E-Document Management Platform (US)', category: 'PHP / Laravel',
    context: 'Enterprise e-document platform used by credit unions for e-signatures, check dispatching, and compliant document storage.',
    highlights: [
      'Developed responsive UI modules for secure document and member workflows.',
      'Built a browser-based PDF editor for document creation and digital signing workflows.',
      'Implemented client-side AES encryption to protect audit trails and sensitive member data before server transmission.',
    ], tech: ['PHP', 'JavaScript (ES6+)', 'jQuery', 'AJAX', 'Bootstrap'],
  },
  {
    title: 'Enterprise Box Office & Transactional Engine', role: 'Full-Stack Developer', domain: 'Cinema Ticketing & Concessions Platform (US)', category: 'PHP / Laravel',
    context: 'Transactional ticketing experience supporting multiple cinema-chain clients, from seat selection through ticket and concession checkout.',
    highlights: [
      'Built an interactive seat-selection and ticketing interface with real-time availability updates using Laravel Blade and JavaScript.',
      'Integrated Google reCAPTCHA into the booking workflow to help mitigate automated submissions.',
      'Added Google and Apple Calendar integrations for purchased screenings, plus Google Wallet and Apple Wallet ticket support.',
    ], tech: ['PHP (Laravel)', 'Blade', 'JavaScript', 'Tailwind CSS', 'Google reCAPTCHA', 'Google Calendar', 'Apple Calendar', 'Google Wallet', 'Apple Wallet'],
  },
  {
    title: 'Multi-Site Event Synchronization & CMS Automation', role: 'Software Developer', domain: 'Event Ticketing Platform (US)', category: 'WordPress / Multi-Tenant',
    context: 'A central event catalog distributed to 400+ individual venue websites, with data refreshed every 10 minutes.',
    highlights: [
      'Engineered a fault-tolerant WordPress cron plugin to poll REST APIs every 10 minutes across 400+ venue sites, eliminating manual event entry.',
      'Stored synchronized event and ticket data in custom post types and displayed it through configurable frontend pages.',
      'Engineered responsive AJAX search, multi-filter navigation, and pagination.',
      'Created 4–5 custom shortcode widgets and Elementor-based pages for configurable content presentation.',
    ], tech: ['PHP', 'WordPress', 'MySQL', 'REST API', 'AJAX', 'Cron Jobs', 'Elementor'],
  },
  {
    title: 'Agricultural Content Publishing Platform', role: 'Frontend Developer', domain: 'Digital Publishing Platform', category: 'WordPress / Publishing',
    context: 'Editorial publishing platform featuring categorized articles, archived print issues, and video content for an agricultural audience.',
    highlights: [
      'Built custom WordPress post types, theme templates, and reusable shortcodes for a flexible editorial experience.',
      'Built article templates and category navigation for agricultural news, research, community content, and farm operations.',
      'Created an archive page for past publication editions with an embedded PDF viewer.',
      'Developed a videos page with custom post types, custom metaboxes, and an integrated YouTube player, plus admin settings for editors.',
      'Delivered the project in one month.',
    ], tech: ['PHP', 'WordPress', 'MySQL', 'AJAX'],
  },
]

export const personalProjects = [
  {
    title: 'TaskPad', subtitle: 'Jira-Style Project Tracker',
    description: 'Full-featured project tracker with kanban boards, sprints, issues, and comments; powered by a documented Laravel REST API (50+ endpoints with OpenAPI/Swagger) and a modern React + TypeScript frontend.',
    tech: ['Laravel 12', 'MySQL', 'Sanctum', 'Swagger', 'React', 'TypeScript'],
    links: [{ label: 'API', href: 'https://github.com/Chiku23/taskpad-api' }, { label: 'UI', href: 'https://github.com/Chiku23/taskpad-ui' }],
  },
  {
    title: 'MediaHUB', subtitle: 'Self-Hosted Media Streaming Platform',
    description: 'Self-hosted media streaming application featuring JWT authentication, private photo and document vaults, video streaming, and music playlists, built with AI coding agents.',
    tech: ['Go', 'JavaScript', 'Tailwind CSS', 'JWT'],
    links: [{ label: 'API', href: 'https://github.com/MediaHUB-Labs/mediahub' }, { label: 'UI', href: 'https://github.com/MediaHUB-Labs/mediahub-ui' }],
    note: 'AI-Agent Assisted',
  },
  {
    title: 'TimeSheet', subtitle: 'Organizational Time-Tracking Web App',
    description: 'Time-tracking web application built for small organizations with role-based access control (RBAC), persistent active timers, summary reports, and one-click CSV export.',
    tech: ['PHP 8', 'Eloquent ORM', 'MySQL', 'JavaScript'],
    links: [{ label: 'GitHub', href: 'https://github.com/Chiku23/timesheet' }, { label: 'Live Demo', href: 'http://sahu.great-site.net/' }],
  },
]

export const education = {
  degree: 'Master of Computer Applications (MCA)',
  institution: 'College of Engineering Bhubaneswar, Odisha, India',
  duration: '2020 – 2022',
  score: 'CGPA: 8.93 / 10.0',
  languages: ['English', 'Hindi'],
}
