import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import Player from '../components/Player/Player';
import styles from './MainLayout.module.css';

const MainLayout = () => {
    return (
        <div className={styles.layout}>
            <Sidebar />
            <div className={styles.mainPanel}>
                <div className="content-area">
                    <Outlet />
                </div>
                <Player />
            </div>
        </div>
    );
};

export default MainLayout;
