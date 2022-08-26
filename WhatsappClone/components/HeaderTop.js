import React from 'react';
import { Text, View, StyleSheet, alert } from 'react-native';

const HeaderTop = () => {

    function foo() {
        var alert = myCustomLib.customAlert;
        alert();
    }
    return (
        <View style={styles.container}>
            <View style={styles.top_container}>
                <Text style={styles.text_color} onPress={() => customAlert("Edit")}>
                    Edit
                </Text>

                <Text style={styles.text_color} onPress={() => alert("New Chat")}>
                    New Chat
                </Text>
            </View>
        </View>
    );
};

export default HeaderTop;

const styles = StyleSheet.create({
    top_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },

    text_color: {
        color: 'rgb(55, 110, 255)',
        fontWeight: '450',
    },
    container: {
        backgroundColor: 'white',
    },
});
