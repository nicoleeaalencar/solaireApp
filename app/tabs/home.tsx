import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.welcome}>Olá, Gustavo</Text>
        <Text style={styles.subtitle}>Resumo do seu sistema</Text>
      </View>

      {/* Cards principais */}
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Ionicons name="sunny" size={28} color="#FFA500" />
          <Text style={styles.cardValue}>5.2 kWh</Text>
          <Text style={styles.cardLabel}>Gerado Hoje</Text>
        </View>

        <View style={styles.card}>
          <FontAwesome5 name="money-bill-wave" size={26} color="#2ecc71" />
          <Text style={styles.cardValue}>R$ 24,80</Text>
          <Text style={styles.cardLabel}>Economia</Text>
        </View>

        <View style={styles.card}>
          <MaterialCommunityIcons name="tree-outline" size={28} color="#27ae60" />
          <Text style={styles.cardValue}>2.3 kg</Text>
          <Text style={styles.cardLabel}>CO₂ Evitado</Text>
        </View>
      </View>

      {/* Status do sistema */}
      <View style={styles.statusCard}>
        <Ionicons name="checkmark-circle" size={24} color="green" />
        <Text style={styles.statusText}>Sistema Online - Produzindo energia ☀️</Text>
      </View>

      {/* Acesso rápido */}
      <Text style={styles.sectionTitle}>Acesso Rápido</Text>
      <View style={styles.quickActions}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="analytics" size={24} color="#0a3a5a" />
          <Text style={styles.actionText}>Histórico</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="document-text" size={24} color="#0a3a5a" />
          <Text style={styles.actionText}>Relatórios</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="settings" size={24} color="#0a3a5a" />
          <Text style={styles.actionText}>Configurações</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6f3f0",
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  welcome: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0a3a5a",
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 5,
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardValue: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
    color: "#333",
  },
  cardLabel: {
    fontSize: 12,
    color: "#888",
  },
  statusCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#dff6dd",
    padding: 15,
    borderRadius: 12,
    marginBottom: 25,
  },
  statusText: {
    marginLeft: 10,
    fontSize: 14,
    color: "#2e7d32",
    fontWeight: "500",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#0a3a5a",
  },
  quickActions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 40,
  },
  actionButton: {
    alignItems: "center",
  },
  actionText: {
    marginTop: 5,
    fontSize: 14,
    color: "#0a3a5a",
    fontWeight: "500",
  },
});
