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
