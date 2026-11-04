export const profile = {
  name: 'Priyanshu Rana',
  title: 'Data Analyst & Database Developer',
  tagline:
    'I design SQL databases, build automated reporting pipelines, and turn raw data into clear, reliable insight.',
  email: 'priyanshurana2228@gmail.com',
  linkedin: 'https://linkedin.com/in/priyanshu-rana-230a152a4',
  github: 'https://github.com/Priyanshu2209',
  location: 'North York, ON',
  phone: '+1 (437) 665-2472',
  resume: '/Priyanshu_Rana_Resume.pdf',
  photo: '/profile.jpg',
};

export const sections = ['home', 'about', 'experience', 'projects', 'skills', 'certificates', 'contact'];

export const about = {
  paragraphs: [
    "I'm in my final year of Computer Programming and Analysis at Seneca Polytechnic, building on an earlier Diploma in Computer Engineering. My focus is databases and data — designing clean SQL schemas, modeling relationships, and making sure the numbers people rely on are accurate.",
    "Most recently, as a Data Analyst Intern at AI Financial, I built a centralized SQL Server tracking database, automated reporting with Excel Power Query and Python, and turned five years of market data into usable views. I care about clean data models, query optimization, and reporting people can trust.",
  ],
};

export const education = [
  {
    degree: 'Advanced Diploma in Computer Programming & Analysis',
    school: 'Seneca Polytechnic',
    location: 'North York, ON',
    years: 'Expected Dec 2026',
  },
  {
    degree: 'Diploma in Computer Engineering',
    school: 'BBIT College',
    location: 'Gujarat, India',
    years: 'Graduated Jul 2022',
  },
];

export const experience = [
  {
    role: 'Data Analyst Intern (Co-op)',
    company: 'AI Financial Power Group Limited',
    location: 'Markham, ON',
    date: 'Jan 2026 – Apr 2026',
    points: [
      'Designed and implemented a centralized SQL Server campaign tracking database capturing transaction sources and campaign attribution across 15+ campaigns to improve marketing and transaction-level reporting.',
      'Collaborated with directors and managers to gather business requirements, design ER models in Draw.io, and deploy 10+ normalized database schemas in SQL Server using SSMS.',
      'Reverse-engineered 5+ undocumented production databases and executed complex SQL queries to analyze schema relationships, data dependencies, and system workflows.',
      'Developed SQL production views comparing 5 years of NYSE/NASDAQ market data against internal fund performance, and built 2 stored procedures deployed to the production server to automate financial reporting.',
      'Integrated SQL views with Excel Power Query to automate refreshable dashboards for daily, monthly, and yearly performance analysis.',
      'Built automation scripts using Python (Pandas) to aggregate client data, generate 20+ structured PDF reports, and reduce manual reporting effort.',
    ],
  },
];

