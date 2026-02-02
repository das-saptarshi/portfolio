import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import Player from '../components/Player/Player';

const MainLayout = () => {
    return (
        <div style={{ display: 'flex', height: '100vh', width: '100vw', backgroundColor: '#030303' }}>
            <Sidebar />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div className="content-area">
                    <Outlet />
                </div>
                <Player />
            </div>
        </div>
    );
};

export default MainLayout;
