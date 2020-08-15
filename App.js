import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { DefaultTheme, Provider as PaperProvider, IconButton } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Text, View,  } from 'react-native'
import { LoginScreen, HomeScreen, RegistrationScreen } from './src/screens'
import { firebase } from './src/firebase/config'
import { decode, encode } from 'base-64'
if (!global.btoa) { global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator();

export default function App() {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged(user => {
      console.log('onAuthChanged : ', user);
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data()
            setLoading(false)
            setUser(userData)
          })
          .catch((error) => {
            setLoading(false)
          });
      } else {
        setLoading(false)
      }
    });
  }, []);

  if (loading) {
    return (
      <></>
    )
  }

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'tomato',
      accent: 'yellow',
    },
  };

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          {user ? (
            <Stack.Screen name="Home" options={{
              headerRight: () => 
                <IconButton icon="logout" onPress={() => setUser(null)}
                title="Info"
                color="#fff"/>
              ,
              title: 'My home',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              
            }}>
              {props => <HomeScreen {...props} extraData={user}  />}
            </Stack.Screen>
          ) : (
              <>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Registration" component={RegistrationScreen} />
              </>
            )}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
