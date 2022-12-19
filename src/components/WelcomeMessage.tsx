import { StyleProp, View } from 'react-native'
import { Text } from 'react-native-paper'

const styles: StyleProp<any> = {
  title: {
    fontSize: 30,
    marginBottom: 20
  }
}

export default function WelcomeMessage () {
  return (
        <View>
           <Text style={styles.title}>
               Welcome to React Native Paper!
           </Text>
        </View>
  )
}
