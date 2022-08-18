import { SectionContentType } from '~/helpers/types/content/section-content.types';

export const PERSONAL_INFORMATION_RUS: SectionContentType = {
  title: 'Информация',
  content: [
    {
      title: 'Имя',
      text: 'Дмитрий Захаров',
      props: {
        tag: 'h2',
      },
    },
    {
      title: 'Дата рождения',
      text: '13 мая 1995',
      props: {
        tag: 'h2',
      },
    },
    {
      title: 'Адрес',
      text: 'Йошкар-Ола, Россия',
      props: {
        tag: 'h2',
      },
    },
    {
      title: 'Гражданство',
      text: 'Российская Федерация',
      props: {
        tag: 'h2',
      },
    },
    {
      title: 'Семейное положение',
      text: 'Не женат',
      props: {
        tag: 'h2',
      },
    },
    {
      title: 'Языки',
      text: 'Русский (основной), Английский - A2 (в процессе обучения)',
      props: {
        tag: 'h2',
      },
    },
  ],
};
