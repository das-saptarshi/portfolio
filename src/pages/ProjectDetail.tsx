import { useParams, useNavigate } from 'react-router-dom';
import { ExternalLink, Github, Play, Eye, Calendar, ArrowLeft } from 'lucide-react';
import { makeStyles, tokens, Text } from '@fluentui/react-components';
import { exploreProjects } from '../data/portfolio';

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
    backButton: {
        color: tokens.colorNeutralForeground3,
        marginBottom: tokens.spacingVerticalL,
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: tokens.spacingHorizontalS,
        fontSize: tokens.fontSizeBase300,
        transition: 'color 0.15s ease',
        ':hover': { color: tokens.colorNeutralForeground1 },
    },
    hero: {
        width: '100%',
        aspectRatio: '16/9',
        maxHeight: '400px',
        borderRadius: tokens.borderRadiusXLarge,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        marginBottom: tokens.spacingVerticalXXL,
    },
    heroPlayBtn: {
        width: '72px',
        height: '72px',
        borderRadius: tokens.borderRadiusCircular,
        backgroundColor: 'rgba(255,255,255,0.15)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        border: 'none',
        transition: 'transform 0.15s ease, background-color 0.15s ease',
        ':hover': { transform: 'scale(1.08)', backgroundColor: 'rgba(255,255,255,0.25)' },
    },
    titleRow: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: tokens.spacingHorizontalL,
        marginBottom: tokens.spacingVerticalS,
        '@media (max-width: 768px)': { flexDirection: 'column' },
    },
    title: {
        fontSize: '1.8rem',
        fontWeight: tokens.fontWeightBold,
        display: 'block',
        lineHeight: 1.2,
    },
    typeBadge: {
        fontSize: tokens.fontSizeBase200,
        fontWeight: tokens.fontWeightSemibold,
        padding: `${tokens.spacingVerticalXXS} ${tokens.spacingHorizontalM}`,
        borderRadius: tokens.borderRadiusMedium,
        flexShrink: 0,
    },
    metaRow: {
        display: 'flex',
        alignItems: 'center',
        gap: tokens.spacingHorizontalL,
        color: tokens.colorNeutralForeground3,
        fontSize: tokens.fontSizeBase300,
        marginBottom: tokens.spacingVerticalXL,
    },
    metaItem: {
        display: 'flex',
        alignItems: 'center',
        gap: tokens.spacingHorizontalXS,
    },
    description: {
        display: 'block',
        color: tokens.colorNeutralForeground2,
        fontSize: tokens.fontSizeBase300,
        lineHeight: '1.7',
        maxWidth: '800px',
        marginBottom: tokens.spacingVerticalXXL,
    },
    sectionTitle: {
        display: 'block',
        fontSize: tokens.fontSizeBase400,
        fontWeight: tokens.fontWeightBold,
        marginTop: tokens.spacingVerticalL,
        marginBottom: tokens.spacingVerticalM,
        color: tokens.colorNeutralForeground1,
    },
    techStack: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: tokens.spacingHorizontalS,
        marginBottom: tokens.spacingVerticalXXL,
    },
    techBadge: {
        fontSize: '13px',
        padding: `${tokens.spacingVerticalSNudge} 14px`,
        backgroundColor: 'rgba(255,255,255,0.06)',
        color: tokens.colorNeutralForeground2,
        border: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke2}`,
        borderRadius: '20px',
        fontWeight: tokens.fontWeightMedium,
    },
    linksRow: {
        display: 'flex',
        gap: tokens.spacingHorizontalM,
        marginBottom: '48px',
    },
    linkBtn: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: tokens.spacingHorizontalS,
        padding: `${tokens.spacingVerticalS} ${tokens.spacingHorizontalXL}`,
        borderRadius: '24px',
        fontSize: tokens.fontSizeBase300,
        fontWeight: tokens.fontWeightSemibold,
        cursor: 'pointer',
        textDecoration: 'none',
        transition: 'all 0.15s ease',
        border: 'none',
    },
    githubBtn: {
        backgroundColor: 'rgba(255,255,255,0.1)',
        color: tokens.colorNeutralForeground1,
        ':hover': { backgroundColor: 'rgba(255,255,255,0.18)' },
    },
    demoBtn: {
        backgroundColor: '#fff',
        color: '#000',
        ':hover': { backgroundColor: '#e0e0e0' },
    },
    relatedSection: {
        marginTop: tokens.spacingVerticalXXL,
    },
    relatedGrid: {
        display: 'flex',
        gap: tokens.spacingHorizontalXL,
        overflowX: 'auto',
        paddingBottom: tokens.spacingVerticalS,
        scrollbarWidth: 'none',
        '::-webkit-scrollbar': { display: 'none' },
    },
    relatedCard: {
        minWidth: '240px',
        maxWidth: '240px',
        cursor: 'pointer',
        flexShrink: 0,
        transition: 'transform 0.15s ease',
        ':hover': { transform: 'translateY(-2px)' },
    },
    relatedThumb: {
        width: '100%',
        aspectRatio: '16/9',
        borderRadius: tokens.borderRadiusXLarge,
        marginBottom: tokens.spacingVerticalS,
    },
    relatedTitle: {
        fontWeight: tokens.fontWeightSemibold,
        fontSize: tokens.fontSizeBase300,
        display: 'block',
    },
    relatedMeta: {
        color: tokens.colorNeutralForeground3,
        fontSize: tokens.fontSizeBase200,
    },
});

const ProjectDetail = () => {
    const styles = useStyles();
    const { id } = useParams();
    const navigate = useNavigate();
    const project = exploreProjects.find(p => p.id === id);

    if (!project) return <div style={{ padding: '48px', color: '#888' }}>Project not found</div>;

    const relatedProjects = exploreProjects.filter(p => p.id !== id);

    return (
        <div className={styles.container}>
            <div className={styles.backButton} onClick={() => navigate('/explore')}>
                <ArrowLeft size={18} /> Back to Projects
            </div>

            {/* Hero */}
            <div
                className={styles.hero}
                style={{ background: `linear-gradient(135deg, #111, ${project.color})` }}
            >
                <button className={styles.heroPlayBtn}>
                    <Play fill="white" size={32} />
                </button>
            </div>

            {/* Title & Type */}
            <div className={styles.titleRow}>
                <Text className={styles.title}>{project.title}</Text>
                <span
                    className={styles.typeBadge}
                    style={{ backgroundColor: `${project.color}30`, color: project.color }}
                >
                    {project.type}
                </span>
            </div>

            {/* Meta */}
            <div className={styles.metaRow}>
                <span className={styles.metaItem}>
                    <Eye size={16} /> {project.views} views
                </span>
                <span className={styles.metaItem}>
                    <Calendar size={16} /> 2 days ago
                </span>
                <span>Saptarshi Das</span>
            </div>

            {/* Description */}
            <Text className={styles.description}>{project.description}</Text>

            {/* Tech Stack */}
            <Text className={styles.sectionTitle}>Tech Stack</Text>
            <div className={styles.techStack}>
                {project.techStack.map(tech => (
                    <span key={tech} className={styles.techBadge}>{tech}</span>
                ))}
            </div>

            {/* Links */}
            <Text className={styles.sectionTitle}>Links</Text>
            <div className={styles.linksRow}>
                {project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.linkBtn} ${styles.githubBtn}`}
                    >
                        <Github size={18} /> View Source
                    </a>
                )}
                {project.demoUrl && (
                    <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.linkBtn} ${styles.demoBtn}`}
                    >
                        <ExternalLink size={18} /> Live Demo
                    </a>
                )}
            </div>

            {/* Related Projects */}
            <div className={styles.relatedSection}>
                <Text className={styles.sectionTitle}>Related Projects</Text>
                <div className={styles.relatedGrid}>
                    {relatedProjects.map(rp => (
                        <div
                            key={rp.id}
                            className={styles.relatedCard}
                            onClick={() => navigate(`/project/${rp.id}`)}
                        >
                            <div
                                className={styles.relatedThumb}
                                style={{ background: `linear-gradient(135deg, #111, ${rp.color})` }}
                            />
                            <Text className={styles.relatedTitle}>{rp.title}</Text>
                            <Text className={styles.relatedMeta}>{rp.views} views • {rp.type}</Text>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
