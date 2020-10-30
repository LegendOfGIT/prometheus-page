import React from 'react';
import PropTypes from 'prop-types';
import ItemLinkBarContainer from '../../../containers/stages/items/ItemLinkBarContainer';
import ItemWishlistIconContainer from '../../../containers/stages/items/ItemWishlistIconContainer';

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
        'title-image': PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    })),
    renderModule: PropTypes.bool.isRequired
};

export default Items;