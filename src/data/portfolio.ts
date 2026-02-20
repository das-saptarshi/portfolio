export const skills = [
    { name: 'Java', category: 'Core' },
    { name: 'Python', category: 'Core' },
    { name: 'TypeScript', category: 'Core' },
    { name: 'System Design', category: 'Core' },
    { name: 'Azure', category: 'Cloud' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Kubernetes', category: 'Ops' },
    { name: 'Docker', category: 'Ops' },
    { name: 'Spring Boot', category: 'Backend' },
    { name: 'React', category: 'Frontend' }
];

export const experience = [
    {
        id: 'microsoft',
        title: 'Microsoft',
        role: ['Software Engineer', 'Software Engineer II'],
        year: '2024 - Present',
        color: '#00a4ef',
        summary: 'Lead Scalability Engineer for Azure Bot Service.',
        details: [
            'Led Scalability & Reliability Squad',
            'Eliminated Weekend SLA Breaches',
            'Optimized Throughput (6000ms -> 72ms)',
            'Hardened Security with Managed Identity'
        ]
    },
    {
        id: 'samsung',
        title: 'Samsung',
        role: ['Software Development Engineer'],
        year: '2023 - 2024',
        color: '#1428a0',
        summary: 'Created No-Code ML Ops Platform.',
        details: [
            'Engineered No-Code ML Ops Platform',
            'Reduced Model Dev Time by 87%',
            'Driven Technical Roadmap'
        ]
    },
    {
        id: 'amazon',
        title: 'Amazon',
        role: ['Software Development Engineer'],
        year: '2022 - 2023',
        color: '#ff9900',
        summary: 'High-Availability Backend for Global Sellers.',
        details: [
            'Backend for 9.7M Global Sellers',
            'Automated Deployment Workflows',
            'Telemetry Suite Development'
        ]
    },
    {
        id: 'tcs',
        title: 'TCS',
        role: ['Systems Engineer'],
        year: '2021 - 2022',
        color: '#5f6db0',
        summary: 'Legacy Modernization to REST.',
        details: [
            'Monolith to Microservices',
            '80% Response Time Reduction'
        ]
    }
];

export const bio = "I am a Software Engineer specializing in building scalable backend systems, cloud infrastructure, and distributed architectures. I enjoy solving complex performance problems and designing reliable platforms.";

// Home Page Data
export const homeCategories = [
    {
        title: 'Core Competencies',
        subtitle: 'Engineering Foundations',
        items: [
            { name: 'System Design', color: '#4caf50', desc: 'Scalable Architectures' },
            { name: 'Java', color: '#ff5252', desc: 'Enterprise Backend' },
            { name: 'Python', color: '#3776ab', desc: 'Data & Scripting' },
            { name: 'TypeScript', color: '#3178c6', desc: 'Modern Frontend' },
        ]
    },
    {
        title: 'Cloud & DevOps',
        subtitle: 'Infrastructure as Code',
        items: [
            { name: 'Azure', color: '#007fff', desc: 'Cloud Services' },
            { name: 'AWS', color: '#ff9900', desc: 'Cloud Platforms' },
            { name: 'Kubernetes', color: '#326ce5', desc: 'Orchestration' },
            { name: 'Docker', color: '#2496ed', desc: 'Containerization' },
        ]
    }
];

// Library Page Data
export const libraryAlbums = [
    { id: 'microsoft', title: 'Microsoft', role: ['Software Engineer', 'Software Engineer II'], coverColor: '#00a4ef', year: '2024', thumbnail: 'logos/microsoft_logo.jpeg' },
    { id: 'samsung', title: 'Samsung', role: ['Software Development Engineer'], coverColor: '#1428a0', year: '2023', thumbnail: 'logos/samsung_electro_mechanics__logo.jpeg' },
    { id: 'amazon', title: 'Amazon', role: ['Software Development Engineer'], coverColor: '#ff9900', year: '2022', thumbnail: 'logos/amazon_logo.jpeg' },
    { id: 'tcs', title: 'Tata Consultancy Services', role: ['Systems Engineer'], coverColor: '#5f6db0', year: '2021', thumbnail: 'logos/tata_consultancy_services_logo.jpeg' },
];

// Explore Page Data
export const exploreProjects = [
    {
        title: 'Distributed Rate Limiter',
        type: 'System Design',
        views: '1.2M',
        color: '#ff5252',
        desc: 'High-performance rate limiting architecture'
    },
    {
        title: 'Real-time Chat Engine',
        type: 'WebSocket',
        views: '840K',
        color: '#3776ab',
        desc: 'Scalable WebSocket implementation'
    },
    {
        title: 'GraphQL Federation',
        type: 'API Gateway',
        views: '2.1M',
        color: '#e535ab',
        desc: 'Unified graph schema for microservices'
    },
    {
        title: 'Kubernetes Operator',
        type: 'DevOps',
        views: '450K',
        color: '#326ce5',
        desc: 'Automating stateful deployments'
    },
    {
        title: 'Event Sourcing Demo',
        type: 'Architecture',
        views: '900K',
        color: '#6db33f',
        desc: 'CQRS and Event Sourcing patterns'
    }
];

// Player Data
export const currentPlayback = {
    title: 'Thodi Si Daaru',
    artist: 'AP Dhillon & Shreya Ghoshal',
    album: 'Thodi Si Daaru',
    year: '2025',
    cover: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png',
    duration: '3:01',
    progress: '2:50',
    progressPercent: '94%'
};

// Playlists
export const playlists = [
    { name: 'Leetcode', link: 'https://leetcode.com/das-saptarshi/' },
    { name: 'GeeksForGeeks', link: 'https://auth.geeksforgeeks.org/user/das_saptarshi/' },
    { name: 'Github', link: 'https://github.com/das-saptarshi/' }
];

// Album Detail Page Data
export interface Track {
    title: string;
    duration: string;
    description: string;
}

export interface ExperienceDetail {
    title: string;
    role: string[];
    year: string;
    color: string;
    tracks: Track[];
}

export const experienceData: Record<string, ExperienceDetail> = {
    microsoft: {
        title: 'Microsoft',
        role: ['Software Engineer', 'Software Engineer II'],
        year: '2024 - Present',
        color: '#00a4ef',
        tracks: [
            { title: 'Led Scalability & Reliability Squad', duration: 'Lead', description: 'Spearheaded a cross-functional squad focused on improving system scalability and reliability across notification infrastructure, driving architecture reviews and incident response improvements.' },
            { title: 'Eliminated Weekend SLA Breaches', duration: 'Sev-2', description: 'Identified and resolved root causes of recurring Sev-2 incidents during weekends by implementing automated monitoring, self-healing mechanisms, and on-call escalation improvements.' },
            { title: 'Optimized Throughput (6000ms -> 72ms)', duration: 'Perf', description: 'Profiled and re-architected critical notification processing pipeline, reducing p95 latency from 6000ms to 72ms through batching, caching, and query optimization.' },
            { title: 'Hardened Security with Managed Identity', duration: 'Sec', description: 'Migrated service authentication from shared secrets to Azure Managed Identity, eliminating credential rotation overhead and reducing attack surface.' },
            { title: 'Expanded Multi-Channel Reach (Slack, WhatsApp)', duration: 'Feat', description: 'Designed and implemented extensible channel adapters for Slack and WhatsApp, enabling enterprise customers to reach users across new communication platforms.' },
        ]
    },
    samsung: {
        title: 'Samsung',
        role: ['Software Development Engineer'],
        year: '2023 - 2024',
        color: '#1428a0',
        tracks: [
            { title: 'Engineered No-Code ML Ops Platform', duration: 'Dev', description: 'Built a full-stack no-code platform enabling data scientists to train, evaluate, and deploy ML models without writing code, using React, Python, and Kubernetes.' },
            { title: 'Reduced Model Development Time by 87%', duration: 'Perf', description: 'Streamlined the ML pipeline with automated data preprocessing, hyperparameter tuning, and one-click deployment, cutting model development cycles from weeks to days.' },
            { title: 'Partnered with PM to Drive Roadmap', duration: 'PM', description: 'Collaborated closely with product management to prioritize features based on user research and business impact, shaping the quarterly roadmap and sprint planning.' },
            { title: 'Increased User Rating (3.6 -> 4.3)', duration: 'UX', description: 'Improved platform usability through iterative UI/UX enhancements, responsive design, and user feedback integration, resulting in a significant rating increase.' },
            { title: 'Automated E2E Integration Test Suites', duration: 'Test', description: 'Designed and implemented comprehensive end-to-end test suites using Selenium and pytest, achieving 90%+ coverage and reducing regression bugs by 60%.' },
        ]
    },
    amazon: {
        title: 'Amazon',
        role: ['Software Development Engineer'],
        year: '2022 - 2023',
        color: '#ff9900',
        tracks: [
            { title: 'Designed High-Availability Backend Services', duration: 'Arch', description: 'Architected and deployed distributed backend services on AWS with multi-AZ redundancy, achieving 99.99% uptime for seller-facing operations.' },
            { title: 'Supported 9.7M Global Sellers', duration: 'Scale', description: 'Built and maintained services handling high-throughput traffic from millions of global sellers, optimizing for low-latency responses and data consistency.' },
            { title: 'Automated Deployment Workflows', duration: 'DevOps', description: 'Created CI/CD pipelines using AWS CodePipeline and CDK, enabling zero-downtime deployments and reducing release cycle time by 40%.' },
            { title: 'Developed Python-based Telemetry Suite', duration: 'Data', description: 'Built a custom telemetry and observability framework in Python for real-time monitoring, anomaly detection, and operational dashboards.' },
        ]
    },
    tcs: {
        title: 'Tata Consultancy Services',
        role: ['Systems Engineer'],
        year: '2021 - 2022',
        color: '#5f6db0',
        tracks: [
            { title: 'Modernized Legacy Monoliths to REST', duration: 'Migra', description: 'Led the migration of legacy monolithic applications to RESTful microservices architecture, improving maintainability and enabling independent scaling of components.' },
            { title: 'Reduced Response Time by 80%', duration: 'Perf', description: 'Optimized database queries, introduced connection pooling, and implemented caching layers to reduce API response times by 80% across critical endpoints.' },
            { title: 'Developed Custom Logging Middleware', duration: 'Obs', description: 'Built centralized logging middleware for request tracing, error aggregation, and performance monitoring across distributed services.' },
        ]
    }
};
