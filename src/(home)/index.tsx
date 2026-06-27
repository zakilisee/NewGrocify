import { Text, View } from 'react-native'
import { useUser } from '@clerk/expo'

export default function HomeScreen() {
  const { user } = useUser()

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Welcome!</Text>
      <Text>{user?.fullName}</Text>
    </View>
  )
}