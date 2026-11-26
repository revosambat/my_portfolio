export interface ResumeExperience {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  technologies?: string;
}

export interface ResumeProject {
  period: string;
  title: string;
  kind: string;
  highlights: string[];
  technologies?: string;
  link?: string;
}

export interface ResumeSkillGroup {
  title: string;
  items: string[];
}

export interface ResumeAchievement {
  title: string;
  detail: string;
}

export const resumeProfile = {
  name: 'Sambat Das',
  title: 'Software Engineer | Full Stack Developer | Backend Engineer',
  location: 'San Pawl il-Baħar, Malta',
  summary: [
    'Software Engineer with nearly 5 years of software development experience across SaaS, recruitment, property technology, environmental technology, and e-commerce. Specialized in backend engineering, API development, and cloud-based application architecture.',
    'Strong expertise in NestJS, Node.js, TypeScript, PostgreSQL, Domain-Driven Design (DDD), CQRS, and Clean Architecture. Experienced in designing secure REST APIs, multi-tenant applications, payment integrations, event-driven workflows, and AWS serverless infrastructure.',
    'Currently working on backend engineering, independent software development, technical requirements analysis, and system architecture for business applications. Focused on building reliable, maintainable, and production-ready software solutions.',
  ],
  contact: {
    phone: '+356 77233471',
    email: 'revosambat123@gmail.com',
    linkedin: 'https://www.linkedin.com/in/sambat-das-67471b194/',
  },
};

