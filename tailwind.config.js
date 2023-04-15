const plugin = require('tailwindcss/plugin');

module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'ice-white': '#F5F5F5',
                'alliance-blue': '#02518A',
                'horde-red': '',
                'link': '#ffd100'
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
                }
            });
        })
    ]
}