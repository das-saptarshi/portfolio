import { Mail, Linkedin, Github, Code2, ExternalLink } from 'lucide-react';
import { makeStyles, tokens, Text } from '@fluentui/react-components';
import { contactMethods } from '../data/portfolio';

const iconMap: Record<string, React.ElementType> = {
    Email: Mail,
    LinkedIn: Linkedin,
    GitHub: Github,
    LeetCode: Code2,
    GeeksForGeeks: Code2,
};

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
    nowPlayingSection: {
        marginBottom: '40px',
    },
    sectionLabel: {
        fontSize: '11px',
        color: tokens.colorNeutralForeground4,
        textTransform: 'uppercase',
        fontWeight: tokens.fontWeightBold,
        display: 'block',
        letterSpacing: '1px',
        marginBottom: tokens.spacingVerticalS,
    },
    nowPlayingCard: {
        display: 'flex',
        alignItems: 'center',
        gap: tokens.spacingHorizontalXL,
        padding: tokens.spacingVerticalL,
        backgroundColor: 'rgba(255,255,255,0.04)',
        borderRadius: tokens.borderRadiusXLarge,
        border: `${tokens.strokeWidthThin} solid rgba(255,255,255,0.06)`,
    },
    nowPlayingArt: {
        width: '64px',
        height: '64px',
        borderRadius: tokens.borderRadiusMedium,
        background: 'linear-gradient(135deg, #111, #00a4ef)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
    },
    nowPlayingInfo: {
        display: 'flex',
        flexDirection: 'column',
        gap: tokens.spacingVerticalXXS,
    },
    nowPlayingTitle: {
        fontSize: '1.1rem',
        fontWeight: tokens.fontWeightBold,
        display: 'block',
    },
    nowPlayingMeta: {
        color: tokens.colorNeutralForeground3,
        fontSize: tokens.fontSizeBase300,
    },
    queueSection: {},
    trackHeader: {
        display: 'grid',
        gridTemplateColumns: '50px 1fr 1fr 40px',
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
    headerLink: { textAlign: 'right' },
    trackRow: {
        display: 'grid',
        gridTemplateColumns: '50px 1fr 1fr 40px',
        paddingTop: '14px',
        paddingRight: tokens.spacingHorizontalL,
        paddingBottom: '14px',
        paddingLeft: tokens.spacingHorizontalL,
        color: tokens.colorNeutralForeground2,
        cursor: 'pointer',
        alignItems: 'center',
        borderBottom: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke3}`,
        borderRadius: tokens.borderRadiusMedium,
        transition: 'background-color 0.15s ease, color 0.15s ease',
        ':hover': {
            backgroundColor: tokens.colorNeutralBackground1Hover,
            color: tokens.colorNeutralForeground1,
        },
    },
    trackIndex: {
        color: tokens.colorNeutralForeground4,
        fontSize: tokens.fontSizeBase300,
    },
    trackName: {
        display: 'flex',
        alignItems: 'center',
        gap: tokens.spacingHorizontalM,
    },
    trackIcon: {
        width: '32px',
        height: '32px',
        borderRadius: tokens.borderRadiusMedium,
        backgroundColor: 'rgba(255,255,255,0.06)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
    },
    trackTitle: {
        fontWeight: tokens.fontWeightMedium,
        fontSize: tokens.fontSizeBase300,
    },
    trackLink: {
        color: tokens.colorNeutralForeground4,
        fontSize: '13px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    externalIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: tokens.colorNeutralForeground4,
        transition: 'color 0.15s ease',
    },
});

const Queue = () => {
    const styles = useStyles();

    return (
        <div className={styles.container}>
            {/* Now Playing */}
            <div className={styles.nowPlayingSection}>
                <Text className={styles.sectionLabel}>Now Playing</Text>
                <div className={styles.nowPlayingCard}>
                    <div className={styles.nowPlayingArt}>
                        <img
                            src={`${import.meta.env.BASE_URL}website/images/headshot.jpg`}
                            alt="SD"
                            style={{ width: '100%', height: '100%', borderRadius: '8px', objectFit: 'cover' }}
                        />
                    </div>
                    <div className={styles.nowPlayingInfo}>
                        <Text className={styles.nowPlayingTitle}>Software Engineer II</Text>
                        <Text className={styles.nowPlayingMeta}>Microsoft • 2024 – Present</Text>
                    </div>
                </div>
            </div>

            {/* Next in Queue */}
            <div className={styles.queueSection}>
                <Text className={styles.sectionLabel}>Next in Queue</Text>

                <div className={styles.trackHeader}>
                    <span>#</span>
                    <span>Contact</span>
                    <span>Link</span>
                    <span />
                </div>

                {contactMethods.map((contact, idx) => {
                    const Icon = iconMap[contact.name] || Code2;
                    return (
                        <div
                            key={contact.name}
                            className={styles.trackRow}
                            onClick={() => window.open(contact.link, '_blank')}
                        >
                            <span className={styles.trackIndex}>{idx + 1}</span>
                            <div className={styles.trackName}>
                                <div className={styles.trackIcon}>
                                    <Icon size={16} color="#aaa" />
                                </div>
                                <span className={styles.trackTitle}>{contact.name}</span>
                            </div>
                            <span className={styles.trackLink}>{contact.display}</span>
                            <div className={styles.externalIcon}>
                                <ExternalLink size={14} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Queue;
