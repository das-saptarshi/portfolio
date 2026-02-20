import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Play, Clock, MoreHorizontal, PlusCircle, ChevronDown } from 'lucide-react';
import {
    makeStyles,
    Text,
    Button
} from '@fluentui/react-components';
import { libraryAlbums } from '../data/portfolio';

const useStyles = makeStyles({
    container: {
        paddingTop: '32px',
        paddingRight: '48px',
        paddingBottom: '2rem',
        paddingLeft: '48px',
        '@media (max-width: 768px)': {
            paddingTop: '20px',
            paddingRight: '16px',
            paddingBottom: '2rem',
            paddingLeft: '16px',
        },
    },
    header: {
        display: 'flex',
        alignItems: 'flex-end',
        gap: '28px',
        paddingTop: '1rem',
        paddingBottom: '2rem',
        '@media (max-width: 768px)': {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        },
    },
    albumArt: {
        width: '220px',
        height: '220px',
        borderRadius: '4px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
        flexShrink: 0,
        overflow: 'hidden',
        position: 'relative',
    },
    albumArtImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    albumType: {
        fontSize: '12px',
        textTransform: 'uppercase',
        fontWeight: 700,
        display: 'block',
        color: '#aaa',
        letterSpacing: '1px',
    },
    title: {
        fontSize: '2.8rem',
        fontWeight: 900,
        marginBottom: '6px',
        display: 'block',
        lineHeight: 1.1,
    },
    meta: {
        color: '#aaa',
        display: 'block',
        fontSize: '14px',
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        paddingBottom: '8px',
    },
    playButton: {
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        backgroundColor: 'white',
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        border: 'none',
        transition: 'transform 0.15s ease, box-shadow 0.15s ease',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        ':hover': {
            transform: 'scale(1.06)',
            boxShadow: '0 6px 20px rgba(0,0,0,0.4)',
        },
    },
    actionIcon: {
        color: '#888',
        transition: 'color 0.15s ease',
        ':hover': {
            color: '#fff',
        },
    },
    trackList: {
        marginTop: '24px',
    },
    trackHeader: {
        display: 'grid',
        gridTemplateColumns: '50px 1fr 80px',
        paddingTop: '8px',
        paddingRight: '16px',
        paddingBottom: '8px',
        paddingLeft: '16px',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        color: '#888',
        fontSize: '12px',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
    },
    headerTime: {
        textAlign: 'right',
    },
    trackItem: {
        borderBottom: '1px solid rgba(255,255,255,0.04)',
        borderRadius: '4px',
        transition: 'background-color 0.15s ease',
        ':hover': {
            backgroundColor: 'rgba(255,255,255,0.06)',
        }
    },
    trackItemExpanded: {
        backgroundColor: 'rgba(255,255,255,0.04)',
    },
    trackRow: {
        display: 'grid',
        gridTemplateColumns: '50px 1fr 40px 40px',
        paddingTop: '14px',
        paddingRight: '16px',
        paddingBottom: '14px',
        paddingLeft: '16px',
        color: '#ccc',
        cursor: 'pointer',
        alignItems: 'center',
        transition: 'color 0.15s ease',
        ':hover': {
            color: 'white',
        }
    },
    trackIndex: {
        color: '#666',
        fontSize: '14px',
    },
    trackDuration: {
        textAlign: 'right',
        fontSize: '13px',
        color: '#888',
    },
    trackTitle: {
        fontWeight: 500,
        fontSize: '14px',
    },
    trackChevron: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#888',
        transition: 'transform 0.25s ease',
    },
    trackChevronExpanded: {
        transform: 'rotate(180deg)',
    },
    trackDescription: {
        overflow: 'hidden',
        transition: 'max-height 0.3s ease, opacity 0.25s ease, padding 0.3s ease',
        maxHeight: '0px',
        opacity: 0,
        paddingTop: '0px',
        paddingRight: '16px',
        paddingBottom: '0px',
        paddingLeft: '66px',
    },
    trackDescriptionExpanded: {
        maxHeight: '200px',
        opacity: 1,
        paddingTop: '0px',
        paddingRight: '16px',
        paddingBottom: '14px',
        paddingLeft: '66px',
    },
    descriptionText: {
        color: '#aaa',
        fontSize: '13px',
        lineHeight: '1.6',
    },
});

interface Track {
    title: string;
    duration: string;
    description: string;
}

const experienceData: Record<string, { title: string; role: string[]; year: string; color: string; tracks: Track[] }> = {
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

const AlbumDetail = () => {
    const styles = useStyles();
    const { id } = useParams();
    const data = experienceData[id || 'microsoft'];
    const albumData = libraryAlbums.find(a => a.id === (id || 'microsoft'));
    const [expandedTrack, setExpandedTrack] = useState<number | null>(null);

    if (!data) return <div style={{ padding: '48px', color: '#888' }}>Album not found</div>;

    return (
        <div
            className={styles.container}
            style={{ background: `linear-gradient(to bottom, ${data.color}55 0%, ${data.color}20 40%, transparent 100%)` }}
        >
            {/* Header */}
            <div className={styles.header}>
                <div
                    className={styles.albumArt}
                    style={{ background: `linear-gradient(135deg, ${data.color}, #000)` }}
                >
                    {albumData?.thumbnail && (
                        <img
                            src={`${import.meta.env.BASE_URL}${albumData.thumbnail}`}
                            alt={data.title}
                            className={styles.albumArtImage}
                        />
                    )}
                </div>
                <div>
                    <Text className={styles.albumType}>Album</Text>
                    <Text className={styles.title}>{data.title}</Text>
                    <Text className={styles.meta}>{data.role.join(', ')} • {data.year} • {data.tracks.length} songs</Text>
                </div>
            </div>

            {/* Controls */}
            <div className={styles.controls}>
                <button className={styles.playButton}>
                    <Play fill="black" size={28} style={{ marginLeft: 4 }} />
                </button>
                <Button appearance="transparent" icon={<PlusCircle size={28} color="#888" />} className={styles.actionIcon} />
                <Button appearance="transparent" icon={<MoreHorizontal size={28} color="#888" />} className={styles.actionIcon} />
            </div>

            {/* List */}
            <div className={styles.trackList}>
                <div className={styles.trackHeader}>
                    <span>#</span>
                    <span>Title</span>
                    <span className={styles.headerTime}><Clock size={14} /></span>
                </div>
                {data.tracks.map((track, index) => {
                    const isExpanded = expandedTrack === index;
                    return (
                        <div
                            key={index}
                            className={`${styles.trackItem} ${isExpanded ? styles.trackItemExpanded : ''}`}
                        >
                            <div
                                className={styles.trackRow}
                                onClick={() => setExpandedTrack(isExpanded ? null : index)}
                            >
                                <span className={styles.trackIndex}>{index + 1}</span>
                                <Text className={styles.trackTitle}>{track.title}</Text>
                                <span className={styles.trackDuration}>{track.duration}</span>
                                <span className={`${styles.trackChevron} ${isExpanded ? styles.trackChevronExpanded : ''}`}>
                                    <ChevronDown size={16} />
                                </span>
                            </div>
                            <div className={`${styles.trackDescription} ${isExpanded ? styles.trackDescriptionExpanded : ''}`}>
                                <Text className={styles.descriptionText}>{track.description}</Text>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AlbumDetail;
