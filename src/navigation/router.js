import React from 'react'
import { createStackNavigator, 
         createAppContainer} from 'react-navigation'

import Contacts from '../screens/Contacts'
import SignTypes from '../screens/SignTypes'
import PriceBoard from '../screens/PriceBoard'

import { colors } from '../constants/styles'

const AppStack = createStackNavigator(
  {
    ContactsScreen: {
      screen: Contacts,
      navigationOptions: () => ({
        title: 'Seleccione Destinatarios',
      })
    },
    SignTypesScreen: {
      screen: SignTypes,
      navigationOptions: () => ({
        title: 'Seleccione Cartel',
      })
    },
    PriceBoardScreen: {
      screen: PriceBoard,
      navigationOptions: () => ({
        title: 'Ingrese Precios',
      })
    }
  },
  {
    initialRouteName: 'ContactsScreen',
    /*The header config */
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.accentColor,
        //elevation: 0,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
)

const Router = createAppContainer(AppStack)
export default Router