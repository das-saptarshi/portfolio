import { useState } from 'react';
import { Play, SkipBack, SkipForward, Repeat, Shuffle, Volume2, ChevronDown, MoreHorizontal } from 'lucide-react';
import { bio, experience, skills } from '../../data/portfolio';
import {
    makeStyles,
    tokens,
    Button,
    Text,
    mergeClasses
} from '@fluentui/react-components';

const useStyles = makeStyles({
    player: {
        height: '80px',
        width: '100%',
        backgroundColor: '#212121', // Dark grey background
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: `0 ${tokens.spacingHorizontalL}`, // Reduced padding
        position: 'fixed',
        bottom: 0,
        zIndex: 100,
    },
    topProgressBar: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '3px',
        backgroundColor: '#555',
        cursor: 'pointer',
        ':hover': {
            height: '5px',
        }
    },
    progressFill: {
        height: '100%',
        backgroundColor: '#ff0000', // YouTube Red
    },
    leftControls: {
        display: 'flex',
        alignItems: 'center',
        gap: tokens.spacingHorizontalXL,
        minWidth: '200px',
    },
    transportControls: {
        display: 'flex',
        alignItems: 'center',
        gap: tokens.spacingHorizontalL,
        color: '#fff',
    },
    playPause: {
        width: '32px',
        height: '32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color: '#fff',
    },
    centerTrackInfo: {
        display: 'flex',
        alignItems: 'center',
        gap: tokens.spacingHorizontalL,
        flex: 1,
        justifyContent: 'center',
    },
    albumArt: {
        width: '40px',
        height: '40px',
        borderRadius: '4px',
        overflow: 'hidden',
        backgroundColor: '#333',
    },
    trackDetails: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    titleText: {
        color: '#fff',
        fontSize: '1rem',
        lineHeight: '1.2',
    },
    artistRow: {
        display: 'flex',
        alignItems: 'center',
    },
    artistText: {
        color: '#aaa',
    },
    trackActions: {
        display: 'flex',
        alignItems: 'center',
        gap: tokens.spacingHorizontalS,
    },
    rightControls: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: tokens.spacingHorizontalL,
        minWidth: '200px',
        color: '#fff',
    },
    // Expanded Overlay
    expandedOverlay: {
        position: 'fixed',
        top: 0,
        left: '240px', // Respect sidebar
        width: 'calc(100vw - 240px)',
        height: 'calc(100vh - 80px)',
        backgroundColor: tokens.colorNeutralBackground1, // Use standard bg
        zIndex: 90,
        transform: 'translateY(100%)',
        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        display: 'flex',
        flexDirection: 'column',
        padding: tokens.spacingVerticalXXL,
        overflowY: 'auto',
    },
    expandedOpen: {
        transform: 'translateY(0)',
    },
    expandedHeader: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginBottom: tokens.spacingVerticalXXL,
    },
    profileSection: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: tokens.spacingVerticalXXXL,
        textAlign: 'center',
    },
    largeAvatar: {
        width: '120px',
        height: '120px',
        backgroundColor: tokens.colorNeutralBackground3,
        borderRadius: tokens.borderRadiusCircular,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: tokens.fontSizeHero900,
        marginBottom: tokens.spacingVerticalL,
        boxShadow: tokens.shadow16,
    },
    bio: {
        maxWidth: '600px',
        color: tokens.colorNeutralForeground2,
        marginTop: tokens.spacingVerticalM,
        lineHeight: tokens.lineHeightBase400,
    },
    columns: {
        display: 'flex',
        gap: '4rem',
        maxWidth: '1000px',
        margin: '0 auto',
        width: '100%',
        flexWrap: 'wrap',
    },
    column: {
        flex: 1,
        minWidth: '300px',
    },
    sectionTitle: {
        fontSize: tokens.fontSizeBase500,
        fontWeight: tokens.fontWeightBold,
        margin: tokens.spacingVerticalL,
        border: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke1}`,
        padding: tokens.spacingVerticalS,
        color: tokens.colorNeutralForeground1,
    },
    timelineList: {
        display: 'flex',
        flexDirection: 'column',
        gap: tokens.spacingVerticalL,
    },
    timelineItem: {
        display: 'flex',
        gap: tokens.spacingHorizontalM,
    },
    timelineYear: {
        fontWeight: tokens.fontWeightSemibold,
        color: tokens.colorNeutralForeground3,
        minWidth: '60px',
    },
    skillCloud: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: tokens.spacingHorizontalS,
    },
    skillBadge: {
        fontSize: tokens.fontSizeBase300,
        padding: `${tokens.spacingVerticalXS} ${tokens.spacingHorizontalM}`,
        backgroundColor: tokens.colorNeutralBackgroundAlpha,
        color: tokens.colorNeutralForeground1,
        border: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke1}`,
        borderRadius: tokens.borderRadiusMedium,
    }
});

