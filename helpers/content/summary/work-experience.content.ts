import { SectionContentType } from '~/helpers/types/content.types';

export const WORK_EXPERIENCE_RUS: SectionContentType = {
  title: 'Опыт Работы',
  content: [
    {
      title: '',
      text: [
        'У меня нет официального опыта работы (в сфере IT), я надеюсь именно ваша работа будет для меня первой',
        'У меня есть опыт работы который я получил в ходе разработки пет-проектов для своего портфолио, опыт, полученный в ходе учебной практики и опыт разработки интерфейсов в стартап-проекте',
      ],
      props: {
        tag: 'h3',
      },
    },
    {
      title: 'Учебная практика',
      text: [
        '- практика на курсе по нативному JS (c 26 августа 2021 по 14 октября 2021)',
        '- практика на курсе по Vue.JS (c 25 января 2022 по 18 марта 2022)',
        '- дополнительно выполнил больше 400 заданий с проверкой ментором по разделам: JavaScript, ООП, Функции, Методы массивов',
      ],
      props: {
        tag: 'h2',
        br: true,
      },
    },
    {
      title: 'Самостоятельная работа',
      text: 'Я разрабатывал 3 небольших демо-проекта для портфолио. Их разработка заняла в сумме больше 6 месяцев. Было сделано больше 300 коммитов и написано около 15000 строк кода. В процессе разработки я применял не только возможности языка JS/TS и фреймворков Vue и Nuxt, но и вспомогательные ресурсы такие как Figma, ClickUp, MIRO и др',
      props: {
        tag: 'h2',
        br: true,
      },
    },
    {
      title: 'Стартап',
      text: 'Я учавствую в стартап проекте - браузерной игры CastleKeepers (с марта 2022 г). Это некоммерческий проект с небольшой коммандой разработчиков-энтузиастов и небольшим комьюнити. Подробнее в разделе ',
      textAsLink: {
        name: '"Примеры кода"',
        link: 'index-code-examples-project-list',
      },
      props: {
        tag: 'h2',
        br: true,
      },
    },
  ],
};

export const WORK_EXPERIENCE_EN: SectionContentType = {
  title: 'Work Experience',
  content: [
    {
      title: '',
      text: [
        'I have no formal experience in IT, I hope your work will be my first',
        'I have some experience in a commercial project with a team, experience from an educational practice and experience in a start-up project',
      ],
      props: {
        tag: 'h3',
      },
    },
    {
      title: 'Educational Practice',
      text: [
        '- practice in native JS courses (26th August 2021 - 14th October 2021)',
        '- practice in native JS courses (25th January 2022 - 18th March 2022)',
        '- additionally, I completed more than 400 tasks with a mentor check in the sections: JavaScript, OOP, Functions, Array Methods',
      ],
      props: {
        tag: 'h2',
        br: true,
      },
    },
    {
      title: 'Independent work',
      text: 'I developed 3 small portfolio demo projects. Their development took a total of more than 6 months. More than 300 commits were made and about 15,000 lines of code were written. During the development process, I used not only the capabilities of the JS / TS language and the Vue and Nuxt frameworks, but also auxiliary resources such as Figma, ClickUp, MIRO, etc.',
      props: {
        tag: 'h2',
        br: true,
      },
    },
    {
      title: 'Start-Up',
      text: 'I am participating in a startup project - the browser game CastleKeepers (since March 2022). This is a non-commercial project with a small team of enthusiastic developers and a small community. More in the section',
      textAsLink: {
        name: '"Code Examples"',
        link: 'index-code-examples-project-list',
      },
      props: {
        tag: 'h2',
        br: true,
      },
    },
  ],
};
