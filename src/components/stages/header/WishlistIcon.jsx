import React from 'react';
import PropTypes from 'prop-types';
import { MODULE_ID_WISHLIST } from '../../../constants';

const WishlistIcon = ({ setActiveModule, wishlistHasItems }) => {
    return <img className={'wishlistIcon'} src={ `images/wishlist-${wishlistHasItems ? 'selected' : 'neutral'}.svg`} onClick={ () => { setActiveModule(MODULE_ID_WISHLIST); }}/>;
};

WishlistIcon.propTypes = {
    setActiveModule: PropTypes.func.isRequired,
    wishlistHasItems: PropTypes.bool.isRequired
};

export default WishlistIcon;
