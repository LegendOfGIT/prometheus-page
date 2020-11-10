import React from 'react';
import PropTypes from 'prop-types';

const SelectNavigationId = ({ navigationBackLabel, nextNavigationElements, setCurrentNavigation, setNavigationMode }) => {
    return <>
        <div className={'navigationItem'}>
            <div className={'navigationItem__link'} onClick={() => { setNavigationMode('breadcrumbs'); }}>{navigationBackLabel}</div>
        </div>

        {nextNavigationElements.map(({ navigationId, navigationLabel }) => (
            <React.Fragment key={navigationId}>
                <div className={'navigationItemSeparator'}>&nbsp;</div>
                <div className={'navigationItem'}>
                    <div className={'navigationItem__link'} onClick={() => { setCurrentNavigation(navigationId); }}>{navigationLabel}</div>
                </div>
            </React.Fragment>
        ))}
    </>;
}

SelectNavigationId.propTypes = {
    navigationBackLabel: PropTypes.string.isRequired,
    nextNavigationElements: PropTypes.arrayOf(PropTypes.shape({
        navigationId: PropTypes.string.isRequired,
        navigationLabel: PropTypes.string.isRequired
    })).isRequired,
    setCurrentNavigation: PropTypes.func.isRequired,
    setNavigationMode: PropTypes.func.isRequired
};

export default SelectNavigationId;