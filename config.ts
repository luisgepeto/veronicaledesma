const siteMetadata = {
    title: `Verónica Ledesma`,
    siteUrl: `https://veronicaledesma.com`,
    capitalizeTitleOnHome: false,
    logo: `/images/logo.png`,    
    icon: `/images/favicon.ico`,
    titleImage: `/images/wall.jpg`,
    ogImage: `/images/wall.jpg`,
    twoColumnWall: true,
    cookiePolicy: false,
    introTag: `CEM | LEED AP BD+C | B.Sc. Mechatronics Engineering`,
    description: `Passionate about energy efficiency`,
    about:
        "I have always been passionate about energy efficiency. I am an energy advisor and HVAC system designer. I am a Certified Energy Manager by the Association of Energy Engineers, and an accredited LEED AP BD+C by the USGBC. I have conducted energy audits in accordance with ASHRAE 211 and ISO 50002. Over the past three years I have had the honor of working hand in hand with Honeywell and Lego, implementing energy efficiency measures, and coaching the on-site O&M team on energy related topics. I have been responsible for HVAC design projects in the residential, commercial, industrial, and healthcare sectors. I define my approach as energy-efficiency-first, by maximizing energy performance, thermal comfort, and indoor air quality, while meeting customer requirements.",
    author: false,
    experienceItemsPerPage: 10,
    darkmode: false,
    switchTheme: false,
    navLinks: [
        {
            name: "HOME",
            url: "/",
        },
        {
            name: "ABOUT ME",
            url: "/#about",
        },
        {
            name: "EXPERIENCE",
            url: "/#experience",
        },
        {
            name: "CONTACT",
            url: "/#contact",
        },
    ],
    social: [
        {
            name: "LinkedIn",
            icon: "/images/LinkedIn.svg",
            url: "https://www.linkedin.com/in/ing-veronica-ledesma/?locale=en_US",
        },
        {
            name: "YouTube",
            icon: "/images/Youtube.svg",
            url: "https://www.youtube.com/channel/UC6Lutp_r91hj9sHeX09156Q",
        }
    ],
    contact: {        
        api_url: false,
        description: `If you would like to schedule a technical call you can contact me via LinkedIn.`,
        mail: false
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
            message: "Please enter your name",
        })
    }

    if (!data.email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
        errors.push({
            code: 2,
            message: "Please enter your email address",
        })
    }

    if (data.message.trim().length < 15) {
        errors.push({
            code: 3,
            message: "Please write a message with at least 15 characters",
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
