import { Play } from 'lucide-react';
import {
    makeStyles,
    Text,
} from '@fluentui/react-components';

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
        marginBottom: '28px',
    },
    categoryTitle: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '24px',
    },
    videoCard: {
        cursor: 'pointer',
        transition: 'transform 0.15s ease',
        ':hover': {
            transform: 'translateY(-2px)',
        }
    },
    thumbnail: {
        width: '100%',
        aspectRatio: '16/9',
        backgroundColor: '#1a1a1a',
        borderRadius: '8px',
        marginBottom: '12px',
        position: 'relative',
        overflow: 'hidden',
    },
    thumbnailBg: {
        width: '100%',
        height: '100%',
    },
    hoverOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.45)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0,
        transition: 'opacity 0.2s ease',
    },
    videoCardHover: {
        ':hover': {
            '& > div:first-child > div:last-child': {
                opacity: 1,
            }
        }
    },
    details: {
        display: 'flex',
        gap: '12px',
    },
    avatar: {
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255,255,255,0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1rem',
        flexShrink: 0,
    },
    textInfo: {
        display: 'flex',
        flexDirection: 'column',
        gap: '2px',
    },
    meta: {
        color: '#aaa',
        fontSize: '12px',
    }
});

import { exploreProjects } from '../data/portfolio';

const projects = exploreProjects;

const Explore = () => {
    const styles = useStyles();

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.categoryTitle}>
                    <Text size={700} weight="bold">Projects & Demos</Text>
                </div>
            </div>

            <div className={styles.grid}>
                {projects.map((project, idx) => (
                    <div key={idx} className={`${styles.videoCard} ${styles.videoCardHover}`}>
                        <div className={styles.thumbnail}>
                            <div
                                className={styles.thumbnailBg}
                                style={{ background: `linear-gradient(135deg, #111, ${project.color})` }}
                            />
                            <div className={styles.hoverOverlay}>
                                <Play fill="white" size={48} />
                            </div>
                        </div>
                        <div className={styles.details}>
                            <div className={styles.avatar}>💻</div>
                            <div className={styles.textInfo}>
                                <Text weight="bold" size={400}>{project.title}</Text>
                                <Text size={200} className={styles.meta}>Saptarshi Das • {project.views} views • 2 days ago</Text>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Explore;
