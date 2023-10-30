import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './index.module.scss';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`éclaircies - La lumière au bout du pipeline`}
      description='éclaircies est un collectif d’experts bénévoles, tous spécialistes des enjeux écologiques, énergétiques et climatiques. Convaincus qu’en démocratie, faire évoluer le système passe par un bon niveau d’information des citoyens et de leurs représentants politiques, nous avons pour objectif d’éclairer le débat public en mettant à disposition de la société civile (décideurs, individus consommateurs ou électeurs, territoires, etc.) de l’information qualifiée et des outils qui permettent d’y voir plus clair dans un océan d’informations parfois contradictoires.'
    >
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
        <section>
          <div className='container main-section'>
            <h1>L'association éclaircies</h1>
            <div className='row'>
              <div className='col col--6 supercenter'>
                <img
                  src={`${useBaseUrl('img/graphics/degrade3.png')}`}
                  alt='degrade'
                  style={{ width: '70%', 'margin-bottom': '20px' }}
                />
              </div>
              <div
                className='col col--6 supercenter'
                style={{ 'text-align': 'left', 'align-content': 'center' }}
              >
                <p>
                  <i>éclaircies</i> est un collectif{' '}
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
        <section className='light-green'>
          <div className='container main-section'>
            <h1>L'équipe éclaircies</h1>
            <p>
              🖐 Vous pouvez contacter l'équipe à{' '}
              <Link to='mailto:collectifeclaircies@gmail.com'>
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
  return (
    <header
      className={clsx('hero-section hero--primary', styles.heroSection)}
      style={{
        backgroundImage: `url(${useBaseUrl('img/ben-wicks-Ej2FQy1W7z4.png')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        zIndex: 0,
        minHeight: 'calc(100vh - 60px)',
        padding: '0px !important',
      }}
    >
      <div className='grid grid-cols-1 lg:grid-cols-2 lg:px-20'>
        <div className='container text-white flex flex-col justify-center'>
          <img
            src={`${useBaseUrl('img/graphics/logo3.png')}`}
            style={{ width: 325 }}
            className='mb-4'
          />
          <div className='flex flex-col gap-6'>
            <p>
              We are committed to transforming complex, scattered information
              about the ecological crisis into original, rigorous and accessible
              tools, made available for the general public.
            </p>
            <p>
              Our mission is to highlight the essential elements of the
              ecological debate in order to stimulate reflection and action.
            </p>
          </div>
          <div className='mt-6'>
            <Link
              className='button button--secondary button--lg button-homepage'
              to='https://collectif-eclaircies.notion.site/8496aafc51444e53b4ff10808fb1e367?v=71276a673067454fa98b0b852dcbdc5f'
            >
              Read our Manifesto
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

const TeamMember = ({ src, name, contact, role }) => {
  return (
    <div className='member-wrapper'>
      <img alt='team' className='member-img' src={`${useBaseUrl(src)}`} />
      <div>
        <h2 style={{ 'align-content': 'baseline' }} className='member-name'>
          <a href={contact} target='_blank'>
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
    src: 'img/team/morgane.png',
    name: 'Morgane Gonon',
    role: 'Co-Présidente',
    contact: 'https://www.linkedin.com/in/morgane-gonon-861879106/',
  },
  {
    src: 'img/team/cesar.png',
    name: 'César Dugast',
    role: 'Co-Présidente',
    contact: 'https://www.linkedin.com/in/c%C3%A9sar-dugast-18000463/',
  },
  {
    src: 'img/team/oriane.png',
    name: 'Oriane Wegner',
    role: 'Co-Présidente',
    contact: 'https://www.linkedin.com/in/orianewegner/',
  },
  {
    src: 'img/team/alexandre.png',
    name: 'Alexandre Joly',
    role: 'Co-Présidente',
    contact: 'https://www.linkedin.com/in/alexandre-joly-2a1a7869/',
  },
  {
    src: 'img/team/lou.png',
    name: 'Lou Welgryn',
    role: 'Co-Présidente',
    contact: 'https://www.linkedin.com/in/lou-welgryn-460434b0/',
  },
  {
    src: 'img/team/guillaume.png',
    name: 'Guillaume Kerlero de Rosbo',
    role: 'Co-Présidente',
    contact: 'https://www.linkedin.com/in/guillaume-kerlero-de-rosbo-8369a133/',
  },
  {
    src: 'img/team/antoine.png',
    name: 'Antoine Crépel',
    role: 'Co-Présidente',
    contact: 'https://www.linkedin.com/in/antoinecrepel/',
  },
  {
    src: 'img/team/theo.png',
    name: 'Théo Alves Da Costa',
    role: 'Co-Président',
    contact: 'https://www.linkedin.com/in/th%C3%A9o-alves-da-costa-09397a82/',
  },
];

const SectionTeam = () => {
  return (
    <div
      className=''
      style={{
        display: 'flex',
        'align-items': 'flex-start',
        'justify-content': 'center',
        'flex-wrap': 'wrap',
        'margin-top': '60px',
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
