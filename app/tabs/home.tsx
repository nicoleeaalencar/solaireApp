import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

export default function HomeScreen() {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);

  // Função de saudação dinâmica
  const hora = today.getHours();
  const saudacao =
    hora < 12 ? "Bom dia" : hora < 18 ? "Boa tarde" : "Boa noite";

  // Datas
  const formatDate = (date) => {
    return date.toLocaleDateString("pt-BR", { day: "numeric", month: "short" });
  };

  const days = [];
  for (let i = -1; i <= 1; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    days.push(d);
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.curvedBackground} />

        {/* head perfil*/}
        <View style={styles.avatarRow}>
          <Image
            source={require("../../assets/perfil-avatar.png")}
            style={styles.avatarImagem}
          />
          <Text style={styles.saudacao}>{saudacao} </Text>
        </View>

        {/* Data | título */}
        <View style={styles.headerTextContent}>
          <Text style={styles.date}>
            Hoje,{" "}
            {today.toLocaleDateString("pt-BR", {
              day: "numeric",
              month: "short",
            })}
          </Text>
          <Text style={styles.title}>Suas Atividades</Text>
        </View>

        {/* Dias */}
        <View style={styles.daysRow}>
          {days.map((day, index) => {
            const isSelected = formatDate(day) === formatDate(selectedDate);
            return (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedDate(day)}
                style={[styles.dayItem, isSelected && styles.dayActive]}
              >
                <Text
                  style={[styles.dayText, isSelected && styles.dayTextActive]}
                >
                  {formatDate(day)}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* Total Energia */}
      <View style={styles.energyBox}>
        <Text style={styles.energyValue}>210V</Text>
        <Text style={styles.energyLabel}>Energia Total</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafaff",
  },
  headerContainer: {
    backgroundColor: "#fafafaff",
    paddingBottom: 2,
    alignItems: "center",
    position: "relative",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  curvedBackground: {
    backgroundColor: "#e6f2f9ff",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 310,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    zIndex: 0,
  },
  avatarRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 80,
    zIndex: 1,
    paddingHorizontal: 20,
  },
  avatarImagem: {
    width: 60,
    height: 60,
    marginRight: 12,
  },
  saudacao: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
  },
  headerTextContent: {
    alignItems: "center",
    marginTop: 15,
    marginBottom: 20,
  },
  date: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  daysRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 15,
    width: "100%",
    paddingHorizontal: 10,
  },
  dayItem: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  dayText: {
    fontSize: 14,
    color: "#888",
  },
  dayActive: {
    backgroundColor: "#0a3a5a",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
  },
  dayTextActive: {
    color: "#fff",
    fontWeight: "bold",
  },
  energyBox: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    marginHorizontal: 20,
    marginTop: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  energyValue: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
  },
  energyLabel: {
    fontSize: 16,
    color: "#777",
    marginTop: 8,
  },
});
