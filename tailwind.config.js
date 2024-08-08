// tailwind.config.js

export const content = [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
]
export const theme = {
  extend: {
    fontFamily: {
      montserrat: ['var(--font-montserrat)', 'sans-serif'],
      anton: ['var(--font-anton)', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      /*  Obs:depois definir o nome dar variaveis: podemos colocar em onde elas estão, background global, background div, etc */

      /* Primeira Paleta -- decadas 10/30 */
      primeira: '#1D1C1E',
      segunda: '#333333',
      terceira: '#6A6A6A',
      quarta: '#DDDDDD',

      /* Segunda Paleta e Terceira Paleta -- decada 70/80 */
      primeira: '#0084DB',
      segunda: '#829D77',
      terceira: '#8F3355',
      quarta: '#DD4C30',
      quinta: '#F6DCF7',
      sexta: '#FFDD3B',

      /*Quarta Paleta -- decada 90 */
      primeira: '#0088AD',
      segunda: '#28468E',
      terceira: '#A32350',
      quarta: '#DF542A',
      quinta: '#F6DCF7',
      sexta: '#FE9869',

      /* Cores Tela Login/Cadastro e Recuperação de Senha */
      branco: '#ffffff',
      destaque: '#dea351',
      button: '#4e9f8a',
      quarta: '#6a6a6a',
      quinta: '#5f5f5f',

      /* Cor de fundo gradiente*/
      background: 'linear-gradient(#38383b, #28272b)',
    },
  },
}
export const plugins = []
