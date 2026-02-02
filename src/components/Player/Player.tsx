import { useState } from 'react';
import { Play, SkipBack, SkipForward, Repeat, Shuffle, Volume2, Mic2, ChevronDown } from 'lucide-react';
import { bio, experience, skills } from '../../data/portfolio';
import {
    makeStyles,
    shorthands,
    Slider,
    Button,
    Text,
    mergeClasses
} from '@fluentui/react-components';

const useStyles = makeStyles({
    player: {
        height: '80px',
        width: '100%',
        backgroundColor: '#212121',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...shorthands.padding('0', '2rem'),
        position: 'fixed',
        bottom: 0,
        zIndex: 100,
        cursor: 'pointer',
    },
    trackInfo: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        width: '30%',
        ':hover': {
            opacity: 0.8,
        },
    },
    albumArt: {
        width: '48px',
        height: '48px',
        backgroundColor: '#333',
        ...shorthands.borderRadius('4px'),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    emoji: {
        fontSize: '1.5rem',
    },
    trackDetails: {
        display: 'flex',
        flexDirection: 'column'
    },
    controls: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
        width: '40%',
        cursor: 'default',
    },
    buttons: {
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
    },
    playButton: {
        width: '40px',
        height: '40px',
        ...shorthands.borderRadius('50%'),
        backgroundColor: 'white',
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
    },
    progressBar: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        width: '100%',
        maxWidth: '500px',
    },
    volumeControls: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: '1rem',
        width: '30%',
        cursor: 'default',
    },
    contactLink: {
        fontSize: '0.9rem',
        fontWeight: 600,
        color: '#aaa',
        marginRight: '1rem',
        textDecoration: 'none',
        ':hover': {
            color: 'white',
        },
    },
    // Expanded Overlay
    expandedOverlay: {
        position: 'fixed',
        top: 0,
        left: '240px', // Respect sidebar
        width: 'calc(100vw - 240px)',
        height: 'calc(100vh - 80px)',
        backgroundColor: '#030303',
        zIndex: 90,
        transform: 'translateY(100%)',
        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        display: 'flex',
        flexDirection: 'column',
        ...shorthands.padding('2rem'),
        overflowY: 'auto',
    },
    expandedOpen: {
        transform: 'translateY(0)',
    },
    expandedHeader: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginBottom: '2rem',
    },
    profileSection: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '3rem',
        textAlign: 'center',
    },
    largeAvatar: {
        width: '120px',
        height: '120px',
        backgroundColor: '#333',
        ...shorthands.borderRadius('50%'),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '3rem',
        marginBottom: '1.5rem',
        boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
    },
    bio: {
        maxWidth: '600px',
        color: '#ccc',
        marginTop: '1rem',
        lineHeight: '1.6',
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
        fontSize: '1.2rem',
        fontWeight: 700,
        marginBottom: '1.5rem',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        paddingBottom: '0.5rem',
        color: '#fff',
    },
    timelineList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
    },
    timelineItem: {
        display: 'flex',
        gap: '1rem',
    },
    timelineYear: {
        fontWeight: 600,
        color: '#aaa',
        minWidth: '60px',
    },
    skillCloud: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.8rem',
    },
    skillBadge: {
        ...shorthands.padding('0.5rem', '1rem'),
        backgroundColor: 'rgba(255,255,255,0.08)',
        ...shorthands.borderRadius('20px'),
        fontSize: '0.9rem',
        color: '#ddd',
        border: '1px solid rgba(255,255,255,0.05)',
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
                        <Slider defaultValue={40} style={{ width: '100%' }} />
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
