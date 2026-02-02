import { useNavigate } from 'react-router-dom';
import { Play } from 'lucide-react';

const Library = () => {
    const navigate = useNavigate();

    const albums = [
        { id: 'microsoft', title: 'Microsoft', role: 'Software Engineer II', coverColor: '#00a4ef', year: '2024' },
        { id: 'samsung', title: 'Samsung', role: 'SDE', coverColor: '#1428a0', year: '2023' },
        { id: 'amazon', title: 'Amazon', role: 'SDE', coverColor: '#ff9900', year: '2022' },
        { id: 'tcs', title: 'Tata Consultancy Services', role: 'Systems Engineer', coverColor: '#5f6db0', year: '2021' },
    ];

    return (
        <div>
            <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem' }}>Your Library</h1>

            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                {albums.map((album) => (
                    <div
                        key={album.id}
                        onClick={() => navigate(`/album/${album.id}`)}
                        style={{ width: '200px', cursor: 'pointer' }}
                        className="group"
                    >
                        <div style={{
                            width: '200px', height: '200px', background: `linear-gradient(45deg, ${album.coverColor}, #111)`,
                            borderRadius: '4px', marginBottom: '1rem', display: 'flex', flexDirection: 'column',
                            alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                            position: 'relative'
                        }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, textAlign: 'center', color: 'white', padding: '1rem' }}>{album.title}</h2>

                            {/* Overlay */}
                            <div className="hover-play" style={{
                                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.4)',
                                display: 'none', alignItems: 'center', justifyContent: 'center'
                            }}>
                                <Play fill="white" size={48} />
                            </div>
                        </div>
                        <h3 style={{ fontWeight: 700, fontSize: '1rem' }}>{album.title}</h3>
                        <p style={{ color: '#aaa', fontSize: '0.9rem' }}>Album • {album.role} • {album.year}</p>
                    </div>
                ))}
            </div>
            <style>{`
        .group:hover .hover-play { display: flex; }
      `}</style>
        </div>
    );
};

export default Library;
