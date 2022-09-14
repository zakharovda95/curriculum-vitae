import { CodeExamplesProjectType } from '~/helpers/types/content.types';

export const SECOND_PROJECT_CONTENT_RUS: CodeExamplesProjectType = {
  id: 1,
  title: 'Japanese Sweets Store',
  preview: {
    image:
      'https://firebasestorage.googleapis.com/v0/b/zakharovda95-17636.appspot.com/o/project-images%2F2%2F1.jpg?alt=media&token=89c60489-7f80-4e4c-a5ff-82af3b0f42f2',
    description:
      'Онлайн магазин на TypeScript и Vue 3 Composition API. Стейт менеджмент - Pinia. Монорепозиторий LernaJS. Контент менеджмент и авторизация - StrapiCMS. Хостинг -  Render',
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
    'Все добавленные товары складываются в пользовательскую корзину. На странице корзины можно редактировать заказ: изменять количество или удалять выбранные товары. При "оформлении заказа" на указанную почту придет специальное оповещение',
    'Имеется возможность зарегистрироваться и создать личный кабинет, где будут отображаться ваши данные, заказы и отзывы на товары. Имеется возможность редактирования личных данных',
    'Сайт адаптирован для разных устройств, и удобен в использовании как на мобильных устройствах так и на десктопных',
    'Все зарегистрированные пользователи и мероприятия записываются в документы в базу данных SQLite. Все изображения в хранилище Strapi Media Library. Контент менеджмент происходит в админ панели Strapi',
    'Сам проект разбит на логические разделы. Основная логика вынесена в модули стора, composables и модули в папке helpers/methods. Весь проект покрыт типизацией. Все сложные типы и интерфесы вынесены в папку helpers/types. Все перечисляемые данные представлены в виде енамов в папке helpers/enums. Все rest запросы выполнены при помощи экземпляра Axios (папка helpers/requesters), а сами API в папке helpers/requests',
    'Для удобной работы с frontend и backend оба проекта обернуты в монорепозиторий LernaJS',
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
};
