import React from 'react';
import PropTypes from 'prop-types';

class Items extends React.Component {
    render() {
        if (!this.props.renderModule) {
            return null;
        }

        if (0 === (this.props.informationItems || []).length) {
            this.props.setActiveModule('item-overview');
        }

        return (
            <div className={'informationItemsContainer'}>
                {
                    this.props.informationItems.map(informationItem => {
                        const { _id, isOnWishlist, link, title } = informationItem;
                        const titleImage = informationItem['title-image'] || '';

                        if (!titleImage) {
                            return null;
                        }

                        return (
                            <div className={'informationItem'} key={`informationItem_${_id}`}>
                                <a href={link} target={_id}>
                                    <img
                                        className={'informationItem__image'}
                                        alt={title}
                                        src={titleImage}
                                        loading={'lazy'}
                                    />
                                </a>
                                <a
                                    className={`informationItem__wishlist ${isOnWishlist ? 'informationItem__wishlist--active' : ''}`}
                                    onClick={ () => { this.props.toggleWishlistItem(_id) }}
                                >
                                    <img src={ isOnWishlist ? 'images/wishlist-selected.svg' : 'images/wishlist-neutral.svg'}/>
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

Items.propTypes = {
    informationItems: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        'title-image': PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    })),
    renderModule: PropTypes.bool.isRequired,
    setActiveModule: PropTypes.func.isRequired,
    toggleWishlistItem: PropTypes.func.isRequired
};

export default Items;