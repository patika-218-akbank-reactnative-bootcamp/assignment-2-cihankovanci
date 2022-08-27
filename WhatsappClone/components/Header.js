import React from 'react';
import { Text, View, StyleSheet, alert } from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>Chats</Text>
                <View style={styles.line} />
            </View>

            <View style={styles.bottom_container}>
                <Text style={styles.text_color} onPress={() => alert('Broadcast List')}>
                    Broadcast Lists
                </Text>
                <Text style={styles.text_color} onPress={() => alert('New Group')}>
                    New Group
                </Text>
            </View>
            <View style={styles.line} />
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {},
    bottom_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    top_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    text: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'black',
        padding: 10,
    },
    text_color: {
        color: 'rgb(55, 110, 255)',
        fontWeight: '450',
    },
    line: {
        borderBottomColor: 'gray',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});
