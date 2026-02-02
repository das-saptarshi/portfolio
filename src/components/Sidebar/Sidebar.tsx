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
        backgroundColor: tokens.colorNeutralBackground1, // Will need theme override for #030303
        display: 'flex',
        flexDirection: 'column',
        paddingTop: tokens.spacingVerticalL,
        paddingRight: tokens.spacingHorizontalMNudge,
        paddingBottom: tokens.spacingVerticalL,
        paddingLeft: tokens.spacingHorizontalMNudge,
        borderRightWidth: tokens.strokeWidthThin,
        borderRightStyle: 'solid',
        borderRightColor: tokens.colorNeutralStroke1,
        boxSizing: 'border-box', // Ensure padding doesn't affect width
    },
    brand: {
        paddingTop: 0,
        paddingRight: tokens.spacingHorizontalS,
        paddingBottom: tokens.spacingVerticalXXL,
        paddingLeft: tokens.spacingHorizontalS,
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
        color: tokens.colorNeutralForeground2,
        paddingTop: tokens.spacingVerticalM,
        paddingRight: tokens.spacingHorizontalM,
        paddingBottom: tokens.spacingVerticalM,
        paddingLeft: tokens.spacingHorizontalM,
        ':hover': {
            color: tokens.colorNeutralForeground1Hover,
            backgroundColor: tokens.colorNeutralBackground1Hover,
        },
    },
    navItemActive: {
        color: tokens.colorNeutralForeground1Selected,
        backgroundColor: tokens.colorNeutralBackground1Selected,
        fontWeight: tokens.fontWeightSemibold,
    },
    playlistSection: {
        marginTop: tokens.spacingVerticalXXL,
        paddingTop: tokens.spacingVerticalM,
        paddingRight: tokens.spacingHorizontalM,
        paddingBottom: 0,
        paddingLeft: tokens.spacingHorizontalM,
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
