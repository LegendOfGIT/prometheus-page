import React from 'react';
import PropTypes from 'prop-types';
import { MODULE_ID_WISHLIST } from '../../../constants';

const WishlistIcon = ({setActiveModule, translations, wishlistHasItems}) => {
    return (
        <div className={'wishlist'} onClick={() => { setActiveModule(MODULE_ID_WISHLIST); }}>
            <img className={'wishlist__icon'}
                 alt={translations.wishlistIconLabel}
                 src={`/images/wishlist-${wishlistHasItems ? 'selected' : 'neutral'}.svg`}
            />
            <h5 className={'wishlist__title'}>{translations.wishlistIconLabel}</h5>
        </div>
    );
};

WishlistIcon.defaultProps = {
    wishlistHasItems: false
};

WishlistIcon.propTypes = {
    setActiveModule: PropTypes.func.isRequired,
    translations: PropTypes.shape({
        wishlistIconLabel: PropTypes.string.isRequired
    }),
    wishlistHasItems: PropTypes.bool.isRequired
};

export default WishlistIcon;
