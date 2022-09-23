tailwind.config = {
    content: ['./*.html'],
    darkMode: 'class', // тёмная тема
      theme: {
        screens: { //для адаптивности (переопределили брейкпоинты)
          'lg': {'max':'992px'},
          'md': {'max':'768px'},
          'sm': {'max':'480px'}
        },
        fontFamily: { 
          redHat: ['"Red Hat Display"'] // подключаем шрифт GoogleFonts (переопределили)
        },
        container: {
          padding: '20px',
          center: true
        },
        extend: { // дополнительные свойства
          colors: {
            lightblack: '#4D4244',
            lightred: '#FF0D38',
            darkred: '#D70026',
            lightgray: '#747474',
            darkgray: '#272727'
          },
          padding: {
            bigPadding: '40px'
          },
          boxShadow:{
            'custShadow': 'inset -1px 0px 0px rgba(0, 0, 0, 0.1)'
          }
        }
      },
      plugins: []
    }