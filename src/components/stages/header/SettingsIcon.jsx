import React from 'react';
import PropTypes from 'prop-types';
import { MODULE_ID_SETTINGS } from '../../../constants';

const SettingsIcon = ({setActiveModule, translations}) => {
    return (
        <div className={'settings'}>
            <img
                alt={translations.settingsIconLabel}
                className={'settings__icon'}
                src={'/images/settings.png'}
                onClick={() => {
                    setActiveModule(MODULE_ID_SETTINGS);
                }}
            />
            <h5 className={'settings__title'}>{translations.settingsIconLabel}</h5>
        </div>
    );
}

SettingsIcon.propTypes = {
    setActiveModule: PropTypes.func.isRequired,
    translations: PropTypes.shape({
        settingsIconLabel: PropTypes.string.isRequired
    }).isRequired
};

export default SettingsIcon;