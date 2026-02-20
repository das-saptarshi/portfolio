import { useNavigate } from 'react-router-dom';
import { makeStyles, Text } from '@fluentui/react-components';

const useStyles = makeStyles({
    container: {
        padding: '32px 48px 2rem',
        '@media (max-width: 768px)': { padding: '20px 16px 2rem' },
    },
    title: { marginBottom: '28px' },
    grid: { display: 'flex', gap: '24px', flexWrap: 'wrap' },
    albumCard: {
        width: '200px',
        cursor: 'pointer',
        transition: 'transform 0.15s ease',
        ':hover': { transform: 'translateY(-2px)' },
    },
    coverArt: {
        width: '200px',
        height: '200px',
        borderRadius: '4px',
        marginBottom: '12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
        position: 'relative',
        overflow: 'hidden',
    },
    hoverOverlay: {
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.4)',
        zIndex: 20,
        opacity: 0,
        transition: 'opacity 0.2s ease',
    },
    albumCardHover: {
        ':hover': {
            '& > div:first-child > div:last-child': { opacity: 1 },
        },
    },
    albumTitle: { display: 'block', marginTop: '4px', fontSize: '14px' },
    albumDetails: { color: '#aaa', fontSize: '12px' },
});

import { libraryAlbums } from '../data/portfolio';

const Library = () => {
    const styles = useStyles();
    const navigate = useNavigate();
    const albums = libraryAlbums;

    return (
        <div className={styles.container}>
            <Text size={900} weight="bold" block className={styles.title}>Your Library</Text>

            <div className={styles.grid}>
                {albums.map((album) => (
                    <div
                        key={album.id}
                        onClick={() => navigate(`/album/${album.id}`)}
                        className={`${styles.albumCard} ${styles.albumCardHover}`}
                    >
                        <div
                            className={styles.coverArt}
                            style={{ background: `linear-gradient(45deg, ${album.coverColor}, #111)` }}
                        >
                            <img
                                src={`${import.meta.env.BASE_URL}${album.thumbnail}`}
                                alt={album.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
                            />

                            {/* Tinted overlay on hover */}
                            <div className={styles.hoverOverlay} />

                        </div>
                        <Text weight="bold" block className={styles.albumTitle}>{album.title}</Text>
                        <Text size={200} className={styles.albumDetails}>Album • {album.role.join(', ')} • {album.year}</Text>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Library;
