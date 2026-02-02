import { Play } from 'lucide-react';
import {
    makeStyles,
    shorthands,
    Text,
    Button
} from '@fluentui/react-components';

const useStyles = makeStyles({
    container: {
        ...shorthands.padding('0', '0', '2rem', '0'),
    },
    header: {
        marginBottom: '2rem',
    },
    categoryTitle: {
        marginBottom: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '2rem',
    },
    videoCard: {
        cursor: 'pointer',
        ':hover': {
            '& .hoverOverlay': {
                display: 'flex'
            }
        }
    },
    thumbnail: {
        width: '100%',
        aspectRatio: '16/9',
        backgroundColor: '#333',
        ...shorthands.borderRadius('8px'),
        marginBottom: '1rem',
        position: 'relative',
        overflow: 'hidden',
    },
    thumbnailImg: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    hoverOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'none',
        alignItems: 'center',
        justifyContent: 'center',
    },
    details: {
        display: 'flex',
        gap: '1rem',
    },
    avatar: {
        width: '40px',
        height: '40px',
        ...shorthands.borderRadius('50%'),
        backgroundColor: '#555',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.2rem',
    },
    textInfo: {
        display: 'flex',
        flexDirection: 'column',
    },
    meta: {
        color: '#aaa',
    }
});

const projects = [
    {
        title: 'Distributed Rate Limiter',
        type: 'System Design',
        views: '1.2M',
        color: '#ff5252',
        desc: 'High-performance rate limiting architecture'
    },
    {
        title: 'Real-time Chat Engine',
        type: 'WebSocket',
        views: '840K',
        color: '#3776ab',
        desc: 'Scalable WebSocket implementation'
    },
    {
        title: 'GraphQL Federation',
        type: 'API Gateway',
        views: '2.1M',
        color: '#e535ab',
        desc: 'Unified graph schema for microservices'
    },
    {
        title: 'Kubernetes Operator',
        type: 'DevOps',
        views: '450K',
        color: '#326ce5',
        desc: 'Automating stateful deployments'
    },
    {
        title: 'Event Sourcing Demo',
        type: 'Architecture',
        views: '900K',
        color: '#6db33f',
        desc: 'CQRS and Event Sourcing patterns'
    }
];

const Explore = () => {
    const styles = useStyles();

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Button appearance="subtle" className={styles.categoryTitle}>
                    <Text size={500} weight="bold">New Music Videos</Text>
                </Button>
            </div>

            <div className={styles.grid}>
                {projects.map((project, idx) => (
                    <div key={idx} className={styles.videoCard}>
                        <div className={styles.thumbnail}>
                            <div
                                className={styles.thumbnailImg}
                                style={{ background: `linear-gradient(45deg, #111, ${project.color})` }}
                            />
                            <div className={`hoverOverlay ${styles.hoverOverlay}`}>
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
