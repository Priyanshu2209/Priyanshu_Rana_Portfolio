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
};

export const sections = ['home', 'about', 'experience', 'projects', 'skills', 'certificates', 'contact'];

export const about = {
  paragraphs: [
    "I'm a Computer Programming and Analysis student at Seneca Polytechnic with a strong foundation in database systems, data analysis, and software development. My path began with a Diploma in Computer Engineering, and I've since worked as a Data Analyst Intern at AI Financial and a Database Intern at Tata Consultancy Services.",
    "I care about clean data models, query optimization, and building reporting that people can actually trust. I enjoy the quiet, careful work of turning messy data into something structured and useful.",
  ],
  cards: [
    { label: 'Education', primary: 'Computer Programming & Analysis', secondary: 'Seneca Polytechnic · Expected Dec 2026' },
    { label: 'Latest Role', primary: 'Data Analyst Intern', secondary: 'AI Financial Power Group · 2026' },
  ],
};

export const experience = [
  {
    role: 'Data Analyst Intern (Co-op)',
    company: 'AI Financial Power Group Limited',
    location: 'Markham, ON',
    date: 'Jan 2026 – Apr 2026',
    points: [
      'Designed and implemented a centralized SQL Server campaign tracking database capturing transaction sources and campaign attribution, improving visibility into marketing performance and transaction-level analytics.',
      'Collaborated with directors and managers to gather requirements, refine ER models, and deploy normalized schemas using SSMS and Draw.io.',
      'Reverse-engineered undocumented production databases and executed complex SQL queries to analyze schema relationships, data dependencies, and system workflows.',
      'Developed SQL production views comparing 5 years of NYSE/NASDAQ market data against internal fund performance metrics for reporting and benchmarking.',
      'Integrated SQL views with Excel Power Query to automate refreshable dashboards across daily, monthly, and yearly workflows.',
      'Built Python (Pandas) automation scripts to aggregate client data and generate structured PDF reports, reducing manual effort.',
    ],
  },
  {
    role: 'Database Intern',
    company: 'Tata Consultancy Services (TCS)',
    location: 'Ahmedabad, India',
    date: 'Jan 2022 – Jun 2022',
    points: [
      'Designed and optimized SQL databases for internal business applications, improving query efficiency and data retrieval performance.',
      'Created validation and data-cleaning scripts to ensure consistency and accuracy across multiple datasets.',
      'Collaborated with backend developers to support database operations, reporting workflows, and ER diagram documentation.',
    ],
  },
];

export const projects = [
  {
    title: 'Blood Bank Management System',
    stack: 'SQL Server',
    description:
      'A relational database system for managing blood donations, inventory tracking, and reporting - with advanced SQL queries, ER diagrams, and structured documentation.',
    tags: ['SQL Server', 'Database Design', 'ER Modeling'],
    link: 'https://github.com/Priyanshu2209/Blood_bank_system_database',
  },
  {
    title: 'Online Movie Ticket Booking System',
    stack: 'PHP · MySQL · JS',
    description:
      'A responsive booking platform with real-time seat availability, schedule management, and secure user authentication. Backend built with PHP and MySQL.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
    link: null,
  },
];

export const skills = [
  { label: 'Languages', items: ['Python', 'Java', 'C', 'C++', 'PHP', 'JavaScript', 'SQL'] },
  { label: 'Databases', items: ['SQL Server', 'MySQL', 'Oracle SQL', 'MongoDB', 'DB2'] },
  { label: 'Tools & Platforms', items: ['SSMS', 'Git/GitHub', 'Excel Power Query', 'VS Code', 'Eclipse', 'Azure'] },
  { label: 'Core Skills', items: ['Database Design', 'ER Modeling', 'Data Analysis', 'Data Cleaning', 'Query Optimization', 'ETL Concepts'] },
];


export const certificates = [
  {
    title: 'Certificate of Achievement — Data Analyst Internship',
    issuer: 'AI Financial',
    date: '2026',
    file: '/certificates/Priyanshu_Rana_certificate.pdf',
    preview: '/certificates/Priyanshu_Rana_certificate.png',
  },
];