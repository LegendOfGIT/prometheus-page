import React from 'react';
import PropTypes from 'prop-types';

const Breadcrumbs = (
    {
        breadCrumbElements,
        isFirstNavigationLevel,
        isLastNavigationLevel,
        navigationAllLabel,
        setCurrentNavigation,
        setNavigationMode
    }
) => {
    return <>
        <div className={'navigationItem'}>
        { isFirstNavigationLevel ? navigationAllLabel : (
            <div className={'navigationItem__link'} onClick={() => { setCurrentNavigation(); }}>{navigationAllLabel}</div>
        )}
        </div>

        {
            breadCrumbElements ? breadCrumbElements.map(({ navigationId, navigationLabel, showAsLink }) => (
                <React.Fragment key={navigationId}>
                    <div className={'navigationItemSeparator'}>|</div>
                    <div className={'navigationItem'}>
                        {showAsLink ? (
                            <div
                                className={'navigationItem__link'}
                                onClick={() => { setCurrentNavigation(navigationId); }}
                            >
                                {navigationLabel}
                            </div>
                        ): navigationLabel}
                    </div>
                </React.Fragment>
            )) : null
        }

        {
            isLastNavigationLevel ? null :
            <React.Fragment>
                <div className={'navigationItemSeparator'}>|</div>
                <div className={'navigationItem'}><div className={'navigationItem__link'} onClick={() => {setNavigationMode('selectNavigationId')}}>...</div></div>
            </React.Fragment>
        }
    </>;
}

Breadcrumbs.propTypes = {
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

export default Breadcrumbs;