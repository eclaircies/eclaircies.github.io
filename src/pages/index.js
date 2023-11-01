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
      <PressCoverageSection className='mt-44 mb-32' />
      <CarbonBombsSection className='mt-44 mb-16' />
      <TeamSection className='mt-24 mb-24' />
    </Layout>
  );
}

function HomepageHeader() {
  return (
    <header className='relative'>
      <img
        src={`${useBaseUrl('img/graphics/arcenciel.png')}`}
        alt='Gradient'
        className='absolute top-[0px] left-3/4' // Position as required, adjust values accordingly
        style={{ width: '22%', height: '105%', zIndex: -1 }} // Ensure it's behind the hero image
      />
      <div
        className='grid grid-cols-1 lg:grid-cols-2 px-8 lg:px-20 mx-0 lg:mx-20 lg:mt-10'
        style={{
          backgroundImage: `url(${useBaseUrl(
            'img/ben-wicks-Ej2FQy1W7z4.png',
          )})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          zIndex: 0,
          minHeight: 'calc(100vh - 60px)',
        }}
      >
        <div className='container text-white flex flex-col justify-center'>
          <img
            src={`${useBaseUrl('img/graphics/logo4.png')}`}
            style={{ width: 325 }}
            className='mb-4'
          />
          <div className='flex flex-col gap-6'>
            <p>
              Nous transformons des informations complexes et diffuses sur la
              crise écologique en analyses et outils originaux, rigoureux et
              accessibles, à disposition du grand public.
            </p>
            <p>
              Nous nous engageons à mettre en lumière les éléments essentiels du
              débat écologique afin de provoquer la réflexion et l’action.
            </p>
          </div>
          <div className='mt-6'>
            <Button to='https://collectif-eclaircies.notion.site/8496aafc51444e53b4ff10808fb1e367?v=71276a673067454fa98b0b852dcbdc5f'>
              Découvrir nos projets
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
function PressCoverageSection({ className }) {
  return (
    <section
      className={clsx('press-coverage-section px-4', className)}
      id='press'
    >
      <div className='max-w-[1100px] mx-auto'>
        <h2 className="bold uppercase font-['Inter'] text-sm text-gray-400 text-center mb-6">
          retombées presse
        </h2>
        <div className='grid grid-cols-1 gap-12 lg:grid-cols-3'>
          {pressArticles.map((article) => (
            <div
              key={article.headline}
              className='flex flex-col items-start h-full border border-blue-900 rounded'
            >
              <img
                src={`${useBaseUrl(article.thumbnailSrc)}`}
                className='h-[150px] object-contain w-full object-left'
              />
              <img
                src={`${useBaseUrl(article.platformLogoSrc)}`}
                className='h-[36px] object-contain w-full object-left mt-8 mb-8'
              />
              <div className='flex flex-col gap-2 text-blue-900 flex-grow'>
                {article.tags.length > 0 && (
                  <div className='flex gap-2'>
                    {article.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                )}
                <p>{article.publishedAt}</p>
                <p className='font-semibold'>{article.headline}</p>
              </div>
              <Button
                className='w-fit mt-4'
                type='secondary'
                to={article.articleUrl}
              >
                {article.ctaLabel}
              </Button>
            </div>
          ))}
        </div>
        {/* <div className='mt-16 flex justify-center'>
          <Button className='w-fit'>More press coverage</Button>
        </div> */}
      </div>
    </section>
  );
}

const pressArticles = [
  {
    thumbnailSrc: 'img/graphics/tbnl-le-monde.png',
    platformLogoSrc: 'img/graphics/logo-le-monde.png',
    tags: ['Climat', 'Energies fossiles'],
    publishedAt: '06.10.2023',
    headline:
      'Comment des banques françaises financent le plus gros producteur mondial de pétrole',
    articleUrl:
      'https://www.lemonde.fr/planete/video/2023/10/06/enquete-comment-des-banques-francaises-financent-le-plus-gros-producteur-mondial-de-petrole_6192805_3244.html',
    ctaLabel: "Lire l'article",
  },
  {
    thumbnailSrc: 'img/graphics/tbnl-france-info.png',
    platformLogoSrc: 'img/graphics/logo-france-info.png',
    tags: ['Climat', 'Jeux Olympiques'],
    publishedAt: '19.09.2023',
    headline:
      'Handisport, esport, climat, inclusivité : les Jeux olympiques et paralympiques de Paris 2024, une occasion en or ?',
    articleUrl:
      'https://www.francetvinfo.fr/sports/festival-demain-le-sport/direct-handisport-esport-climat-inclusivite-paris-2024-une-occasion-en-or_6070959.html',
    ctaLabel: 'Regarder le replay',
  },
  {
    thumbnailSrc: 'img/graphics/tbnl-blast.png',
    platformLogoSrc: 'img/graphics/logo-blast.png',
    tags: ['Ecologie', 'Jeux Olympiques'],
    publishedAt: '05.07.2023',
    headline: '2024 : les JO seront-ils vraiment écolos ?',
    articleUrl:
      'https://www.blast-info.fr/emissions/2023/2024-les-jo-seront-ils-vraiment-ecolos-luK4aJ03TxGu9Ifrl2NHFg',
    ctaLabel: 'Regarder la vidéo',
  },
];

// function TeamSection({ className }) {
//   return (
//     <div className='member-wrapper'>
//       <img alt='team' className='member-img' src={`${useBaseUrl(src)}`} />
//       <div>
//         <h2 style={{ 'align-content': 'baseline' }} className='member-name'>
//           <a href={contact} target='_blank'>
//             {name}
//           </a>
//         </h2>
//         {/* <p className="member-role">{role}</p> */}
//       </div>
//     </div>
//   );
// };

// const teamList = [
//   {
//     src: 'img/team/morgane.png',
//     name: 'Morgane Gonon',
//     role: 'Co-Présidente',
//     contact: 'https://www.linkedin.com/in/morgane-gonon-861879106/',
//   },
//   {
//     src: 'img/team/cesar.png',
//     name: 'César Dugast',
//     role: 'Co-Présidente',
//     contact: 'https://www.linkedin.com/in/c%C3%A9sar-dugast-18000463/',
//   },
//   {
//     src: 'img/team/oriane.png',
//     name: 'Oriane Wegner',
//     role: 'Co-Présidente',
//     contact: 'https://www.linkedin.com/in/orianewegner/',
//   },
//   {
//     src: 'img/team/alexandre.png',
//     name: 'Alexandre Joly',
//     role: 'Co-Présidente',
//     contact: 'https://www.linkedin.com/in/alexandre-joly-2a1a7869/',
//   },
//   {
//     src: 'img/team/lou.png',
//     name: 'Lou Welgryn',
//     role: 'Co-Présidente',
//     contact: 'https://www.linkedin.com/in/lou-welgryn-460434b0/',
//   },
//   {
//     src: 'img/team/guillaume.png',
//     name: 'Guillaume Kerlero de Rosbo',
//     role: 'Co-Présidente',
//     contact: 'https://www.linkedin.com/in/guillaume-kerlero-de-rosbo-8369a133/',
//   },
//   {
//     src: 'img/team/antoine.png',
//     name: 'Antoine Crépel',
//     role: 'Co-Présidente',
//     contact: 'https://www.linkedin.com/in/antoinecrepel/',
//   },
//   {
//     src: 'img/team/theo.png',
//     name: 'Théo Alves Da Costa',
//     role: 'Co-Président',
//     contact: 'https://www.linkedin.com/in/th%C3%A9o-alves-da-costa-09397a82/',
//   },
// ];


function TeamSection(){
  return (
    <section id="team" className="mt-24">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:px-20">
        <div className="lg:w-1/2 p-8 lg:p-16">
          <h2 className="text-2xl text-blue-900 text-4xl font-bold mb-4" style={{ fontFamily: 'CabinetGrotesk' }}>Notre équipe</h2>
          <p className="mb-4 font-bold text-blue-900">
            Le collectif éclaircies a été créé pour contribuer à la réflexion et à l'action des citoyen.ne.s sur les questions écologiques.
          </p>
          <p className='mb-4 text-blue-900'>
            éclaircies est une association française créée en 2022 par trois
            femmes et cinq hommes aux compétences complémentaires - expertise
            écologique, économie, politiques publiques, sciences de la donnée –
            désireux d'unir leurs forces pour participer à l'effort collectif
            vers une société respectueuse des limites planétaires.
          </p>
          <p className='mb-4 text-blue-900'>
            Notre objectif : combiner nos spécialités sur des projets d'intérêt
            général afin d'aider les citoyens à s'approprier les grands enjeux
            de la crise écologique et faciliter leur passage à l'action.
          </p>
          {/* <Button>Découvrir notre équipe</Button> */}
        </div>

        <div className='flex justify-between lg:w-1/2 py-8'>
          <div className='flex flex-row flex-wrap items-center justify-center gap-4 lg:rotate-3'>
            {teamMembers.map((member, itemIdx) => {
              const ITEM_SIZE = 200;

              return (
                <div
                  key={itemIdx}
                  className={clsx(
                    'rounded-2xl flex items-center justify-center shrink-0 grow-0 bg-[#fcf8f8]',
                  )}
                  style={{
                    width: ITEM_SIZE,
                    height: ITEM_SIZE,
                  }}
                >
                  {member.imgSrc && member.contact && (
                    <a href={member.contact} target='_blank'>
                      <img
                        className={clsx('w-[125px]')}
                        src={`${useBaseUrl(member.imgSrc)}`}
                      />
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

const teamMembers = [
  {
    name: 'Alexandre Joly',
    role: 'Co-Présidente',
    contact: 'https://www.linkedin.com/in/alexandre-joly-2a1a7869/',
    imgSrc: 'img/team/alexandre.png',
  },
  {
    name: 'Morgane Gonon',
    role: 'Co-Présidente',
    contact: 'https://www.linkedin.com/in/morgane-gonon-861879106/',
    imgSrc: 'img/team/morgane.png',
  },
  {
    name: 'Oriane Wegner',
    role: 'Co-Présidente',
    contact: 'https://www.linkedin.com/in/orianewegner/',
    imgSrc: 'img/team/oriane.png',
  },
  {
    name: 'Lou Welgryn',
    role: 'Co-Présidente',
    contact: 'https://www.linkedin.com/in/lou-welgryn-460434b0/',
    imgSrc: 'img/team/lou.png',
  },
  {
    name: 'Guillaume Kerlero de Rosbo',
    role: 'Co-Présidente',
    contact: 'https://www.linkedin.com/in/guillaume-kerlero-de-rosbo-8369a133/',
    imgSrc: 'img/team/guillaume.png',
  },
  {
    name: 'César Dugast',
    role: 'Co-Présidente',
    contact: 'https://www.linkedin.com/in/c%C3%A9sar-dugast-18000463/',
    imgSrc: 'img/team/cesar.png',
  },
  {
    name: 'Antoine Crépel',
    role: 'Co-Présidente',
    contact: 'https://www.linkedin.com/in/antoinecrepel/',
    imgSrc: 'img/team/antoine.png',
  },
  {
    name: 'Théo Alves Da Costa',
    role: 'Co-Président',
    contact: 'https://www.linkedin.com/in/th%C3%A9o-alves-da-costa-09397a82/',
    imgSrc: 'img/team/theo.png',
  },
];

function CarbonBombsSection() {
  return (
    <section className='flex flex-col lg:flex-row justify-between max-w-screen-xl mx-auto p-8 bg-[#fcf8f8]'>
      {/* Left Section */}
      <div
        className='flex flex-col items-start justify-center min-h-[500px] lg:mx-8 lg:mb-0 bg-cover bg-center px-16'
        style={{
          backgroundImage: `url(${useBaseUrl(
            'img/graphics/carbonbombs2.png',
          )})`,
        }}
      >
        {/* <img src={} alt="Carbon Bomb Image" className="object-fit h-120 w-full mb-6"/> */}
        <div className="text-white text-7xl font-bold mb-2">425</div>
        <div className="text-white text-4xl font-bold mb-4">Carbon bombs worldwide</div>
        <Button to="https://carbonbombs.org">
          Découvrir carbonbombs.org
        </Button>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-start justify-center flex-1">
        <div className="text-blue-900 text-4xl font-bold mb-4" style={{ fontFamily: 'CabinetGrotesk' }}>Derniers projets</div>
        <p className="text-blue-900 font-bold mb-4">
          Découvrez <a className="underline" href="https://carbonbombs.org" target="_blank">carbonbombs.org</a>, la plateforme qui révèle les liens entre les plus grands projets d'extraction fossile du monde et les entreprises et banques impliquées.
        </p>
        <p className="text-blue-900 mb-6">
          Et découvrez l'ensemble de nos projets présents et passés sur la page Projets.
        </p>
        <Button to='https://collectif-eclaircies.notion.site/8496aafc51444e53b4ff10808fb1e367?v=71276a673067454fa98b0b852dcbdc5f'>
          Voir tous nos projets
        </Button>
      </div>
    </section>
  );
}
