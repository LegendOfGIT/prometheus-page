import React from 'react';
import PropTypes from 'prop-types';
import ItemLinkBarContainer from '../../../containers/stages/items/ItemLinkBarContainer';
import ItemWishlistIconContainer from '../../../containers/stages/items/ItemWishlistIconContainer';

class Items extends React.Component {
    render() {
        if (this.props.showLoadingAnimation) {
            return <div className="loadingAnimationContainer">
                <div className="loadingAnimation"/>
            </div>;
        }

        if (!this.props.renderModule || !this.props.informationItems) {
            return null;
        }

        return (
            <div className={'informationItemsContainer'}>
                {
                    this.props.informationItems.map(informationItem => {
                        const { _id, itemId, title } = informationItem;
                        const titleImage = informationItem['title-image'] || '';

                        if (!titleImage) {
                            return null;
                        }

                        return (
                            <>
                                <div className={'informationItem'} key={`informationItem_${_id}`}>
                                    <div className={'informationItem__imageContainer'} onClick={() => { this.props.setSelectedItem(itemId); }}>
                                        <img
                                            className={'informationItem__image'}
                                            alt={title}
                                            src={titleImage}
                                            loading={'lazy'}
                                        />
                                    </div>
                                    <div className={'informationItem__contentContainer'}>
                                        <ItemWishlistIconContainer itemId={itemId}/>
                                        <div className={'item__title'}>{title}</div>
                                        <ItemLinkBarContainer itemId={itemId}/>
                                    </div>
                                </div>
                            </>
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
    renderModule: PropTypes.bool.isRequired,
    setSelectedItem: PropTypes.func.isRequired,
    showLoadingAnimation: PropTypes.bool.isRequired
};

export default Items;