import React from 'react'
import { Alert, TouchableOpacity, View, Text } from 'react-native'

import { colors, styles as appStyles } from '../constants/styles'


const PriceBoard = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.lightPrimaryColor }}>
      <View style={appStyles.container}>
        <Text>Trigo:</Text>
        <Text>Maíz:</Text>
        <Text>Soja:</Text>
        <Text>Fecha:</Text>
      </View>
      <TouchableOpacity style={appStyles.bigButton}
        onPress={ () => Alert.alert(
          'SMS enviado',
          'Para modificar, envíe un nuevo mensaje. Datos ingresados:',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            { text: 'OK', onPress: () => navigation.navigate('ContactsScreen') },
          ],
          { cancelable: false })}
      >
        <Text style={appStyles.bigButtonText}>Confirmar precios y enviar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default PriceBoard
