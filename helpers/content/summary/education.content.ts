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
        certificate:
          'https://firebasestorage.googleapis.com/v0/b/zakharovda95-17636.appspot.com/o/certificates%2Fcertificate_vue.jpg?alt=media&token=3d6b80b3-ff27-4884-8c1e-638a495b3314',
      },
    },
    {
      title: '',
      text: 'Курсы JavaScript.ru - Vue.Js 3',
      props: {
        tag: 'h2',
        certificate:
          'https://firebasestorage.googleapis.com/v0/b/zakharovda95-17636.appspot.com/o/certificates%2Fcertificate.jpg?alt=media&token=3704a31e-66c9-4bdb-bba7-f9281e4716b3',
      },
    },
  ],
};
