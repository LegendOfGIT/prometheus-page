import React from 'react';
import PropTypes from 'prop-types';
import {MODULE_ID_WISHLIST} from '../../../constants';

const WishlistIcon = ({setActiveModule, wishlistHasItems}) => {
    return (
        <div className={'wishlist'}>
            <img className={'wishlist__icon'}
                 src={`/images/wishlist-${wishlistHasItems ? 'selected' : 'neutral'}.svg`}
                 onClick={() => {
                     setActiveModule(MODULE_ID_WISHLIST);
                 }}
            />
            <h5 className={'wishlist__title'}>Wishlist</h5>
        </div>)
        ;
};

WishlistIcon.defaultProps = {
    wishlistHasItems: false
};

WishlistIcon.propTypes = {
    setActiveModule: PropTypes.func.isRequired,
    wishlistHasItems: PropTypes.bool.isRequired
};

export default WishlistIcon;
