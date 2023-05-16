import './Home.css';
import ListeAnnonce from '../ListeAnnonce/ListeAnnonce.js';

function Home() {

    const donnee = [
        {
            "id": 2,
            "favorite": true,
            "user": {
                "id": 12,
                "surname": "Rousseau",
                "firstname": "Paul",
                "email": "paul.rousseau@email.com",
                "picture": "",
                "is_online": false,
                "company": {
                    "siren": 123456788,
                    "name": "InnovaTech",
                    "city": "Paris"
                }
            },
            "title": " Recherche d'un alternant en techniques de vente et communication",
            "description": "Nous sommes à la recherche d'un alternant passionné par les techniques de vente et de communication pour rejoindre notre équipe en 2022. Notre entreprise est spécialisée dans la vente de produits et services haut de gamme. Nous recherchons un alternant pour travailler avec notre équipe de vente expérimentée et acquérir une expérience pratique dans le domaine.\n\nLes responsabilités incluent:\n\nAssister les commerciaux dans la prospection et la vente de produits et services\nParticiper à la création de supports de communication (plaquettes, présentations, etc.)\nContribuer à la gestion de la relation client (réponses aux demandes, suivi des commandes, etc.)\nParticiper à l'organisation d'événements commerciaux (salons, rencontres clients, etc.)\nProfil recherché:\n\nFormation en vente, communication ou marketing\nAptitudes commerciales, excellentes capacités de communication et de persuasion\nCapacité à travailler en équipe et à communiquer efficacement\nBonne maîtrise des outils informatiques (pack Office, Adobe Creative Suite)\nCuriosité et créativité\nCette offre d'alternance est ouverte à tous les candidats motivés et passionnés par les techniques de vente et de communication. Nous offrons une expérience pratique, une formation et un accompagnement personnalisé pour aider notre alternant à progresser dans sa carrière.\n\nDate de début: septembre 2022\n\nSi vous êtes intéressé(e) par cette opportunité, merci de nous envoyer votre CV ainsi qu'une lettre de motivation. Nous étudierons toutes les candidatures et nous prendrons contact avec les candidats retenus pour un entretien.",
            "publish_date": "2022-07-13T00:00:00",
            "status": {
                "id": 2,
                "status": "Disponible"
            },
            "naf_division_title": "Industrie pharmaceutique",
            "job_title": "Analyste financier",
            "qualifications": {
                "10": "Langues étrangères",
                "21": "Analyse de marché",
                "28": "Conception de circuits électroniques"
            }
        },
        {
            "id": 4,
            "favorite": false,
            "user": {
                "id": 14,
                "surname": "Moreau",
                "firstname": "Juliette",
                "email": "juliette.moreau@email.com",
                "picture": "",
                "is_online": false,
                "company": {
                    "siren": 369121517,
                    "name": "Solutions et Co",
                    "city": "Lyon"
                }
            },
            "title": " Recherche d'un alternant en Stratégie de Communication Digitale",
            "description": "Nous sommes à la recherche d'un alternant passionné par la stratégie de communication digitale pour rejoindre notre équipe en 2022. Notre entreprise est en pleine transformation digitale et nous recherchons un alternant pour contribuer à la mise en place d'une stratégie de communication efficace et innovante.\n\nLes responsabilités incluent:\n\nParticiper à la conception et à la mise en place d'une stratégie de communication digitale (réseaux sociaux, newsletter, site web, etc.)\nCréer et diffuser des contenus pertinents et engageants pour notre audience cible\nContribuer à l'analyse de la performance de nos actions de communication et proposer des ajustements\nAssister les équipes dans la mise en place de bonnes pratiques de communication digitale\nProfil recherché:\n\nFormation en marketing, communication digitale ou web\nBonne connaissance des enjeux et des outils de la communication digitale (réseaux sociaux, SEO, SEA, etc.)\nCapacité à travailler en équipe et à communiquer efficacement\nCréativité, esprit d'initiative et curiosité\nBonne maîtrise des outils informatiques (pack Office, Adobe Creative Suite)\nCette offre d'alternance est ouverte à tous les candidats motivés et passionnés par la communication digitale. Nous offrons une expérience pratique, une formation et un accompagnement personnalisé pour aider notre alternant à progresser dans sa carrière.\n\nDate de début: septembre 2022\n\nSi vous êtes intéressé(e) par cette opportunité, merci de nous envoyer votre CV ainsi qu'une lettre de motivation. Nous étudierons toutes les candidatures et nous prendrons contact avec les candidats retenus pour un entretien.",
            "publish_date": "2022-07-15T00:00:00",
            "status": {
                "id": 2,
                "status": "Disponible"
            },
            "naf_division_title": "Culture et production animale, chasse et services annexes",
            "job_title": "Informaticien",
            "qualifications": {
                "1": "Programmation informatique",
                "23": "Gestion des finances",
                "42": "Contrôle de processus industriels"
            }
        },
        {
            "id": 1,
            "favorite": true,
            "user": {
                "id": 11,
                "surname": "Bernard",
                "firstname": "Marie",
                "email": "marie.bernard@email.com",
                "picture": "",
                "is_online": false,
                "company": {
                    "siren": 987654320,
                    "name": "Société Nouvelle",
                    "city": "Lyon"
                }
            },
            "title": "Recherche d'un alternant en développement web",
            "description": "Nous sommes à la recherche d'un alternant passionné par le développement web pour rejoindre notre équipe en septembre 2022. Notre entreprise est spécialisée dans la conception et la création de sites web et d'applications pour nos clients. Nous recherchons un alternant pour travailler avec notre équipe de développeurs expérimentés et acquérir une expérience pratique dans le domaine.\n\nLes responsabilités incluent:\n\nDéveloppement de sites web et d'applications\nTests et maintenance du code existant\nCollaboration avec l'équipe de développement pour résoudre les problèmes techniques\nSuivi des dernières tendances en matière de développement web\nProfil recherché:\n\nFormation en développement web ou en informatique\nConnaissance des langages de programmation tels que HTML, CSS, JavaScript, PHP et MySQL\nCapacité à travailler en équipe et à communiquer efficacement\nBonne compréhension des principes de conception web et d'expérience utilisateur\nCuriosité et passion pour les nouvelles technologies\nCette offre d'alternance est ouverte à tous les candidats motivés et passionnés par le développement web. Nous offrons une expérience pratique, une formation et un accompagnement personnalisé pour aider notre alternant à progresser dans sa carrière.\n\nDate de début: Septembre 2022\n\nSi vous êtes intéressé(e) par cette opportunité, merci de nous envoyer votre CV ainsi qu'une lettre de motivation. Nous étudierons toutes les candidatures et nous prendrons contact avec les candidats retenus pour un entretien.",
            "publish_date": "2022-07-12T00:00:00",
            "status": {
                "id": 2,
                "status": "Disponible"
            },
            "naf_division_title": "Industrie pharmaceutique",
            "job_title": "Ingénieur logiciel",
            "qualifications": {
                "2": "Conception graphique",
                "7": "Gestion de projets",
                "18": "Rédaction technique"
            }
        },
        {
            "id": 3,
            "favorite": false,
            "user": {
                "id": 13,
                "surname": "Petit",
                "firstname": "Céline",
                "email": "celine.petit@email.com",
                "picture": "",
                "is_online": false,
                "company": {
                    "siren": 171615140,
                    "name": "TechConnect",
                    "city": "Lyon"
                }
            },
            "title": "Recherche d'un alternant en Responsabilité Sociale des Entreprises",
            "description": "Nous sommes à la recherche d'un alternant passionné par la Responsabilité Sociale des Entreprises (RSE) pour rejoindre notre équipe en 2022. Notre entreprise est engagée dans des projets et des actions en faveur de la RSE et nous recherchons un alternant pour contribuer à leur mise en place et à leur suivi.\n\nLes responsabilités incluent:\n\nParticiper à la conception et à la mise en place de projets RSE (environnement, diversité, inclusion, etc.)\nContribuer à la communication interne et externe des actions RSE de l'entreprise\nAnalyser les indicateurs de performance RSE et participer à la rédaction de rapports\nAssister les équipes dans la mise en œuvre de bonnes pratiques RSE\nProfil recherché:\n\nFormation en développement durable, en RSE, ou en management\nBonne connaissance des enjeux environnementaux, sociaux et économiques\nCapacité à travailler en équipe et à communiquer efficacement\nEsprit d'analyse et de synthèse\nCuriosité et intérêt pour les enjeux de la RSE\nCette offre d'alternance est ouverte à tous les candidats motivés et passionnés par la RSE. Nous offrons une expérience pratique, une formation et un accompagnement personnalisé pour aider notre alternant à progresser dans sa carrière.\n\nDate de début: septembre 2022\n\nSi vous êtes intéressé(e) par cette opportunité, merci de nous envoyer votre CV ainsi qu'une lettre de motivation. Nous étudierons toutes les candidatures et nous prendrons contact avec les candidats retenus pour un entretien.",
            "publish_date": "2022-07-14T00:00:00",
            "status": {
                "id": 2,
                "status": "Disponible"
            },
            "naf_division_title": "Sylviculture et exploitation forestière",
            "job_title": "Chef de projet",
            "qualifications": {
                "8": "Marketing numérique",
                "36": "Analyse de risques",
                "42": "Contrôle de processus industriels"
            }
        }
    ]

    const lereturn = <div className="Titres">
        <p className="bonjour">Bonjour User,</p>
        <p className="petiteselection">bienvenue sur <span>Shippee</span> :</p>
    </div>
    return (
        <>
            <div className="Home">
                {lereturn}
                <div className={donnee.length == 0 ? "None" : "PetiteAnnonce"}>
                    <h2>Pour vous :</h2>
                    <ListeAnnonce annonce={donnee}/>
                </div>
                <div className={donnee.length == 0 ? "None" : "PetiteAnnonce"}>
                    <h2>Dans le coin :</h2>
                    <ListeAnnonce annonce={donnee}/>
                </div>
                <div className={donnee.length == 0 ? "None" : "PetiteAnnonce"}>
                    <h2>Consultées récemment :</h2>
                    <ListeAnnonce annonce={donnee}/>
                </div>
            </div>
        </>
    );



}

export default Home;