import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import Player from '../components/Player/Player';
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
        paddingBottom: '100px', // Space for player
    }
});

const MainLayout = () => {
    const styles = useStyles();

    return (
        <div className={styles.layout}>
            <Sidebar />
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
