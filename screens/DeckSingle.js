import React from 'react';
import { connect } from 'react-redux';
import {
    Screen, StackListItem, FavouriteThumbnail,
    ListSection, StackOptionsPopup
} from '../components';

const LIST_DATA = [
    { id: 1, label: 'Scope & Closures', cardAmount: 10, favourite: true },
    { id: 2, label: 'Regular Expressions', cardAmount: 8, favourite: true },
    { id: 3, label: 'Hoisting & Memoization', cardAmount: 14, favourite: true },
    { id: 4, label: 'Event Loop', cardAmount: 12, favourite: true },
    { id: 5, label: 'Functions', cardAmount: 14 },
    { id: 6, label: 'Grammar &types', cardAmount: 8 },
    { id: 7, label: 'Strict mode', cardAmount: 6 },
];

class DeckSingle extends React.Component {
    state = {
        favouritesList: [],
        stackList: [],
    };

    componentDidMount() {
       const listData = LIST_DATA;

        this.setState({
            stackList: listData,
            favouritesList: listData.filter(item => item.favourite),
        });
    }

    render() {
        const { favouritesList, stackList } = this.state;
        const { optionChoices } = this.props.stack;

        return (
            <Screen
                noPadding
                title="JavaScript"
                {...this.props}
            >
                <StackOptionsPopup selectedStack={optionChoices} />
                <ListSection
                    title="Your Favourites"
                    list={favouritesList}
                    horizontal
                    renderItem={item => (
                        <FavouriteThumbnail
                            label={item.label}
                            cardAmount={item.cardAmount}
                        />
                    )}
                />
                <ListSection
                    title="All Stacks"
                    list={stackList}
                    renderItem={item => (
                        <StackListItem
                            label={item.label}
                            cardAmount={item.cardAmount}
                        />
                    )}
                />
            </Screen>
        );
    }
}

const mapStateToProps = ({ stack }) => {
    return { stack };
};

export default connect(mapStateToProps)(DeckSingle);
