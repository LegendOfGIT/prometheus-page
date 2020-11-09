import React from 'react';
import PropTypes from 'prop-types';

const Settings = ({ displayLanguages, renderModule, translations }) => {
    if (!renderModule) {
        return null;
    }

    return (
        <div className={'settingsContainer'}>
            <h1>{translations.titleLabel}</h1>

            <label>{translations.displayLanguageLabel}</label>
            <select name={'displayLanguage'} className={'settingsContainer__select'}>
                {
                    displayLanguages.map(({ isSelected, languageLabel, locale }) => (
                        <option selected={isSelected} value={locale}>{languageLabel}</option>
                    ))
                }
            </select>

            <input type={'button'} className={'settingsContainer__button'} value={'Einstellungen speichern'} />
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
    translations: PropTypes.shape({
        displayLanguageLabel: PropTypes.string.isRequired,
        titleLabel: PropTypes.string.isRequired
    }).isRequired
};

export default Settings;