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
  statistic: ['.vue: 40 файлов, 3684 строк', '.js: 54 файлов, 2345 строк'],
};

export const THIRD_PROJECT_CONTENT_EN: CodeExamplesProjectType = {
  id: 2,
  title: 'Curriculum Vitae',
  preview: {
    image:
        'https://firebasestorage.googleapis.com/v0/b/zakharovda95-17636.appspot.com/o/project-images%2F3%2F1.jpg?alt=media&token=6cf4a395-94dd-4be0-97d4-2929cc7cb223',
    description:
        'Curriculum vitae in TypeScript and Nuxt 3. State management - Pinia. DB, storage - Firebase. Hosting - Heroku',
  },
  images: [
    'https://firebasestorage.googleapis.com/v0/b/zakharovda95-17636.appspot.com/o/project-images%2F3%2F1.jpg?alt=media&token=6cf4a395-94dd-4be0-97d4-2929cc7cb223',
    'https://firebasestorage.googleapis.com/v0/b/zakharovda95-17636.appspot.com/o/project-images%2F3%2F2.jpg?alt=media&token=511448da-6924-46f2-a211-750e4fb09e42',
    'https://firebasestorage.googleapis.com/v0/b/zakharovda95-17636.appspot.com/o/project-images%2F3%2F3.jpg?alt=media&token=fea82627-4e07-4a12-a128-733998c3cf83',
    'https://firebasestorage.googleapis.com/v0/b/zakharovda95-17636.appspot.com/o/project-images%2F3%2F4.jpg?alt=media&token=be64bfc2-3903-4c09-8248-c1697d7243bb',
  ],
  description: [
    'Curriculum vitae in TypeScript and Nuxt JS 3',
    'The project is divided into three sections: "Summary" - which contains general information, "Stack" - all the technologies with which I worked, and "Code" - description of demo projects, links and code examples',
    'The site is presented as an interactive presentation',
    'Database and storage provided by Firebase service',
    'The site is adapted for different devices',
    'Localization in two languages - Russian and English (in development process)',
    'The project is divided into logical sections. The logic has been moved into modules in the helpers/services and helpers/methods folders. The project is covered with typing, types and interfaces are placed in the helpers/types folder. Enumerated data is presented as enums in the helpers/enums folder',
    'The idea and purpose of this project is to combine all previous small projects for their convenient demonstration, as well as for convenient self-presentation when looking for a job',
  ],
  stack: [
    'Nuxt JS 3 - main library',
    'Vue CLI - application development tool system',
    'Vue Router - routing library',
    'TypeScript - typing',
    'Pinia - state management',
    'Firebase - database and storage',
  ],
  links: {
    github: 'https://github.com/zakharovda95/nuxt3_ts-composition_api-curriculum_vitae',
    site: null,
  },
  statistic: ['.vue: 40 files, 3684 rows', '.ts: 54 files, 2345 rows'],
};