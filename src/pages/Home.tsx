import { useState } from 'react';
import { Search, User, ChevronLeft, ChevronRight } from 'lucide-react';
import {
    makeStyles,
    Button,
    Text,
    mergeClasses,
} from '@fluentui/react-components';

const useStyles = makeStyles({
    container: {
        paddingTop: '24px',
        paddingRight: '48px',
        paddingBottom: '2rem',
        paddingLeft: '48px',
        '@media (max-width: 768px)': {
            paddingTop: '16px',
            paddingRight: '16px',
            paddingBottom: '2rem',
            paddingLeft: '16px',
        },
    },
    /* ── Header bar ── */
    headerBar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        marginBottom: '24px',
    },
    searchContainer: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.08)',
        borderRadius: '24px',
        padding: '10px 20px',
        flex: 1,
        maxWidth: '540px',
        gap: '10px',
        border: '1px solid rgba(255,255,255,0.06)',
        transition: 'all 0.2s ease',
        ':hover': {
            backgroundColor: 'rgba(255,255,255,0.12)',
        },
        ':focus-within': {
            backgroundColor: 'rgba(255,255,255,0.14)',
            border: '1px solid rgba(255,255,255,0.2)',
        },
    },
    searchInput: {
        backgroundColor: 'transparent',
        border: 'none',
        color: '#fff',
        width: '100%',
        fontSize: '14px',
        fontFamily: 'inherit',
        ':focus': {
            outline: 'none',
        },
        '::placeholder': {
            color: '#888',
        }
    },
    profileActions: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        flexShrink: 0,
    },
    profileAvatar: {
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255,255,255,0.1)',
        border: '1px solid rgba(255,255,255,0.15)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        ':hover': {
            backgroundColor: 'rgba(255,255,255,0.2)',
            border: '1px solid rgba(255,255,255,0.3)',
        },
    },
    /* ── Category chips ── */
    chipRow: {
        display: 'flex',
        gap: '10px',
        overflowX: 'auto',
        paddingBottom: '8px',
        marginBottom: '28px',
        scrollbarWidth: 'none',
        '::-webkit-scrollbar': {
            display: 'none',
        },
    },
    chip: {
        padding: '8px 16px',
        borderRadius: '8px',
        backgroundColor: 'rgba(255,255,255,0.08)',
        color: '#ccc',
        fontSize: '13px',
        fontWeight: 500,
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        border: 'none',
        transition: 'all 0.15s ease',
        flexShrink: 0,
        fontFamily: 'inherit',
        ':hover': {
            backgroundColor: 'rgba(255,255,255,0.15)',
            color: '#fff',
        },
    },
    chipActive: {
        backgroundColor: '#fff',
        color: '#000',
        ':hover': {
            backgroundColor: '#e8e8e8',
            color: '#000',
        },
    },
    /* ── Profile section ── */
    profileSection: {
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        marginBottom: '36px',
    },
    profileImg: {
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        overflow: 'hidden',
        flexShrink: 0,
    },
    /* ── Sections ── */
    section: {
        marginBottom: '40px',
    },
    sectionHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '16px',
    },
    sectionLeft: {
        display: 'flex',
        flexDirection: 'column',
        gap: '2px',
    },
    sectionRight: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
    },
    carouselArrow: {
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        border: 'none',
        backgroundColor: 'rgba(255,255,255,0.08)',
        color: '#ccc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'all 0.15s ease',
        ':hover': {
            backgroundColor: 'rgba(255,255,255,0.18)',
            color: '#fff',
        },
    },
    moreButton: {
        color: '#aaa',
        border: '1px solid rgba(255,255,255,0.15)',
        minWidth: 'auto',
        borderRadius: '20px',
        padding: '4px 16px',
        fontSize: '12px',
        fontWeight: 500,
        transition: 'all 0.15s ease',
        ':hover': {
            border: '1px solid rgba(255,255,255,0.4)',
            color: '#fff',
        }
    },
    subtitle: {
        color: '#888',
        textTransform: 'uppercase',
        display: 'block',
        fontSize: '11px',
        letterSpacing: '1px',
    },
    /* ── Card carousel ── */
    scrollContainer: {
        display: 'flex',
        gap: '20px',
        overflowX: 'auto',
        paddingBottom: '8px',
        scrollbarWidth: 'none',
        '::-webkit-scrollbar': {
            display: 'none',
        },
    },
    mixCard: {
        minWidth: '200px',
        maxWidth: '200px',
        cursor: 'pointer',
        flexShrink: 0,
    },
    cardArt: {
        width: '200px',
        height: '200px',
        borderRadius: '4px',
        marginBottom: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
    },
    cardTitle: {
        fontSize: '1.3rem',
        fontWeight: 700,
        color: 'rgba(255,255,255,0.7)',
        textShadow: '0 2px 8px rgba(0,0,0,0.3)',
    },
    hoverOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.4)',
        opacity: 0,
        transition: 'opacity 0.2s ease',
    },
    cardArtHovered: {
        ':hover': {
            '& > div:last-child': {
                opacity: 1,
            }
        }
    },
    cardLabel: {
        marginTop: '4px',
    },
    cardDesc: {
        color: '#aaa',
        fontSize: '12px',
    },
});

