import { Play } from 'lucide-react';
import styles from './Home.module.css';

const Home = () => {
    const skillCategories = [
        {
            title: 'Your Favorites',
            subtitle: 'Languages & Core',
            items: [
                { name: 'Java', color: '#ff5252' },
                { name: 'Python', color: '#3776ab' },
                { name: 'System Design', color: '#ffffff' },
                { name: 'TypeScript', color: '#3178c6' },
            ]
        },
        {
            title: 'Cloud & Infrastructure',
            subtitle: 'Recommended for you',
            items: [
                { name: 'Azure', color: '#007fff' },
                { name: 'AWS', color: '#ff9900' },
                { name: 'Kubernetes', color: '#326ce5' },
                { name: 'Docker', color: '#2496ed' },
            ]
        },
        {
            title: 'Backend Hits',
            subtitle: 'Most Played',
            items: [
                { name: 'Spring Boot', color: '#6db33f' },
                { name: 'Microservices', color: '#ffffff' },
                { name: 'Node.js', color: '#6cc24a' },
                { name: 'Redis', color: '#d82c20' },
            ]
        }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.filters}>
                <div className={styles.filterList}>
                    <span className={`${styles.filterBadge} ${styles.filterBadgeActive}`}>Relax</span>
                    <span className={styles.filterBadge}>Energize</span>
                    <span className={styles.filterBadge}>Focus</span>
                    <span className={styles.filterBadge}>Commute</span>
                </div>
            </div>

            {skillCategories.map((category, idx) => (
                <div key={idx} className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <div>
                            <span className={styles.subtitle}>{category.subtitle}</span>
                            <h2 className={styles.title}>{category.title}</h2>
                        </div>
                        <button className={styles.moreButton}>More</button>
                    </div>

                    <div className={styles.scrollContainer}>
                        {category.items.map((item, i) => (
                            <div key={i} className={styles.mixCard}>
                                <div className={styles.cardArt} style={{ backgroundColor: item.color }}>
                                    <span className={styles.cardTitle}>{item.name}</span>

                                    {/* Overlay Play Button */}
                                    <div className={styles.hoverPlay}>
                                        <Play fill="white" size={48} />
                                    </div>
                                </div>
                                <h3 className={styles.mixName}>{item.name} Mix</h3>
                                <p className={styles.mixDetails}>Saptarshi Das • {Math.floor(Math.random() * 50) + 10} songs</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Home;
