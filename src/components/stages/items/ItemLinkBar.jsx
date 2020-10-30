import React from 'react';
import PropTypes from 'prop-types';

const ItemLinkBar = ({ links }) => {
    if (links.length === 0) {
        return null;
    }

    return (
        <div className={'item__linkBar'}>
            {
                links.map((link) => {
                    if (!link.linkImage) {
                        return null;
                    }

                    return <a href={link.link} target={link.itemId}>
                        <img
                            className={'item__providerLinkImage'}
                            src={`images/${link.linkImage}`}
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
        linkImage: PropTypes.string
    })),
};

export default ItemLinkBar;