import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ChevronLeft, ChevronRight, Disc3, Video, Cpu } from 'lucide-react';
import { Command } from 'cmdk';
import { makeStyles, tokens, Button, Text, mergeClasses } from '@fluentui/react-components';
import { homeCategories, libraryAlbums, exploreProjects } from '../data/portfolio';

const useStyles = makeStyles({
    container: {
        padding: `${tokens.spacingVerticalXXL} 48px 2rem`,
        '@media (max-width: 768px)': { padding: `${tokens.spacingVerticalL} ${tokens.spacingHorizontalL} 2rem` },
    },
    headerBar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: tokens.spacingHorizontalL,
        marginBottom: tokens.spacingVerticalXXL,
    },
    searchWrapper: {
        position: 'relative',
        flex: 1,
        maxWidth: '540px',
    },
    profileActions: { display: 'flex', alignItems: 'center', gap: tokens.spacingHorizontalM, flexShrink: 0 },
    profileAvatar: {
        width: '32px',
        height: '32px',
        borderRadius: tokens.borderRadiusCircular,
        backgroundColor: 'rgba(255,255,255,0.1)',
        border: `${tokens.strokeWidthThin} solid rgba(255,255,255,0.15)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        ':hover': {
            backgroundColor: 'rgba(255,255,255,0.2)',
            border: `${tokens.strokeWidthThin} solid rgba(255,255,255,0.3)`,
        },
    },
    chipRow: {
        display: 'flex',
        gap: tokens.spacingHorizontalMNudge,
        overflowX: 'auto',
        paddingBottom: tokens.spacingVerticalS,
        marginBottom: '28px',
        scrollbarWidth: 'none',
        '::-webkit-scrollbar': { display: 'none' },
    },
    chip: {
        padding: `${tokens.spacingVerticalS} ${tokens.spacingHorizontalL}`,
        borderRadius: tokens.borderRadiusXLarge,
        backgroundColor: 'rgba(255,255,255,0.08)',
        color: tokens.colorNeutralForeground2,
        fontSize: '13px',
        fontWeight: tokens.fontWeightMedium,
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        border: 'none',
        transition: 'all 0.15s ease',
        flexShrink: 0,
        fontFamily: 'inherit',
        ':hover': { backgroundColor: 'rgba(255,255,255,0.15)', color: tokens.colorNeutralForeground1 },
    },
    chipActive: {
        backgroundColor: tokens.colorNeutralForeground1,
        color: tokens.colorNeutralBackground1,
        ':hover': { backgroundColor: '#e8e8e8', color: tokens.colorNeutralBackground1 },
    },
    profileSection: { display: 'flex', alignItems: 'center', gap: tokens.spacingHorizontalL, marginBottom: '36px' },
    profileImg: { width: '36px', height: '36px', borderRadius: tokens.borderRadiusCircular, overflow: 'hidden', flexShrink: 0 },
    section: { marginBottom: '40px' },
    sectionHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: tokens.spacingVerticalL,
    },
    sectionLeft: { display: 'flex', flexDirection: 'column', gap: tokens.spacingVerticalXXS },
    sectionRight: { display: 'flex', alignItems: 'center', gap: tokens.spacingHorizontalS },
    carouselArrow: {
        width: '36px',
        height: '36px',
        borderRadius: tokens.borderRadiusCircular,
        border: 'none',
        backgroundColor: 'rgba(255,255,255,0.08)',
        color: tokens.colorNeutralForeground2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'all 0.15s ease',
        ':hover': { backgroundColor: 'rgba(255,255,255,0.18)', color: tokens.colorNeutralForeground1 },
    },
    moreButton: {
        color: tokens.colorNeutralForeground3,
        border: `${tokens.strokeWidthThin} solid rgba(255,255,255,0.15)`,
        minWidth: 'auto',
        borderRadius: '20px',
        padding: `${tokens.spacingVerticalXS} ${tokens.spacingHorizontalL}`,
        fontSize: tokens.fontSizeBase200,
        fontWeight: tokens.fontWeightMedium,
        transition: 'all 0.15s ease',
        ':hover': { border: `${tokens.strokeWidthThin} solid rgba(255,255,255,0.4)`, color: tokens.colorNeutralForeground1 },
    },
    subtitle: {
        color: tokens.colorNeutralForeground4,
        textTransform: 'uppercase',
        display: 'block',
        fontSize: '11px',
        letterSpacing: '1px',
    },
    scrollContainer: {
        display: 'flex',
        gap: tokens.spacingHorizontalXL,
        overflowX: 'auto',
        paddingBottom: tokens.spacingVerticalS,
        scrollbarWidth: 'none',
        '::-webkit-scrollbar': { display: 'none' },
    },
    mixCard: { minWidth: '200px', maxWidth: '200px', cursor: 'pointer', flexShrink: 0 },
    cardArt: {
        width: '200px',
        height: '200px',
        borderRadius: tokens.borderRadiusMedium,
        marginBottom: tokens.spacingVerticalMNudge,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
    },
    cardTitle: {
        fontSize: '1.3rem',
        fontWeight: tokens.fontWeightBold,
        color: 'rgba(255,255,255,0.7)',
        textShadow: '0 2px 8px rgba(0,0,0,0.3)',
    },
    hoverOverlay: {
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.4)',
        opacity: 0,
        transition: 'opacity 0.2s ease',
    },
    cardArtHovered: {
        ':hover': {
            '& > div:last-child': { opacity: 1 },
        },
    },
    cardLabel: { marginTop: tokens.spacingVerticalXS },
    cardDesc: { color: tokens.colorNeutralForeground3, fontSize: tokens.fontSizeBase200 },
});

// Flatten skills for search
const allSkills = homeCategories.flatMap(c => c.items);

const chipLabels = ['All', 'Backend', 'Cloud', 'DevOps', 'Frontend', 'System Design'];

const Home = () => {
    const styles = useStyles();
    const navigate = useNavigate();
    const [activeChip, setActiveChip] = useState(0);
    const [search, setSearch] = useState('');
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const skillCategories = homeCategories;

    // Close dropdown on outside click
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.headerBar}>
                <div className={styles.searchWrapper} ref={wrapperRef}>
                    <Command
                        label="Search portfolio"
                        shouldFilter={true}
                        loop
                        filter={(value, search) => {
                            if (value.toLowerCase().includes(search.toLowerCase())) return 1;
                            return 0;
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                backgroundColor: 'rgba(255,255,255,0.08)',
                                borderRadius: '24px',
                                padding: '7px 20px',
                                gap: '10px',
                                border: '1px solid rgba(255,255,255,0.06)',
                                transition: 'all 0.2s ease',
                            }}
                        >
                            <Search size={18} color="#888" />
                            <Command.Input
                                value={search}
                                onValueChange={(v) => { setSearch(v); setOpen(v.length > 0); }}
                                onFocus={() => { if (search) setOpen(true); }}
                                placeholder="Search companies, projects, skills..."
                                style={{
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    color: '#fff',
                                    width: '100%',
                                    fontSize: '14px',
                                    fontFamily: 'inherit',
                                    outline: 'none',
                                }}
                            />
                        </div>

                        <Command.List
                            style={{
                                position: 'absolute',
                                top: 'calc(100% + 8px)',
                                left: 0,
                                right: 0,
                                backgroundColor: '#1e1e1e',
                                border: '1px solid rgba(255,255,255,0.12)',
                                borderRadius: '12px',
                                boxShadow: '0 16px 48px rgba(0,0,0,0.5)',
                                zIndex: 1000,
                                maxHeight: open ? '420px' : '0px',
                                overflow: open ? 'auto' : 'hidden',
                                opacity: open ? 1 : 0,
                                transform: open ? 'translateY(0)' : 'translateY(-4px)',
                                transition: 'opacity 0.2s ease, transform 0.2s ease, max-height 0.2s ease',
                                scrollbarWidth: 'none',
                                padding: open ? '6px 0' : '0',
                            }}
                        >
                            <Command.Empty
                                style={{
                                    padding: '24px',
                                    textAlign: 'center',
                                    color: '#666',
                                    fontSize: '14px',
                                }}
                            >
                                No results for &ldquo;{search}&rdquo;
                            </Command.Empty>

                            <Command.Group
                                heading="Albums"
                                style={{}}
                            >
                                {libraryAlbums.map(album => (
                                    <Command.Item
                                        key={album.id}
                                        value={`${album.title} ${album.role.join(' ')}`}
                                        keywords={[album.title, ...album.role]}
                                        onSelect={() => { navigate(`/album/${album.id}`); setOpen(false); setSearch(''); }}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                            padding: '8px 16px',
                                            cursor: 'pointer',
                                            borderRadius: '6px',
                                            margin: '0 6px',
                                            transition: 'background-color 0.12s ease',
                                        }}
                                    >
                                        <div style={{
                                            width: '36px', height: '36px', borderRadius: '6px',
                                            backgroundColor: album.coverColor,
                                            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                                        }}>
                                            <Disc3 size={18} color="rgba(255,255,255,0.7)" />
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                                            <span style={{ fontSize: '14px', fontWeight: 500, color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{album.title}</span>
                                            <span style={{ fontSize: '12px', color: '#666' }}>{album.role.join(', ')} • {album.year}</span>
                                        </div>
                                    </Command.Item>
                                ))}
                            </Command.Group>

                            <Command.Group heading="Videos">
                                {exploreProjects.map(project => (
                                    <Command.Item
                                        key={project.id}
                                        value={`${project.title} ${project.type} ${project.desc}`}
                                        keywords={[project.title, project.type, project.desc]}
                                        onSelect={() => { navigate(`/project/${project.id}`); setOpen(false); setSearch(''); }}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                            padding: '8px 16px',
                                            cursor: 'pointer',
                                            borderRadius: '6px',
                                            margin: '0 6px',
                                            transition: 'background-color 0.12s ease',
                                        }}
                                    >
                                        <div style={{
                                            width: '36px', height: '36px', borderRadius: '6px',
                                            backgroundColor: project.color,
                                            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                                        }}>
                                            <Video size={18} color="rgba(255,255,255,0.7)" />
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                                            <span style={{ fontSize: '14px', fontWeight: 500, color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{project.title}</span>
                                            <span style={{ fontSize: '12px', color: '#666' }}>{project.type} • {project.views} views</span>
                                        </div>
                                    </Command.Item>
                                ))}
                            </Command.Group>

                            <Command.Group heading="Skills">
                                {allSkills.map(skill => (
                                    <Command.Item
                                        key={skill.name}
                                        value={`${skill.name} ${skill.desc}`}
                                        keywords={[skill.name, skill.desc]}
                                        onSelect={() => { setOpen(false); setSearch(''); }}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                            padding: '8px 16px',
                                            cursor: 'pointer',
                                            borderRadius: '6px',
                                            margin: '0 6px',
                                            transition: 'background-color 0.12s ease',
                                        }}
                                    >
                                        <div style={{
                                            width: '36px', height: '36px', borderRadius: '6px',
                                            backgroundColor: skill.color,
                                            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                                        }}>
                                            <Cpu size={18} color="rgba(255,255,255,0.7)" />
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                                            <span style={{ fontSize: '14px', fontWeight: 500, color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{skill.name}</span>
                                            <span style={{ fontSize: '12px', color: '#666' }}>{skill.desc}</span>
                                        </div>
                                    </Command.Item>
                                ))}
                            </Command.Group>
                        </Command.List>
                    </Command>
                </div>

                <div className={styles.profileActions}>
                    <div className={styles.profileAvatar}>
                        <img src={`${import.meta.env.BASE_URL}website/images/headshot.jpg`} alt="SD" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                    </div>
                </div>
            </div>

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

            <div className={styles.profileSection}>
                <div className={styles.profileImg}>
                    <img
                        src={`${import.meta.env.BASE_URL}website/images/headshot.jpg`}
                        alt="SD"
                        style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
                    />
                </div>
                <div>
                    <Text size={200} style={{ color: tokens.colorNeutralForeground4, display: 'block', textTransform: 'uppercase', fontSize: '11px', letterSpacing: '1px' }}>Saptarshi Das</Text>
                    <Text size={600} weight="bold">Software Engineer</Text>
                </div>
            </div>

            {skillCategories.map((category, idx) => (
                <div key={idx} className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.sectionLeft}>
                            <Text className={styles.subtitle}>{category.subtitle}</Text>
                            <Text size={600} weight="bold">{category.title}</Text>
                        </div>
                        <div className={styles.sectionRight}>
                            <button className={styles.carouselArrow}><ChevronLeft size={18} /></button>
                            <button className={styles.carouselArrow}><ChevronRight size={18} /></button>
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
