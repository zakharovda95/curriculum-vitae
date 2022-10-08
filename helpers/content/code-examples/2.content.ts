import { CodeExamplesProjectType } from '~/helpers/types/content.types';

export const SECOND_PROJECT_CONTENT_RUS: CodeExamplesProjectType = {
  id: 1,
  title: 'Japanese Sweets Store',
  preview: {
    image:
      'https://firebasestorage.googleapis.com/v0/b/zakharovda95-17636.appspot.com/o/project-images%2F2%2F1.jpg?alt=media&token=89c60489-7f80-4e4c-a5ff-82af3b0f42f2',
    description:
      'Онлайн магазин на TypeScript и Vue 3 Composition API. Стейт менеджмент - Pinia. Монорепозиторий LernaJS. Контент менеджмент и авторизация - StrapiCMS. Хостинг -  Render/Heroku',
  },
  images: [
    'https://firebasestorage.googleapis.com/v0/b/zakharovda95-17636.appspot.com/o/project-images%2F2%2F1.jpg?alt=media&token=89c60489-7f80-4e4c-a5ff-82af3b0f42f2',
    'https://firebasestorage.googleapis.com/v0/b/zakharovda95-17636.appspot.com/o/project-images%2F2%2F2.jpg?alt=media&token=24afc64d-2b0a-4811-bf42-4ad2e4d32d01',
    'https://firebasestorage.googleapis.com/v0/b/zakharovda95-17636.appspot.com/o/project-images%2F2%2F3.jpg?alt=media&token=046b9d69-b15c-45f1-b554-fa9293510f00',
    'https://firebasestorage.googleapis.com/v0/b/zakharovda95-17636.appspot.com/o/project-images%2F2%2F4.jpg?alt=media&token=b93a92a0-af4c-4548-9fbd-00daa122e501',
    'https://firebasestorage.googleapis.com/v0/b/zakharovda95-17636.appspot.com/o/project-images%2F2%2F5.jpg?alt=media&token=128ad0e8-92c6-48ab-8b64-6d8af15c47c5',
    'https://firebasestorage.googleapis.com/v0/b/zakharovda95-17636.appspot.com/o/project-images%2F2%2F6.jpg?alt=media&token=a4d60d78-e83e-482e-afae-f1d40be5bb20',
  ],
  description: [
    'Не сложный проект на TypeScript для демонстрации навыков работы с библиотекой Vue JS 3 и описанием компонентов на Composition API. Выполнение данного проекта помогло мне изучить TypeScript и  понять принцип работы Headless CMS. Все заглушки товаров для проекта я взял с сайта www.japancandystore.com',
    'Проект - онлайн магазин по продаже сладостей из Японии. Товары рассположены по категориям. Для удобного поиска имеется панель фильтров, где можно выбрать ценовой диапазон, производителя, отсортировать по возрастанию/убыванию цены и только товары со скидкой',
    'Для каждого товара имеется отдельная страница с подробным описанием, рейтингом и отзывами, а так же возможность добавить нужное количество товара в корзину',
    'Товары можно оценить по пятибальной шкале и оставить отзыв, который проходит модерацию в админ-панели, и в случае корректного заполнения полей публикуется на странице товара. Из всех оценок формируется средний рейтинг товара',
    'Все добавленные товары складываются в пользовательскую корзину. На странице корзины можно редактировать заказ: изменять количество или удалять выбранные товары',
    'Имеется возможность зарегистрироваться и создать личный кабинет, где будут отображаться ваши данные, заказы и отзывы на товары. Имеется возможность редактирования личных данных (в разработке)',
    'Сайт адаптирован для разных устройств, и удобен в использовании как на мобильных устройствах так и на десктопных',
    'Все данные записываются в базу данных SQLite. Все изображения в хранилище Strapi Media Library. Контент менеджмент происходит в админ панели Strapi',
    'Сам проект разбит на логические разделы. Основная логика вынесена в модули стора, composables и модули в папке helpers/methods. Весь проект покрыт типизацией, все сложные типы и интерфесы вынесены в папку helpers/types. Все перечисляемые данные представлены в виде енамов в папке helpers/enums. Все rest запросы выполнены при помощи экземпляра Axios (папка helpers/requesters), а сами API в папке helpers/requests',
    'Для удобной работы с frontend и backend оба проекта обернуты в монорепозиторий LernaJS',
    'Для ускорения разработки большинство UI элементов взяты из библиотеки NaiveUI',
    'При выполнении данного проекта я узнал как происходит сообщение между frontend и backend. Узнал о монорепозиториях и CMS. Выучил TypeScript и оценил плюсы типизации данных. Смог, завернуть оба проекта и развернуть на сервисе Render',
  ],
  stack: [
    'Vue Js - основная библиотека',
    'Vue CLI - система инструментов для разработки приложения',
    'Vue Router - библиотека маршрутизации',
    'TypeScript - типизация',
    'Pinia - стейт менеджмент',
    'Uuid - генератор уникальных id',
    'Axios - библиотека rest запросов',
    'NaiveUI - библиотека компонентов',
    'StrapiCMS - контент-менеджмент',
    'LernaJS - монорепозиторий',
    'Lodash - библиотека работы с коллекциями данных',
  ],
  links: {
    github: 'https://github.com/zakharovda95/vue_ts-composition_api-japanese_sweets_store',
    site: 'https://github.com/zakharovda95/vue_ts-composition_api-japanese_sweets_store',
  },
  statistic: ['.vue: 38 файлов, 3259 строк', '.ts: 44 файла, 1312 строк'],
};

