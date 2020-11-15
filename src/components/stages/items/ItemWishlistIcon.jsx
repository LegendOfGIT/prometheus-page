import React from 'react';
import PropTypes from 'prop-types';

const ItemWishlistIcon = ({ isOnWishlist, itemId, toggleWishlistItem }) => {
    if (!itemId) {
        return null;
    }

    return (
        <a
            href={'!#'}
            className={`item__wishlist ${isOnWishlist ? 'item__wishlist--active' : ''}`}
            onClick={ (e) => { toggleWishlistItem(itemId); e.preventDefault(); }}
        >
            <img alt={'add to wishlist'} src={ isOnWishlist ? 'images/wishlist-selected.svg' : 'images/wishlist-neutral.svg'}/>
        </a>
    );
}

ItemWishlistIcon.defaultProps = {
    itemId: ''
};

ItemWishlistIcon.propTypes = {
    isOnWishlist: PropTypes.bool.isRequired,
    itemId: PropTypes.string.isRequired,
    toggleWishlistItem: PropTypes.func.isRequired
};

export default ItemWishlistIcon;