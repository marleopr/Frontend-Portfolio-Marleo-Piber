import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"
import mock6 from "../img/mock6.png"
import mock7 from "../img/mock7.png"
import mock8 from "../img/mock8.png"
import mock9 from "../img/mock9.png"
import mock10 from "../img/mock10.png"
import mock11 from "../img/mock11.png"
import mock12 from "../img/mock12.png"
import mock14 from "../img/mock14.png"
import icone from "../img/letter-m.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Márleo",
    lastName: "Piber",
    // initials: "MPR",
    // eslint-disable-next-line jsx-a11y/alt-text
    initials: <img src={icone} />, // the example uses first and last, but feel free to use three or more if you like.
    position: " Desenvolvedor Full Stack",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '👩‍💻',
            text: 'Trabalho com tecnologia há quase 20 anos'
        },
        {
            emoji: '🌎',
            text: 'Moro no Rio Grande do Sul, Brasil'
        },
        {
            emoji: "💼",
            text: "Determinado a alcançar novas oportunidades e desafios como desenvolvedor."
        },
        {
            emoji: "📧",
            text: "marleopr@hotmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/marleopr",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/marleopiber/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://whats.link/marleopr",
            icon: "fa fa-whatsapp",
            label: 'whatsapp'
        },
        {
            link: "https://www.youtube.com/c/marleopr",
            icon: 'fa fa-youtube',
            label: 'youtube'
        },
        {
            link: "https://www.instagram.com/marleopr/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        }
        // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
        // Just change the links so that they lead to your social profiles.

    ],
    bio: "Sou Márleo Piber da Rosa, Desenvolvedor Full Stack com formação em Análise e Desenvolvimento de Sistemas e 4 anos de experiência profissional em desenvolvimento de software. Atuo com foco em TypeScript, JavaScript, Node.js, React, APIs REST, bancos de dados relacionais e não relacionais, sempre aplicando boas práticas de arquitetura, código limpo e manutenibilidade. Antes da transição para desenvolvimento, acumulei 15 anos de experiência em hardware, redes e suporte a sistemas, o que me proporciona uma visão técnica completa, orientada a performance, estabilidade e experiência do usuário(UX). Tenho perfil proativo, orientado a soluções e experiência em transformar processos manuais em sistemas eficientes, escaláveis e fáceis de usar. Busco desafios onde possa gerar impacto real através de tecnologia bem aplicada.",
    skills:
    {
    proficientWith: ['GIT', 'Github', 'GitLab', 'JavaScript', 'React', "NextJS", 'HTML5', 'CSS3', 'TypeScript', 'Node', 'MySQL', 'PostgreSQL', 'AWS', 'Cypress', 'WSL', 'Docker', 'WordPress', 'Express', 'Knex', 'Redux'],
        exposedTo: ['Linux', 'Adobe Photoshop', 'Adobe Premiere', 'Adobe Ligthroom', 'Adobe Illustrator', 'Figma', 'Material UI', 'Chakra UI']
}
    ,
