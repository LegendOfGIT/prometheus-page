import React from 'react';
import PropTypes from 'prop-types';
import BreadcrumbsContainer from '../../containers/stages/BreadcrumbsContainer';
import SelectNavigationIdContainer from '../../containers/stages/SelectNavigationIdContainer';

const NavigationContainer = ({ showBreadcrumbs, showSelectNavigationId }) => {
    let navigationContainer =
        showBreadcrumbs ? <BreadcrumbsContainer/> :
        showSelectNavigationId ? <SelectNavigationIdContainer/> :
        undefined;

    if (!navigationContainer) {
        return ;
    }

    return <div className={'navigationContainer'}>{navigationContainer}</div>;
}

NavigationContainer.propTypes = {
    showBreadcrumbs: PropTypes.bool.isRequired,
    showSelectNavigationId: PropTypes.bool.isRequired
};

export default NavigationContainer;