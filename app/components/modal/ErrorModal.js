/**
 * create at 01/18/18
 */
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ModalComponent from './BaseModal' 

const ErrorModal = ()=>(
	<ModalComponent hideClose={false}>
    <View style={styles.container}>
      <Text>Error Modal</Text>
      <Text>Slides up from the bottom, and covers the entire screen with no transparency</Text>
      <Button title="Close" onPress={Actions.pop} />
    </View>
  </ModalComponent>
)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center', 
		alignItems: 'center', 
		marginHorizontal: 20
	}
});

export default ErrorModal