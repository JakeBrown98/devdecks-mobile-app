import React from 'react';
import { PropTypes } from 'prop-types';
import { RefreshControl } from 'react-native';
import theme from '../theme';

const propTypes = {
    refreshing: PropTypes.bool.isRequired,
    onRefresh: PropTypes.func.isRequired,
};

const defaultProps = {
    refreshing: false,
    onRefresh: () => {},
};

const RefreshSpinner = ({ ...props }) => {
    return (
        <RefreshControl
            colors={[theme.palette.primary]}
            {...props}
        />
    );
};

RefreshSpinner.defaultProps = defaultProps;
RefreshSpinner.propTypes = propTypes;

export default RefreshSpinner;
