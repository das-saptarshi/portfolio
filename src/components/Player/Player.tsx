import { Play, SkipBack, SkipForward, Repeat, Shuffle, Volume2, Mic2 } from 'lucide-react';

const Player = () => {
    return (
        <div style={{
            height: '80px',
            width: '100%',
            backgroundColor: '#212121',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 2rem',
            position: 'fixed',
            bottom: 0,
            zIndex: 100
        }}>
            {/* Current Track Info */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '30%' }}>
                <div style={{ width: 48, height: 48, backgroundColor: '#333', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '1.5rem' }}>👨‍💻</span>
                </div>
                <div>
                    <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>Saptarshi Das</div>
                    <div style={{ fontSize: '0.8rem', color: '#aaa' }}>Software Engineer II • Microsoft</div>
                </div>
            </div>

            {/* Controls */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', width: '40%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <Shuffle size={20} color="#aaa" />
                    <SkipBack size={24} fill="currentColor" />
                    <div style={{
                        width: 40, height: 40, borderRadius: '50%', backgroundColor: 'white', color: 'black',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
                    }}>
                        <Play size={24} fill="currentColor" style={{ marginLeft: 2 }} />
                    </div>
                    <SkipForward size={24} fill="currentColor" />
                    <Repeat size={20} color="#aaa" />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', width: '100%', maxWidth: '500px' }}>
                    <span style={{ fontSize: '0.7rem', color: '#aaa' }}>2:14</span>
                    <div style={{ flex: 1, height: 4, backgroundColor: '#555', borderRadius: 2, position: 'relative' }}>
                        <div style={{ width: '40%', height: '100%', backgroundColor: 'white', borderRadius: 2 }}></div>
                    </div>
                    <span style={{ fontSize: '0.7rem', color: '#aaa' }}>5:30</span>
                </div>
            </div>

            {/* Volume & Extras */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '1rem', width: '30%' }}>
                <a href="mailto:saptarshidas743@gmail.com" style={{ fontSize: '0.9rem', fontWeight: 600, color: '#aaa', marginRight: '1rem' }}>CONTACT ME</a>
                <Mic2 size={20} color="#aaa" />
                <Volume2 size={20} color="#aaa" />
            </div>
        </div>
    );
};

export default Player;
