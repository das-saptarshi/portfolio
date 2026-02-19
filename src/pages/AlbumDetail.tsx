import { useParams } from 'react-router-dom';
import { Play, Clock, MoreHorizontal, PlusCircle } from 'lucide-react';
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
    trackRow: {
        display: 'grid',
        gridTemplateColumns: '50px 1fr 80px',
        paddingTop: '14px',
        paddingRight: '16px',
        paddingBottom: '14px',
        paddingLeft: '16px',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
        color: '#ccc',
        cursor: 'pointer',
        borderRadius: '4px',
        transition: 'all 0.15s ease',
        ':hover': {
            backgroundColor: 'rgba(255,255,255,0.06)',
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
    }
});

const experienceData: Record<string, { title: string; role: string[]; year: string; color: string; tracks: { title: string; duration: string }[] }> = {
    microsoft: {
        title: 'Microsoft',
        role: ['Software Engineer', 'Software Engineer II'],
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
        role: ['Software Development Engineer'],
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
        role: ['Software Development Engineer'],
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
        role: ['Systems Engineer'],
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
    const albumData = libraryAlbums.find(a => a.id === (id || 'microsoft'));

    if (!data) return <div style={{ padding: '48px', color: '#888' }}>Album not found</div>;

    return (
        <div className={styles.container}>
            {/* Header */}
            <div
                className={styles.header}
                style={{ background: `linear-gradient(to bottom, ${data.color}40, transparent)` }}
            >
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
                {data.tracks.map((track, index) => (
                    <div
                        key={index}
                        className={styles.trackRow}
                    >
                        <span className={styles.trackIndex}>{index + 1}</span>
                        <Text className={styles.trackTitle}>{track.title}</Text>
                        <span className={styles.trackDuration}>{track.duration}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AlbumDetail;
