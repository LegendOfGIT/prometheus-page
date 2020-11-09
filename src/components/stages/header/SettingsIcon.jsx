import React from 'react';
import PropTypes from 'prop-types';
import { MODULE_ID_SETTINGS } from '../../../constants';

const SettingsIcon = ({setActiveModule}) => {
    return (
        <div className={'settings'}>
            <img
                className={'settings__icon'}
                src={'/images/settings.png'}
                onClick={() => {
                    setActiveModule(MODULE_ID_SETTINGS);
                }}
            />
            <h5 className={'settings__title'}>Settings</h5>
        </div>
    );
}

SettingsIcon.propTypes = {
    setActiveModule: PropTypes.func.isRequired
};

export default SettingsIcon;