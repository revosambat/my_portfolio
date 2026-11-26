export interface Project {
  id: number;
  period: string;
  subtitle: string;
  title: string;
  description: string;
  tags: string[];
  categories: string[];
  role: string;
  highlights: string[];
  status?: string;
  link?: string;
}

export interface SkillGroup {
  index: string;
  title: string;
  items: string[];
}

export interface ArchitectureNode {
  id: string;
  label: string;
  detail: string;
}

export interface ArchitecturePattern {
  id: string;
  label: string;
  description: string;
  nodes: ArchitectureNode[];
}

export const architecturePatterns: ArchitecturePattern[] = [
  {
    id: 'offline',
    label: 'Offline-first mobile',
    description: 'A resilient workflow for field teams working with unreliable connectivity.',
    nodes: [
      { id: 'mobile', label: 'React Native app', detail: 'Captures jobs, inspections, incidents, and driver activity on the device.' },
      { id: 'local', label: 'Local storage', detail: 'Keeps essential work available when the network is unavailable.' },
      { id: 'sync', label: 'Sync queue', detail: 'Tracks pending changes and reconciles them when connectivity returns.' },
      { id: 'api', label: 'Backend API', detail: 'Validates and processes synchronized changes for the wider fleet system.' },
      { id: 'data', label: 'Cloud data', detail: 'Stores the operational record for reporting, tracking, and compliance.' },
    ],
  },
  {
    id: 'multitenant',
    label: 'Multi-tenant platform',
    description: 'Secure workflows for different user types sharing one product.',
    nodes: [
      { id: 'users', label: 'User roles', detail: 'Property owners, moderators, and administrators have distinct journeys.' },
      { id: 'auth', label: 'Cognito / RBAC', detail: 'Authentication and authorization keep tenant data and actions scoped.' },
      { id: 'workflow', label: 'Application API', detail: 'Coordinates appeals, documents, notifications, and payment workflows.' },
      { id: 'integrations', label: 'Integrations', detail: 'Connects document handling, email notifications, and Square payments.' },
      { id: 'storage', label: 'Cloud services', detail: 'AWS services support deployment, data, and reliable product operations.' },
    ],
  },
  {
    id: 'sensor',
    label: 'Environmental data',
    description: 'A data path connecting physical sensors with useful community experiences.',
    nodes: [
      { id: 'sensors', label: 'AirGradient sensors', detail: 'Provide the air-quality measurements that power the product.' },
      { id: 'ingestion', label: 'Data ingestion', detail: 'Receives and prepares sensor data for application use.' },
      { id: 'backend', label: 'Cloud backend', detail: 'Provides role-based access and real-time product workflows.' },
      { id: 'web', label: 'Web experience', detail: 'Shares data, learning, news, and events with the community.' },
      { id: 'mobile', label: 'Mobile experience', detail: 'Extends the platform to people using it on the go.' },
    ],
  },
  {
    id: 'business',
    label: 'Business systems & integrations',
    description: 'API-driven workflows connecting e-commerce, recruitment, and AI-assisted operations.',
    nodes: [
      { id: 'requirements', label: 'Requirements analysis', detail: 'Translates business workflows into specifications and phased delivery plans.' },
      { id: 'domain', label: 'Domain model', detail: 'Designs entities, aggregates, repositories, and use cases around the real process.' },
      { id: 'api', label: 'REST API', detail: 'Exposes validated contracts with authentication and role-based access.' },
      { id: 'integrations', label: 'Integrations', detail: 'Connects payments, suppliers, shipping, communication, and document processing.' },
      { id: 'delivery', label: 'Cloud delivery', detail: 'Deploys and monitors the system with Docker and AWS infrastructure.' },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    period: '11/2025 — current',
    subtitle: 'Environmental monitoring platform',
    title: 'Tribal Air Clean',
    description: 'Cross-platform mobile and web application serving AirGradient sensor data to administrators, users, and moderators, alongside community news, events, and learning content for the Muwekma Ohlone tribe.',
    tags: ['Next.js', 'React Native', 'TypeScript', 'Node.js', 'MongoDB', 'AWS', 'Cognito'],
    categories: ['Mobile', 'Cloud', 'Data', 'Backend'],
    role: 'Full-stack development across the web, mobile, and sensor data workflows.',
    highlights: ['AirGradient sensor data integration', 'Role-based access across web and mobile', 'AWS event aggregation with Cognito, Lambda, SQS, and CloudWatch'],
    status: 'In development',
  },
  {
    id: 2,
    period: '09/2025 — 11/2025',
    subtitle: 'Property tax appeal platform',
    title: 'Low Property Tax',
    description: 'Role-based web application for managing property tax appeals across US states, with document management, moderator workflows, and secure AWS cloud infrastructure.',
    tags: ['Next.js', 'TypeScript', 'Node.js', 'AWS Amplify', 'Cognito', 'Square', 'MongoDB'],
    categories: ['Backend', 'Cloud', 'Payments', 'Data'],
    role: 'Full-stack development for secure, multi-tenant appeal workflows.',
    highlights: ['Admin, user, and moderator journeys', 'Document management and appeal workflow', 'AWS Amplify Gen 2 with SES and SQS'],
    link: 'https://www.lowproptax.com/',
  },
  {
    id: 3,
    period: '07/2024 — 12/2024',
    subtitle: 'Mobile application · Australia',
    title: 'SriServices',
    description: 'React Native Expo application for client and support worker interaction, covering onboarding, profile and job management, agreement signing, and real-time communication.',
    tags: ['React Native', 'Expo', 'TypeScript', 'REST APIs'],
    categories: ['Mobile', 'Backend'],
    role: 'Mobile and backend development for support worker workflows.',
    highlights: ['Client and support worker journeys', 'Onboarding, jobs, and agreement signing', 'Real-time communication features'],
  },
  {
    id: 4,
    period: '01/2024 — 10/2024',
    subtitle: 'Student profile platform · Australia',
    title: 'SemesterOne',
    description: 'Student profile management and SEO-optimized course websites that help agents and students manage profiles, communicate, and explore study options in Australia.',
    tags: ['React.js', 'Next.js', 'TypeScript'],
    categories: ['Backend', 'Data'],
    role: 'Full-stack development of profile management and content workflows.',
    highlights: ['Agent and student profile management', 'Communication and enquiry workflows', 'SEO-optimized course websites'],
  },
  {
    id: 5,
    period: '2021 — 2022',
    subtitle: 'Fleet operations / Offline-first mobile',
    title: 'Manage Vehicle',
    description: 'Fleet management ecosystem for heavy vehicles: job allocation, compliance reporting, driver activity, tracking, and fault, fuel, and incident reporting—usable with limited connectivity.',
    tags: ['React Native', 'Symfony', 'PHP', 'MySQL', 'AWS', 'Offline sync'],
    categories: ['Mobile', 'Offline-first', 'Backend', 'Data'],
    role: 'Full-stack development for fleet operations and field teams.',
    highlights: ['Offline and background synchronization', 'Job, compliance, and driver activity management', 'Fault, fuel, and incident reporting'],
    link: 'https://fleet.managevehicle.com/',
  },
  {
    id: 6,
    period: '2021 — 2022',
    subtitle: 'HR / Leave management',
    title: 'Leave Management System',
    description: 'Role-based leave management system with customizable leave policies, interactive dashboards, public holidays, and employee profile management for administrators, HR, and staff.',
    tags: ['React.js', 'Symfony', 'PHP', 'MySQL', 'REST APIs'],
    categories: ['Backend', 'Data'],
    role: 'Database design, API development, and full-stack implementation.',
    highlights: ['Database schema and RESTful API design', 'Role-based access for admin, HR, and employees', 'Leave dashboards and profile management'],
    link: 'https://hr.wolfmatrix.dev/login',
  },
  {
    id: 7,
    period: '2018 — current',
    subtitle: 'Charter and vehicle allocation',
    title: 'Wangaratta Coachlines',
    description: 'Web and mobile application for charter vehicle allocation, tracking, and ETA, with a driver app that updates station arrivals through QR scans.',
    tags: ['React.js', 'Symfony', 'PHP', 'MS SQL Server', 'AWS'],
    categories: ['Backend', 'Data'],
    role: 'Full-stack development of allocation, search, and driver workflows.',
    highlights: ['Advanced search and server-side pagination', 'Contract vehicle features', 'QR-based station updates and vehicle tracking'],
  },
];

export interface Experience {
  period: string;
  company: string;
  role: string;
  summary: string;
  technologies: string[];
}

export const experience: Experience[] = [
  {
    period: '02/2026 — current',
    company: 'Freelance (Ops Tech)',
    role: 'Backend-Focused Full Stack Software Engineer',
    summary: 'Designing scalable backend systems with NestJS, TypeScript, and Clean Architecture, applying DDD and CQRS to business workflows.',
    technologies: ['NestJS', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'Stripe', 'REST APIs', 'CQRS', 'DDD'],
  },
  {
    period: '2026 — current',
    company: 'Freelance / Independent Projects',
    role: 'Independent Software Engineering & Technical Analysis',
    summary: 'Translating business workflows into specifications, architecture, database models, and API plans across e-commerce, recruitment, CRM, and AI-assisted workflows.',
    technologies: ['NestJS', 'TypeScript', 'PostgreSQL', 'REST APIs', 'DDD', 'CQRS', 'Stripe', 'AWS', 'API Integration', 'AI Workflow Analysis'],
  },
  {
    period: '09/2025 — 12/2025',
    company: 'Dormo Solutions',
    role: 'Senior Full Stack Developer',
    summary: 'Architected AWS serverless infrastructure and role-based mobile and web workflows for property tax appeal products.',
    technologies: ['Amplify Gen 2', 'Lambda', 'Cognito', 'React Native', 'TypeScript', 'Square'],
  },
  {
    period: '12/2024 — 08/2025',
    company: 'Web Friend',
    role: 'Full Stack Developer – Freelance',
    summary: 'Delivered recruitment and subscription platforms with Stripe payments, JWT authentication, and Celery background processing.',
    technologies: ['React.js', 'Next.js', 'Stripe', 'Celery', 'Redis', 'Docker', 'Dokku'],
  },
  {
    period: '04/2024 — 12/2024',
    company: 'Web Friend (Remote)',
    role: 'Mobile Application Developer / Full Stack Developer',
    summary: 'Built React Native applications from scratch, reusable component libraries, and web dashboards for client requirements.',
    technologies: ['React Native', 'Expo', 'TypeScript', 'NativeWind', 'React.js'],
  },
  {
    period: '11/2021 — 12/2023',
    company: 'Wolfmatrix Pvt. Ltd.',
    role: 'Software Engineer',
    summary: 'Developed React Native applications with offline-first sync, modern functional architecture, and production mobile releases.',
    technologies: ['React Native', 'Symfony', 'PHP', 'MySQL', 'Offline sync', 'AWS'],
  },
  {
    period: '10/2019 — 01/2020',
    company: 'Incwell Pvt. Ltd.',
    role: 'Software Development Intern',
    summary: 'Contributed to Django backend systems, internal React tools, and production feature development.',
    technologies: ['Django', 'Python', 'React.js'],
  },
];

export const skillGroups: SkillGroup[] = [
  { index: '01', title: 'Backend & architecture', items: ['NestJS', 'Node.js', 'Express.js', 'TypeScript', 'REST APIs', 'Django', 'Python', 'Symfony', 'PHP', 'DDD', 'CQRS', 'Clean Architecture', 'JWT / RBAC'] },
  { index: '02', title: 'Frontend & mobile', items: ['React.js', 'Next.js', 'React Native', 'Expo', 'TypeScript', 'Tailwind CSS', 'Material UI', 'NativeWind'] },
  { index: '03', title: 'Cloud & delivery', items: ['AWS Lambda', 'Cognito', 'API Gateway', 'SQS / SES', 'Amplify Gen 2', 'CloudWatch', 'EventBridge', 'Docker', 'Dokku', 'CI/CD', 'VPC'] },
  { index: '04', title: 'Data & integrations', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'MS SQL Server', 'Redis', 'Drizzle ORM', 'Stripe', 'Square', 'Celery', 'OpenAI API', 'CJ Dropshipping API'] },
];
