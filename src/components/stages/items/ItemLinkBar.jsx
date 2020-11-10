import React from 'react';
import PropTypes from 'prop-types';

const ItemLinkBar = ({ links }) => {
    if (links.length === 0) {
        return null;
    }

    return (
        <div className={'item__linkBar'}>
            {
                links.map(({ itemId, link, linkImage, providerName }) => {
                    if (!linkImage) {
                        return null;
                    }

                    return <a href={link} target={itemId}>
                        <img
                            alt={providerName}
                            className={'item__providerLinkImage'}
                            src={`images/${linkImage}`}
                        />
                    </a>
                })
            }
        </div>
    );
}

ItemLinkBar.defaultProps = {
    links: []
};

ItemLinkBar.propTypes = {
    links: PropTypes.arrayOf(PropTypes.shape({
        itemId: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        linkImage: PropTypes.string,
        providerName: PropTypes.string.isRequired
    })),
};

export default ItemLinkBar;