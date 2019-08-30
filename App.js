import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import Router from './src/navigation/router'
import * as Permissions from 'expo-permissions'
import * as Contacts from 'expo-contacts'

import { styles as appStyles } from './src/constants/styles'

//export default function App() {
export default class App extends React.Component {
  state = {
    loading: true,
  }

  async componentDidMount() {
    await this.getPermissionsAsync()
    const contactsObj = await Contacts.getContactsAsync({
      fields: [Contacts.PHONE_NUMBERS]
    })
    
    contacts = contactsObj.data.map( contact => {
      if (contact.name && contact.phoneNumbers) {
        return (contact.name + ': ' + contact.phoneNumbers[0].number)
      } else {
        return ''
      }
    })

    console.log(contacts)
  }

  render() {
    return (
      this.state.loading ? (
        <View style={appStyles.container}>
          <ActivityIndicator />
        </View>
      ) : (
        <Router />
      )
    )
  }

  async getPermissionsAsync() {
    const { status } = await Permissions.askAsync(Permissions.CONTACTS);
    if (status !== 'granted') {
      alert('No podremos mostrar tus contactos. Ingresa manualmente el destinatario')
    }
    this.setState({ loading: false })
  }
}

