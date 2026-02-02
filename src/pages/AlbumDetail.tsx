import { useParams } from 'react-router-dom';
import { Play, Clock, MoreHorizontal, PlusCircle } from 'lucide-react';

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
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2rem', padding: '2rem 0', background: `linear-gradient(to bottom, ${data.color}22, transparent)` }}>
                <div style={{
                    width: 200, height: 200, background: `linear-gradient(135deg, ${data.color}, #000)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: 800, color: 'white' }}>{data.title[0]}</h1>
                </div>
                <div>
                    <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', fontWeight: 700 }}>Album</span>
                    <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '0.5rem' }}>{data.title}</h1>
                    <p style={{ color: '#ccc' }}>{data.role} • {data.year} • {data.tracks.length} songs</p>
                </div>
            </div>

            {/* Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', padding: '1rem 0' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'white', color: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                    <Play fill="black" size={28} style={{ marginLeft: 4 }} />
                </div>
                <PlusCircle size={32} color="#ccc" />
                <MoreHorizontal size={32} color="#ccc" />
            </div>

            {/* List */}
            <div style={{ marginTop: '2rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '50px 1fr 100px', padding: '0.5rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#aaa', fontSize: '0.9rem' }}>
                    <span>#</span>
                    <span>Title</span>
                    <span style={{ textAlign: 'right' }}><Clock size={16} /></span>
                </div>
                {data.tracks.map((track: any, index: number) => (
                    <div
                        key={index}
                        className="track-row"
                        style={{ display: 'grid', gridTemplateColumns: '50px 1fr 100px', padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#ccc', cursor: 'pointer' }}
                    >
                        <span className="track-index">{index + 1}</span>
                        <span style={{ fontWeight: 500 }}>{track.title}</span>
                        <span style={{ textAlign: 'right', fontSize: '0.85rem' }}>{track.duration}</span>
                    </div>
                ))}
            </div>
            <style>{`
        .track-row:hover { background-color: rgba(255,255,255,0.1); color: white; }
      `}</style>
        </div>
    );
};

export default AlbumDetail;
