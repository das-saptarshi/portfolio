import { Play, SkipBack, SkipForward, Repeat, Shuffle, Volume2, Mic2 } from 'lucide-react';
import styles from './Player.module.css';

const Player = () => {
    return (
        <div className={styles.player}>
            {/* Current Track Info */}
            <div className={styles.trackInfo}>
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
    );
};

export default Player;
