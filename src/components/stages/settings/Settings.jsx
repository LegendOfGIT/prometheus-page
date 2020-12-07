import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Settings = ({ displayLanguages, renderModule, saveUserSettings, showLoadingAnimation, translations }) => {
    const selectedDisplayLanguage = displayLanguages.find((item) => item.isSelected) || { locale: 'de-DE' };
    const [displayLanguage = selectedDisplayLanguage.locale, setDisplayLanguage] = useState('de-DE');

    if (showLoadingAnimation) {
        return <div className="loadingAnimationContainer">
            <div className="loadingAnimation"/>
        </div>;
    }

    document.title = translations.pageTitle;

    if (!renderModule) {
        return null;
    }

    const getSettingsFromElements = () => {
        return {
            displayLanguage
        };
    }

    return (
        <div className={'settingsContainer'}>
            <h1>{translations.titleLabel}</h1>

            <label>{translations.displayLanguageLabel}</label>
            <select
                name={'displayLanguage'}
                className={'settingsContainer__select'}
                onChange={(e) => { setDisplayLanguage(e.target.value); }}
            >
                {
                    displayLanguages.map(({ isSelected, languageLabel, locale }) => (
                        <option key={locale} selected={ isSelected } value={locale}>{languageLabel}</option>
                    ))
                }
            </select>

            <input
                type={'button'}
                className={'settingsContainer__button'}
                value={translations.saveButtonLabel}
                onClick={() => { saveUserSettings(getSettingsFromElements()); }}
            />
        </div>
    );
}

Settings.propTypes = {
    displayLanguages: PropTypes.arrayOf(PropTypes.shape({
        isSelected: PropTypes.bool.isRequired,
        languageLabel: PropTypes.string.isRequired,
        locale: PropTypes.string.isRequired
    })).isRequired,
    renderModule: PropTypes.bool.isRequired,
    saveUserSettings: PropTypes.func.isRequired,
    showLoadingAnimation: PropTypes.bool.isRequired,
    translations: PropTypes.shape({
        displayLanguageLabel: PropTypes.string.isRequired,
        pageTitle:  PropTypes.string.isRequired,
        saveButtonLabel: PropTypes.string.isRequired,
        titleLabel: PropTypes.string.isRequired
    }).isRequired
};

export default Settings;