import React from 'react';
import PropTypes from 'prop-types';

const Settings = ({ renderModule }) => {
    if (!renderModule) {
        return null;
    }

    return (
        <div className={'settingsContainer'}>
            <h1>Einstellungen</h1>

            <label>Anzeigesprache</label>
            <select name={'displayLanguage'} className={'settingsContainer__select'}>
                <option value={'de'}>deutsch</option>
                <option value={'en'}>englisch</option>
                <option value={'es'}>spanisch</option>
                <option value={'gr'}>griechisch</option>
            </select>

            <input type={'button'} className={'settingsContainer__button'} value={'Einstellungen speichern'} />
        </div>
    );
}

Settings.propTypes = {
    renderModule: PropTypes.bool.isRequired
};

export default Settings;