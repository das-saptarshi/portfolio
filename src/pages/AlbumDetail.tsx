import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Play, Clock, MoreHorizontal, PlusCircle, ChevronDown } from 'lucide-react';
import {
    makeStyles,
    Text,
    Button
} from '@fluentui/react-components';
import { libraryAlbums, experienceData } from '../data/portfolio';

const useStyles = makeStyles({
    container: {
        padding: '32px 48px 2rem',
        '@media (max-width: 768px)': { padding: '20px 16px 2rem' },
    },
    header: {
        display: 'flex',
        alignItems: 'flex-end',
        gap: '28px',
        padding: '1rem 0 2rem',
        '@media (max-width: 768px)': {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        },
    },
    albumArt: {
        width: '220px',
        height: '220px',
        borderRadius: '4px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
        flexShrink: 0,
        overflow: 'hidden',
        position: 'relative',
    },
    albumArtImage: { width: '100%', height: '100%', objectFit: 'cover' },
    albumType: {
        fontSize: '12px',
        textTransform: 'uppercase',
        fontWeight: 700,
        display: 'block',
        color: '#aaa',
        letterSpacing: '1px',
    },
    title: {
        fontSize: '2.8rem',
        fontWeight: 900,
        marginBottom: '6px',
        display: 'block',
        lineHeight: 1.1,
    },
    meta: { color: '#aaa', display: 'block', fontSize: '14px' },
    controls: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        paddingBottom: '8px',
    },
    playButton: {
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        backgroundColor: 'white',
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        border: 'none',
        transition: 'transform 0.15s ease, box-shadow 0.15s ease',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        ':hover': { transform: 'scale(1.06)', boxShadow: '0 6px 20px rgba(0,0,0,0.4)' },
    },
    actionIcon: {
        color: '#888',
        transition: 'color 0.15s ease',
        ':hover': { color: '#fff' },
    },
    trackList: { marginTop: '24px' },
    trackHeader: {
        display: 'grid',
        gridTemplateColumns: '50px 1fr 80px',
        padding: '8px 16px',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        color: '#888',
        fontSize: '12px',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
    },
    headerTime: { textAlign: 'right' },
    trackItem: {
        borderBottom: '1px solid rgba(255,255,255,0.04)',
        borderRadius: '4px',
        transition: 'background-color 0.15s ease',
        ':hover': { backgroundColor: 'rgba(255,255,255,0.06)' },
    },
    trackItemExpanded: { backgroundColor: 'rgba(255,255,255,0.04)' },
    trackRow: {
        display: 'grid',
        gridTemplateColumns: '50px 1fr 40px 40px',
        padding: '14px 16px',
        color: '#ccc',
        cursor: 'pointer',
        alignItems: 'center',
        transition: 'color 0.15s ease',
        ':hover': { color: 'white' },
    },
    trackIndex: { color: '#666', fontSize: '14px' },
    trackDuration: { textAlign: 'right', fontSize: '13px', color: '#888' },
    trackTitle: { fontWeight: 500, fontSize: '14px' },
    trackChevron: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#888',
        transition: 'transform 0.25s ease',
    },
    trackChevronExpanded: { transform: 'rotate(180deg)' },
    trackDescription: {
        overflow: 'hidden',
        transition: 'max-height 0.3s ease, opacity 0.25s ease, padding 0.3s ease',
        maxHeight: '0px',
        opacity: 0,
        padding: '0 16px 0 66px',
    },
    trackDescriptionExpanded: {
        maxHeight: '200px',
        opacity: 1,
        padding: '0 16px 14px 66px',
    },
    descriptionText: { color: '#aaa', fontSize: '13px', lineHeight: '1.6' },
});

const AlbumDetail = () => {
    const styles = useStyles();
    const { id } = useParams();
    const data = experienceData[id || 'microsoft'];
    const albumData = libraryAlbums.find(a => a.id === (id || 'microsoft'));
    const [expandedTrack, setExpandedTrack] = useState<number | null>(null);

    if (!data) return <div style={{ padding: '48px', color: '#888' }}>Album not found</div>;

    return (
        <div
            className={styles.container}
            style={{ background: `linear-gradient(to bottom, ${data.color}55 0%, ${data.color}20 40%, transparent 100%)` }}
        >
            {/* Header */}
            <div className={styles.header}>
                <div
                    className={styles.albumArt}
                    style={{ background: `linear-gradient(135deg, ${data.color}, #000)` }}
                >
                    {albumData?.thumbnail && (
                        <img
                            src={`${import.meta.env.BASE_URL}${albumData.thumbnail}`}
                            alt={data.title}
                            className={styles.albumArtImage}
                        />
                    )}
                </div>
                <div>
                    <Text className={styles.albumType}>Album</Text>
                    <Text className={styles.title}>{data.title}</Text>
                    <Text className={styles.meta}>{data.role.join(', ')} • {data.year} • {data.tracks.length} songs</Text>
                </div>
            </div>

            {/* Controls */}
            <div className={styles.controls}>
                <button className={styles.playButton}>
                    <Play fill="black" size={28} style={{ marginLeft: 4 }} />
                </button>
                <Button appearance="transparent" icon={<PlusCircle size={28} color="#888" />} className={styles.actionIcon} />
                <Button appearance="transparent" icon={<MoreHorizontal size={28} color="#888" />} className={styles.actionIcon} />
            </div>

            {/* List */}
            <div className={styles.trackList}>
                <div className={styles.trackHeader}>
                    <span>#</span>
                    <span>Title</span>
                    <span className={styles.headerTime}><Clock size={14} /></span>
                </div>
                {data.tracks.map((track, index) => {
                    const isExpanded = expandedTrack === index;
                    return (
                        <div
                            key={index}
                            className={`${styles.trackItem} ${isExpanded ? styles.trackItemExpanded : ''}`}
                        >
                            <div
                                className={styles.trackRow}
                                onClick={() => setExpandedTrack(isExpanded ? null : index)}
                            >
                                <span className={styles.trackIndex}>{index + 1}</span>
                                <Text className={styles.trackTitle}>{track.title}</Text>
                                <span className={styles.trackDuration}>{track.duration}</span>
                                <span className={`${styles.trackChevron} ${isExpanded ? styles.trackChevronExpanded : ''}`}>
                                    <ChevronDown size={16} />
                                </span>
                            </div>
                            <div className={`${styles.trackDescription} ${isExpanded ? styles.trackDescriptionExpanded : ''}`}>
                                <Text className={styles.descriptionText}>{track.description}</Text>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AlbumDetail;
