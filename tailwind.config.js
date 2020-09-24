const plugin = require("tailwindcss/plugin")
const _ = require("lodash");

const gradient = plugin(function({ addUtilities, e, theme, variants }) {
    const gradients = theme("gradients", {})
    const gradientVariants = variants("gradients", [])

    const utilities = _.map(gradients, ([start, end], name) => ({
        [`.bg-gradient-${e(name)}`]: {
            backgroundImage: `linear-gradient(to right, ${start}, ${end})`,
        },
    }))

    addUtilities(utilities, gradientVariants)
})


module.exports = {
    purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
    theme: {
        gradients: theme => ({
            primary: [theme("colors.primary"), theme("colors.secondary")],
        }),
        themes: {
            dark: {
                bg: "#111",
                bgalt: "#000",
                "color-default": "#eee",
                "color-1": "#c35fde",
                "color-2": "#adbfef",
                border: "#718096",
                primary: "#f55555",
                medium: "#222"
            },
        },
        colors: {
            bg: "#fafafa",
            bgalt: "#f5f5f5",
            "color-default": "#004557",
            "color-1": "#0e4749",
            "color-2": "#126f72",
            "color-3": "#088287",
            primary: "#004557",
            secondary: "#a9abae",
            link: "#3c91e6",
            medium: "#cfd8dc",
            white: "#fff",
            black: "#000",
            transparent: "rgba(0,0,0,0)",
            error: "#ef5350",
            success: "#ade25d"
        },
        extend: {
            fontSize: {
                '7xl': '5rem'
            },
            spacing: {
                '1px': '1px',
                '2px': '2px'
            }
        },
    },
    variants: {},
    plugins: [require(`tailwind-theme-switcher`), gradient],
}


