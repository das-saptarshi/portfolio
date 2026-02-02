import { useNavigate } from 'react-router-dom';
import { Play } from 'lucide-react';
import styles from './Library.module.css';

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
            <h1 className={styles.title}>Your Library</h1>

            <div className={styles.grid}>
                {albums.map((album) => (
                    <div
                        key={album.id}
                        onClick={() => navigate(`/album/${album.id}`)}
                        className={styles.albumCard}
                    >
                        <div
                            className={styles.coverArt}
                            style={{ background: `linear-gradient(45deg, ${album.coverColor}, #111)` }}
                        >
                            <h2 className={styles.companyName}>{album.title}</h2>

                            {/* Overlay */}
                            <div className={styles.hoverPlay}>
                                <Play fill="white" size={48} />
                            </div>
                        </div>
                        <h3 className={styles.albumTitle}>{album.title}</h3>
                        <p className={styles.albumDetails}>Album • {album.role} • {album.year}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Library;
