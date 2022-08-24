import React from "react";
import { Text, View, Button } from 'react-native';

function ChatsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>ChatsScreen Screen</Text>
            <Button
                title="Go to MessagesSceen"
                onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    navigation.navigate('Messages', {
                        itemId: 86,
                        otherParam: 'anything you want here',
                    });
                }}
            />
            <Button
                title="Go to MessagesSceen item ıd 87"
                onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    navigation.navigate('Messages', {
                        itemId: 87,
                        otherParam: 'anything you want here deneme',
                    });
                }}
            />
        </View>
    );
};

export default ChatsScreen;