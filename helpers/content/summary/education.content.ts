import { SectionContentType } from '~/helpers/types/content/section-content.types';

export const EDUCATION_RUS: SectionContentType = {
  title: 'Образование',
  content: [
    {
      title: 'Среднее специальное образование',
      text: '2011 - 2016; Строительство и эксплуатации зданий и сооружений, Йошкар-Олинский Строительный Техникум, Йошкар-Ола',
      props: {
        tag: 'h2',
      },
    },
    {
      title: 'Высшее образование (неоконченное)',
      text: '2016 - 2019; Институт строительства и архитектуры, Поволжский Государственный Технологический Университет, Йошкар-Ола',
      props: {
        tag: 'h2',
      },
    },
    {
      title: 'В качестве программиста',
      text: '',
      props: {
        tag: 'h2',
      },
    },
    {
      title: '',
      text: 'Курсы JavaScript.ru - JavaScript/DOM/Interfaces',
      props: {
        tag: 'h2',
        certificate: '123',
      },
    },
    {
      title: '',
      text: 'Курсы JavaScript.ru - Vue.Js 3',
      props: {
        tag: 'h2',
        certificate: '123',
      },
    },
  ],
};
