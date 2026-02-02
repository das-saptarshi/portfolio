import { useState } from 'react';
import { Play, SkipBack, SkipForward, Repeat, Shuffle, Volume2, Mic2, ChevronDown } from 'lucide-react';
import { bio, experience, skills } from '../../data/portfolio';
import {
    makeStyles,
    tokens,
    Slider,
    Button,
    Text,
    mergeClasses
} from '@fluentui/react-components';

const useStyles = makeStyles({
    player: {
        height: '80px',
        width: '100%',
        background: `linear-gradient(to bottom, ${tokens.colorNeutralBackground2}, ${tokens.colorNeutralBackground1})`,
        border: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke1}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: `${tokens.spacingVerticalXXS} ${tokens.spacingHorizontalXXL}`,
        position: 'fixed',
        bottom: 0,
        zIndex: 100,
        cursor: 'pointer',
    },
    trackInfo: {
        display: 'flex',
        alignItems: 'center',
        gap: tokens.spacingHorizontalM,
        width: '30%',
        ':hover': {
            opacity: 0.8,
        },
    },
    albumArt: {
        width: '48px',
        height: '48px',
        backgroundColor: tokens.colorNeutralBackground3,
        borderRadius: tokens.borderRadiusMedium,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    emoji: {
        fontSize: tokens.fontSizeHero700,
    },
    trackDetails: {
        display: 'flex',
        flexDirection: 'column'
    },
    controls: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: tokens.spacingVerticalXS,
        width: '40%',
        cursor: 'default',
    },
    buttons: {
        display: 'flex',
        alignItems: 'center',
        gap: tokens.spacingHorizontalL,
    },
    playButton: {
        width: '40px',
        height: '40px',
        borderRadius: tokens.borderRadiusCircular,
        backgroundColor: tokens.colorNeutralForeground1,
        color: tokens.colorNeutralBackground1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        ':hover': { // Ensure hover state is visible
            backgroundColor: tokens.colorNeutralForeground2,
        }
    },
    progressBar: {
        display: 'flex',
        alignItems: 'center',
        gap: tokens.spacingHorizontalS,
        width: '100%',
        maxWidth: '600px', // Slightly wider
    },
    sliderContainer: {
        flex: 1, // Ensure slider takes up remaining space
        display: 'flex',
        alignItems: 'center',
    },
    volumeControls: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: tokens.spacingHorizontalM,
        width: '30%',
        cursor: 'default',
    },
    contactLink: {
        fontSize: tokens.fontSizeBase200,
        fontWeight: tokens.fontWeightSemibold,
        color: tokens.colorNeutralForeground2,
        marginRight: tokens.spacingHorizontalM,
        textDecoration: 'none',
        ':hover': {
            color: tokens.colorNeutralForeground1,
        },
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
        marginBottom: tokens.spacingVerticalL,
        borderBottomWidth: tokens.strokeWidthThin,
        borderBottomStyle: 'solid',
        borderBottomColor: tokens.colorNeutralStroke1,
        paddingBottom: tokens.spacingVerticalS,
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
        paddingTop: tokens.spacingVerticalXS,
        paddingRight: tokens.spacingHorizontalM,
        paddingBottom: tokens.spacingVerticalXS,
        paddingLeft: tokens.spacingHorizontalM,
        backgroundColor: tokens.colorNeutralBackgroundAlpha,
        borderRadius: tokens.borderRadiusMedium,
        fontSize: tokens.fontSizeBase300,
        color: tokens.colorNeutralForeground1,
        border: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke1}`,
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
                {/* Current Track Info */}
                <div className={styles.trackInfo}>
                    <div className={styles.albumArt}>
                        <span className={styles.emoji}>👨‍💻</span>
                    </div>
                    <div className={styles.trackDetails}>
                        <Text weight="semibold">Saptarshi Das</Text>
                        <Text size={200} style={{ color: '#aaa' }}>Software Engineer II • Microsoft</Text>
                    </div>
                </div>

                {/* Controls */}
                <div
                    className={styles.controls}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className={styles.buttons}>
                        <Button appearance="transparent" icon={<Shuffle size={20} color="#aaa" />} />
                        <Button appearance="transparent" icon={<SkipBack size={24} fill="currentColor" />} />
                        <div className={styles.playButton} onClick={() => { }}>
                            <Play size={24} fill="currentColor" style={{ marginLeft: 2 }} />
                        </div>
                        <Button appearance="transparent" icon={<SkipForward size={24} fill="currentColor" />} />
                        <Button appearance="transparent" icon={<Repeat size={20} color="#aaa" />} />
                    </div>
                    <div className={styles.progressBar}>
                        <Text size={100} style={{ color: '#aaa' }}>2:14</Text>
                        <div className={styles.sliderContainer}>
                            <Slider defaultValue={40} style={{ width: '100%' }} />
                        </div>
                        <Text size={100} style={{ color: '#aaa' }}>5:30</Text>
                    </div>
                </div>

                {/* Volume & Extras */}
                <div
                    className={styles.volumeControls}
                    onClick={(e) => e.stopPropagation()}
                >
                    <a href="mailto:saptarshidas743@gmail.com" className={styles.contactLink}>CONTACT ME</a>
                    <Mic2 size={20} color="#aaa" />
                    <Volume2 size={20} color="#aaa" />
                </div>
            </div>
        </>
    );
};

export default Player;
