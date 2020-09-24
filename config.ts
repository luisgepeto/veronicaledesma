const siteMetadata = {
    title: `Ing. Verónica Ledesma`,
    siteUrl: `http://veronicaledesma.com`,
    capitalizeTitleOnHome: false,
    logo: `/images/logo.png`,    
    icon: `/images/icon.png`,
    titleImage: `/images/wall.jpg`,
    ogImage: `/images/wall.jpg`,
    twoColumnWall: true,
    cookiePolicy: false,
    introTag: `CEM | LEED AP BD+C | Ingeniera HVAC`,
    description: `Apasionada por la eficiencia energética`,
    about:
        "Me enfoco al desarrollo de ingenierías HVAC buscando el diseño óptimo para lograr ahorros energéticos. Me apasiona la eficiencia energética desde el punto de vista ingenieril. Cuento con la acreditación CEM (Certified Energy Manager) otorgada por la Asociación de Ingenieros de Energía de Estados Unidos y la acreditación de LEED AP BD+C. Tengo experiencia diseñando sistemas HVAC para el ramo residencial, comercial, industrial y el sector salud. Me enfoco en garantizar en todos mis diseños un desempeño energético óptimo, acoplándome a los requerimientos del cliente, cuidando siempre cumplir con las condiciones de confort interiores y el filtrado ideal para la calidad del aire requerida. Actualmente diseño ingenierías HVAC y desarrollo auditorías energéticas. ",
    author: `@nucleo_energia`,
    blogItemsPerPage: 10,
    portfolioItemsPerPage: 10,
    darkmode: false,
    switchTheme: false,
    navLinks: [
        {
            name: "INICIO",
            url: "/",
        },
        {
            name: "ACERCA DE",
            url: "/#home__about",
        },
        {
            name: "BLOG",
            url: "/#home__blog",
        },
        {
            name: "CV",
            url: "/#portfolio",
        },
        {
            name: "CONTACTO",
            url: "/#home__contact",
        },
    ],
    footerLinks: [
        {
            name: "AVISO DE PRIVACIDAD",
            url: "/aviso-de-privacidad",
        }
    ],
    social: [
        {
            name: "Facebook",
            icon: "/images/Facebook.svg",
            url: "https://facebook.com/nucleo.ingenieria",
        },
        {
            name: "Twitter",
            icon: "/images/Twitter.svg",
            url: "https://twitter.com/nucleo_energia",
        },
        {
            name: "Instagram",
            icon: "/images/Instagram.svg",
            url: "https://instagram.com/nucleo.ingenieria",
        },
        {
            name: "Youtube",
            icon: "/images/Youtube.svg",
            url: "https://www.youtube.com/channel/UC6Lutp_r91hj9sHeX09156Q/featured",
        },
    ],
    contact: {        
        api_url: "https://getform.io/f/cd3c6911-f5f0-4c38-a897-7c347eee9297",
        description: `Si te gustaría agendar alguna consulta técnica, deja tus datos y me pondré en contacto contigo.`,
        mail: "info@veronicaledesma.com",
        phone: "81 2528 1759",
        address: "PLANIFICADORES 2802\nCOL. EMPLEADOS S.F.E.O.\nC.P. 64909\nMONTERREY, N.L.",
    },
    disqus: "elemental-netlify-com",
}

const beforeContactFormSubmit = data => {
    // Code 0 - success
    // Code 1 - Name
    // Code 2 - Email
    // Code 3 - Message
    // Code 4 - Other
    const errors = []

    if (data.name.trim().length < 2) {
        errors.push({
            code: 1,
            message: "Escribe tu nombre",
        })
    }

    if (!data.email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
        errors.push({
            code: 2,
            message: "Escribe tu dirección de correo electrónico",
        })
    }

    if (data.message.trim().length < 15) {
        errors.push({
            code: 3,
            message: "Escribe un mensaje con al menos 15 caracteres",
        })
    }

    if (errors.length > 0)
        return {
            result: false,
            errors: errors,
        }

    return {
        data: {
            name: data.name,
            email: data.email,
            message: data.message,
        },
        result: true,
    }
}

const contactFormSubmit = async (api, data) => {
    let res: any = await fetch(api, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })

    res = await res.json()

    if (res.success) {
        return {
            result: true,
        }
    }
    return {
        result: false,
        ...res,
    }
}

const defaults = {
    disqus: null,
    twoColumnWall: true,
    darkmode: false,
    switchTheme: true,
    capitalizeTitleOnHome: true,
    cookiePolicy: false
}

Object.keys(defaults).forEach(item => {
    if (siteMetadata[item] === undefined) {
        siteMetadata[item] = defaults[item]
    }
})

export { siteMetadata, beforeContactFormSubmit, contactFormSubmit }
