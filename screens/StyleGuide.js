import React from 'react';
import { View, StyleSheet } from 'react-native';
import { 
    Screen, Typography, Button, DeckThumbnail,
    Stat, ThumbnailRow, FavouriteThumbnail,
    StackListItem,
} from '../components';
import theme from '../theme';

const SQUARE = theme.unit * 4;

const styles = StyleSheet.create({
    section: {
        marginBottom: theme.unit * 4,
    },
    paletteRow: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
});

const Section = ({ children, title }) => (
    <View style={styles.section}>
        { children }
    </View>
);

class StyleGuide extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Style Guide'
    }

    render() {
        return (
            <Screen title="Style Guide" {...this.props}>
                <Section>
                    <View style={styles.paletteRow}>
                        <View style={{ height: SQUARE, width: SQUARE, backgroundColor: theme.palette.black  }} />
                        <View style={{ height: SQUARE, width: SQUARE, backgroundColor: theme.palette.grey  }} />
                        <View style={{ height: SQUARE, width: SQUARE, backgroundColor: theme.palette.dark  }} />
                        <View style={{ height: SQUARE, width: SQUARE, backgroundColor: theme.palette.light  }} />
                        <View style={{ height: SQUARE, width: SQUARE, backgroundColor: theme.palette.yellow  }} />
                    </View>
                </Section>
                <Section>
                    <Typography variant="title1">
                        Title 1
                    </Typography>
                    <Typography variant="title2">
                        Title 2
                    </Typography>
                    <Typography variant="large">
                        Large
                    </Typography>
                    <Typography variant="regular">
                        Regular
                    </Typography>
                    <Typography variant="small">
                        Small
                    </Typography>
                    <Typography variant="tiny">
                        Tiny!
                    </Typography>
                </Section>
                <Section>
                    <Button label="Hint" />
                </Section>
                <Section>
                    <Typography variant="title1">
                        Stack List Item
                    </Typography>
                    <StackListItem
                        label="Scope & Closures"
                        cardAmount={12}
                    />
                    <StackListItem
                        label="Variables"
                        cardAmount={8}
                    />
                </Section>
                <Section title="Example of Deck Thumbnails">
                    <DeckThumbnail
                        label="JS"
                        name="JavaScript"
                        thumbnailColour="#F7DF1E"
                        stacks={[{}]}
                        icon={{
                            name: 'language-javascript',
                            family: 'MaterialCommunityIcons'
                        }}
                    />
                    <DeckThumbnail
                        label="PHP"
                        name="PHP"
                        thumbnailColour="#8892BE"
                        amountCompleted={3}
                        stacks={[{}, {}, {}]}
                        icon={{
                            name: 'language-php',
                            family: 'MaterialCommunityIcons'
                        }}
                    />
                </Section>
                <Section>
                    <Stat
                        label="Most Used Stack"
                        result="Creational Design Patterns"
                    />
                    <Stat
                        label="Total Stacks Complete"
                        result="4/52"
                    />
                </Section>
                <Section>
                    <ThumbnailRow>
                        <FavouriteThumbnail
                            label="Creational Design Patters"
                            cardAmount={12}
                        />
                        <FavouriteThumbnail
                            label="Scope and Closures"
                            cardAmount={9}
                            favourite
                        />
                    </ThumbnailRow>
                    <ThumbnailRow>
                        <FavouriteThumbnail
                            label="Structural Design Patters"
                            cardAmount={7}
                        />
                        <FavouriteThumbnail
                            label="Binding"
                            cardAmount={14}
                        />
                    </ThumbnailRow>
                    <ThumbnailRow>
                        <FavouriteThumbnail
                            label="Behavorial Design Patters"
                            cardAmount={17}
                        />
                        <FavouriteThumbnail
                            label="Variables"
                            cardAmount={4}
                        />
                    </ThumbnailRow>
                </Section>
            </Screen>
        );
    }
}

export default StyleGuide;
