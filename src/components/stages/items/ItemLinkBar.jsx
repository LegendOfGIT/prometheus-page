import React from 'react';
import PropTypes from 'prop-types';

const ItemLinkBar = ({ links }) => {
    if (links.length === 0) {
        return null;
    }

    return (
        <div className={'item__linkBar'}>
            {
                links.map(({ itemId, link, linkImage, priceInitial, priceReduced, providerName }) => {
                    if (!linkImage) {
                        return null;
                    }

                    return <div className={'item__providerLinkContainer'}>
                        <a href={link} target={itemId}>
                            <img
                                alt={providerName}
                                className={'item__providerLinkImage'}
                                src={`images/${linkImage}`}
                            />
                        </a>
                        { priceInitial ? <div className={`item__priceInitial item__priceInitial${priceReduced ? '--reduced' : ''}`}>{priceInitial} EUR</div> : null }
                        { priceReduced ? <div className={'item__priceReduced'}>{priceReduced} EUR</div> : null }
                    </div>
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
        priceInitial: PropTypes.number,
        priceReduced: PropTypes.number,
        providerName: PropTypes.string.isRequired
    })),
};

export default ItemLinkBar;