import { Home, Library, Compass } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import {
    makeStyles,
    shorthands,
    tokens,
    Button,
    Text,
    mergeClasses
} from '@fluentui/react-components';

const useStyles = makeStyles({
    sidebar: {
        width: '240px',
        height: '100%', // Take full height of parent
        backgroundColor: tokens.colorNeutralBackground1, // Will need theme override for #030303
        display: 'flex',
        flexDirection: 'column',
        ...shorthands.padding(tokens.spacingVerticalL),
        ...shorthands.borderRight(tokens.strokeWidthThin, 'solid', tokens.colorNeutralStroke1),
        boxSizing: 'border-box', // Ensure padding doesn't affect width
    },
    brand: {
        ...shorthands.padding('0', tokens.spacingHorizontalS, tokens.spacingVerticalXXL, tokens.spacingHorizontalS),
        display: 'flex',
        alignItems: 'center',
        gap: tokens.spacingHorizontalMNudge,
    },
    logo: {
        width: '32px',
        height: '32px',
        ...shorthands.borderRadius(tokens.borderRadiusCircular),
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
        ...shorthands.padding(tokens.spacingVerticalM, tokens.spacingHorizontalM), // More breathing room
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
        ...shorthands.padding('0', tokens.spacingHorizontalM),
        borderTop: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke1}`,
        paddingTop: tokens.spacingVerticalM,
    },
    playlistHeader: {
        fontSize: tokens.fontSizeBase200,
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
                    <Text className={styles.playlistItem}>Deep Work Focus</Text>
                    <Text className={styles.playlistItem}>System Design</Text>
                    <Text className={styles.playlistItem}>Coding Favorites</Text>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
