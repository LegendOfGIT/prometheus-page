import React from 'react';
import PropTypes from 'prop-types';

class Items extends React.Component {
    render() {
        if (!this.props.renderModule) {
            return null;
        }

        return (
            <div className={'informationItemsContainer'}>
                {
                    this.props.informationItems.map(informationItem => {
                        const { _id, itemId, link, title } = informationItem;
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
                                    className="informationItem__wishlist informationItem__wishlist--active"
                                    onClick={ () => { this.props.toggleWishlistItem(itemId) }}
                                >
                                    <img src="images/wishlist-selected.svg" />
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
        itemId: PropTypes.string.isRequired,
        'title-image': PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    })),
    renderModule: PropTypes.bool.isRequired,
    toggleWishlistItem: PropTypes.func.isRequired
};

export default Items;