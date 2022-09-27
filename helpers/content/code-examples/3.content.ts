import { CodeExamplesProjectType } from '~/helpers/types/content.types';

export const THIRD_PROJECT_CONTENT_RUS: CodeExamplesProjectType = {
  id: 2,
  title: 'Curriculum Vitae',
  preview: {
    image:
      'https://firebasestorage.googleapis.com/v0/b/zakharovda95-17636.appspot.com/o/project-images%2F3%2F1.jpg?alt=media&token=6cf4a395-94dd-4be0-97d4-2929cc7cb223',
    description:
      'Сайт-резюме на TypeScript и Nuxt 3. Стейт менеджмент - Pinia. БД хранилище -  Firebase. Хостинг - Heroku',
  },
  images: [
    'https://firebasestorage.googleapis.com/v0/b/zakharovda95-17636.appspot.com/o/project-images%2F3%2F1.jpg?alt=media&token=6cf4a395-94dd-4be0-97d4-2929cc7cb223',
    'https://firebasestorage.googleapis.com/v0/b/zakharovda95-17636.appspot.com/o/project-images%2F3%2F2.jpg?alt=media&token=511448da-6924-46f2-a211-750e4fb09e42',
    'https://firebasestorage.googleapis.com/v0/b/zakharovda95-17636.appspot.com/o/project-images%2F3%2F3.jpg?alt=media&token=fea82627-4e07-4a12-a128-733998c3cf83',
    'https://firebasestorage.googleapis.com/v0/b/zakharovda95-17636.appspot.com/o/project-images%2F3%2F4.jpg?alt=media&token=be64bfc2-3903-4c09-8248-c1697d7243bb',
  ],
  description: [
    'Сайт-резюме на TypeScript  и Nuxt JS 3',
    'Проект разделен на три раздела: "Резюме" - где содержится общая информация, "Стек" - все технологии с которыми я работал, и "Код" - описание демо-проектов, ссылки и примеры кода',
    'Сайт представлен как интерактивная презентация',
    'База данных и хранилище предоставляются сервисом Firebase',
    'Сайт адаптирован под разные устройства',
    'Локализация на двух языках - Русский и Английский (в разработке)',
    'Проект разбит на логические разделы. Логика вынесена в модули в папки helpers/services и helpers/methods. Проект покрыт типизацией, типы и интерфейсы вынесены в папку helpers/types. Перечисляемые данные представленны в виде енамов в папке helpers/enums',
    'Идея и цель этого проекта заключается в том, чтобы объединить все предыдущие небольшие проекты для их удобной демонстрации, а так же для удобной самопрезентации при поиске работы',
  ],
  stack: [
    'Nuxt JS 3 - основная библиотека',
    'Vue CLI - система инструментов для разработки приложения',
    'Vue Router - библиотека маршрутизации',
    'TypeScript - типизация',
    'Pinia - стейт менеджмент',
    'Firebase - хранилище и БД',
  ],
  links: {
    github: 'https://github.com/zakharovda95/nuxt3_ts-composition_api-curriculum_vitae',
    site: null,
  },
  statistic: ['.vue: 39 файлов, 3420 строк', '.js: 39 файлов, 1155 строк'],
};
