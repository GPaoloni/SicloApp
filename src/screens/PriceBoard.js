import React from 'react'
import { Alert, TouchableOpacity, View, Text } from 'react-native'
import * as SMS from 'expo-sms'

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
        onPress={ () => {
          sendSMSAsync(
            ['3415701434'], 
            'My sample HelloWorld message'
          )
          Alert.alert(
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
            { cancelable: false })
          }
        }
      >
        <Text style={appStyles.bigButtonText}>Confirmar precios y enviar</Text>
      </TouchableOpacity>
    </View>
  )
}

sendSMSAsync = async ( destinataries, message) => {
  const isAvailable = await SMS.isAvailableAsync()
  if (isAvailable) {
    const { result } = await SMS.sendSMSAsync(
      destinataries,
      message
    )
    console.log('ok ' + message)
  } else {
    Alert.alert(
      'No podemos enviar el SMS en este momento.',
      'Compruebe que su celular tiene señal e intente nuevamente.',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => {} },
      ],
      { cancelable: false })
  }
}

export default PriceBoard
