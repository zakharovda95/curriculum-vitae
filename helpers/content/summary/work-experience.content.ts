import { SectionContentType } from '~/helpers/types/content.types';

export const WORK_EXPERIENCE_RUS: SectionContentType = {
  title: 'Опыт Работы',
  content: [
    {
      title: '',
      text: [
        'У меня нет официального опыта работы (в сфере IT), я надеюсь именно ваша работа будет для меня первой',
        'У меня есть опыт работы в реальном проекте с командой, опыт с учебной практики и опыт на стартап-проекте',
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
      ],
      props: {
        tag: 'h2',
        br: true,
      },
    },
    {
      title: 'Самостоятельная работа',
      text: 'Неофициальная работа в коммерческом проекте (в сумме 4 месяца). Научился свободно ориентироваться в довольно большом проекте, локализовывать и устранять баги. Узнал как происходит реальная разработка',
      props: {
        tag: 'h2',
        br: true,
      },
    },
    {
      title: 'Стартап',
      text: 'Я учавствую в стартап проекте - браузерной игры CastleKeepers. Это некоммерческий проект с небольшой коммандой. Подробнее в разделе',
      textAsLink: {
        name: '"Примеры кода"',
        link: 'index-work-experience-main-stack',
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
        '- практика на курсе по Vue.JS (25th January 2022 - 18th March 2022)',
      ],
      props: {
        tag: 'h2',
        br: true,
      },
    },
    {
      title: 'Unofficial work',
      text: 'Unofficial work in a commercial project (4 months in total). I learned how to freely navigate a large project, localize and fix bugs. I learned how real development works',
      props: {
        tag: 'h2',
        br: true,
      },
    },
    {
      title: 'Start-Up',
      text: 'I am involved in the startup project of the browser game CastleKeepers. This is a non-profit project with a small team. More in the section',
      textAsLink: {
        name: '"Code Examples"',
        link: 'index-work-experience-main-stack',
      },
      props: {
        tag: 'h2',
        br: true,
      },
    },
  ],
};
