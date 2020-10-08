import React from 'react';
import PropTypes from 'prop-types';

const NavigationContainer = (
    {
        breadCrumbElements,
        isFirstNavigationLevel,
        isLastNavigationLevel,
        navigationAllLabel,
        setCurrentNavigation,
        setNavigationMode
    }
) => {
    return <div className={'navigationContainer'}>
        <div className={'navigationItem'}>
        { isFirstNavigationLevel ? navigationAllLabel : (
            <a onClick={() => { setCurrentNavigation(); }}>{navigationAllLabel}</a>
        )}
        </div>

        {
            breadCrumbElements ? breadCrumbElements.map((breadCrumbElement, index) => (
                <React.Fragment>
                    <div className={'navigationItemSeparator'}>>></div>
                    <div className={'navigationItem'}>
                        {index === breadCrumbElements.length-1 ? breadCrumbElement.navigationLabel : (
                            <a onClick={() => { setCurrentNavigation(breadCrumbElement.navigationId); }}>{breadCrumbElement.navigationLabel}</a>
                        )}
                    </div>
                </React.Fragment>
            )) : null
        }

        {
            isLastNavigationLevel ? null :
            <React.Fragment>
                <div className={'navigationItemSeparator'}>>></div>
                <div className={'navigationItem'}><a onClick={() => {setNavigationMode('selectNavigationId')}}>...</a></div>
            </React.Fragment>
        }
    </div>;
}

NavigationContainer.propTypes = {
    breadCrumbElements: PropTypes.arrayOf(PropTypes.shape({
        navigationId: PropTypes.string.isRequired,
        navigationLabel: PropTypes.string.isRequired
    })),
    isFirstNavigationLevel: PropTypes.bool.isRequired,
    isLastNavigationLevel: PropTypes.bool.isRequired,
    navigationAllLabel: PropTypes.string.isRequired,
    setCurrentNavigation: PropTypes.func.isRequired,
    setNavigationMode: PropTypes.func.isRequired
};

export default NavigationContainer;