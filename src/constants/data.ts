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
];

export const projects: Project[] = [
  {
    id: 1,
    period: '11/2025 — current',
    subtitle: 'Environmental data platform',
    title: 'Tribal Air Clean',
    description: 'A cross-platform web and mobile product connecting AirGradient sensors with community air-quality data, learning, news, and events. Built around role-based access and real-time data workflows.',
    tags: ['Next.js', 'React Native', 'AWS', 'MongoDB'],
    categories: ['Mobile', 'Cloud', 'Data'],
    role: 'Full-stack development across the web, mobile, and data workflows.',
    highlights: ['Sensor-connected environmental data', 'Role-based access across multiple experiences', 'Real-time community content and events'],
    link: '',
  },
  {
    id: 2,
    period: '09/2025 — 11/2025',
    subtitle: 'Property tax appeal platform',
    title: 'Low Property Tax',
    description: 'A multi-tenant platform helping property owners navigate tax appeals. Secure workflows connect users, moderators, and admins with document management, notifications, and payment integrations.',
    tags: ['TypeScript', 'AWS Amplify', 'Cognito', 'Square'],
    categories: ['Backend', 'Cloud', 'Payments'],
    role: 'Full-stack development for secure multi-tenant workflows.',
    highlights: ['Separate user, moderator, and admin journeys', 'Document management and notifications', 'Square payment integration'],
    link: 'https://www.lowproptax.com/',
  },
  {
    id: 3,
    period: '2021 — 2024',
    subtitle: 'Fleet operations / Offline-first mobile',
    title: 'Manage Vehicle',
    description: 'A fleet management ecosystem for heavy vehicles: job allocation, compliance reporting, driver activity, tracking, and fault, fuel, and incident reporting—even when connectivity is limited.',
    tags: ['React Native', 'Symfony', 'AWS', 'Offline sync'],
    categories: ['Mobile', 'Offline-first', 'Backend'],
    role: 'Full-stack development for fleet operations and field teams.',
    highlights: ['Offline-first workflows for limited connectivity', 'Job, compliance, and driver activity management', 'Fault, fuel, and incident reporting'],
    link: 'https://fleet.managevehicle.com/',
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
    period: '2019 — 2021',
    company: 'Wolfmatrix',
    role: 'Software development',
    summary: 'Built a foundation in web development, APIs, and software delivery across client projects.',
    technologies: ['Web development', 'REST APIs'],
  },
  {
    period: '2021 — 2024',
    company: 'Manage Vehicle',
    role: 'Full-stack developer',
    summary: 'Worked on fleet operations products spanning mobile workflows, backend services, and offline synchronization.',
    technologies: ['React Native', 'Symfony', 'AWS', 'Offline sync'],
  },
  {
    period: '2024 — 2025',
    company: 'Dormo Solutions',
    role: 'Full-stack developer',
    summary: 'Delivered product features across frontend, backend, integrations, and cloud infrastructure.',
    technologies: ['TypeScript', 'React', 'AWS'],
  },
  {
    period: '2025 — current',
    company: 'Web Friend / Freelance',
    role: 'Full-stack developer',
    summary: 'Building focused web and mobile products, including property workflows and environmental data platforms.',
    technologies: ['Next.js', 'React Native', 'NestJS', 'AWS'],
  },
];

export const skillGroups: SkillGroup[] = [
  { index: '01', title: 'Backend & architecture', items: ['NestJS', 'Node.js', 'TypeScript', 'Django', 'REST APIs', 'CQRS', 'DDD', 'JWT / RBAC'] },
  { index: '02', title: 'Frontend & mobile', items: ['React.js', 'Next.js', 'React Native', 'Expo', 'Tailwind CSS', 'Material UI'] },
  { index: '03', title: 'Cloud & delivery', items: ['AWS Lambda', 'Cognito', 'API Gateway', 'SQS / SES', 'Amplify Gen 2', 'Docker', 'CI/CD'] },
  { index: '04', title: 'Data & integrations', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Stripe', 'Square', 'Celery', 'OpenAI API'] },
];
