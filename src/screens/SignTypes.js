import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'

import { colors, styles as appStyles } from '../constants/styles'


const SignTypes = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.lightPrimaryColor }}>
      <View style={appStyles.container}>
        <Text>Cartel 1</Text>
        <Text>Cartel 2</Text>
        <Text>Cartel 3</Text>
        <Text>Cartel 4</Text>
      </View>
      <TouchableOpacity style={appStyles.bigButton}
        onPress={ () => navigation.navigate('PriceBoardScreen') }
      >
        <Text style={appStyles.bigButtonText}>Confirmar cartel</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignTypes
