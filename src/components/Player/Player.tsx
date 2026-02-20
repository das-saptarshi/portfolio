import { useState } from 'react';
import { SkipBack, SkipForward, Repeat, Shuffle, Volume2, ChevronUp, ChevronDown, MoreHorizontal, PlayCircle, PauseCircle, ThumbsUp } from 'lucide-react';
import { bio, experience, skills, currentPlayback } from '../../data/portfolio';
import { makeStyles, tokens, Button, Text, mergeClasses } from '@fluentui/react-components';

const useStyles = makeStyles({
    player: {
        height: '80px',
        width: '100vw',
        backgroundColor: '#181818',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: `0 ${tokens.spacingHorizontalL}`,
        position: 'fixed',
        bottom: 0,
        left: 0,
        zIndex: 100,
        '@media (max-width: 768px)': { bottom: '64px', padding: `0 ${tokens.spacingHorizontalM}` },
    },
    topProgressBar: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '3px',
        backgroundColor: 'rgba(255,255,255,0.15)',
        cursor: 'pointer',
        transition: 'height 0.15s ease',
        ':hover': { height: '5px' },
    },
    progressFill: { height: '100%', backgroundColor: '#ff0000', transition: 'width 0.3s linear' },
    leftControls: { display: 'flex', alignItems: 'center', gap: tokens.spacingHorizontalL, width: '280px', flexShrink: 0 },
    transportControls: { display: 'flex', alignItems: 'center', gap: tokens.spacingHorizontalM, color: tokens.colorNeutralForeground1 },
    controlIcon: {
        cursor: 'pointer',
        color: tokens.colorNeutralForeground2,
        transition: 'color 0.15s ease, transform 0.15s ease',
        ':hover': { color: tokens.colorNeutralForeground1, transform: 'scale(1.1)' },
    },
    playPauseBtn: {
        cursor: 'pointer',
        color: tokens.colorNeutralForeground1,
        transition: 'transform 0.15s ease',
        display: 'flex',
        alignItems: 'center',
        ':hover': { transform: 'scale(1.08)' },
    },
    timeText: {
        color: tokens.colorNeutralForeground4,
        fontSize: tokens.fontSizeBase200,
        minWidth: '70px',
        '@media (max-width: 768px)': { display: 'none' },
    },
    centerTrackInfo: {
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        flex: 1,
        justifyContent: 'center',
        overflow: 'hidden',
    },
    albumArt: {
        width: '44px',
        height: '44px',
        borderRadius: tokens.borderRadiusMedium,
        overflow: 'hidden',
        backgroundColor: '#333',
        flexShrink: 0,
    },
    trackDetails: { display: 'flex', flexDirection: 'column', overflow: 'hidden' },
    titleText: {
        color: tokens.colorNeutralForeground1,
        fontSize: tokens.fontSizeBase300,
        lineHeight: tokens.lineHeightBase300,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    artistText: {
        color: tokens.colorNeutralForeground3,
        fontSize: tokens.fontSizeBase200,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    trackActions: {
        display: 'flex',
        alignItems: 'center',
        gap: tokens.spacingHorizontalXS,
        flexShrink: 0,
        '@media (max-width: 768px)': { display: 'none' },
    },
    rightControls: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: tokens.spacingHorizontalL,
        width: '280px',
        flexShrink: 0,
        color: tokens.colorNeutralForeground2,
        '@media (max-width: 768px)': { width: 'auto', gap: tokens.spacingHorizontalS },
    },
    rightIcon: {
        cursor: 'pointer',
        color: tokens.colorNeutralForeground4,
        transition: 'color 0.15s ease',
        ':hover': { color: tokens.colorNeutralForeground1 },
        '@media (max-width: 768px)': { display: 'none' },
    },
    expandToggle: {
        cursor: 'pointer',
        color: tokens.colorNeutralForeground4,
        transition: 'color 0.15s ease, transform 0.3s ease',
        ':hover': { color: tokens.colorNeutralForeground1 },
    },
    expandedOverlay: {
        position: 'fixed',
        top: 0,
        left: '240px',
        width: 'calc(100vw - 240px)',
        height: 'calc(100vh - 80px)',
        backgroundColor: '#0a0a0a',
        zIndex: 90,
        transform: 'translateY(100%)',
        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        display: 'flex',
        flexDirection: 'column',
        padding: '40px',
        overflowY: 'auto',
        '@media (max-width: 768px)': { left: 0, width: '100vw', padding: tokens.spacingHorizontalXXL },
    },
    expandedOpen: { transform: 'translateY(0)' },
    expandedHeader: { display: 'flex', justifyContent: 'flex-end', marginBottom: '40px' },
    profileSection: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '48px',
        textAlign: 'center',
    },
    largeAvatar: {
        width: '120px',
        height: '120px',
        backgroundColor: '#1a1a1a',
        borderRadius: tokens.borderRadiusCircular,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '48px',
        marginBottom: tokens.spacingVerticalXL,
        boxShadow: tokens.shadow28,
    },
    bio: {
        maxWidth: '600px',
        color: tokens.colorNeutralForeground3,
        marginTop: tokens.spacingVerticalM,
        lineHeight: tokens.lineHeightBase400,
        fontSize: tokens.fontSizeBase300,
        textAlign: 'center',
    },
    columns: { display: 'flex', gap: '4rem', maxWidth: '1000px', margin: '0 auto', width: '100%', flexWrap: 'wrap' },
    column: { flex: 1, minWidth: '300px' },
    sectionTitle: {
        fontSize: tokens.fontSizeBase400,
        fontWeight: tokens.fontWeightBold,
        marginBottom: tokens.spacingVerticalL,
        paddingBottom: tokens.spacingVerticalMNudge,
        borderBottom: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke2}`,
        color: tokens.colorNeutralForeground1,
    },
    timelineList: { display: 'flex', flexDirection: 'column', gap: tokens.spacingVerticalL },
    timelineItem: { display: 'flex', gap: '14px' },
    timelineYear: { fontWeight: tokens.fontWeightSemibold, color: tokens.colorNeutralForeground4, minWidth: '60px', fontSize: '13px' },
    skillCloud: { display: 'flex', flexWrap: 'wrap', gap: tokens.spacingHorizontalS },
    skillBadge: {
        fontSize: '13px',
        padding: `${tokens.spacingVerticalSNudge} 14px`,
        backgroundColor: 'rgba(255,255,255,0.06)',
        color: tokens.colorNeutralForeground2,
        border: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke2}`,
        borderRadius: '20px',
    },
});