hobbies: [
    {
        label: 'Novas habilidades como desenvolvedor',
        emoji: '💻'
    },
    {
        label: 'Drones',
        emoji: '🚁'
    },
    {
        label: 'Fotografia',
        emoji: '📷'
    },
    {
        label: 'Astronomia',
        emoji: '🌠'
    }
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Sistema de Gestão de Biblioteca - Full Stack TypeScript ReactJS e Node.js",
            live: "https://github.com/marleopr/biblioteca-system",
            source: "https://github.com/marleopr/biblioteca-system",
            image: mock14
        },
        {
            title: "Heróis - Case Frontend Azapfy",
            live: "https://marleo-azapfy.vercel.app/",
            source: "https://github.com/marleopr/azapfy",
            image: mock12
        },
        {
            title: "DevPets - Frontend ReactJS",
            live: "https://marleo-devpets.vercel.app/",
            source: "https://github.com/marleopr/devpets",
            image: mock11
        },
        {
            title: "FIPER - Frontend ReactJS",
            live: "https://fiper.vercel.app/",
            source: "https://github.com/marleopr/fipe",
            image: mock10
        },
        {
            title: "DevCoin - Frontend ReactJS",
            live: "https://marleo-devcoin.vercel.app/",
            source: "https://github.com/marleopr/devCoin",
            image: mock9
        },
        {
            title: "ClimaDev - Frontend ReactJS",
            live: "https://marleo-climadev.vercel.app/",
            source: "https://github.com/marleopr/climadev",
            image: mock8
        },
        {
            title: "Tracking - Frontend TypeScript ReactJS",
            live: "https://trackingts.vercel.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/marleopr/tracking-TS", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock6
        },
        {
            title: "AstroMatch - Frontend NextJS",
            live: "https://marleo-astromatch.vercel.app/",
            source: "https://github.com/marleopr/astromatch-next",
            image: mock7
        },
        {
            title: "Filmes Populares - Case Frontend Promobit",
            live: "https://filmes-marleo.vercel.app/",
            source: "https://github.com/marleopr/rodada-cases-1-frontend-filmes-populares-promobit",
            image: mock1
        },
        {
            title: "LabeFoods - Projeto Frontend",
            live: "https://labefoods-alves5.surge.sh/",
            source: "https://github.com/marleopr/LabeFoods",
            image: mock3
        },
        {
            title: "Pokedex - Projeto Frontend",
            live: "https://pokedex-alves1.surge.sh/",
            source: "https://github.com/marleopr/Pokedex",
            image: mock4
        },
        {
            title: "Veja mais em meu Github!",
            live: "https://github.com/marleopr",
            source: "https://github.com/marleopr",
            image: mock5
        }
    ],
        experiences: [
            {
                empresa7: "Easy360",
                cargo7: "Desenvolvedor Full Stack",
                funcao7: "Manutenção e criação de funcionalidades no sistema Easy360. ",
                tecnologias7: "Participação ativa na pivotagem, desenvolvimento, manutenção e evolução de sistema web em produção, com foco em performance, escalabilidade e usabilidade Atuação em arquitetura de aplicações, APIs e integração entre serviços. Participação em rotinas ágeis (Scrum/Kanban), dailies, plannings e code reviews.",
                periodo7: "Jun/2025 - Fev/2026"
            },
            {
                empresa6: "SellFlux",
                cargo6: "Desenvolvedor Full Stack",
                funcao6: "Manutenção e criação de funcionalidades no sistema SellFlux. ",
                tecnologias6: "Manutenção e desenvolvimento de funcionalidades no sistema SellFlux, com JavaScript, ReactJS, Redux, Craft e Node.js. Criação de interfaces com Material UI e gestão de dados com PostgreSQL via pgAdmin. Testes automatizados com Cypress. Utilização de WSL e Docker em ambientes de desenvolvimento. Controle de versão com BitBucket e organização de tarefas ágeis com ClickUp.",
                periodo6: "Dez/2024 - Mai/2025"
            },
            {
                empresa5: "Easy360",
                cargo5: "Desenvolvedor Full Stack",
                funcao5: "Manutenção e criação de funcionalidades no sistema Easy360. ",
                tecnologias5: "Desenvolvimento com JavaScript, TypeScript e ReactJS. Criação de interfaces com Chakra UI. Implementação de serviços AWS. Gestão de dados com PostgreSQL. Desenvolvimento de testes automatizados com Cypress. Utilização de WSL e Docker para ambientes de desenvolvimento. Controle de versão e colaboração de código com GitHub",
                periodo5: "Fev/2024 - Set/2024"
            },
            {
                empresa4: "GestãoDS",
                cargo4: "Desenvolvedor FrontEnd",
                funcao4: "Manutenção e desenvolvimento de funcionalidades no sistema GestãoDS.",
                tecnologias4: "Desenvolvimento com JavaScript, ReactJS e NextJS. Criação de interfaces com com Material UI. Controle de versão com Git e GitLab.",
                periodo4: "Dez/2022 - Set/2023"
            },
            {
                empresa3: "Microempreendedor individual",
                cargo3: "Especialista em Suporte Técnico, Manutenção de Computadores | Gestão de Redes e Publicidade",
                funcao3: "Desenvolvimento de sistemas e aplicações web sob demanda. Criação de sites e páginas institucionais. Levantamento de requisitos e contato direto com clientes",
                tecnologias3: "JavaScript, Node.js, React, WordPress, HTML, CSS.",
                periodo3: "Mar/2019 - Atualmente"
            },
            {
                empresa2: "Base Aérea de Santa Maria - Força Aérea Brasileira",
                cargo2: "Militar",
                funcao2: "Atuei nos setores de Tecnologia da Informação, relações públicas e saúde, desempenhando funções de desenvolvimento web (HTML, CSS), suporte de TI (manutenção de hardwares, softwares e redes de internet), auxiliar administrativo e atendimento ao público interno e externo.",
                periodo2: "Mar/2011 - Mar/2019"
            },
            {
                empresa1: "JaguariNet",
                cargo1: "Técnico em Infraestrutura e Redes de Internet",
                funcao1: "Atuando com instalação de infraestrutura de redes de internet bem como gerenciamento de servidores e sistema de provedores de internet.",
                periodo1: "Jan/2010 - Fev/2011"
            },
        ]
}