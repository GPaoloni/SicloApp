import { Dimensions, StyleSheet } from 'react-native' 

const { width, height } = Dimensions.get('window')

export const colors = {
  darkPrimaryColor: '#616161',
  lightPrimaryColor: '#F5F5F5',
  primaryColor: '#9E9E9E',
  textColor: '#212121',
  accentColor: '#607D8B',
  primaryTextColor: '#212121',
  secondaryTextColor: '#757575',
  dividerColor: '#BDBDBD',
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width - 80,
    backgroundColor: colors.accentColor,
    borderRadius: 8,
    marginBottom: 20,
    alignSelf: 'center',
  },
  bigButtonText: {
    padding: 10,
    fontSize: 16,
    color: '#fff',
  },
  textInput: {
    backgroundColor: colors.primaryColor,
  }
})