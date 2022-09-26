import { SectionContentType } from '~/helpers/types/content.types';

export const MAIN_STACK_RUS: SectionContentType = {
  title: 'Основной стек',
  content: [
    {
      title: '',
      text: 'Это основные технологии с которыми я работаю, и которые предпочитаю на данный момент',
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
      title: 'Верстка',
      text: 'HTML 5 и CSS 3, препроцессоры SASS/SCSS',
      props: {
        tag: 'h2',
      },
    },
    {
      title: 'UI библиотеки',
      text: 'Работал с MDLite, немного MaterializeCSS, но в рамках Vue предпочитаю компонентные библиотеки вроде NaiveUi или Vuetify',
      props: {
        tag: 'h2',
      },
    },
    {
      title: '',
      text: 'Подробнее про каждую технологию с которой я сталкивался можно посмотреть в разделе',
      textAsLink: {
        name: '"Полный стек"',
        link: 'index-stack-full-stack',
      },
      props: {
        tag: 'h3',
      },
    },
  ],
};

export const MAIN_STACK_EN: SectionContentType = {
  title: 'Main stack',
  content: [
    {
      title: '',
      text: 'These are the main technologies with which I work and which I prefer at the moment',
      props: {
        tag: 'h2',
      },
    },
    {
      title: 'Programming languages',
      text: 'JavaScript ES 6+/TypeScript',
      props: {
        tag: 'h2',
      },
    },
    {
      title: 'Frameworks',
      text: 'VueJS 2/VueJS 3 (Option/Composition API), Nuxt 2/Nuxt 3',
      props: {
        tag: 'h2',
      },
    },
    {
      title: 'Markup',
      text: 'HTML 5, CSS 3, preprocessors SASS/SCSS',
      props: {
        tag: 'h2',
      },
    },
    {
      title: 'UI packages',
      text: 'Worked with MDLite, little bit with MaterializeCSS, but within Vue I prefer component libraries as NaiveUi or Vuetify',
      props: {
        tag: 'h2',
      },
    },
    {
      title: '',
      text: 'More details about each technology that I encountered can be found in the section',
      textAsLink: {
        name: '"Full Stack"',
        link: 'index-stack-full-stack',
      },
      props: {
        tag: 'h3',
      },
    },
  ],
};