export const SECOND_PROJECT_CONTENT_EN: CodeExamplesProjectType = {
  id: 1,
  title: 'Japanese Sweets Store',
  preview: {
    image:
      'https://firebasestorage.googleapis.com/v0/b/zakharovda95-17636.appspot.com/o/project-images%2F2%2F1.jpg?alt=media&token=89c60489-7f80-4e4c-a5ff-82af3b0f42f2',
    description:
      'Online store on TypeScript and Vue 3 Composition API. State Management - Pinia. LernaJS monorepository. Content management and authorization - StrapiCMS. Hosting - Render/Heroku',
  },
  images: [
    'https://firebasestorage.googleapis.com/v0/b/zakharovda95-17636.appspot.com/o/project-images%2F2%2F1.jpg?alt=media&token=89c60489-7f80-4e4c-a5ff-82af3b0f42f2',
    'https://firebasestorage.googleapis.com/v0/b/zakharovda95-17636.appspot.com/o/project-images%2F2%2F2.jpg?alt=media&token=24afc64d-2b0a-4811-bf42-4ad2e4d32d01',
    'https://firebasestorage.googleapis.com/v0/b/zakharovda95-17636.appspot.com/o/project-images%2F2%2F3.jpg?alt=media&token=046b9d69-b15c-45f1-b554-fa9293510f00',
    'https://firebasestorage.googleapis.com/v0/b/zakharovda95-17636.appspot.com/o/project-images%2F2%2F4.jpg?alt=media&token=b93a92a0-af4c-4548-9fbd-00daa122e501',
    'https://firebasestorage.googleapis.com/v0/b/zakharovda95-17636.appspot.com/o/project-images%2F2%2F5.jpg?alt=media&token=128ad0e8-92c6-48ab-8b64-6d8af15c47c5',
    'https://firebasestorage.googleapis.com/v0/b/zakharovda95-17636.appspot.com/o/project-images%2F2%2F6.jpg?alt=media&token=a4d60d78-e83e-482e-afae-f1d40be5bb20',
  ],
  description: [
    'A simple TypeScript project to demonstrate skills in working with the Vue JS 3 library and describing components on the Composition API. This project helped me learn TypeScript and understand how Headless CMS works. I took all the product stubs for the project from www.japancandystore.com',
    'The project is an online store selling sweets from Japan. Products are arranged by category. For a convenient search, there is a filter panel where you can select a price range, a manufacturer, sort in ascending/descending prices, and only products with a discount.',
    'For each product there is a separate page with a detailed description, rating and reviews, as well as the ability to add the desired amount of product to the cart',
    'Products can be evaluated on a five-point scale and a review can be left, which is moderated in the admin panel, and if the fields are filled in correctly, it is published on the product page. From all ratings, the average rating of the product is formed',
    "All added products are added to the user's cart. On the shopping cart page, you can edit the order: change the quantity or delete selected products",
    'It is possible to register and create a personal account, where your data, orders and product reviews will be displayed. It is possible to edit personal data (in development process)',
    'The site is adapted for different devices, and is easy to use on both mobile and desktop devices.',
    'All data is written to a SQLite database. All images in the Strapi Media Library repository. Content management takes place in the Strapi admin panel',
    'The project is divided into logical sections. The main logic is moved to store modules, composables and modules in the helpers/methods folder. The whole project is covered with typing, all complex types and interfaces are placed in the helpers/types folder. All enumerated data is presented as enums in the helpers/enums folder. All rest requests are made using an Axios instance (helpers/requesters folder), and the APIs themselves are in the helpers/requests folder',
    'For convenient work with frontend and backend, both projects are wrapped in a LernaJS monorepository',
    'To speed up development, most UI elements are taken from the NaiveUI library',
    'While doing this project, I learned how the communication between frontend and backend happens. Learned about monorepositories and CMS. Learned TypeScript and appreciated the benefits of data typing. Smog, wrap both projects and deploy on the Render service',
  ],
  stack: [
    'Vue Js - main library',
    'Vue CLI - application development tool system',
    'Vue Router - routing library',
    'TypeScript - typing',
    'Pinia - state management',
    'Uuid - unique id generator',
    'Axios - rest queries library',
    'NaiveUI - UI component library',
    'StrapiCMS - content management',
    'LernaJS - monorepository',
    'Lodash - data collection library',
  ],
  links: {
    github: 'https://github.com/zakharovda95/vue_ts-composition_api-japanese_sweets_store',
    site: null,
  },
  statistic: ['.vue: 38 files, 3259 rows', '.ts: 44 files, 1312 rows'],
};