export const resumeExperience: ResumeExperience[] = [
  {
    role: 'Backend-Focused Full Stack Software Engineer',
    company: 'Freelance – Contract Based',
    period: 'February 2026 – Present',
    location: 'Remote',
    highlights: [
      'Design and implement scalable backend systems using NestJS, TypeScript, and Clean Architecture.',
      'Apply Domain-Driven Design and CQRS principles to build maintainable business logic and application workflows.',
      'Model domain entities, aggregates, value objects, repositories, and application use cases.',
      'Develop secure REST APIs with JWT authentication, refresh tokens, and role-based authorization.',
      'Implement request validation, structured error handling, and reliable API contracts.',
      'Design concurrency-safe operations using idempotency patterns and database constraints.',
      'Optimize PostgreSQL queries, indexing strategies, and server-side pagination.',
      'Integrate third-party services, payment systems, and asynchronous processing workflows.',
      'Manage Docker-based development and deployment environments.',
    ],
    technologies: 'NestJS, TypeScript, PostgreSQL, Redis, Docker, Stripe, REST APIs, CQRS, DDD',
  },
  {
    role: 'Independent Software Engineering & Technical Analysis',
    company: 'Freelance / Independent Projects',
    period: '2026 – Present',
    location: 'Remote',
    highlights: [
      'Conduct technical requirements analysis and translate business workflows into structured software specifications.',
      'Design scalable backend architectures using NestJS, TypeScript, PostgreSQL, and modular domain-driven design.',
      'Analyze e-commerce workflows, including product catalogs, supplier integrations, shipping calculations, payment processing, and order fulfillment.',
      'Evaluate third-party APIs and integration requirements for reliable, API-driven business operations.',
      'Prepare technical architecture, database models, API specifications, and implementation plans.',
      'Analyze recruitment and CRM workflows, including candidate management, vacancy tracking, role-based access, document handling, and automated communication.',
      'Assess AI-assisted workflow opportunities, including CV screening, document processing, and business process automation.',
      'Evaluate system requirements, implementation complexity, security considerations, and phased delivery approaches.',
    ],
    technologies: 'NestJS, TypeScript, PostgreSQL, REST APIs, DDD, CQRS, Stripe, AWS, API Integration, AI Workflow Analysis',
  },
  {
    role: 'Senior Full Stack Developer',
    company: 'Dormo Solutions Pvt. Ltd. – Climate Clean Solutions',
    period: 'September 2025 – December 2025',
    location: 'Kathmandu, Nepal',
    highlights: [
      'Architected AWS serverless infrastructure using Amplify Gen 2, Lambda, API Gateway, and Cognito.',
      'Implemented secure authentication workflows, OTP verification, and role-based access control.',
      'Developed cross-platform mobile applications using React Native and reusable TypeScript components.',
      'Built property tax appeal platforms with document management and Square payment integration.',
      'Optimized AWS networking through VPC redesign and removal of unnecessary NAT Gateway dependencies.',
      'Implemented CI/CD workflows and infrastructure-as-code practices.',
    ],
  },
  {
    role: 'Full Stack Developer – Freelance',
    company: 'Web Friend',
    period: 'December 2024 – August 2025',
    location: 'Remote – Australia',
    highlights: [
      'Delivered web and mobile applications, including recruitment portals and subscription-based platforms.',
      'Developed recurring payment workflows using Stripe and secure backend validation.',
      'Implemented JWT authentication, refresh tokens, and dynamic role-based permissions.',
      'Integrated background task processing using Celery and Redis.',
      'Managed Docker-based deployments with PostgreSQL and Redis using Dokku.',
    ],
  },
  {
    role: 'Mobile Application Developer / Full Stack Developer',
    company: 'Web Friend',
    period: 'April 2024 – December 2024',
    location: 'Remote – Australia',
    highlights: [
      'Developed cross-platform mobile applications using React Native and Expo.',
      'Built reusable components and collaborated with designers to improve UI/UX.',
      'Implemented application features based on client requirements.',
      'Refactored legacy code to improve performance and maintainability.',
      'Enhanced web dashboards, profile management, and application functionality.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Wolfmatrix Pvt. Ltd.',
    period: 'November 2021 – December 2023',
    location: 'Lalitpur, Nepal',
    highlights: [
      'Developed and maintained mobile applications using React Native.',
      'Implemented offline-first architecture and background synchronization.',
      'Migrated legacy components to modern functional architecture.',
      'Managed Android and iOS production deployments.',
      'Contributed to internal digitalization and business automation systems.',
    ],
  },
  {
    role: 'Software Development Intern',
    company: 'Incwell Pvt. Ltd.',
    period: 'October 2019 – January 2020',
    location: 'Lalitpur, Nepal',
    highlights: [
      'Contributed to backend development using Django and Python.',
      'Developed internal tools using React.',
      'Supported feature development, testing, and maintenance of existing applications.',
    ],
  },
];

export const resumeSkills: ResumeSkillGroup[] = [
  {
    title: 'Backend Engineering',
    items: ['NestJS', 'Node.js', 'Express.js', 'Django', 'Python', 'Symfony', 'PHP', 'REST APIs', 'TypeScript', 'JavaScript'],
  },
  {
    title: 'Software Architecture',
    items: ['Domain-Driven Design (DDD)', 'CQRS', 'Clean Architecture', 'SOLID Principles', 'Domain Modeling', 'Repository Pattern', 'Multi-Tenant Architecture', 'System Design'],
  },
  {
    title: 'Frontend Development',
    items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Material UI'],
  },
  {
    title: 'Mobile Development',
    items: ['React Native', 'Expo', 'NativeWind'],
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'MS SQL Server', 'Redis', 'Drizzle ORM'],
  },
  {
    title: 'Cloud & DevOps',
    items: ['AWS Lambda', 'Cognito', 'API Gateway', 'SQS', 'SES', 'Amplify Gen 2', 'VPC', 'CloudWatch', 'EventBridge', 'Docker', 'Dokku', 'CI/CD'],
  },
  {
    title: 'Integrations',
    items: ['Stripe', 'Square', 'OpenAI API', 'CJ Dropshipping API', 'Celery', 'Redis'],
  },
  {
    title: 'Development Tools',
    items: ['Git', 'GitHub', 'Postman', 'Swagger', 'Zod', 'Linux'],
  },
];

