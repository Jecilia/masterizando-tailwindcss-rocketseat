/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
        profile: 'max-content 1fr min-content',
        form: 'minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0,15rem)',
      },
      maxWidth:{
        app:'700px'
      },
      borderWidth:{
        6:'6px'
      },
      colors:{
        violet:{ 
          25:'#fcfaff'
        }
      }
    },
  },
  plugins: [],
};
