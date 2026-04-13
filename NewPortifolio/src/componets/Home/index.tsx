import { useTranslation } from "react-i18next";
import { FaGithub, FaReact, FaAngular } from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { SiMysql } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import './home.css';
import Background from "../Background";

export default function Home(){
    const { t } = useTranslation();
    return( 
             <section className="content" id="home">
              <Background />
              
               <main className="hero">
                 <h2>Leonardo Atanasio</h2>
       
                 <p>
                   {t("subTitle")}
                 </p>
                 
                 <div className="tech-icons">
                   <FaGithub />
                   <FaReact />
                   <FaAngular />
                   <MdOutlinePhoneAndroid />
                   <TbBrandCSharp />
                   <SiMysql />
                 </div>
               </main>
       
             </section>     
    )
}