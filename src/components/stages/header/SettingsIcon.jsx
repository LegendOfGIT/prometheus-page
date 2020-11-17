import React from 'react';
import PropTypes from 'prop-types';
import { MODULE_ID_SETTINGS } from '../../../constants';

const SettingsIcon = ({ renderIcon, setActiveModule, translations }) => {
    if (!renderIcon) {
        return null;
    }

    return (
        <div className={'prometheus-header__settings'}>
            <img
                alt={translations.settingsIconLabel}
                className={'prometheus-header__settingsIcon'}
                src={'/images/settings.png'}
                onClick={() => {
                    setActiveModule(MODULE_ID_SETTINGS);
                }}
            />
        </div>
    );
}

SettingsIcon.propTypes = {
    renderIcon: PropTypes.bool.isRequired,
    setActiveModule: PropTypes.func.isRequired,
    translations: PropTypes.shape({
        settingsIconLabel: PropTypes.string.isRequired
    }).isRequired
};

export default SettingsIcon;