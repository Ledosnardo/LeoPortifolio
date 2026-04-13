import { useEffect } from 'react';
import '../styles/header.css'
import { useTranslation } from 'react-i18next';

export default function Header(){
    const text = 'Leonardo'
    const { t, i18n } = useTranslation();
    const lang = i18n.language;

    useEffect(() => {
        const saved = localStorage.getItem("lang");
        if (saved) i18n.changeLanguage(saved);
    }, []);

    useEffect(() => {
        localStorage.setItem("lang", i18n.language);    
    }, [i18n.language]);

    return(
        <header className="header">
          <h2 className="logo">
            {text.split("").map((char, i) => (
                <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                {char === " " ? "\u00A0" : char}
                </span>
            ))}
          </h2>

          <nav className="nav">
            <a href="#">// {t("home")}</a>
            <a href="#expertise">// {t("expertise")}</a>
            <a href="#work">// {t("experience")}</a>
            <a href="#projects">// {t("projects")}</a>
            <a href="#contact">// {t("contact")}</a>
          </nav>

          <div className="lang-switch">
            <button
                className={lang === "pt" ? "active" : ""}
                onClick={() => i18n.changeLanguage("pt")}
            >
                PT
            </button>

            <button
                className={lang === "en" ? "active" : ""}
                onClick={() => i18n.changeLanguage("en")}
            >
                EN
            </button>
          </div>
        </header>
    )
}