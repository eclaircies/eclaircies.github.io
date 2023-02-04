import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header 
      className={clsx('hero hero--primary', styles.heroBanner)}
      style={{backgroundImage:`url(${useBaseUrl('img/graphics/degrade.png')})`,
        backgroundSize:"cover",
        backgroundPosition: "top", 
        // minHeight:"calc(100vh - 60px)",
        zIndex:0,padding:"0px !important"}}
    >
      <div className="container">
        <img src={`${useBaseUrl('img/graphics/logo3.png')}`} style={{width:400,"margin-bottom":0}}/>
        {/* <h1 className="hero__title">{siteConfig.title}</h1> */}
        {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Découvrir nos projets
          </Link>
        </div> */}
      </div>
    </header>
  );
}



const TeamMember = ({src,name,contact,role}) => {
  return (
  <div className="member-wrapper">
    <img alt="team" className="member-img" src={`${useBaseUrl(src)}`}/>
    <div>
      <h2 style={{"align-content":"baseline"}} className="member-name"><a href={contact} target="_blank">{name}</a></h2>
      <p className="member-role">{role}</p>
    </div>
  </div>
  )
}

const teamList = [
  {src:"img/team/theo.jpg","name":"Théo Alves Da Costa","role":"Co-Président","contact":"https://www.linkedin.com/in/th%C3%A9o-alves-da-costa-09397a82/"},
  {src:"img/team/lou.jpg","name":"Lou Welgryn","role":"Co-Présidente","contact":"https://www.linkedin.com/in/lou-welgryn-460434b0/"},
  {src:"img/graphics/degrade2.png","name":"Morane Meuh Non","role":"Co-Présidente","contact":"https://www.linkedin.com/in/lou-welgryn-460434b0/"},
  {src:"img/graphics/degrade3.png","name":"Gérard Douglas","role":"Co-Présidente","contact":"https://www.linkedin.com/in/lou-welgryn-460434b0/"},
  {src:"img/graphics/degrade.png","name":"Vegane Ornières","role":"Co-Présidente","contact":"https://www.linkedin.com/in/lou-welgryn-460434b0/"},
  {src:"img/graphics/degrade4.png","name":"Carlos Guerrero","role":"Co-Présidente","contact":"https://www.linkedin.com/in/lou-welgryn-460434b0/"},
  {src:"img/graphics/degrade.png","name":"Alexandre Joly","role":"Co-Présidente","contact":"https://www.linkedin.com/in/lou-welgryn-460434b0/"},
  {src:"img/graphics/degrade2.png","name":"Antoine Crépel","role":"Co-Présidente","contact":"https://www.linkedin.com/in/lou-welgryn-460434b0/"},
]

const SectionTeam = () => {
  return (
    <div className="" style={{"display":"flex","align-items":"flex-start","justify-content":"center","flex-wrap":"wrap","margin-top":"60px"}}>
      {teamList.map(el => (<TeamMember src={el.src} name={el.name} contact={el.contact} role={el.role}/>))}
    </div>
  )
}


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`éclaircies - La lumière au bout du pipeline`}
      description="Eclaircies est un collectif d’experts bénévoles, tous spécialistes des enjeux écologiques, énergétiques et climatiques. Convaincus qu’en démocratie, faire évoluer le système passe par un bon niveau d’information des citoyens et de leurs représentants politiques, nous avons pour objectif d’éclairer le débat public en mettant à disposition de la société civile (décideurs, individus consommateurs ou électeurs, territoires, etc.) de l’information qualifiée et des outils qui permettent d’y voir plus clair dans un océan d’informations parfois contradictoires.">
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
        <section>
          <div className="container main-section">
            <h1>L'association Eclaircies</h1>
            <div className="row">
              <div className="col col--6">
                <img src={`${useBaseUrl("img/graphics/degrade3.png")}`} alt="degrade" style={{"width":"70%","margin-bottom":"20px"}}/>
              </div>
              <div className="col col--6" style={{"text-align":"left","align-content":"center"}}>
                <p>Eclaircies est un collectif d’experts bénévoles, tous spécialistes des enjeux écologiques, énergétiques et climatiques. Convaincus qu’en démocratie, faire évoluer le système passe par un bon niveau d’information des citoyens et de leurs représentants politiques, nous avons pour objectif d’éclairer le débat public en mettant à disposition de la société civile (décideurs, individus consommateurs ou électeurs, territoires, etc.) de l’information qualifiée et des outils qui permettent d’y voir plus clair dans un océan d’informations parfois contradictoires.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="light-green">
          <div className="container main-section">
            <h1>L'équipe Eclaircies</h1>
            <p>🖐 Vous pouvez contacter l'équipe à <Link to="mailto:collectifeclaircies@gmail.com">collectifeclaircies@gmail.com</Link></p>
            <SectionTeam/>
          </div>
        </section>
      </main>
    </Layout>
  );
}
