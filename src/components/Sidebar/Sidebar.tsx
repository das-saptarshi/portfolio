import { Home, Library, Compass } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = () => {
    const navItems = [
        { icon: Home, label: 'Home', path: '/' },
        { icon: Compass, label: 'Explore', path: '/explore' },
        { icon: Library, label: 'Library', path: '/library' },
    ];

    return (
        <div className={styles.sidebar}>
            <div className={styles.brand}>
                <div className={styles.logo}>
                    <span className={styles.logoText}>S</span>
                </div>
                <span className={styles.brandName}>Music</span>
            </div>

            <nav className={styles.nav}>
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `${styles.navItem} ${isActive ? styles.navItemActive : ''}`
                        }
                    >
                        {({ isActive }) => (
                            <>
                                <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                                <span>{item.label}</span>
                            </>
                        )}
                    </NavLink>
                ))}
            </nav>

            <div className={styles.playlistSection}>
                <h3 className={styles.playlistHeader}>Playlists</h3>
                <div className={styles.playlistList}>
                    <p className={styles.playlistItem}>Deep Work Focus</p>
                    <p className={styles.playlistItem}>System Design</p>
                    <p className={styles.playlistItem}>Coding Favorites</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
