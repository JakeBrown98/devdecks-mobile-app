import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { StyleSheet, View, FlatList } from 'react-native';
import Typography from './Typography';
import theme from '../theme';

const propTypes = {
    list: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    horizontal: PropTypes.bool,
};

const styles = StyleSheet.create({
    sectionWrapper: {
        marginBottom: theme.unit * 5,
    },
    sectionTitle: {
        marginLeft: theme.unit * 3,
        marginBottom: theme.unit * 3,
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

const ListSection = ({ list, title, renderItem, horizontal, ...props }) => {
    if (_.isEmpty(list)) return null;

    return (
        <View style={styles.sectionWrapper}>
            <Typography style={styles.sectionTitle} variant="large">
                { title }
            </Typography>
            <FlatList
                data={list}
                keyExtractor={item => item.id.toString()}
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

ListSection.propTypes = propTypes;

export default ListSection;
