import { FaReact } from 'react-icons/fa';
import { MdOutlinePhoneAndroid } from 'react-icons/md';
import { TbBrandCSharp } from 'react-icons/tb';
import { SiMysql } from 'react-icons/si';
import '../styles/expertise.css';
import { useTranslation } from 'react-i18next';


export default function Expertise() {
  const { t } = useTranslation();
  
  const cards = [
    { icon: <FaReact size={36} />, title: t("card1Title"), subtitle: t("card1Sub"), description: t("card1Desc") },
    { icon: <MdOutlinePhoneAndroid size={36} />, title: t("card2Title"), subtitle: t("card2Sub"), description: t("card2Desc") },
    { icon: <TbBrandCSharp size={36} />, title: t("card3Title"), subtitle: t("card3Sub"), description: t("card3Desc") },
    { icon: <SiMysql size={36} />, title: t("card4Title"), subtitle: t("card4Sub"), description: t("card4Desc") },
  ];
  return (
    <section className="expertise" id="expertise">
      <div className="expertise-header">
          <h2 className="expertise-title">{t("expertiseTag")}</h2>
          <p className="expertise-sub">{t("expertiseSub")}</p>
      </div>

      <div className="expertise-grid">
        {cards.map((card, i) => (
          <div className="expertise-card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="expertise-card-icon">{card.icon}</div>
            <div className="expertise-card-body">
              <h3>{card.title}</h3>
              <span className="expertise-card-sub">{card.subtitle}</span>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}