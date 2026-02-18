import { Home, Library, Compass } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { makeStyles, mergeClasses } from '@fluentui/react-components';

const useStyles = makeStyles({
    bottomNav: {
        display: 'none',
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '64px',
        backgroundColor: '#181818',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        zIndex: 200,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingBottom: 'env(safe-area-inset-bottom)',
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
        color: '#777',
        gap: '4px',
        fontSize: '10px',
        fontWeight: 500,
        width: '100%',
        height: '100%',
        transition: 'color 0.15s ease',
        ':hover': {
            color: '#ccc',
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
                <Home size={22} />
                <span>Home</span>
            </NavLink>
            <NavLink to="/explore" className={({ isActive }) => mergeClasses(styles.navItem, isActive && styles.activeItem)}>
                <Compass size={22} />
                <span>Explore</span>
            </NavLink>
            <NavLink to="/library" className={({ isActive }) => mergeClasses(styles.navItem, isActive && styles.activeItem)}>
                <Library size={22} />
                <span>Library</span>
            </NavLink>
        </nav>
    );
};

export default BottomNav;
