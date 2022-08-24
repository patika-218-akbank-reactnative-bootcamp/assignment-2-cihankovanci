import React from "react";
import { Text, View, Button } from 'react-native';

function MessagesScreen({ route, navigation }) {
    const { itemId, otherParam } = route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Text>itemId: {JSON.stringify(itemId)}</Text>
            <Text>otherParam: {JSON.stringify(otherParam)}</Text>
            <Button
                title="Go to Details... again"
                onPress={() =>
                    navigation.push('Messages', {
                        itemId: Math.floor(Math.random() * 100),
                    })
                }
            />
            <Button title="Go to Home" onPress={() => navigation.navigate('Chats')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
};

export default MessagesScreen;