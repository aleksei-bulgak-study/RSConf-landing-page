import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import i18n from './i18n';

class Language extends React.Component {
  changeLanguageHandler(language) {
    this.i18n = i18n;
    i18n.changeLanguage(language);
  }

  render() {
    return (
      <div className="language">
        <LanguageButtonWrapped language="en" onClick={() => this.changeLanguageHandler('en')} />
        <LanguageButtonWrapped language="ru" onClick={() => this.changeLanguageHandler('ru')} />
        <LanguageButtonWrapped language="by" onClick={() => this.changeLanguageHandler('by')} />
      </div>
    );
  }
}

function LanguageButton({ language, onClick, t }) {
  return <button key={language} type="button" onClick={onClick}>{t(language)}</button>;
}

LanguageButton.propTypes = {
  language: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

const LanguageButtonWrapped = withNamespaces()(LanguageButton);

export default withNamespaces()(Language);
