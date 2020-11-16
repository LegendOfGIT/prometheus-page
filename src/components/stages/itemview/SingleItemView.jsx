import React from 'react';
import PropTypes from 'prop-types';

const SingleItemView = ({ renderModule, selectedItem }) => {
    if (!renderModule || !selectedItem) {
        return null;
    }

    const { title } = selectedItem;

    return (
        <div>{ title }</div>
    );
}

SingleItemView.propTypes = {
    selectedItem: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        itemId: PropTypes.string.isRequired,
        imageLink: PropTypes.string.isRequired,
        'title-image': PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    }),
    renderModule: PropTypes.bool.isRequired
};

export default SingleItemView;