export const projects = [
  {
    title: 'CampaignLens: Campaign Attribution & Analytics',
    stack: 'PostgreSQL · PL/pgSQL · Docker',
    status: 'In Progress · 2026',
    description:
      'A normalized PostgreSQL 17 database modeling a campaign-to-investment funnel for a Canadian investment firm, with compliance built in (KYC, AML, CASL consent).',
    tags: ['PostgreSQL', 'PL/pgSQL', 'Docker', 'Schema Design', 'Data Modeling'],
    link: 'https://github.com/Priyanshu2209/campaign-attribution-analytics',
    details:
      "CampaignLens helps a Canadian investment firm measure which marketing campaigns actually bring in new investors and new investments — modeling conversions and ROI per campaign and channel. It's an end-to-end database design for a regulated financial business: translating business and compliance requirements into a normalized schema with enforced data-quality rules.",
    features: [
      'Designed a normalized PostgreSQL 17 database of 27 tables across 5 schemas modeling the full campaign → touchpoint → advisor → customer → account → investment funnel.',
      'Enforced data quality with 8 CHECK constraints, a case-insensitive unique email index, soft deletes, and a reusable PL/pgSQL trigger that maintains audit timestamps.',
      'Containerized the setup with Docker Compose (persistent volumes, health checks) for one-command startup; versioned SQL migrations, data dictionary, and ERD in Git.',
      'Currently building the remaining campaign, advisor, and transaction tables and generating sample data to complete the end-to-end attribution funnel.',
      'Next phase: reporting views for funnel drop-off and campaign/channel ROI, row-level security for advisor access, and Python (Pandas) analysis with charts.',
    ],
    outcomes:
      'Demonstrates end-to-end database design for a regulated financial business — translating business and compliance requirements into a normalized schema with enforced data-quality rules, not just writing queries.',
  },
  {
    title: 'Blood Bank Management System',
    stack: 'SQL Server',
    description:
      'A relational database system with 8+ tables for managing blood donations, inventory tracking, and reporting — with 20+ advanced SQL queries, ER diagrams, and structured documentation.',
    tags: ['SQL Server', 'Database Design', 'ER Modeling'],
    link: 'https://github.com/Priyanshu2209/Blood_bank_system_database',
    details:
      'A database-driven application that manages blood donations, donor records, and inventory for a blood bank. It simulates how real-world organisations handle critical data storage, reporting, and retrieval operations.',
    features: [
      'Comprehensive schema of 8+ tables with ER diagrams and a data dictionary.',
      '20+ advanced SQL queries for searching donors, tracking availability, and managing inventory.',
      'Automated report generation to support decision-making and efficient resource allocation.',
      'Scalable design ready for future Python, MongoDB, and front-end integration.',
    ],
    outcomes:
      'Gained hands-on experience in real-world database design, optimising storage and retrieval, and reporting through complex SQL — a foundation for expanding into Python and NoSQL (MongoDB).',
  },
  {
    title: 'Online Movie Ticket Booking System',
    stack: 'PHP · MySQL · JS',
    description:
      'A responsive booking platform with real-time seat availability, schedule management, and secure user authentication. Backend built with PHP and MySQL.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
    link: 'https://github.com/Priyanshu2209/It-s_show_time',
    details:
      "\"It's Show Time\" is a web-based movie ticket booking system where users browse movies, select showtimes, choose seats, and book tickets online. Built in 2022 as a web-development learning initiative, it demonstrates PHP, MySQL, and front-end integration in a dynamic, database-driven app covering user sessions, form validation, database connectivity, and CRUD operations.",
    features: [
      'User registration, login, and authentication system.',
      'Browse movies and available events.',
      'View showtimes and seat availability.',
      'Book and confirm movie tickets.',
      'Manage user profiles and booking history.',
      'Basic administrative functionality (optional).',
    ],
    outcomes:
      'A solid full-stack PHP project applying real-world concepts: sessions, validation, database connectivity, and CRUD.',
  },
];

export const skills = [
  { label: 'Languages', items: ['Python', 'Java', 'C', 'C++', 'PHP', 'JavaScript', 'SQL', 'PL/pgSQL'] },
  { label: 'Databases', items: ['SQL Server', 'PostgreSQL', 'MySQL', 'Oracle SQL', 'MongoDB', 'DB2'] },
  { label: 'Tools & Platforms', items: ['SSMS', 'pgAdmin', 'Docker', 'Git/GitHub', 'Excel Power Query', 'Azure', 'VS Code'] },
  { label: 'Core Skills', items: ['Database Design', 'Schema Design', 'ER Modeling', 'Normalization', 'Data Analysis', 'Data Cleaning', 'Query Optimization', 'ETL Concepts'] },
];

export const certificates = [
  {
    title: 'Certificate of Achievement — Data Analyst Internship',
    issuer: 'AI Financial',
    date: 'May 2026',
    file: '/certificates/Priyanshu_Rana_certificate.pdf',
  },
  {
    title: 'PostgreSQL Essential Training',
    issuer: 'LinkedIn Learning',
    date: 'Sep 2026',
    file: '/certificates/Priyanshu_Rana_PostgreSQL_certificate.pdf',
  },
];