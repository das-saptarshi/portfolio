import { Home, Library, Compass } from 'lucide-react';
import { playlists } from '../../data/portfolio';
import { NavLink } from 'react-router-dom';
import {
    makeStyles,
    tokens,
    Button,
    Text,
    mergeClasses,
} from '@fluentui/react-components';

const useStyles = makeStyles({
    sidebar: {
        width: '240px',
        height: '100%', // Take full height of parent
        backgroundColor: '#030303', // YTM Black
        display: 'flex',
        flexDirection: 'column',
        padding: `${tokens.spacingVerticalL} ${tokens.spacingHorizontalMNudge}`,
        borderRightWidth: tokens.strokeWidthThin,
        borderRightStyle: 'solid',
        borderRightColor: '#212121', // Subtle divider
        boxSizing: 'border-box', // Ensure padding doesn't affect width
        '@media (max-width: 768px)': {
            display: 'none',
        },
    },
    brand: {
        padding: `${tokens.spacingVerticalXXL} ${tokens.spacingHorizontalS}`,
        display: 'flex',
        alignItems: 'center',
        gap: tokens.spacingHorizontalMNudge,
    },
    logo: {
        width: '32px',
        height: '32px',
        borderRadius: tokens.borderRadiusCircular,
        background: 'linear-gradient(135deg, #FF0000 0%, #CC0000 100%)', // Brand color kept
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    nav: {
        display: 'flex',
        flexDirection: 'column',
        gap: tokens.spacingVerticalXS,
    },
    navItem: {
        justifyContent: 'flex-start',
        width: '100%', // Full width
        color: '#aaaaaa', // Inactive text
        padding: `${tokens.spacingVerticalM} ${tokens.spacingHorizontalM}`,
        ':hover': {
            color: '#ffffff',
            backgroundColor: 'rgba(255,255,255,0.1)',
        },
    },
    navItemActive: {
        color: '#ffffff',
        backgroundColor: 'rgba(255,255,255,0.1)', // Active bg
        fontWeight: tokens.fontWeightSemibold,
    },
    playlistSection: {
        marginTop: tokens.spacingVerticalXXL,
        padding: `${tokens.spacingVerticalM} ${tokens.spacingHorizontalM} 0 ${tokens.spacingHorizontalM}`,
        borderTopWidth: tokens.strokeWidthThin,
        borderTopStyle: 'solid',
        borderTopColor: tokens.colorNeutralStroke1,
    },
    playlistHeader: {
        fontSize: tokens.fontSizeBase300,
        color: tokens.colorNeutralForeground2,
        textTransform: 'uppercase',
        marginBottom: tokens.spacingVerticalM,
        display: 'block',
        letterSpacing: '1px',
        fontWeight: tokens.fontWeightBold,
    },
    playlistList: {
        display: 'flex',
        flexDirection: 'column',
        gap: tokens.spacingVerticalS,
    },
    playlistItem: {
        cursor: 'pointer',
        color: tokens.colorNeutralForeground2,
        fontSize: tokens.fontSizeBase300,
        ':hover': {
            color: tokens.colorNeutralForeground1Hover,
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
                        style={{ textDecoration: 'none', display: 'block', width: '100%' }}
                        className={({ isActive }) => isActive ? 'active' : ''}
                    >
                        {({ isActive }) => (
                            <Button
                                appearance="subtle"
                                icon={<item.icon size={24} strokeWidth={isActive ? 2.5 : 2} />}
                                className={mergeClasses(styles.navItem, isActive && styles.navItemActive)}
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
                    {playlists.map((playlist) => (
                        <Text key={playlist.name} onClick={() => window.open(playlist.link, '_blank')} className={styles.playlistItem}>{playlist.name}</Text>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