const Player = () => {
    const styles = useStyles();
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <>
            {/* Expanded Overlay */}
            <div className={mergeClasses(styles.expandedOverlay, isExpanded && styles.expandedOpen)}>
                <div className={styles.expandedHeader}>
                    <Button appearance="transparent" icon={<ChevronDown size={32} />} onClick={() => setIsExpanded(false)} />
                </div>

                <div className={styles.profileSection}>
                    <div className={styles.largeAvatar}>👨‍💻</div>
                    <Text size={900} weight="bold">Saptarshi Das</Text>
                    <Text size={500} style={{ color: '#aaa', marginTop: '0.5rem' }}>Software Engineer II • Microsoft</Text>
                    <Text className={styles.bio} style={{ maxWidth: 600, color: '#ccc', marginTop: '1rem' }}>{bio}</Text>
                </div>

                <div className={styles.columns}>
                    <div className={styles.column}>
                        <h3 className={styles.sectionTitle}>Career Timeline</h3>
                        <div className={styles.timelineList}>
                            {experience.map(exp => (
                                <div key={exp.id} className={styles.timelineItem}>
                                    <div className={styles.timelineYear}>{exp.year.split(' ')[0]}</div>
                                    <div>
                                        <Text weight="bold" block>{exp.title}</Text>
                                        <Text style={{ color: '#888' }}>{exp.summary}</Text>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.column}>
                        <h3 className={styles.sectionTitle}>Top Skills</h3>
                        <div className={styles.skillCloud}>
                            {skills.map(skill => (
                                <span key={skill.name} className={styles.skillBadge}>{skill.name}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Player Bar */}
            <div
                className={styles.player}
                onClick={() => setIsExpanded(!isExpanded)}
            >
                {/* Top Progress Bar */}
                <div className={styles.topProgressBar}>
                    <div className={styles.progressFill} style={{ width: '40%' }}></div>
                </div>

                {/* Left: Controls & Time */}
                <div
                    className={styles.leftControls}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className={styles.transportControls}>
                        <SkipBack size={28} fill="currentColor" style={{ cursor: 'pointer' }} />
                        <div className={styles.playPause} onClick={() => { }}>
                            <Play size={32} fill="currentColor" />
                        </div>
                        <SkipForward size={28} fill="currentColor" style={{ cursor: 'pointer' }} />
                    </div>
                    <Text size={200} style={{ color: '#aaa', minWidth: '70px' }}>2:50 / 3:01</Text>
                </div>

                {/* Center: Track Info */}
                <div className={styles.centerTrackInfo}>
                    <div className={styles.albumArt}>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png"
                            alt="cover"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: tokens.borderRadiusMedium }}
                        />
                    </div>
                    <div className={styles.trackDetails}>
                        <Text weight="semibold" className={styles.titleText}>Thodi Si Daaru</Text>
                        <div className={styles.artistRow}>
                            <Text size={200} className={styles.artistText}>AP Dhillon & Shreya Ghoshal • Thodi Si Daaru • 2025</Text>
                        </div>
                    </div>
                    <div className={styles.trackActions}>
                        <Button appearance="transparent" icon={<span style={{ fontSize: '1.2rem' }}>👎</span>} />
                        <Button appearance="transparent" icon={<span style={{ fontSize: '1.2rem' }}>👍</span>} />
                        <Button appearance="transparent" icon={<MoreHorizontal size={24} color="#ccc" />} />
                    </div>
                </div>

                {/* Right: Volume & Extras */}
                <div
                    className={styles.rightControls}
                    onClick={(e) => e.stopPropagation()}
                >
                    <Volume2 size={24} color="#aaa" />
                    <Repeat size={24} color="#aaa" />
                    <Shuffle size={24} color="#aaa" />
                    <div onClick={() => setIsExpanded(!isExpanded)} style={{ cursor: 'pointer' }}>
                        <ChevronDown size={28} style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Player;
