import { MonitorPlay } from 'lucide-react';
import styles from './Explore.module.css';

const Explore = () => {
    const projects = [
        { title: 'ML Ops Platform', desc: 'No-code platform reducing dev time by 87%', tag: 'Python' },
        { title: 'Mobile Assistance Backend', desc: 'Supporting 9.7M global sellers', tag: 'Java' },
        { title: 'Telemetry Suite', desc: 'Real-time operational insights', tag: 'Data' },
    ];

    return (
        <div>
            <div className={styles.header}>
                <h2 className={styles.title}>New Music Videos</h2>
                <p className={styles.subtitle}>Based on your listening history</p>
            </div>

            <div className={styles.grid}>
                {projects.map((project, idx) => (
                    <div key={idx} className={styles.projectCard}>
                        <div className={styles.thumbnail}>
                            <MonitorPlay size={48} color="#555" />
                            <span className={styles.duration}>4:20</span>
                        </div>
                        <h3 className={styles.projectTitle}>{project.title}</h3>
                        <p className={styles.projectDesc}>{project.desc} • {project.tag}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Explore;
