import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import useBaseUrl from "@docusaurus/useBaseUrl";

import styles from "./index.module.css";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`éclaircies - La lumière au bout du pipeline`}
      description="éclaircies est un collectif d’experts bénévoles, tous spécialistes des enjeux écologiques, énergétiques et climatiques. Convaincus qu’en démocratie, faire évoluer le système passe par un bon niveau d’information des citoyens et de leurs représentants politiques, nous avons pour objectif d’éclairer le débat public en mettant à disposition de la société civile (décideurs, individus consommateurs ou électeurs, territoires, etc.) de l’information qualifiée et des outils qui permettent d’y voir plus clair dans un océan d’informations parfois contradictoires."
    >
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
        <section>
          <div className="container main-section">
            <h1>L'association éclaircies</h1>
            <div className="row">
              <div className="col col--6 supercenter">
                <img
                  src={`${useBaseUrl("img/graphics/degrade3.png")}`}
                  alt="degrade"
                  style={{ width: "70%", "margin-bottom": "20px" }}
                />
              </div>
              <div
                className="col col--6 supercenter"
                style={{ "text-align": "left", "align-content": "center" }}
              >
                <p>
                  <i>éclaircies</i> est un collectif{" "}
                  <b>
                    d’experts bénévoles, tous spécialistes des enjeux
                    écologiques, énergétiques et climatiques
                  </b>
                  . Convaincus qu’en démocratie, faire évoluer le système passe
                  par un bon niveau d’information des citoyens et de leurs
                  représentants politiques, nous avons pour objectif d’éclairer
                  le débat public en mettant à disposition de la société civile
                  (décideurs, individus consommateurs ou électeurs, territoires,
                  etc.) de l’information qualifiée et des outils qui permettent
                  d’y voir plus clair dans un océan d’informations parfois
                  contradictoires.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="light-green">
          <div className="container main-section">
            <h1>L'équipe éclaircies</h1>
            <p>
              🖐 Vous pouvez contacter l'équipe à{" "}
              <Link to="mailto:collectifeclaircies@gmail.com">
                collectifeclaircies@gmail.com
              </Link>
            </p>
            <SectionTeam />
          </div>
        </section>
      </main>
    </Layout>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx("hero hero--primary", styles.heroBanner)}
      style={{
        backgroundImage: `url(${useBaseUrl("img/graphics/degrade.png")})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        // minHeight:"calc(100vh - 60px)",
        zIndex: 0,
        padding: "0px !important",
      }}
    >
      <div
        style={{
          backgroundColor: "rgb(10, 39, 43,0.4)",
          height: "100%",
          width: "100%",
          color: "white !important",
          "padding-top": "40px",
          "padding-bottom": "40px",
        }}
      >
        <div className="container">
          <img
            src={`${useBaseUrl("img/graphics/logo3.png")}`}
            style={{ width: 400, "margin-bottom": 20 }}
          />
          {/* <h1 className="hero__title">{siteConfig.title}</h1> */}
          {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg button-homepage"
              to="https://collectif-eclaircies.notion.site/8496aafc51444e53b4ff10808fb1e367?v=71276a673067454fa98b0b852dcbdc5f"
            >
              Découvrir nos projets
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

const TeamMember = ({ src, name, contact, role }) => {
  return (
    <div className="member-wrapper">
      <img alt="team" className="member-img" src={`${useBaseUrl(src)}`} />
      <div>
        <h2 style={{ "align-content": "baseline" }} className="member-name">
          <a href={contact} target="_blank">
            {name}
          </a>
        </h2>
        {/* <p className="member-role">{role}</p> */}
      </div>
    </div>
  );
};

const teamList = [
  {
    src: "img/team/morgane.png",
    name: "Morgane Gonon",
    role: "Co-Présidente",
    contact: "https://www.linkedin.com/in/morgane-gonon-861879106/",
  },
  {
    src: "img/team/cesar.png",
    name: "César Dugast",
    role: "Co-Présidente",
    contact: "https://www.linkedin.com/in/c%C3%A9sar-dugast-18000463/",
  },
  {
    src: "img/team/oriane.png",
    name: "Oriane Wegner",
    role: "Co-Présidente",
    contact: "https://www.linkedin.com/in/orianewegner/",
  },
  {
    src: "img/team/alexandre.png",
    name: "Alexandre Joly",
    role: "Co-Présidente",
    contact: "https://www.linkedin.com/in/alexandre-joly-2a1a7869/",
  },
  {
    src: "img/team/lou.png",
    name: "Lou Welgryn",
    role: "Co-Présidente",
    contact: "https://www.linkedin.com/in/lou-welgryn-460434b0/",
  },
  {
    src: "img/team/guillaume.png",
    name: "Guillaume Kerlero de Rosbo",
    role: "Co-Présidente",
    contact: "https://www.linkedin.com/in/guillaume-kerlero-de-rosbo-8369a133/",
  },
  {
    src: "img/team/antoine.png",
    name: "Antoine Crépel",
    role: "Co-Présidente",
    contact: "https://www.linkedin.com/in/antoinecrepel/",
  },
  {
    src: "img/team/theo.png",
    name: "Théo Alves Da Costa",
    role: "Co-Président",
    contact: "https://www.linkedin.com/in/th%C3%A9o-alves-da-costa-09397a82/",
  },
];

const SectionTeam = () => {
  return (
    <div
      className=""
      style={{
        display: "flex",
        "align-items": "flex-start",
        "justify-content": "center",
        "flex-wrap": "wrap",
        "margin-top": "60px",
      }}
    >
      {teamList.map((el) => (
        <TeamMember
          src={el.src}
          name={el.name}
          contact={el.contact}
          role={el.role}
        />
      ))}
    </div>
  );
};
