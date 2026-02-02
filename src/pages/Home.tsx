import { Play } from 'lucide-react';
import {
    makeStyles,
    shorthands,
    Button,
    Text
} from '@fluentui/react-components';

const useStyles = makeStyles({
    container: {
        paddingBottom: '2rem',
    },
    filters: {
        marginBottom: '2rem',
    },
    filterList: {
        display: 'flex',
        gap: '1rem',
        marginBottom: '2rem',
    },
    filterBadge: {
        backgroundColor: 'rgba(255,255,255,0.1)',
        color: '#ffffff',
        ':hover': {
            backgroundColor: 'rgba(255,255,255,0.2)',
            color: '#ffffff',
        }
    },
    filterBadgeActive: {
        backgroundColor: '#ffffff',
        color: '#000000',
        ':hover': {
            backgroundColor: '#e6e6e6',
            color: '#000000',
        }
    },
    section: {
        marginBottom: '3rem',
    },
    sectionHeader: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginBottom: '1rem',
    },
    subtitle: {
        color: '#aaa',
        textTransform: 'uppercase',
        display: 'block',
    },
    scrollContainer: {
        display: 'flex',
        gap: '1.5rem',
        overflowX: 'auto',
        paddingBottom: '1rem',
    },
    mixCard: {
        minWidth: '180px',
        cursor: 'pointer',
        position: 'relative',
        ':hover': {
            '& .hoverPlay': {
                display: 'flex'
            }
        }
    },
    cardArt: {
        width: '180px',
        height: '180px',
        ...shorthands.borderRadius('4px'),
        marginBottom: '0.75rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    cardTitle: {
        fontSize: '1.5rem',
        fontWeight: 800,
        color: 'rgba(0,0,0,0.5)',
    },
    hoverPlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.4)',
        display: 'none', // hidden by default
        alignItems: 'center',
        justifyContent: 'center',
    },
    moreButton: {
        color: '#aaa',
        ...shorthands.borderColor('#aaa'),
        minWidth: 'auto',
    }
});

const Home = () => {
    const styles = useStyles();

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
        <div className={styles.container}>
            <div className={styles.filters}>
                <div className={styles.filterList}>
                    <Button shape="rounded" className={styles.filterBadgeActive}>Relax</Button>
                    <Button shape="rounded" className={styles.filterBadge}>Energize</Button>
                    <Button shape="rounded" className={styles.filterBadge}>Focus</Button>
                    <Button shape="rounded" className={styles.filterBadge}>Commute</Button>
                </div>
            </div>

            {skillCategories.map((category, idx) => (
                <div key={idx} className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <div>
                            <Text size={200} className={styles.subtitle}>{category.subtitle}</Text>
                            <Text size={600} weight="bold">{category.title}</Text>
                        </div>
                        <Button appearance="outline" shape="circular" size="small" className={styles.moreButton}>More</Button>
                    </div>

                    <div className={styles.scrollContainer}>
                        {category.items.map((item, i) => (
                            <div key={i} className={styles.mixCard}>
                                <div className={styles.cardArt} style={{ backgroundColor: item.color }}>
                                    <span className={styles.cardTitle}>{item.name}</span>

                                    {/* Overlay Play Button */}
                                    <div className={`hoverPlay ${styles.hoverPlay}`}>
                                        <Play fill="white" size={48} />
                                    </div>
                                </div>
                                <Text block weight="semibold" size={400}>{item.name} Mix</Text>
                                <Text size={200} style={{ color: '#aaa' }}>Saptarshi Das • {Math.floor(Math.random() * 50) + 10} songs</Text>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Home;
