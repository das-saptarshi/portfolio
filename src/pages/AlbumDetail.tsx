import { useParams } from 'react-router-dom';
import { Play, Clock, MoreHorizontal, PlusCircle } from 'lucide-react';
import styles from './AlbumDetail.module.css';

const experienceData: any = {
    microsoft: {
        title: 'Microsoft',
        role: 'Software Engineer II',
        year: '2024 - Present',
        color: '#00a4ef',
        tracks: [
            { title: 'Led Scalability & Reliability Squad', duration: 'Lead' },
            { title: 'Eliminated Weekend SLA Breaches', duration: 'Sev-2' },
            { title: 'Optimized Throughput (6000ms -> 72ms)', duration: 'Perf' },
            { title: 'Hardened Security with Managed Identity', duration: 'Sec' },
            { title: 'Expanded Multi-Channel Reach (Slack, WhatsApp)', duration: 'Feat' },
        ]
    },
    samsung: {
        title: 'Samsung',
        role: 'Software Development Engineer',
        year: '2023 - 2024',
        color: '#1428a0',
        tracks: [
            { title: 'Engineered No-Code ML Ops Platform', duration: 'Dev' },
            { title: 'Reduced Model Development Time by 87%', duration: 'Perf' },
            { title: 'Partnered with PM to Drive Roadmap', duration: 'PM' },
            { title: 'Increased User Rating (3.6 -> 4.3)', duration: 'UX' },
            { title: 'Automated E2E Integration Test Suites', duration: 'Test' },
        ]
    },
    amazon: {
        title: 'Amazon',
        role: 'SDE',
        year: '2022 - 2023',
        color: '#ff9900',
        tracks: [
            { title: 'Designed High-Availability Backend Services', duration: 'Arch' },
            { title: 'Supported 9.7M Global Sellers', duration: 'Scale' },
            { title: 'Automated Deployment Workflows', duration: 'DevOps' },
            { title: 'Developed Python-based Telemetry Suite', duration: 'Data' },
        ]
    },
    tcs: {
        title: 'Tata Consultancy Services',
        role: 'Systems Engineer',
        year: '2021 - 2022',
        color: '#5f6db0',
        tracks: [
            { title: 'Modernized Legacy Monoliths to REST', duration: 'Migra' },
            { title: 'Reduced Response Time by 80%', duration: 'Perf' },
            { title: 'Developed Custom Logging Middleware', duration: 'Obs' },
        ]
    }
};

const AlbumDetail = () => {
    const { id } = useParams();
    const data = experienceData[id || 'microsoft'];

    if (!data) return <div>Album not found</div>;

    return (
        <div>
            {/* Header */}
            <div
                className={styles.header}
                style={{ background: `linear-gradient(to bottom, ${data.color}22, transparent)` }}
            >
                <div
                    className={styles.albumArt}
                    style={{ background: `linear-gradient(135deg, ${data.color}, #000)` }}
                >
                    <h1 className={styles.albumInitial}>{data.title[0]}</h1>
                </div>
                <div>
                    <span className={styles.albumType}>Album</span>
                    <h1 className={styles.title}>{data.title}</h1>
                    <p className={styles.meta}>{data.role} • {data.year} • {data.tracks.length} songs</p>
                </div>
            </div>

            {/* Controls */}
            <div className={styles.controls}>
                <div className={styles.playButton}>
                    <Play fill="black" size={28} className={styles.playIcon} />
                </div>
                <PlusCircle size={32} color="#ccc" />
                <MoreHorizontal size={32} color="#ccc" />
            </div>

            {/* List */}
            <div className={styles.trackList}>
                <div className={styles.trackHeader}>
                    <span>#</span>
                    <span>Title</span>
                    <span className={styles.headerTime}><Clock size={16} /></span>
                </div>
                {data.tracks.map((track: any, index: number) => (
                    <div
                        key={index}
                        className={styles.trackRow}
                    >
                        <span className="track-index">{index + 1}</span>
                        <span className={styles.trackTitle}>{track.title}</span>
                        <span className={styles.trackDuration}>{track.duration}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AlbumDetail;
