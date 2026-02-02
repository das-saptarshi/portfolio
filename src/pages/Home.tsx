import { Play, Search, Cast, User } from 'lucide-react';
import {
    makeStyles,
    Button,
    Text
} from '@fluentui/react-components';

const useStyles = makeStyles({
    container: {
        padding: '2rem',
    },
    headerBar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '2rem',
    },
    searchContainer: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#212121',
        borderRadius: '4px',
        padding: '0.5rem 1rem',
        width: '100%',
        maxWidth: '600px',
        gap: '0.5rem',
    },
    searchInput: {
        backgroundColor: 'transparent',
        border: 'none',
        color: '#fff',
        width: '100%',
        fontSize: '1rem',
        ':focus': {
            outline: 'none',
        }
    },
    profileActions: {
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
    },
    section: {
        margin: '3rem',
    },
    sectionHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '1rem',
    },
    profileHeader: {
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
        margin: '1rem',
    },
    smallAvatar: {
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        backgroundColor: '#555',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
        borderRadius: '4px',
        marginBottom: '0.75rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    cardTitle: {
        fontSize: '1.2rem',
        fontWeight: 700,
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
        border: '1px solid #aaa',
        minWidth: 'auto',
        borderRadius: '20px',
        padding: '4px 12px',
        fontSize: '0.8rem',
        ':hover': {
            border: '1px solid #fff',
            color: '#fff',
        }
    },
    subtitle: {
        color: '#aaa',
        textTransform: 'uppercase',
        display: 'block',
    }
});

import { homeCategories } from '../data/portfolio';

const Home = () => {
    const styles = useStyles();

    const skillCategories = homeCategories;

    return (
        <div className={styles.container}>
            {/* Header / Search */}
            <div className={styles.headerBar}>
                <div className={styles.searchContainer}>
                    <Search size={20} color="#aaa" />
                    <input type="text" placeholder="Search songs, albums, artists, podcasts" className={styles.searchInput} />
                </div>
                <div className={styles.profileActions}>
                    <div className={styles.smallAvatar}>
                        <User size={20} /> {/* Github Link on the User icon*/}
                    </div>
                </div>
            </div>

            {/* Profile Section */}
            <div className={styles.section}>
                <div className={styles.profileHeader}>
                    <div className={styles.smallAvatar}>
                        <img src="https://ui-avatars.com/api/?name=Saptarshi+Das" alt="SD" style={{ borderRadius: '50%' }} />
                    </div>
                    <div>
                        <Text size={200} style={{ color: '#aaa', display: 'block', textTransform: 'uppercase' }}>Saptarshi Das</Text>
                        <Text size={600} weight="bold">Software Engineer</Text>
                    </div>
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
                                    <div className={`hoverPlay ${styles.hoverPlay}`}>
                                    </div>
                                </div>
                                <Text block weight="semibold" size={400}>{item.name}</Text>
                                <Text size={200} style={{ color: '#aaa' }}>{item.desc}</Text>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Home;
