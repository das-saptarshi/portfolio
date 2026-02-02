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
        backgroundColor: '#030303', // YTM Black
        color: '#ffffff',
    },
    mainPanel: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    contentArea: {
        flex: 1,
        overflowY: 'auto',
        padding: `50px 100px`, // Space for player
        background: 'radial-gradient(circle at 0% 0%, #1c3b42 0%, #030303 60%)',
        '@media (max-width: 768px)': {
            padding: '20px 20px 140px 20px', // More bottom padding for Nav + Player
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
                <Player />
            </div>
        </div>
    );
};

export default MainLayout;
