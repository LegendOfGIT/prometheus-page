import React from 'react';
import PropTypes from 'prop-types';

const SelectNavigationId = ({ navigationBackLabel, nextNavigationElements, setCurrentNavigation, setNavigationMode }) => {
    return <>
        <div className={'navigationItem'}>
            <a onClick={() => { setNavigationMode('breadcrumbs'); }}>{navigationBackLabel}</a>
        </div>

        {nextNavigationElements.map(nextNavigationElement => (
            <React.Fragment>
                <div className={'navigationItemSeparator'}>&nbsp;</div>
                <div className={'navigationItem'}>
                    <a onClick={() => { setCurrentNavigation(nextNavigationElement.navigationId); }}>{nextNavigationElement.navigationLabel}</a>
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