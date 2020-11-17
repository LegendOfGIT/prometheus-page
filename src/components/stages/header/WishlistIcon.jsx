import React from 'react';
import PropTypes from 'prop-types';
import { MODULE_ID_WISHLIST } from '../../../constants';

const WishlistIcon = ({ renderIcon, setActiveModule, translations, wishlistHasItems }) => {
    if (!renderIcon) {
        return null;
    }

    return (
        <div className={'prometheus-header__wishlist'} onClick={() => { setActiveModule(MODULE_ID_WISHLIST); }}>
            <img className={'prometheus-header__wishlistIcon'}
                 alt={translations.wishlistIconLabel}
                 src={`/images/wishlist-${wishlistHasItems ? 'selected' : 'neutral'}.svg`}
            />
        </div>
    );
};

WishlistIcon.defaultProps = {
    wishlistHasItems: false
};

WishlistIcon.propTypes = {
    renderIcon: PropTypes.bool.isRequired,
    setActiveModule: PropTypes.func.isRequired,
    translations: PropTypes.shape({
        wishlistIconLabel: PropTypes.string.isRequired
    }),
    wishlistHasItems: PropTypes.bool.isRequired
};

export default WishlistIcon;
