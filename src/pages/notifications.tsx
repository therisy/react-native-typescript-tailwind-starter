import { StyleProp, View } from 'react-native'
import { Text } from 'react-native-paper'
import WelcomeMessage from '../components/WelcomeMessage'

const styles: StyleProp<any> = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  }
}

export default function Notifications () {
  return (
        <View style={styles.container}>
            <WelcomeMessage />

            <Text style={{
              fontSize: 26,
              textAlign: 'center',
              fontWeight: 'bold'
            }}>Notifications Page</Text>
        </View>
  )
}
