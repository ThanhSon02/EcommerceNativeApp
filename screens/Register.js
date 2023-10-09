import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const Register = () => {
  const [formRegister, setFormRegister] = useState({})

  // const validateEmail = (text) => {
  //   let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
  //   if (reg.test(text) === false) {
  //     console.log("Email is Not Correct");
  //   }
  // }
  
  const navigation = useNavigation()
  const navigationLogin = () => {
    navigation.replace("Login")
  }

  const handleRegister = () => {
    console.log(formRegister);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>

      <View style={{display: "flex",flexDirection: "row", justifyContent: "space-between", gap: 14, marginTop: 20}}>
        <View style={{flex: 0.5}}>
          <Text style={styles.inputLabel}>First Name</Text>
          <TextInput onChange={({nativeEvent: {text}}) => setFormRegister((prev) => ({...prev, firstName: text}))} style={styles.input} />
        </View>

        <View style={{flex: 0.5}}>
          <Text style={styles.inputLabel}>Last Name</Text>
          <TextInput onChange={({nativeEvent: {text}}) => setFormRegister((prev) => ({...prev, lastName: text}))} style={styles.input}/>
        </View>
      </View>

      <View style={[styles.inputContainer, { marginTop: 20 }]}>
        <Text style={styles.inputLabel}>E-mail</Text>
        <TextInput onChange={({nativeEvent: {text}}) => setFormRegister((prev) => ({...prev, email: text}))} style={styles.input} />
      </View>

      <View style={[styles.inputContainer, { marginTop: 20 }]}>
        <Text style={styles.inputLabel}>Phone</Text>
        <TextInput onChange={({nativeEvent: {text}}) => setFormRegister((prev) => ({...prev, phone: text}))} style={styles.input} />
      </View>

      <View style={[styles.inputContainer, { marginTop: 20 }]}>
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput  onChange={({nativeEvent: {text}}) => setFormRegister((prev) => ({...prev, password: text}))} style={styles.input} secureTextEntry={true} />
      </View>

      <View style={[styles.inputContainer, { marginTop: 20 }]}>
        <Text style={styles.inputLabel}>Confirm Password</Text>
        <TextInput style={styles.input} secureTextEntry={true}/>
      </View>

      <View style={styles.btn}>
        <Button onPress={handleRegister} title='Register' color={"#2B8761"} />
      </View>
      <View style={{ marginTop: 12 }}>
        <TouchableOpacity onPress={navigationLogin}>
          <Text style={{ color: "#3C9AFB", fontWeight: "600" }}>Or Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Register;

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