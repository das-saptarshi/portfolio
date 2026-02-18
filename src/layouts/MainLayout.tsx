import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import Player from '../components/Player/Player';
import BottomNav from '../components/BottomNav/BottomNav';
import { makeStyles } from '@fluentui/react-components';

const useStyles = makeStyles({
    layout: {
        display: 'flex',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#030303',
        color: '#ffffff',
        position: 'relative',
    },
    mainPanel: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0, // Prevent flex overflow
    },
    contentArea: {
        flex: 1,
        overflowY: 'auto',
        overflowX: 'hidden',
        paddingTop: '0',
        paddingRight: '0',
        paddingBottom: '100px', // Space for fixed player
        paddingLeft: '0',
        background: 'linear-gradient(180deg, #1a1a2e 0%, #030303 35%)',
        '@media (max-width: 768px)': {
            paddingBottom: '160px', // Nav + Player
        },
    }
});

const MainLayout = () => {
    const styles = useStyles();

    return (
        <div className={styles.layout}>
            <Sidebar />
            <BottomNav />
            <div className={styles.mainPanel}>
                <div className={styles.contentArea}>
                    <Outlet />
                </div>
            </div>
            {/* Player spans full width, fixed at bottom */}
            <Player />
        </div>
    );
};

export default MainLayout;
