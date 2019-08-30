import React from 'react'
import { TextInput, TouchableOpacity, View, Text } from 'react-native'

import { colors, styles as appStyles } from '../constants/styles'


const ContactsScreen = ({ contacts, navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.lightPrimaryColor }}>
      <View style={appStyles.container}>
        <Text>Contacto 1</Text>
        <Text>Contacto 2</Text>
        <Text>Contacto 3</Text>
        <Text>Contacto 4</Text>
        <TextInput style={appStyles.textInput}
          placeholder='Ingrese número'
          keyboardType='numeric'
        />
      </View>
      <TouchableOpacity style={appStyles.bigButton}
        onPress={ () => navigation.navigate('SignTypesScreen') }
      >
        <Text style={appStyles.bigButtonText}>Confirmar destinatario</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ContactsScreen
