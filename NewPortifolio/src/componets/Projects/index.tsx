import { useTranslation } from 'react-i18next';
import './projects.css';

import criticosImg from '../../assets/criticos.png';
import brasilata1Img from '../../assets/brasilata1.jpg';
import brasilata2Img from '../../assets/brasilata2.jpg';
import arquiteturaImg from '../../assets/arquitetura.png';

import profileImg from '../../assets/profile.jpg';
import profileImg2 from '../../assets/profile2.png';

export default function Projects() {
  const { t } = useTranslation();

const projects = [
  {
    img: arquiteturaImg,
    avatar: profileImg,
    title: t("proj1Title"),
    tag: t("proj1Tag"),
  },
  {
    img: criticosImg,
    avatar: profileImg,
    title: t("proj2Title"),
    tag: t("proj2Tag"),
  },
  {
    img: brasilata1Img,
    avatar: profileImg2,
    title: t("proj3Title"),
    tag: t("proj3Tag"),
  },
  {
    img: brasilata2Img,
    avatar: profileImg2,
    title: t("proj4Title"),
    tag: t("proj4Tag"),
  },
];

  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <h2 className="projects-title">{t("projectsTitle")}</h2>
      </div>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div className="projects-card" key={i}>
            <div className="projects-card-img">
                <img src={p.img} alt={p.title} />
            </div>
            <div className="projects-card-info">
                <div className="projects-card-text">
                    <h3>{p.title}</h3>
                    <span>{p.tag}</span>
                </div>
                <img src={p.avatar} alt="Leonardo" className="projects-card-avatar" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}