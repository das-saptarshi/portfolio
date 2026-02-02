import { useState } from 'react';
import { Play, SkipBack, SkipForward, Repeat, Shuffle, Volume2, Mic2, ChevronDown } from 'lucide-react';
import styles from './Player.module.css';
import { bio, experience, skills } from '../../data/portfolio';

const Player = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <>
            {/* Expanded Overlay */}
            <div className={`${styles.expandedOverlay} ${isExpanded ? styles.expandedOpen : ''}`}>
                <div className={styles.expandedHeader}>
                    <button className={styles.closeButton} onClick={() => setIsExpanded(false)}>
                        <ChevronDown size={32} />
                    </button>
                </div>

                <div className={styles.profileSection}>
                    <div className={styles.largeAvatar}>👨‍💻</div>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Saptarshi Das</h1>
                    <p style={{ fontSize: '1.2rem', color: '#fff' }}>Software Engineer II • Microsoft</p>
                    <p className={styles.bio}>{bio}</p>
                </div>

                <div className={styles.columns}>
                    <div className={styles.column}>
                        <h3 className={styles.sectionTitle}>Career Timeline</h3>
                        <div className={styles.timelineList}>
                            {experience.map(exp => (
                                <div key={exp.id} className={styles.timelineItem}>
                                    <div className={styles.timelineYear}>{exp.year.split(' ')[0]}</div>
                                    <div className={styles.timelineContent}>
                                        <h4>{exp.title}</h4>
                                        <p>{exp.summary}</p>
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
            <div className={styles.player}>
                {/* Current Track Info */}
                <div
                    className={styles.trackInfo}
                    onClick={() => setIsExpanded(!isExpanded)}
                    style={{ cursor: 'pointer' }}
                >
                    <div className={styles.albumArt}>
                        <span className={styles.emoji}>👨‍💻</span>
                    </div>
                    <div className={styles.trackDetails}>
                        <div className={styles.trackName}>Saptarshi Das</div>
                        <div className={styles.artistName}>Software Engineer II • Microsoft</div>
                    </div>
                </div>

                {/* Controls */}
                <div className={styles.controls}>
                    <div className={styles.buttons}>
                        <Shuffle size={20} color="#aaa" />
                        <SkipBack size={24} fill="currentColor" />
                        <div className={styles.playButton}>
                            <Play size={24} fill="currentColor" className={styles.playIcon} />
                        </div>
                        <SkipForward size={24} fill="currentColor" />
                        <Repeat size={20} color="#aaa" />
                    </div>
                    <div className={styles.progressBar}>
                        <span className={styles.time}>2:14</span>
                        <div className={styles.progressTrack}>
                            <div className={styles.progressFill}></div>
                        </div>
                        <span className={styles.time}>5:30</span>
                    </div>
                </div>

                {/* Volume & Extras */}
                <div className={styles.volumeControls}>
                    <a href="mailto:saptarshidas743@gmail.com" className={styles.contactLink}>CONTACT ME</a>
                    <Mic2 size={20} color="#aaa" />
                    <Volume2 size={20} color="#aaa" />
                </div>
            </div>
        </>
    );
};

export default Player;
