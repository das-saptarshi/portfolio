import { useNavigate } from 'react-router-dom';
import { Play } from 'lucide-react';
import {
    makeStyles,
    shorthands,
    Text
} from '@fluentui/react-components';

const useStyles = makeStyles({
    title: {
        marginBottom: '2rem',
    },
    grid: {
        display: 'flex',
        gap: '2rem',
        flexWrap: 'wrap',
    },
    albumCard: {
        width: '200px',
        cursor: 'pointer',
        ':hover': {
            '& .hoverPlay': {
                display: 'flex'
            }
        }
    },
    coverArt: {
        width: '200px',
        height: '200px',
        ...shorthands.borderRadius('4px'),
        marginBottom: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
        position: 'relative',
        overflow: 'hidden',
    },
    companyName: {
        fontSize: '1.5rem',
        fontWeight: 800,
        textAlign: 'center',
        color: 'white',
        ...shorthands.padding('1rem'),
        zIndex: 10,
    },
    hoverPlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.4)',
        display: 'none',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 20,
    },
    albumTitle: {
        display: 'block',
        marginTop: '0.5rem',
    },
    albumDetails: {
        color: '#aaa',
    }
});

const Library = () => {
    const styles = useStyles();
    const navigate = useNavigate();

    const albums = [
        { id: 'microsoft', title: 'Microsoft', role: 'Software Engineer II', coverColor: '#00a4ef', year: '2024' },
        { id: 'samsung', title: 'Samsung', role: 'SDE', coverColor: '#1428a0', year: '2023' },
        { id: 'amazon', title: 'Amazon', role: 'SDE', coverColor: '#ff9900', year: '2022' },
        { id: 'tcs', title: 'Tata Consultancy Services', role: 'Systems Engineer', coverColor: '#5f6db0', year: '2021' },
    ];

    return (
        <div>
            <Text size={900} weight="bold" block className={styles.title}>Your Library</Text>

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
                            <Text className={styles.companyName}>{album.title}</Text>

                            {/* Overlay */}
                            <div className={`hoverPlay ${styles.hoverPlay}`}>
                                <Play fill="white" size={48} />
                            </div>
                        </div>
                        <Text weight="bold" block className={styles.albumTitle}>{album.title}</Text>
                        <Text size={200} className={styles.albumDetails}>Album • {album.role} • {album.year}</Text>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Library;
