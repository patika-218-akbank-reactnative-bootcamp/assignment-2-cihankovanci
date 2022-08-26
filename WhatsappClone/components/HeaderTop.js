import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const HeaderTop = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top_container}>
        <Text style={styles.text_color} onPress={() => alert('Edit')}>
          Edit
        </Text>

        <Text style={styles.text_color} onPress={() => alert('New Chat')}>
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
