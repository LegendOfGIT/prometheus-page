import React from 'react';
import PropTypes from 'prop-types';
import { MODULE_ID_ITEM_OVERVIEW } from '../../../constants';

const LogoIcon = ({ renderIcon, setActiveModule }) => {
    if (!renderIcon) {
        return null;
    }

    return (
        <section className="prometheus-header__logo" onClick={() => { setActiveModule(MODULE_ID_ITEM_OVERVIEW); }}>
            <img alt={'logo'} src={'/pLogo.png'}/>
        </section>
    );
}

LogoIcon.propTypes = {
    renderIcon: PropTypes.bool.isRequired,
    setActiveModule: PropTypes.func.isRequired
};

export default LogoIcon;