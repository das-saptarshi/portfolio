import { Home, Library, Compass } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { makeStyles, tokens, mergeClasses } from '@fluentui/react-components';

const useStyles = makeStyles({
    bottomNav: {
        display: 'none',
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '64px',
        backgroundColor: '#212121',
        borderTop: `1px solid ${tokens.colorNeutralStroke1}`,
        zIndex: 200,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingBottom: 'env(safe-area-inset-bottom)', // iOS safe area
        '@media (max-width: 768px)': {
            display: 'flex',
        },
    },
    navItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        color: '#aaaaaa',
        gap: '4px',
        fontSize: '10px',
        width: '100%',
        height: '100%',
        ':hover': {
            color: '#ffffff',
        }
    },
    activeItem: {
        color: '#ffffff',
    }
});

const BottomNav = () => {
    const styles = useStyles();

    return (
        <nav className={styles.bottomNav}>
            <NavLink to="/" className={({ isActive }) => mergeClasses(styles.navItem, isActive && styles.activeItem)}>
                <Home size={24} />
                <span>Home</span>
            </NavLink>
            <NavLink to="/explore" className={({ isActive }) => mergeClasses(styles.navItem, isActive && styles.activeItem)}>
                <Compass size={24} />
                <span>Explore</span>
            </NavLink>
            <NavLink to="/library" className={({ isActive }) => mergeClasses(styles.navItem, isActive && styles.activeItem)}>
                <Library size={24} />
                <span>Library</span>
            </NavLink>
        </nav>
    );
};

export default BottomNav;
