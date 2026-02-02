import { useParams } from 'react-router-dom';
import { Play, Clock, MoreHorizontal, PlusCircle } from 'lucide-react';
import {
    makeStyles,
    shorthands,
    Text,
    Button
} from '@fluentui/react-components';

const useStyles = makeStyles({
    header: {
        display: 'flex',
        alignItems: 'flex-end',
        gap: '2rem',
        ...shorthands.padding('2rem', '0'),
    },
    albumArt: {
        width: '200px',
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
    },
    albumInitial: {
        fontSize: '3rem',
        fontWeight: 800,
        color: 'white',
    },
    albumType: {
        fontSize: '0.9rem',
        textTransform: 'uppercase',
        fontWeight: 700,
        display: 'block',
    },
    title: {
        fontSize: '3rem',
        fontWeight: 900,
        marginBottom: '0.5rem',
        display: 'block',
    },
    meta: {
        color: '#ccc',
        display: 'block',
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
        ...shorthands.padding('1rem', '0'),
    },
    playButton: {
        width: '56px',
        height: '56px',
        ...shorthands.borderRadius('50%'),
        backgroundColor: 'white',
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        ...shorthands.border('none'),
    },
    trackList: {
        marginTop: '2rem',
    },
    trackHeader: {
        display: 'grid',
        gridTemplateColumns: '50px 1fr 100px',
        ...shorthands.padding('0.5rem', '1rem'),
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        color: '#aaa',
        fontSize: '0.9rem',
    },
    headerTime: {
        textAlign: 'right',
    },
    trackRow: {
        display: 'grid',
        gridTemplateColumns: '50px 1fr 100px',
        ...shorthands.padding('1rem', '1rem'),
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        color: '#ccc',
        cursor: 'pointer',
        ':hover': {
            backgroundColor: 'rgba(255,255,255,0.1)',
            color: 'white',
        }
    },
    trackDuration: {
        textAlign: 'right',
        fontSize: '0.85rem',
    },
    trackTitle: {
        fontWeight: 500,
    }
});

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
    const styles = useStyles();
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
                    <Text className={styles.albumInitial}>{data.title[0]}</Text>
                </div>
                <div>
                    <Text className={styles.albumType}>Album</Text>
                    <Text className={styles.title}>{data.title}</Text>
                    <Text className={styles.meta}>{data.role} • {data.year} • {data.tracks.length} songs</Text>
                </div>
            </div>

            {/* Controls */}
            <div className={styles.controls}>
                <button className={styles.playButton}>
                    <Play fill="black" size={28} style={{ marginLeft: 4 }} />
                </button>
                <Button appearance="transparent" icon={<PlusCircle size={32} color="#ccc" />} />
                <Button appearance="transparent" icon={<MoreHorizontal size={32} color="#ccc" />} />
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
                        <Text className={styles.trackTitle}>{track.title}</Text>
                        <span className={styles.trackDuration}>{track.duration}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AlbumDetail;
