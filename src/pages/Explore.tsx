import { MonitorPlay } from 'lucide-react';

const Explore = () => {
    const projects = [
        { title: 'ML Ops Platform', desc: 'No-code platform reducing dev time by 87%', tag: 'Python' },
        { title: 'Mobile Assistance Backend', desc: 'Supporting 9.7M global sellers', tag: 'Java' },
        { title: 'Telemetry Suite', desc: 'Real-time operational insights', tag: 'Data' },
    ];

    return (
        <div>
            <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>New Music Videos</h2>
                <p style={{ color: '#aaa' }}>Based on your listening history</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {projects.map((project, idx) => (
                    <div key={idx} style={{ cursor: 'pointer' }}>
                        <div style={{
                            aspectRatio: '16/9', background: '#222', borderRadius: '8px', marginBottom: '1rem',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'
                        }}>
                            <MonitorPlay size={48} color="#555" />
                            <span style={{ position: 'absolute', bottom: 10, right: 10, background: 'rgba(0,0,0,0.8)', padding: '2px 6px', borderRadius: 4, fontSize: '0.8rem' }}>4:20</span>
                        </div>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{project.title}</h3>
                        <p style={{ color: '#aaa' }}>{project.desc} • {project.tag}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Explore;
