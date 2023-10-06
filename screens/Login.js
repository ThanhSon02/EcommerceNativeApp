import { Button, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
  const navigation = useNavigation()
  const handleLogin = () => {
    navigation.replace("Main")
  }
  const registerNavigate = () => {
    navigation.replace("Register")
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>E-mail</Text>
        <TextInput style={styles.input}/>
      </View>
      <View style={[styles.inputContainer, {marginTop: 20}]}>
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput style={styles.input} textContentType='password'/>
      </View>
      <View style={styles.btn}>
        <Button onPress={handleLogin} title='Login' color={"#2B8761"}/>
      </View>
      <View style={{marginTop: 12}}>
        <TouchableOpacity onPress={registerNavigate}>
          <Text style={{color: "#3C9AFB", fontWeight: "600"}}>Or Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  }, 
  title: {
    fontSize: 30,
    fontWeight: "bold"
  },
  inputContainer: {
    justifyContent: "flex-start",
    width: "100%"
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600'
  },
  input: {
    marginTop: 6,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    padding: 10,
    width: "100%",
    borderRadius: 8
  },
  btn: {
    width: "100%",
    marginTop: 24,
    borderRadius: 20,
    padding: 12,
  }
})