export const resumeProjects: ResumeProject[] = [
  {
    period: 'November 2025 – Present',
    title: 'Tribal Air Clean – Environmental Monitoring Platform',
    kind: 'Mobile & Web Application',
    highlights: [
      'Developed a cross-platform mobile and web application for environmental monitoring.',
      'Integrated air quality data from AirGradient sensors.',
      'Implemented role-based access for administrators, users, and moderators.',
      'Designed AWS-based sensor data processing and event aggregation workflows.',
      'Integrated Cognito, Lambda, SQS, SES, VPC, and CloudWatch.',
    ],
    technologies: 'React Native, Next.js, TypeScript, Node.js, MongoDB, AWS Amplify Gen 2',
  },
  {
    period: 'September 2025 – November 2025',
    title: 'Low Property Tax – Property Tax Appeal Platform',
    kind: 'Web Application',
    highlights: [
      'Developed a role-based property tax appeal management platform.',
      'Implemented document management and property appeal workflows.',
      'Integrated AWS Cognito, Lambda, API Gateway, SQS, SES, and Amplify Gen 2.',
      'Supported secure cloud infrastructure and application monitoring.',
    ],
    link: 'https://www.lowproptax.com/',
  },
  {
    period: 'July 2024 – December 2024',
    title: 'SriServices',
    kind: 'Mobile Application · Australia',
    highlights: [
      'Developed a React Native Expo application for client and support worker interaction.',
      'Implemented onboarding, profile management, job management, and agreement signing.',
      'Integrated real-time communication features.',
    ],
  },
  {
    period: 'January 2024 – October 2024',
    title: 'SemesterOne – Student Profile Management Platform',
    kind: 'Web Application · Australia',
    highlights: [
      'Developed student profile management and course-related web applications.',
      'Implemented features for agents and students to manage profiles and communicate.',
      'Supported SEO-optimized course and education websites.',
    ],
  },
  {
    period: '2021 – 2022',
    title: 'Fleet Management System – Manage Vehicle',
    kind: 'Mobile & Web Application',
    highlights: [
      'Developed mobile and web features for vehicle and driver management.',
      'Implemented offline synchronization and background data updates.',
      'Contributed to job allocation, reporting, compliance, and dashboard functionality.',
    ],
    link: 'https://fleet.managevehicle.com/',
  },
  {
    period: '2021 – 2022',
    title: 'Leave Management System',
    kind: 'Wolfmatrix',
    highlights: [
      'Designed database schemas and REST APIs for employee leave management.',
      'Developed role-based functionality for administrators, HR, and employees.',
      'Implemented leave applications, dashboards, and employee profile management.',
    ],
  },
  {
    period: '2018 – Present',
    title: 'Wangaratta Coachlines – Charter Web',
    kind: 'Web & Mobile Application',
    highlights: [
      'Contributed to vehicle allocation and charter management applications.',
      'Implemented advanced search, pagination, and contract vehicle features.',
      'Supported driver mobile workflows, QR-based station updates, and vehicle tracking.',
    ],
  },
];

export const resumeAchievements: ResumeAchievement[] = [
  {
    title: 'Offline Synchronization',
    detail: 'Introduced offline and background API synchronization for mobile applications, reducing support tickets by approximately 30%.',
  },
  {
    title: 'Cloud Cost Optimization',
    detail: 'Optimized AWS infrastructure through VPC and serverless architecture improvements, reducing monthly operational costs by more than $150.',
  },
  {
    title: 'Reusable Components',
    detail: 'Developed reusable React Native and TypeScript components, accelerating development cycles by approximately 40%.',
  },
  {
    title: 'Technical Debt Reduction',
    detail: 'Refactored legacy application code to improve maintainability, performance, and development efficiency.',
  },
  {
    title: 'Cloud Architecture',
    detail: 'Resolved complex AWS Amplify Gen 2 CloudFormation dependencies involving IAM roles, VPC configurations, and REST API integrations.',
  },
];

export const resumeEducation = {
  period: 'April 2015 – September 2019',
  location: 'Lalitpur, Nepal',
  degree: 'Bachelor of Science in Computer Science and Information Technology (BSc. CSIT)',
  school: 'Sagarmatha College of Science and Technology',
  finalGrade: '68.45%',
};

export const resumeLanguages = [
  { language: 'Nepali', level: 'Native' },
  { language: 'English', level: 'B2' },
  { language: 'Hindi', level: 'B2' },
];
