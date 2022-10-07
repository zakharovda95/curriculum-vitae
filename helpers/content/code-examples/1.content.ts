import { CodeExamplesProjectType } from '~/helpers/types/content.types';

export const FIRST_PROJECT_CONTENT_RUS: CodeExamplesProjectType = {
  id: 0,
  title: 'Встречи',
  preview: {
    image:
      'https://firebasestorage.googleapis.com/v0/b/zakharovda95-17636.appspot.com/o/project-images%2F1%2F1.jpg?alt=media&token=38c14802-f724-4ee1-bc62-d5ba3fa20b1a',
    description:
      'Сервис организации мероприятий на Vue 3 Option API. Стейт менеджмент - Vuex 4. Роутинг - Vue-Router. База данных, хранилище и авторизация - Firebase. Хостинг -  Github Pages',
  },
  images: [
    'https://firebasestorage.googleapis.com/v0/b/zakharovda95-17636.appspot.com/o/project-images%2F1%2F1.jpg?alt=media&token=38c14802-f724-4ee1-bc62-d5ba3fa20b1a',
    'https://firebasestorage.googleapis.com/v0/b/zakharovda95-17636.appspot.com/o/project-images%2F1%2F2.jpg?alt=media&token=208d6f13-b929-41ff-ba22-3d9a1bcc01fd',
    'https://firebasestorage.googleapis.com/v0/b/zakharovda95-17636.appspot.com/o/project-images%2F1%2F3.jpg?alt=media&token=0a2259a3-cad9-47a0-9a76-efe44b6e7dd5',
    'https://firebasestorage.googleapis.com/v0/b/zakharovda95-17636.appspot.com/o/project-images%2F1%2F4.jpg?alt=media&token=2fd445de-24c4-4e9b-a7b0-6dc21a543502',
  ],
  description: [
    'Простой проект для демонстрации навыков работы с библиотекой Vue JS 3 и описанием компонентов на Option API. Выполнение данного проекта помогло мне закрепить и дополнить знания, полученные в ходе обучения на курсах по Vue JS 3. За основу проекта взят курсовой проект с курсов, но не его код',
    'Сервис позволяет просматривать будущие и прошедшие мероприятия, которые организуют пользователи сервиса. Функционал сервиса позволяет откликнуться в качестве участника или выступить в роли организатора мероприятий. Для удобства сервис оснащен поиском по названию, по дате в специальном календаре и сортировкой по прошедшим и предстоящим мероприятиям',
    'Как участник пользователь может просматривать программу мероприятия, и его описание. Для удобства поиска и просмотра мероприятие добавляется в специальный раздел "Учавствую", и на превью мероприятия добавляется бэйдж "Участник"',
    'Как организатор пользователь может создавать описание программу и изображение мероприятия в специальной форме в разделе "Создать". Все организуемые мероприятия добавляются в раздел "Организую", а на превью добавляется бэйдж "Организатор". Так же имеется возможность редактировать и удалять организуемые мероприятия',
    'Сервис покрыт авторизацией на сервисе Firebase. Неавторизованные пользователи не могут создавать или учавствовать в мероприятиях, а так же на все защищенные роуты стоят гварды для того чтобы пользователь не смог получить доступ к тем страницам, для которых нужна авторизация. Формы входа и регистрации покрыты валидацией VeeValidate',
    'Сайт адаптирован для разных устройств, и удобен в использовании как на мобильных устройствах так и на десктопных',
    'Все зарегистрированные пользователи и мероприятия записываются в базу данных Firebase. Все изображения в хранилище Firebase. При редактировании и удалении мероприятия данные в БД изменяются или удаляются. В хранилище так же предусмотрено удаление неиспользуемых изображений. Редактирование и удаление самих пользователей из интерфейса не предусмотрено',
    'Сам проект разбит на логические разделы. Основная логика вынесена в модули стора и модули в папке services. Я старался сделать описание компонентов максимально простым и чистым и делать адекватную декомпозицию, чтобы компоненты не были слишком загроможденные и были удобочитаемые. Уделял внимание неймингу компонентов, функций методов и переменных',
    'Этот проект стал моим первым опытом в самостоятельно разработке от инициации и до деплоя',
  ],
  stack: [
    'Vue Js - основная библиотека',
    'Vue CLI - система инструментов для разработки приложения',
    'Vue Router - библиотека маршрутизации',
    'Vuex 4 - стейт менеджмент',
    'Moment - библиотека форматирования даты и времени',
    'Uuid - генератор уникальных id',
    'Vue-Toaster - библиотека тостов',
    'Firebase - база данных, авторизация, хранилище',
    'VeeValidate - библиотека валидации форм',
    'Lodash - библиотека работы с коллекциями данных',
    'Material Design Lite - css библиотека (использовал сетку, некоторые стили, некоторые ui элементы)',
  ],
  links: {
    github: 'https://github.com/zakharovda95/vue_js-option_api-meetups',
    site: 'https://zakharovda95.github.io/meetups-demo-view/#/meetups',
  },
  statistic: ['.vue: 58 файлов, 4599 строк', '.js: 30 файлов, 1187 строк'],
};

