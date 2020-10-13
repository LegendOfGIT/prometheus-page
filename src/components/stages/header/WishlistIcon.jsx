import React from 'react';
import PropTypes from 'prop-types';

const WishlistIcon = ({ setActiveModule }) => {
    return <img className={'wishlistIcon'} src={'images/wishlist-selected.svg'} onClick={ () => { setActiveModule('wishlist'); }}/>;
};

WishlistIcon.propTypes = {
    setActiveModule: PropTypes.func.isRequired
};

export default WishlistIcon;
