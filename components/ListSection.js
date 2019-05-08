import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { View, FlatList, StyleSheet } from 'react-native';
import Typography from './Typography';
import theme from '../theme';


const propTypes = {
    list: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    renderItem: PropTypes.any,
    renderOption: PropTypes.any,
    horizontal: PropTypes.bool,
};

const defaultProps = {
    list: [],
    title: '',
    renderItem: null,
    renderOption: null,
    horizontal: false,
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

const ListSection = ({ list, title, renderOption, renderItem, horizontal, ...props }) => {
    if (_.isEmpty(list)) return null;

    return (
        <View style={styles.sectionWrapper}>
            <View style={styles.sectionTitleRow}>
                <Typography variant="large">
                    { title }
                </Typography>
                { renderOption && renderOption() }
            </View>
            <FlatList
                data={list}
                keyExtractor={item => item.name}
                renderItem={({ item }) => renderItem(item)}
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
        </View>
    );
};

ListSection.defaultProps = defaultProps;
ListSection.propTypes = propTypes;

export default ListSection;