export const FIRST_PROJECT_CONTENT_EN: CodeExamplesProjectType = {
  id: 0,
  title: 'Meetups',
  preview: {
    image:
        'https://firebasestorage.googleapis.com/v0/b/zakharovda95-17636.appspot.com/o/project-images%2F1%2F1.jpg?alt=media&token=38c14802-f724-4ee1-bc62-d5ba3fa20b1a',
    description:
        'Event organization service on Vue 3 Option API. State management - Vuex 4. Routing - Vue-Router. Database, storage and authorization - Firebase. Hosting - Github Pages',
  },
  images: [
    'https://firebasestorage.googleapis.com/v0/b/zakharovda95-17636.appspot.com/o/project-images%2F1%2F1.jpg?alt=media&token=38c14802-f724-4ee1-bc62-d5ba3fa20b1a',
    'https://firebasestorage.googleapis.com/v0/b/zakharovda95-17636.appspot.com/o/project-images%2F1%2F2.jpg?alt=media&token=208d6f13-b929-41ff-ba22-3d9a1bcc01fd',
    'https://firebasestorage.googleapis.com/v0/b/zakharovda95-17636.appspot.com/o/project-images%2F1%2F3.jpg?alt=media&token=0a2259a3-cad9-47a0-9a76-efe44b6e7dd5',
    'https://firebasestorage.googleapis.com/v0/b/zakharovda95-17636.appspot.com/o/project-images%2F1%2F4.jpg?alt=media&token=2fd445de-24c4-4e9b-a7b0-6dc21a543502',
  ],
  description: [
    'A simple project to demonstrate the skills of working with the Vue JS 3 library and describing the components on the Option API. The implementation of this project helped me consolidate and supplement the knowledge gained in the course of training in Vue JS 3 courses. The course project from the courses was taken as the basis of the project, but not its code',
    'The service allows you to view future and past events organized by users of the service. The functionality of the service allows you to act as a participant or act as an organizer of the event. For convenience, the service is equipped with a search by name, by date in a special calendar and sorting by past and upcoming events.',
    'As a participant the user can view the program of the event and its description. For the convenience of searching and viewing, the event is added to a special section "Participate", and the badge "Participant" is added to the preview of the event',
    'As an organizer, the user can create a description of the program and an image of the event in a special form in the "Create" section. All organized events are added to the "Organizing" section, and the "Organizer" badge is added to the preview. It is also possible to edit and delete organized events.',
    'The service is covered by authorization on the Firebase service. Unauthorized users cannot create or participate in events, and there are guards on all protected routes so that the user cannot access those pages that require authorization. Login and registration forms are covered by VeeValidate validation',
    'The site is adapted for different devices, and is easy to use on both mobile and desktop devices.',
    'All registered users and events are recorded in the Firebase database. All images in Firebase storage. When editing and deleting an event, the data in the database is changed or deleted. The storage also provides for the removal of unused images. Editing and deleting users themselves from the interface is not provided',
    'The project is divided into logical sections. The main logic is moved to store modules and modules in the "services" folder. I tried to keep the description of the components as simple and clean as possible and to do adequate decomposition so that the components were not too cluttered and were readable. Paid attention to the naming of components, functions, methods and variables',
    'This project was my first experience in self-development from initiation to deployment',
  ],
  stack: [
    'Vue Js - main library',
    'Vue CLI - application development tool system',
    'Vue Router - routing library',
    'Vuex 4 - state management',
    'Moment - date and time formatting library',
    'Uuid - unique id generator',
    'Vue-Toaster - toast library',
    'Firebase - database, authorization, storage',
    'VeeValidate - form validation library',
    'Lodash - data collection library',
    'Material Design Lite - css library (used grid, some styles, some UI elements)',
  ],
  links: {
    github: 'https://github.com/zakharovda95/vue_js-option_api-meetups',
    site: 'https://zakharovda95.github.io/meetups-demo-view/#/meetups',
  },
  statistic: ['.vue: 58 files, 4599 rows', '.js: 30 files, 1187 rows'],
};
