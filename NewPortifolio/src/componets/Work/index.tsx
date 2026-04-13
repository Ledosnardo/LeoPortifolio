import { useTranslation } from 'react-i18next';
import brasilataImg from '../../assets/brasilata.png';
import './work.css';

export default function Work() {
  const { t } = useTranslation();

  return (
    <section className="work" id="work">
      <div className="work-left">
        <h2 className="work-title">{t("workTitle")}<br />{t("workTitle2")}</h2>
        <p className="work-desc">{t("workDesc")}</p>
      </div>

      <div className="work-right">
        <div className="work-phone">
          <img src={brasilataImg} alt="Brasilata App" />
        </div>
      </div>
    </section>
  );
}