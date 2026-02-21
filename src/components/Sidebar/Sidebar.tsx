import { Home, Library, Compass, Menu, ListMusic } from 'lucide-react';
import { playlists } from '../../data/portfolio';
import { NavLink } from 'react-router-dom';
import { makeStyles, tokens, Button, Text, mergeClasses } from '@fluentui/react-components';

const useStyles = makeStyles({
    sidebar: {
        width: '240px',
        height: 'calc(100vh - 72px)',
        backgroundColor: '#030303',
        display: 'flex',
        flexDirection: 'column',
        padding: `${tokens.spacingVerticalS} ${tokens.spacingHorizontalS}`,
        borderRight: `${tokens.strokeWidthThin} solid rgba(255,255,255,0.07)`,
        boxSizing: 'border-box',
        flexShrink: 0,
        zIndex: 50,
        overflowY: 'auto',
        scrollbarWidth: 'none',
        '::-webkit-scrollbar': { display: 'none' },
        '@media (max-width: 768px)': { display: 'none' },
    },
    topRow: {
        display: 'flex',
        alignItems: 'center',
        gap: tokens.spacingHorizontalM,
        padding: `${tokens.spacingVerticalM} ${tokens.spacingHorizontalS} ${tokens.spacingVerticalXXL}`,
    },
    hamburger: {
        color: '#aaa',
        minWidth: 'auto',
        padding: '8px',
        ':hover': { color: '#fff', backgroundColor: 'rgba(255,255,255,0.1)' },
    },
    brand: { display: 'flex', alignItems: 'center', gap: tokens.spacingHorizontalS },
    logo: {
        width: '28px',
        height: '28px',
        borderRadius: tokens.borderRadiusCircular,
        background: 'linear-gradient(135deg, #FF0000 0%, #CC0000 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
    },
    nav: { display: 'flex', flexDirection: 'column', gap: tokens.spacingVerticalXXS },
    navItem: {
        justifyContent: 'flex-start',
        width: '100%',
        color: '#aaaaaa',
        padding: `${tokens.spacingVerticalSNudge} ${tokens.spacingHorizontalM}`,
        borderRadius: '10px',
        transition: 'all 0.15s ease',
        ':hover': { color: '#ffffff', backgroundColor: 'rgba(255,255,255,0.1)' },
    },
    navItemActive: {
        color: '#ffffff',
        backgroundColor: 'rgba(255,255,255,0.1)',
        fontWeight: tokens.fontWeightSemibold,
    },
    playlistSection: {
        marginTop: 'auto',
        padding: `${tokens.spacingVerticalL} ${tokens.spacingHorizontalM} ${tokens.spacingVerticalM}`,
        borderTop: `${tokens.strokeWidthThin} solid rgba(255,255,255,0.07)`,
    },
    playlistHeader: {
        fontSize: '11px',
        color: '#888',
        textTransform: 'uppercase',
        marginBottom: tokens.spacingVerticalM,
        display: 'block',
        letterSpacing: '1.2px',
        fontWeight: tokens.fontWeightBold,
    },
    playlistList: { display: 'flex', flexDirection: 'column', gap: tokens.spacingVerticalS },
    playlistItem: {
        cursor: 'pointer',
        color: '#aaa',
        fontSize: '13px',
        transition: 'color 0.15s ease',
        ':hover': { color: '#fff' },
    },
});

const Sidebar = () => {
    const styles = useStyles();
    const navItems = [
        { icon: Home, label: 'Home', path: '/' },
        { icon: Compass, label: 'Explore', path: '/explore' },
        { icon: Library, label: 'Library', path: '/library' },
        { icon: ListMusic, label: 'Queue', path: '/queue' },
    ];

    return (
        <div className={styles.sidebar}>
            {/* Top row: Hamburger + Brand */}
            <div className={styles.topRow}>
                <Button
                    appearance="subtle"
                    icon={<Menu size={22} />}
                    className={styles.hamburger}
                    size="small"
                />
                <div className={styles.brand}>
                    <div className={styles.logo}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: '13px' }}>S</Text>
                    </div>
                    <Text size={500} weight="bold" style={{ letterSpacing: '-0.5px' }}>Music</Text>
                </div>
            </div>

            {/* Navigation */}
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
                                icon={<item.icon size={22} strokeWidth={isActive ? 2.5 : 1.8} />}
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

            {/* Playlists */}
            <div className={styles.playlistSection}>
                <Text className={styles.playlistHeader}>Profiles</Text>
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