const Player = () => {
    const styles = useStyles();
    const [isExpanded, setIsExpanded] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsPlaying(!isPlaying);
    };

    return (
        <>
            <div className={mergeClasses(styles.expandedOverlay, isExpanded && styles.expandedOpen)}>
                <div className={styles.expandedHeader}>
                    <Button appearance="transparent" icon={<ChevronDown size={32} />} onClick={() => setIsExpanded(false)} />
                </div>

                <div className={styles.profileSection}>
                    <div className={styles.largeAvatar}>
                        <img src={`${import.meta.env.BASE_URL}website/images/headshot.jpg`} alt="SD" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                    </div>
                    <Text size={900} weight="bold">Saptarshi Das</Text>
                    <Text size={500} style={{ color: tokens.colorNeutralForeground3, marginTop: tokens.spacingVerticalS }}>Software Engineer II • Microsoft</Text>
                    <Text className={styles.bio}>{bio}</Text>
                </div>

                <div className={styles.columns}>
                    <div className={styles.column}>
                        <h3 className={styles.sectionTitle}>Career Timeline</h3>
                        <div className={styles.timelineList}>
                            {experience.map(exp => (
                                <div key={exp.id} className={styles.timelineItem}>
                                    <div className={styles.timelineYear}>{exp.year.split(' ')[0]}</div>
                                    <div>
                                        <Text weight="bold" block style={{ fontSize: tokens.fontSizeBase300 }}>{exp.title}</Text>
                                        <Text style={{ color: tokens.colorNeutralForeground4, fontSize: '13px' }}>
                                            {exp.role.join(', ')}
                                        </Text>
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

            <div className={styles.player} onClick={() => setIsExpanded(!isExpanded)}>
                <div className={styles.topProgressBar}>
                    <div className={styles.progressFill} style={{ width: '40%' }} />
                </div>

                <div className={styles.leftControls} onClick={(e) => e.stopPropagation()}>
                    <div className={styles.transportControls}>
                        <SkipBack size={24} className={styles.controlIcon} fill="currentColor" />
                        <div onClick={togglePlay} className={styles.playPauseBtn}>
                            {isPlaying ? <PauseCircle size={40} /> : <PlayCircle size={40} />}
                        </div>
                        <SkipForward size={24} className={styles.controlIcon} fill="currentColor" />
                    </div>
                    <span className={styles.timeText}>{currentPlayback.progress} / {currentPlayback.duration}</span>
                </div>

                <div className={styles.centerTrackInfo}>
                    <div className={styles.albumArt}>
                        <img src={currentPlayback.cover} alt="cover" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div className={styles.trackDetails}>
                        <Text weight="semibold" className={styles.titleText}>{currentPlayback.title}</Text>
                        <Text className={styles.artistText}>{currentPlayback.artist} • {currentPlayback.album} • {currentPlayback.year}</Text>
                    </div>
                    <div className={styles.trackActions}>
                        <Button appearance="transparent" icon={<ThumbsUp size={20} color="#888" />} />
                        <Button appearance="transparent" icon={<MoreHorizontal size={20} color="#888" />} />
                    </div>
                </div>

                <div className={styles.rightControls} onClick={(e) => e.stopPropagation()}>
                    <Volume2 size={20} className={styles.rightIcon} />
                    <Repeat size={20} className={styles.rightIcon} />
                    <Shuffle size={20} className={styles.rightIcon} />
                    <div onClick={() => setIsExpanded(!isExpanded)} className={styles.expandToggle}>
                        {isExpanded ? <ChevronDown size={24} /> : <ChevronUp size={24} />}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Player;
