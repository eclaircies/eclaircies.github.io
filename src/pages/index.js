import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './index.module.scss';
import Button from '../components/Button';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`éclaircies - La lumière au bout du pipeline`}
      description='éclaircies est un collectif d’experts bénévoles, tous spécialistes des enjeux écologiques, énergétiques et climatiques. Convaincus qu’en démocratie, faire évoluer le système passe par un bon niveau d’information des citoyens et de leurs représentants politiques, nous avons pour objectif d’éclairer le débat public en mettant à disposition de la société civile (décideurs, individus consommateurs ou électeurs, territoires, etc.) de l’information qualifiée et des outils qui permettent d’y voir plus clair dans un océan d’informations parfois contradictoires.'
    >
      <HomepageHeader />
      <PressCoverageSection className='mt-24 mb-16' />
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
            <Button to='https://collectif-eclaircies.notion.site/8496aafc51444e53b4ff10808fb1e367?v=71276a673067454fa98b0b852dcbdc5f'>
              Read our Manifesto
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

function PressCoverageSection({ className }) {
  return (
    <section className={clsx('press-coverage-section', className)}>
      <div className='max-w-[1100px] mx-auto'>
        <h2 className="bold uppercase font-['Inter'] text-sm text-gray-400 text-center mb-6">
          press coverage
        </h2>
        <div className='grid grid-cols-1 gap-12 lg:grid-cols-3'>
          {pressArticles.map((article) => (
            <div key={article.headline} className='flex flex-col items-start'>
              <img
                src={`${useBaseUrl(article.thumbnailSrc)}`}
                className='h-[150px] object-contain w-full object-left'
              />
              <img
                src={`${useBaseUrl(article.platformLogoSrc)}`}
                className='h-[36px] object-contain w-full object-left mt-8 mb-16'
              />
              <div className='flex flex-col gap-2 text-blue-900'>
                {article.tags.length > 0 && (
                  <div className='flex gap-2'>
                    {article.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                )}
                <p>{article.publishedAt}</p>
                <p className='font-semibold'>{article.headline}</p>
                <Button
                  className='w-fit'
                  type='secondary'
                  to={article.articleUrl}
                >
                  {article.ctaLabel}
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className='mt-16 flex justify-center'>
          <Button className='w-fit'>More press coverage</Button>
        </div>
      </div>
    </section>
  );
}

const pressArticles = [
  {
    thumbnailSrc: 'img/graphics/tbnl-le-monde.png',
    platformLogoSrc: 'img/graphics/logo-le-monde.png',
    tags: ['Climate', 'Fossil fuels'],
    publishedAt: '06.10.2023',
    headline: "How French banks are financing the world's largest oil producer",
    articleUrl:
      'https://www.lemonde.fr/planete/video/2023/10/06/enquete-comment-des-banques-francaises-financent-le-plus-gros-producteur-mondial-de-petrole_6192805_3244.html',
    ctaLabel: 'Read the article',
  },
  {
    thumbnailSrc: 'img/graphics/tbnl-france-info.png',
    platformLogoSrc: 'img/graphics/logo-france-info.png',
    tags: ['Climate', 'Olympic Games'],
    publishedAt: '19.09.2023',
    headline:
      'Handisport, esport, climate, inclusivity: the Paris 2024 Olympic and Paralympic Games, a golden opportunity?',
    articleUrl:
      'https://www.francetvinfo.fr/sports/festival-demain-le-sport/direct-handisport-esport-climat-inclusivite-paris-2024-une-occasion-en-or_6070959.html',
    ctaLabel: 'See the replay',
  },
  {
    thumbnailSrc: 'img/graphics/tbnl-blast.png',
    platformLogoSrc: 'img/graphics/logo-blast.png',
    tags: ['Ecology', 'Fossil fuels'],
    publishedAt: '05.07.2023',
    headline: '2024: will the Olympics really be green?',
    articleUrl:
      'https://www.blast-info.fr/emissions/2023/2024-les-jo-seront-ils-vraiment-ecolos-luK4aJ03TxGu9Ifrl2NHFg',
    ctaLabel: 'Watch the video',
  },
];

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
