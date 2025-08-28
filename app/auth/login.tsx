import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('@/assets/welcome.jpeg')}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
      </ImageBackground>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Bem-vindo de volta!</Text>
        <Text style={styles.cardSubtitle}>Acesse sua conta</Text>

        <View style={styles.inputContainer}>
          <FontAwesome5 name="user" size={16} color="#888" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Nome Completo"
          />
        </View>

        <View style={styles.inputContainer}>
          <FontAwesome5 name="lock" size={16} color="#888" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry={true}
          />
          <Ionicons name="eye" size={20} color="#888" style={styles.iconRight} />
        </View>

        <View style={styles.forgotPasswordContainer}>
          <Text style={styles.rememberText}>
            <Ionicons name="checkbox-outline" size={16} color="green" />  lembre-se de mim
          </Text>
          <TouchableOpacity>
            <Text style={styles.forgotText}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Não tem conta? </Text>
          <TouchableOpacity>
            <Text style={styles.signupLink}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f3f0',
  },
  imageBackground: {
    height: 250,
    width: '100%',
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 10,
    borderRadius: 50,
  },
  card: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -40,
    padding: 30,
  },
  cardTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    color: '#333',
  },
  cardSubtitle: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 50,
    paddingLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  iconRight: {
    marginLeft: 10,
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  rememberText: {
    fontSize: 14,
    color: '#555',
  },
  forgotText: {
    fontSize: 14,
    color: '#0a3a5a',
  },
  loginButton: {
    backgroundColor: '#0a3a5a', 
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupText: {
    color: '#888',
  },
  signupLink: {
    color: '#0a3a5a',
    fontWeight: 'bold',
  },
});