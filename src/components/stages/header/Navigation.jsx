import React from 'react';
import PropTypes from 'prop-types';
import BreadcrumbsContainer from '../../../containers/stages/header/BreadcrumbsContainer';
import SelectNavigationIdContainer from '../../../containers/stages/header/SelectNavigationIdContainer';

const Navigation = ({ showBreadcrumbs, showSelectNavigationId }) => {
    let navigationContainer =
        showBreadcrumbs ? <BreadcrumbsContainer/> :
        showSelectNavigationId ? <SelectNavigationIdContainer/> :
        undefined;

    if (!navigationContainer) {
        return ;
    }

    return <div className={'navigationContainer'}>{navigationContainer}</div>;
}

Navigation.propTypes = {
    showBreadcrumbs: PropTypes.bool.isRequired,
    showSelectNavigationId: PropTypes.bool.isRequired
};

export default Navigation;