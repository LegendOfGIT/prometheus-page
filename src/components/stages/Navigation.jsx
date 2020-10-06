import React from 'react';
import PropTypes from 'prop-types';

const NavigationContainer = ({ isLastNavigationLevel, navigationAllLabel }) => {
    return <div className={'navigationContainer'}>
        <div className={'navigationItem'}>{navigationAllLabel}</div>
        { isLastNavigationLevel ? null : <React.Fragment><div className={'navigationItemSeparator'}>>></div><div><a>...</a></div></React.Fragment>}
    </div>;
}

NavigationContainer.propTypes = {
    isLastNavigationLevel: PropTypes.bool.isRequired,
    navigationAllLabel: PropTypes.string.isRequired
};

export default NavigationContainer;