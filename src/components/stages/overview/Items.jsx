import React from 'react';
import PropTypes from 'prop-types';

class Items extends React.Component {
    render() {
        if (!this.props.renderModule || !this.props.informationItems) {
            return null;
        }

        return (
            <div className={'informationItemsContainer'}>
                {
                    this.props.informationItems.map(informationItem => {
                        const { _id, isOnWishlist, itemId, imageLink, links, title } = informationItem;
                        const titleImage = informationItem['title-image'] || '';

                        if (!titleImage) {
                            return null;
                        }

                        return (
                            <div className={'informationItem'} key={`informationItem_${_id}`}>
                                <div className={'informationItem__imageContainer'}>
                                    <a href={imageLink} target={_id}>
                                        <img
                                            className={'informationItem__image'}
                                            alt={title}
                                            src={titleImage}
                                            loading={'lazy'}
                                        />

                                        <a
                                            className={`informationItem__wishlist ${isOnWishlist ? 'informationItem__wishlist--active' : ''}`}
                                            onClick={ () => { this.props.toggleWishlistItem(itemId) }}
                                        >
                                            <img src={ isOnWishlist ? 'images/wishlist-selected.svg' : 'images/wishlist-neutral.svg'}/>
                                        </a>
                                    </a>
                                </div>
                                <div className={'informationItem__linkBar'}>
                                    {
                                        links.map((link) => {
                                            if (!link.linkImage) {
                                                return null;
                                            }

                                            return <a href={link.link} target={_id}>
                                                <img className={'informationItem__providerLinkImage'} src={`images/${link.linkImage}`}/>
                                            </a>
                                        })
                                    }

                                </div>
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
        imageLink: PropTypes.string.isRequired,
        links: PropTypes.arrayOf(PropTypes.shape({
            link: PropTypes.string.isRequired,
            linkImage: PropTypes.string
        })),
        'title-image': PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    })),
    renderModule: PropTypes.bool.isRequired,
    toggleWishlistItem: PropTypes.func.isRequired
};

export default Items;