import { Home, Library, Compass } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import {
    makeStyles,
    shorthands,
    tokens,
    Button,
    Text
} from '@fluentui/react-components';

const useStyles = makeStyles({
    sidebar: {
        width: '240px',
        height: 'calc(100vh - 80px)',
        backgroundColor: '#030303', // Keep strictly dark
        display: 'flex',
        flexDirection: 'column',
        ...shorthands.padding('1rem'),
        ...shorthands.borderRight('1px', 'solid', '#212121'),
    },
    brand: {
        ...shorthands.padding('0', '1rem', '2rem', '1rem'),
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
    },
    logo: {
        width: '32px',
        height: '32px',
        ...shorthands.borderRadius('50%'),
        background: 'linear-gradient(135deg, #FF0000 0%, #CC0000 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    nav: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
    },
    navItem: {
        justifyContent: 'flex-start',
        color: '#aaaaaa', // Custom color to match previous design
        ':hover': {
            color: tokens.colorNeutralForeground1Hover,
            backgroundColor: tokens.colorNeutralBackground1Hover,
        },
        '&.active': {
            color: '#ffffff',
            backgroundColor: '#212121',
            fontWeight: 600,
        }
    },
    playlistSection: {
        marginTop: '2rem',
        ...shorthands.padding('0', '1rem'),
    },
    playlistHeader: {
        fontSize: '0.8rem',
        color: '#aaaaaa',
        textTransform: 'uppercase',
        marginBottom: '1rem',
        display: 'block',
    },
    playlistList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    playlistItem: {
        cursor: 'pointer',
        color: '#aaaaaa',
        fontSize: '0.9rem',
        ':hover': {
            color: 'white',
        }
    }
});

const Sidebar = () => {
    const styles = useStyles();
    const navItems = [
        { icon: Home, label: 'Home', path: '/' },
        { icon: Compass, label: 'Explore', path: '/explore' },
        { icon: Library, label: 'Library', path: '/library' },
    ];

    return (
        <div className={styles.sidebar}>
            <div className={styles.brand}>
                <div className={styles.logo}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>S</Text>
                </div>
                <Text size={500} weight="bold" style={{ letterSpacing: '-0.5px' }}>Music</Text>
            </div>

            <nav className={styles.nav}>
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        style={{ textDecoration: 'none' }}
                        className={({ isActive }) => isActive ? 'active' : ''}
                    >
                        {({ isActive }) => (
                            <Button
                                appearance="subtle"
                                icon={<item.icon size={24} strokeWidth={isActive ? 2.5 : 2} />}
                                className={`${styles.navItem} ${isActive ? 'active' : ''}`}
                                size="large"
                                shape="rounded"
                            >
                                {item.label}
                            </Button>
                        )}
                    </NavLink>
                ))}
            </nav>

            <div className={styles.playlistSection}>
                <Text className={styles.playlistHeader}>Playlists</Text>
                <div className={styles.playlistList}>
                    <Text className={styles.playlistItem}>Deep Work Focus</Text>
                    <Text className={styles.playlistItem}>System Design</Text>
                    <Text className={styles.playlistItem}>Coding Favorites</Text>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