import { homeCategories } from '../data/portfolio';

const chipLabels = ['All', 'Backend', 'Cloud', 'DevOps', 'Frontend', 'System Design'];

const Home = () => {
    const styles = useStyles();
    const [activeChip, setActiveChip] = useState(0);

    const skillCategories = homeCategories;

    return (
        <div className={styles.container}>
            {/* Header / Search */}
            <div className={styles.headerBar}>
                <div className={styles.searchContainer}>
                    <Search size={18} color="#888" />
                    <input type="text" placeholder="Search songs, albums, artists, podcasts" className={styles.searchInput} />
                </div>
                <div className={styles.profileActions}>
                    <div className={styles.profileAvatar}>
                        <User size={18} color="#ccc" />
                    </div>
                </div>
            </div>

            {/* Category Chips */}
            <div className={styles.chipRow}>
                {chipLabels.map((label, i) => (
                    <button
                        key={label}
                        className={mergeClasses(styles.chip, i === activeChip && styles.chipActive)}
                        onClick={() => setActiveChip(i)}
                    >
                        {label}
                    </button>
                ))}
            </div>

            {/* Profile Section */}
            <div className={styles.profileSection}>
                <div className={styles.profileImg}>
                    <img
                        src="https://ui-avatars.com/api/?name=Saptarshi+Das&background=333&color=fff"
                        alt="SD"
                        style={{ width: '100%', height: '100%', borderRadius: '50%' }}
                    />
                </div>
                <div>
                    <Text size={200} style={{ color: '#888', display: 'block', textTransform: 'uppercase', fontSize: '11px', letterSpacing: '1px' }}>Saptarshi Das</Text>
                    <Text size={600} weight="bold">Software Engineer</Text>
                </div>
            </div>

            {/* Skill Category Sections */}
            {skillCategories.map((category, idx) => (
                <div key={idx} className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.sectionLeft}>
                            <Text className={styles.subtitle}>{category.subtitle}</Text>
                            <Text size={600} weight="bold">{category.title}</Text>
                        </div>
                        <div className={styles.sectionRight}>
                            <button className={styles.carouselArrow}>
                                <ChevronLeft size={18} />
                            </button>
                            <button className={styles.carouselArrow}>
                                <ChevronRight size={18} />
                            </button>
                            <Button appearance="outline" shape="circular" size="small" className={styles.moreButton}>More</Button>
                        </div>
                    </div>

                    <div className={styles.scrollContainer}>
                        {category.items.map((item, i) => (
                            <div key={i} className={styles.mixCard}>
                                <div
                                    className={mergeClasses(styles.cardArt, styles.cardArtHovered)}
                                    style={{ backgroundColor: item.color }}
                                >
                                    <span className={styles.cardTitle}>{item.name}</span>
                                    <div className={styles.hoverOverlay} />
                                </div>
                                <Text block weight="semibold" size={400} className={styles.cardLabel}>{item.name}</Text>
                                <Text size={200} className={styles.cardDesc}>{item.desc}</Text>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Home;
