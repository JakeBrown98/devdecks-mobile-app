import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Animated, View, FlatList, StyleSheet } from 'react-native';
import theme from '../theme';

import Typography from './Typography';


const propTypes = {
    list: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    renderItem: PropTypes.any,
    renderOption: PropTypes.any,
    horizontal: PropTypes.bool,
    wrapperStyle: PropTypes.object,
};

const defaultProps = {
    list: [],
    title: '',
    renderItem: null,
    renderOption: null,
    horizontal: false,
    wrapperStyle: {},
};

const styles = StyleSheet.create({
    sectionWrapper: {
        marginBottom: theme.unit * 5,
    },
    sectionTitleRow: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: theme.unit * 3,
        marginTop: 0,
    },
    horizontalSeparator: {
        height: 1,
        width: theme.unit * 2,
    },
    contentContainerStyle: {
        paddingLeft: theme.unit * 3, 
        paddingRight: theme.unit * 3,
    },
});

const ListSection = ({ list, title, renderOption, renderItem, horizontal, wrapperStyle, ...props }) => {
    if (_.isEmpty(list)) return null;

    return (
        <Animated.View style={[styles.sectionWrapper, wrapperStyle]}>
            <View style={styles.sectionTitleRow}>
                <Typography variant="large">
                    { title }
                </Typography>
                { renderOption && renderOption() }
            </View>
            <FlatList
                data={list}
                keyExtractor={item => item.name}
                renderItem={({ item, index }) => renderItem(item, index)}
                horizontal={horizontal}
                showsHorizontalScrollIndicator={( horizontal ? false : null )}
                contentContainerStyle={styles.contentContainerStyle}
                ItemSeparatorComponent={() => (
                    horizontal
                    ? <View style={styles.horizontalSeparator} />
                    : null
                )}
                {...props}
            />
        </Animated.View>
    );
};

ListSection.propTypes = propTypes;
ListSection.defaultProps = defaultProps;

export default ListSection;
