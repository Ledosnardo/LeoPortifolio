import { useTranslation } from 'react-i18next';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './contact.css';

const links = [
  {
    icon: <FaLinkedin size={24} />,
    label: "LinkedIn",
    value: "Leonardo Atanasio",
    href: "https://www.linkedin.com/in/leonardo-atanasio-4a7364219/",
  },
  {
    icon: <FaGithub size={24} />,
    label: "GitHub",
    value: "Leonardo",
    href: "https://github.com/ledosnardo",
  },
  {
    icon: <MdEmail size={24} />,
    label: "Email",
    value: "leonardoatanasiorodrigues@gmail.com",
    href: "mailto:leonardoatanasiorodrigues@gmail.com",
  },
];

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section className="contact" id='contact'>
      <div className="contact-inner">
        <h2 className="contact-title">{t("contactTitle")}</h2>
        <p className="contact-thanks">{t("contactThanks")}</p>

        <div className="contact-links">
          {links.map((link, i) => (
            <a href={link.href} target="_blank" rel="noreferrer" className="contact-link" key={i}>
              <span className="contact-link-icon">{link.icon}</span>
              <div className="contact-link-text">
                <span className="contact-link-label">{link.label}</span>
                <span className="contact-link-value">{link.value}</span>
              </div>
            </a>
          ))}
        </div>

        <p className="contact-footer">
          {t("contactFooter")}
        </p>
      </div>
    </section>
  );
}