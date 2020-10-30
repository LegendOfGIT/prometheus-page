import React from 'react';
import PropTypes from 'prop-types';
import ItemLinkBarContainer from '../../../containers/stages/items/ItemLinkBarContainer';
import ItemWishlistIconContainer from '../../../containers/stages/items/ItemWishlistIconContainer';

class Items extends React.Component {
    render() {
        if (!this.props.renderModule || !this.props.informationItems) {
            return null;
        }

        return (
            <div className={'informationItemsContainer'}>
                {
                    this.props.informationItems.map(informationItem => {
                        const { _id, itemId, imageLink, title } = informationItem;
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
                                    </a>
                                </div>

                                <ItemWishlistIconContainer itemId={itemId}/>
                                <ItemLinkBarContainer itemId={itemId}/>
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
        'title-image': PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    })),
    renderModule: PropTypes.bool.isRequired
};

export default Items;