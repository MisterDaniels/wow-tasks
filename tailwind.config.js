const plugin = require('tailwindcss/plugin');

module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'ice-white': '#F5F5F5',
                'greyish-white': '#D5D5DE',
                'alliance-blue': '#02518A',
                'selection-blue': '#41475A',
                'horde-red': '#8C1616',
                'link': '#ffd100',
                'green-check': '#0EAA42',
                'dark': '#17181C',
                'almost-dark': '#1D1F25',
                'lighter-dark': '#333333',
                'red-highlight': '#AB5769'
            }
        },
    },
    plugins: [
        plugin(function({ addBase, theme }) {
            addBase({
                'h2': { 
                    fontSize: theme('fontSize.xl'),
                    fontWeight: theme('fontWeight.bold') 
                },
                'a[href*=object]': {
                    color: theme('colors.link')
                },
                'div': {
                    borderColor: theme('colors.lighter-dark')
                }
            });
        })
    ]
}