import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import { reactI18nextModule } from 'react-i18next';

i18n
  .use(XHR)
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'en',
    debug: true,

    react: {
      wait: false,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default',
    },
  });

i18n.addResourceBundle('en', 'translation', {
  en: 'eng',
  ru: 'ru',
  by: 'by',
  title: 'CodeJam',
  home: 'Home',
  author_of_the_day: 'Author of the day',
  author_search: 'Author Search',
  team: 'The project team',
  authors: 'Authors',
});
i18n.addResourceBundle('ru', 'translation', {
  en: 'англ',
  ru: 'рус',
  by: 'бел',
  title: 'Код Джем',
  home: 'На Главную',
  author_of_the_day: 'Поэт дня',
  author_search: 'Поиск поэтов',
  team: 'Наша команда',
  authors: 'Поэты',
});
i18n.addResourceBundle('by', 'translation', {
  en: 'англ',
  ru: 'рус',
  by: 'бел',
  title: 'Код Джэм',
  home: 'На Галоуную',
  author_of_the_day: 'Паэт дня',
  author_search: 'Пошук па паэтам',
  team: 'Каманда',
  authors: 'Паэты',
});

export default i18n;
