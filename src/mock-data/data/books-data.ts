import image from '../../images/image.png';
import imageBook from '../../images/image-book.png';

export const books = [
  {
    id: '1',
    category: 'computerLiterature',
    titleCategory: 'Компьютерная литература',
    images: [],
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
    author: 'Адитья Бхаргава, Патрик Нимейер',
    aboutBook:
      'Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?\n\n Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.',
    year: '2019',
    rate: 4.3,
    publishingHouse: 'Питер',
    pages: '288',
    binding: 'Мягкая обложка',
    format: '70х100',
    genre: 'Компьютерная литература',
    weight: '370 г',
    ISBN: '978-5-4461-0923-4',
    manufacturer: 'ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29',
    reviews: [
      {
        avatar: ``,
        nameUser: 'Иван Иванов',
        date: '5 января 2019',
        rate: '',
        textReview: '',
      },
      {
        avatar: ``,
        nameUser: 'Николай Качков',
        date: '20 июня 2018',
        rate: '',
        textReview:
          'Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не оставляет шанса для анализа существующих паттернов поведения. Для современного мира внедрение современных методик предоставляет широкие возможности для позиций, занимаемых участниками в отношении поставленных задач. Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы будут в равной степени предоставлены сами себе. Вот вам яркий пример современных тенденций — глубокий уровень погружения создаёт предпосылки для своевременного выполнения сверхзадачи. И нет сомнений, что акционеры крупнейших компаний, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.',
      },
      {
        avatar: ``,
        nameUser: 'Екатерина Беляева',
        date: '18 февраля 2018',
        rate: '',
        textReview: '',
      },
    ],
  },
  {
    id: '2',
    category: 'computerLiterature',
    titleCategory: 'Компьютерная литература',
    images: [`${image}`],
    title: 'Грокаем алгоритмы.',
    author: 'Адитья Бхаргава, Патрик Нимейер',
    year: '2019',
    rate: 3.7,
    publishingHouse: 'Питер',
    pages: '288',
    binding: 'Мягкая обложка',
    format: '70х100',
    genre: 'Компьютерная литература',
    weight: '370 г',
    ISBN: '978-5-4461-0923-4',
    manufacturer: 'ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29',
    reviews: [
      {
        avatar: ``,
        nameUser: 'Николай Качков',
        date: '20 июня 2018',
        rate: '',
        textReview:
          'Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не оставляет шанса для анализа существующих паттернов поведения. Для современного мира внедрение современных методик предоставляет широкие возможности для позиций, занимаемых участниками в отношении поставленных задач. Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы будут в равной степени предоставлены сами себе. Вот вам яркий пример современных тенденций — глубокий уровень погружения создаёт предпосылки для своевременного выполнения сверхзадачи. И нет сомнений, что акционеры крупнейших компаний, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.',
      },
      {
        avatar: ``,
        nameUser: 'Екатерина Беляева',
        date: '18 февраля 2018',
        rate: '',
        textReview: '',
      },
    ],
  },
  {
    id: '3',
    category: 'bussinesBooks',
    titleCategory: 'Бизнес-книги',
    images: [`${image}`, `${imageBook}`],
    title: 'Грокаем алгоритмы. Иллюстрированное',
    author: 'Адитья Бхаргава, Патрик Нимейер',
    year: '2019',
    rate: 3,
    publishingHouse: 'Питер',
    pages: '288',
    binding: 'Мягкая обложка',
    format: '70х100',
    genre: 'Компьютерная литература',
    weight: '370 г',
    ISBN: '978-5-4461-0923-4',
    manufacturer: 'ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29',
    reviews: [],
  },
  {
    id: '4',
    category: 'bussinesBooks',
    titleCategory: 'Бизнес-книги',
    images: [],
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
    author: 'Адитья Бхаргава, Патрик Нимейер',
    year: '2019',
    rate: 5,
    publishingHouse: 'Питер',
    pages: '288',
    binding: 'Мягкая обложка',
    format: '70х100',
    genre: 'Компьютерная литература',
    weight: '370 г',
    ISBN: '978-5-4461-0923-4',
    manufacturer: 'ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29',
    reviews: [
      {
        avatar: ``,
        nameUser: 'Иван Иванов',
        date: '5 января 2019',
        rate: '',
        textReview: '',
      },
    ],
  },
  {
    id: '5',
    category: 'computerLiterature',
    titleCategory: 'Компьютерная литература',
    images: [`${image}`],
    title: 'Грокаем алгоритмы.',
    author: 'Адитья Бхаргава, Патрик Нимейер',
    year: '2019',
    rate: 3.2,
    publishingHouse: 'Питер',
    pages: '288',
    binding: 'Мягкая обложка',
    format: '70х100',
    genre: 'Компьютерная литература',
    weight: '370 г',
    ISBN: '978-5-4461-0923-4',
    manufacturer: 'ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29',
    reviews: [],
  },
  {
    id: '6',
    category: 'bussinesBooks',
    titleCategory: 'Бизнес-книги',
    images: [`${image}`, `${imageBook}`],
    title: 'Грокаем алгоритмы. Иллюстрированное',
    author: 'Адитья Бхаргава, Патрик Нимейер',
    year: '2019',
    rate: 4.5,
    publishingHouse: 'Питер',
    pages: '288',
    binding: 'Мягкая обложка',
    format: '70х100',
    genre: 'Компьютерная литература',
    weight: '370 г',
    ISBN: '978-5-4461-0923-4',
    manufacturer: 'ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29',
    reviews: [
      {
        avatar: ``,
        nameUser: 'Николай Качков',
        date: '20 июня 2018',
        rate: '',
        textReview:
          'Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не оставляет шанса для анализа существующих паттернов поведения. Для современного мира внедрение современных методик предоставляет широкие возможности для позиций, занимаемых участниками в отношении поставленных задач. Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы будут в равной степени предоставлены сами себе. Вот вам яркий пример современных тенденций — глубокий уровень погружения создаёт предпосылки для своевременного выполнения сверхзадачи. И нет сомнений, что акционеры крупнейших компаний, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.',
      },
    ],
  },
  {
    id: '7',
    category: 'computerLiterature',
    titleCategory: 'Компьютерная литература',
    images: [],
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
    author: 'Адитья Бхаргава, Патрик Нимейер',
    year: '2019',
    rate: 5,
    publishingHouse: 'Питер',
    pages: '288',
    binding: 'Мягкая обложка',
    format: '70х100',
    genre: 'Компьютерная литература',
    weight: '370 г',
    ISBN: '978-5-4461-0923-4',
    manufacturer: 'ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29',
    reviews: [],
  },
  {
    id: '8',
    category: 'bussinesBooks',
    titleCategory: 'Бизнес-книги',
    images: [
      `${image}`,
      `${imageBook}`,
      `${image}`,
      `${imageBook}`,
      `${image}`,
      `${imageBook}`,
      `${image}`,
      `${imageBook}`,
      `${image}`,
      `${imageBook}`,
    ],
    title: 'Грокаем алгоритмы.',
    author: 'Адитья Бхаргава, Патрик Нимейер',
    year: '2019',
    rate: 2.8,
    publishingHouse: 'Питер',
    pages: '288',
    binding: 'Мягкая обложка',
    format: '70х100',
    genre: 'Компьютерная литература',
    weight: '370 г',
    ISBN: '978-5-4461-0923-4',
    manufacturer: 'ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29',
    reviews: [
      {
        avatar: ``,
        nameUser: 'Иван Иванов',
        date: '5 января 2019',
        rate: '',
        textReview: '',
      },
      {
        avatar: ``,
        nameUser: 'Екатерина Беляева',
        date: '18 февраля 2018',
        rate: '',
        textReview: '',
      },
    ],
  },
  {
    id: '9',
    category: 'bussinesBooks',
    titleCategory: 'Бизнес-книги',
    images: [`${image}`],
    title: 'Грокаем алгоритмы. Иллюстрированное',
    author: 'Адитья Бхаргава, Патрик Нимейер',
    year: '2019',
    rate: 0,
    publishingHouse: 'Питер',
    pages: '288',
    binding: 'Мягкая обложка',
    format: '70х100',
    genre: 'Компьютерная литература',
    weight: '370 г',
    ISBN: '978-5-4461-0923-4',
    manufacturer: 'ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29',
    reviews: [],
  },
];
