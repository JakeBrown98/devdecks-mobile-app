import React from 'react';
import { View, StyleSheet } from 'react-native';
import { 
    Screen, Typography, Button, DeckThumbnail,
    Stat
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
    };

    render() {
        return (
            <Screen title="Style Guide" {...this.props}>
                <Section title="Example of Colours">
                    <View style={styles.paletteRow}>
                        <View style={{ height: SQUARE, width: SQUARE, backgroundColor: theme.palette.black  }} />
                        <View style={{ height: SQUARE, width: SQUARE, backgroundColor: theme.palette.grey  }} />
                        <View style={{ height: SQUARE, width: SQUARE, backgroundColor: theme.palette.dark  }} />
                        <View style={{ height: SQUARE, width: SQUARE, backgroundColor: theme.palette.light  }} />
                        <View style={{ height: SQUARE, width: SQUARE, backgroundColor: theme.palette.yellow  }} />
                    </View>
                </Section>
                <Section title="Example of Typography">
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
                <Section title="Example of Button">
                    <Button label="Hint" />
                </Section>
                <Section title="Example of Answer">
                    <Typography variant="title1">
                        Paragraph
                    </Typography>
                    <Typography>
                        In JavaScript if you try to use a variable that doesn't exist and has not been
                        declared, then JavaScript will throw an error var name is not defined and
                        the script will stop executing thereafter. But If you use typeof 
                        undeclared_variable then it will return undefined.
                    </Typography>
                </Section>
                <Section title="Example of Deck Thumbnails">
                    <DeckThumbnail
                        label="JS"
                        name="JavaScript"
                        backgroundColour="#F7DF1E"
                        stackCount={32}
                        amountCompleted={2}
                    />
                    <DeckThumbnail
                        label="PHP"
                        name="PHP"
                        backgroundColour="#8892BE"
                        stackCount={12}
                        whiteText
                    />
                </Section>
                <Section title="Example of Deck Thumbnails">
                    <Stat
                        label="Most Used Stack"
                        result="Creational Design Patterns"
                    />
                    <Stat
                        label="Total Stacks Complete"
                        result="4/52"
                    />
                </Section>
            </Screen>
        );
    }
}

export default StyleGuide;
