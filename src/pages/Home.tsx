import { Play } from 'lucide-react';

const Home = () => {

    const skillCategories = [
        {
            title: 'Your Favorites',
            subtitle: 'Languages & Core',
            items: [
                { name: 'Java', color: '#ff5252' },
                { name: 'Python', color: '#3776ab' },
                { name: 'System Design', color: '#ffffff' },
                { name: 'TypeScript', color: '#3178c6' },
            ]
        },
        {
            title: 'Cloud & Infrastructure',
            subtitle: 'Recommended for you',
            items: [
                { name: 'Azure', color: '#007fff' },
                { name: 'AWS', color: '#ff9900' },
                { name: 'Kubernetes', color: '#326ce5' },
                { name: 'Docker', color: '#2496ed' },
            ]
        },
        {
            title: 'Backend Hits',
            subtitle: 'Most Played',
            items: [
                { name: 'Spring Boot', color: '#6db33f' },
                { name: 'Microservices', color: '#ffffff' },
                { name: 'Node.js', color: '#6cc24a' },
                { name: 'Redis', color: '#d82c20' },
            ]
        }
    ];

    return (
        <div style={{ paddingBottom: '2rem' }}>
            <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                    <span style={{ padding: '0.5rem 1rem', background: '#333', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 600 }}>Relax</span>
                    <span style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 600 }}>Energize</span>
                    <span style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 600 }}>Focus</span>
                    <span style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 600 }}>Commute</span>
                </div>
            </div>

            {skillCategories.map((category, idx) => (
                <div key={idx} style={{ marginBottom: '3rem' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <div>
                            <span style={{ fontSize: '0.8rem', color: '#aaa', textTransform: 'uppercase' }}>{category.subtitle}</span>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{category.title}</h2>
                        </div>
                        <button style={{ background: 'transparent', border: '1px solid #aaa', color: '#aaa', padding: '0.25rem 0.75rem', borderRadius: '16px', fontSize: '0.8rem', cursor: 'pointer' }}>More</button>
                    </div>

                    <div style={{ display: 'flex', gap: '1.5rem', overflowX: 'auto', paddingBottom: '1rem' }}>
                        {category.items.map((item, i) => (
                            <div key={i} style={{ minWidth: '180px', cursor: 'pointer', position: 'relative' }} className="group">
                                <div style={{
                                    width: '180px', height: '180px', backgroundColor: item.color, borderRadius: '4px', marginBottom: '0.75rem',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'
                                }}>
                                    <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'rgba(0,0,0,0.5)' }}>{item.name}</span>

                                    {/* Overlay Play Button */}
                                    <div className="hover-play" style={{
                                        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.4)',
                                        display: 'none', alignItems: 'center', justifyContent: 'center'
                                    }}>
                                        <Play fill="white" size={48} />
                                    </div>
                                </div>
                                <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>{item.name} Mix</h3>
                                <p style={{ fontSize: '0.9rem', color: '#aaa' }}>Saptarshi Das • {Math.floor(Math.random() * 50) + 10} songs</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            <style>{`
        .group:hover .hover-play { display: flex; }
      `}</style>
        </div>
    );
};

export default Home;
