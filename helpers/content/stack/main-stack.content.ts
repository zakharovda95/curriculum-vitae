import { SectionContentType } from '~/helpers/types/content/section-content.types';

export const MAIN_STACK_RUS: SectionContentType = {
  title: 'Основной стек',
  content: [
    {
      title: null,
      text: 'Это основные технологии с которыми я работаю, и которые предпочитаю на данный момент',
      props: {
        tag: 'h2',
      },
    },
    {
      title: 'Верстка',
      text: 'HTML 5 и CSS 3',
      props: {
        tag: 'h2',
      },
    },
    {
      title: 'Препроцессоры',
      text: 'SASS/SCSS',
      props: {
        tag: 'h2',
      },
    },
    {
      title: 'UI библиотеки',
      text: 'Работал с MDLite, немного MaterializeCSS, но в рамках Vue претпочитаю компонентные библиотеки вроде NaiveUi или Vuetify',
      props: {
        tag: 'h2',
      },
    },
    {
      title: 'Языки программирования',
      text: 'JavaScript ES 6+ в связке с TypeScript',
      props: {
        tag: 'h2',
      },
    },
    {
      title: 'Фреймворки',
      text: 'VueJS 2/VueJS 3 (Option/Composition API), Nuxt 2/Nuxt 3',
      props: {
        tag: 'h2',
      },
    },
    {
      title: null,
      text: 'Подробнее про каждую технологию с которой я сталкивался можно посмотреть в разделе',
      textAsLink: {
        name: '"Полный&nbsp;стек"',
        link: 'full-stack',
      },
      props: {
        tag: 'h3',
      },
    },
  ],
};
