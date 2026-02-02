import { Home, Library, Compass } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const navItems = [
        { icon: Home, label: 'Home', path: '/' },
        { icon: Compass, label: 'Explore', path: '/explore' },
        { icon: Library, label: 'Library', path: '/library' },
    ];

    return (
        <div style={{
            width: '240px',
            height: 'calc(100vh - 80px)',
            backgroundColor: '#030303',
            display: 'flex',
            flexDirection: 'column',
            padding: '1rem',
            borderRight: '1px solid #212121'
        }}>
            <div style={{ padding: '0 1rem 2rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg, #FF0000 0%, #CC0000 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ color: 'white', fontWeight: 'bold' }}>S</span>
                </div>
                <span style={{ fontSize: '1.2rem', fontWeight: 'bold', letterSpacing: '-0.5px' }}>Music</span>
            </div>

            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        style={({ isActive }) => ({
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1.5rem',
                            padding: '0.75rem 1rem',
                            borderRadius: '8px',
                            color: isActive ? '#ffffff' : '#aaaaaa',
                            backgroundColor: isActive ? '#212121' : 'transparent',
                            fontWeight: isActive ? 600 : 400,
                            transition: 'all 0.2s ease'
                        })}
                    >
                        {({ isActive }) => (
                            <>
                                <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                                <span>{item.label}</span>
                            </>
                        )}
                    </NavLink>
                ))}
            </nav>

            <div style={{ marginTop: '2rem', padding: '0 1rem' }}>
                <h3 style={{ fontSize: '0.8rem', color: '#aaaaaa', textTransform: 'uppercase', marginBottom: '1rem' }}>Playlists</h3>
                <div style={{ color: '#aaaaaa', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <p style={{ cursor: 'pointer' }} className="hover:text-white">Deep Work Focus</p>
                    <p style={{ cursor: 'pointer' }} className="hover:text-white">System Design</p>
                    <p style={{ cursor: 'pointer' }} className="hover:text-white">Coding Favorites</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
