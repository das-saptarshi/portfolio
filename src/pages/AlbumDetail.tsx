import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Play, Clock, MoreHorizontal, PlusCircle, ChevronDown } from 'lucide-react';
import { makeStyles, tokens, Text, Button } from '@fluentui/react-components';
import { libraryAlbums, experienceData } from '../data/portfolio';

const useStyles = makeStyles({
    container: {
        paddingTop: tokens.spacingVerticalXXXL,
        paddingRight: '48px',
        paddingBottom: '2rem',
        paddingLeft: '48px',
        '@media (max-width: 768px)': {
            paddingTop: tokens.spacingVerticalXL,
            paddingRight: tokens.spacingHorizontalL,
            paddingLeft: tokens.spacingHorizontalL,
        },
    },
    header: {
        display: 'flex',
        alignItems: 'flex-end',
        gap: '28px',
        paddingTop: tokens.spacingVerticalL,
        paddingBottom: '2rem',
        '@media (max-width: 768px)': {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        },
    },
    albumArt: {
        width: '220px',
        height: '220px',
        borderRadius: tokens.borderRadiusMedium,
        boxShadow: tokens.shadow28,
        flexShrink: 0,
        overflow: 'hidden',
        position: 'relative',
    },
    albumArtImage: { width: '100%', height: '100%', objectFit: 'cover' },
    albumType: {
        fontSize: tokens.fontSizeBase200,
        textTransform: 'uppercase',
        fontWeight: tokens.fontWeightBold,
        display: 'block',
        color: tokens.colorNeutralForeground3,
        letterSpacing: '1px',
        marginBottom: tokens.spacingVerticalXS,
    },
    title: {
        fontSize: '2.8rem',
        fontWeight: 900,
        marginTop: tokens.spacingVerticalXS,
        marginBottom: tokens.spacingVerticalS,
        display: 'block',
        lineHeight: 1.1,
    },
    meta: {
        color: tokens.colorNeutralForeground3,
        display: 'block',
        fontSize: tokens.fontSizeBase300,
        marginTop: tokens.spacingVerticalXS,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        gap: tokens.spacingHorizontalXL,
        paddingBottom: tokens.spacingVerticalS,
    },
    playButton: {
        width: '56px',
        height: '56px',
        borderRadius: tokens.borderRadiusCircular,
        backgroundColor: 'white',
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        border: 'none',
        transition: 'transform 0.15s ease, box-shadow 0.15s ease',
        boxShadow: tokens.shadow8,
        ':hover': { transform: 'scale(1.06)', boxShadow: tokens.shadow16 },
    },
    actionIcon: {
        color: tokens.colorNeutralForeground4,
        transition: 'color 0.15s ease',
        ':hover': { color: tokens.colorNeutralForeground1 },
    },
    trackList: { marginTop: tokens.spacingVerticalXXL },
    trackHeader: {
        display: 'grid',
        gridTemplateColumns: '50px 1fr 80px',
        paddingTop: tokens.spacingVerticalS,
        paddingRight: tokens.spacingHorizontalL,
        paddingBottom: tokens.spacingVerticalS,
        paddingLeft: tokens.spacingHorizontalL,
        borderBottom: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke2}`,
        color: tokens.colorNeutralForeground4,
        fontSize: tokens.fontSizeBase200,
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
    },
    headerTime: { textAlign: 'right' },
    trackItem: {
        borderBottom: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke3}`,
        borderRadius: tokens.borderRadiusMedium,
        transition: 'background-color 0.15s ease',
        ':hover': { backgroundColor: tokens.colorNeutralBackground1Hover },
    },
    trackItemExpanded: { backgroundColor: tokens.colorNeutralBackground1Pressed },
    trackRow: {
        display: 'grid',
        gridTemplateColumns: '50px 1fr 40px 40px',
        paddingTop: '14px',
        paddingRight: tokens.spacingHorizontalL,
        paddingBottom: '14px',
        paddingLeft: tokens.spacingHorizontalL,
        color: tokens.colorNeutralForeground2,
        cursor: 'pointer',
        alignItems: 'center',
        transition: 'color 0.15s ease',
        ':hover': { color: tokens.colorNeutralForeground1 },
    },
    trackIndex: { color: tokens.colorNeutralForeground4, fontSize: tokens.fontSizeBase300 },
    trackDuration: { textAlign: 'right', fontSize: '13px', color: tokens.colorNeutralForeground4 },
    trackTitle: { fontWeight: tokens.fontWeightMedium, fontSize: tokens.fontSizeBase300 },
    trackChevron: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: tokens.colorNeutralForeground4,
        transition: 'transform 0.25s ease',
    },
    trackChevronExpanded: { transform: 'rotate(180deg)' },
    trackDescription: {
        overflow: 'hidden',
        transition: 'max-height 0.3s ease, opacity 0.25s ease, padding 0.3s ease',
        maxHeight: '0px',
        opacity: 0,
        paddingTop: '0px',
        paddingRight: tokens.spacingHorizontalL,
        paddingBottom: '0px',
        paddingLeft: '66px',
    },
    trackDescriptionExpanded: {
        maxHeight: '200px',
        opacity: 1,
        paddingTop: tokens.spacingVerticalS,
        paddingRight: tokens.spacingHorizontalL,
        paddingBottom: '14px',
        paddingLeft: '66px',
    },
    descriptionText: { color: tokens.colorNeutralForeground3, fontSize: '13px', lineHeight: tokens.lineHeightBase400 },
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
