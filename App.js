import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  unstable_enableLogBox,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.background}>
          <View style={styles.container}>
            <View>
              <Image
                source={require("./assets/logo._V1_.png")}
                style={{ height: 40, width: 100 }}
                resizeMode="contain"
              />
            </View>
          </View>
          <View style={styles.wrapperColor}>
            <View style={styles.wrapper}>
              <View>
                <Text style={styles.titleText}>Interstellar</Text>
                <Text style={styles.subTitles}>
                  2014 PG-13 2h49mn Adventure, Drama, Sci-fi
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    source={require("./assets/interstellar.jpg")}
                    style={{ height: 200, width: 100 }}
                    resizeMode="contain"
                  />
                  <View>
                    <View>
                      <Text style={styles.description}>
                        A team of explorers travel through a wormhole in space
                        in an attempt to ensure humanity's survival.
                      </Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => {
                        alert("Pressed !");
                      }}
                      style={styles.button}
                    >
                      <Text style={styles.buttonText}>+ ADD TO WATCHLIST</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <View>
                    <FontAwesome5
                      style={{
                        paddingLeft: 15,
                        paddingRight: 15,
                        paddingBottom: 10,
                      }}
                      name="star"
                      size={20}
                      color="gold"
                    />
                    <Text style={styles.note}>8,6/10</Text>
                    <Text style={styles.note}>1,1 M</Text>
                  </View>
                  <View>
                    <FontAwesome5
                      style={{ paddingLeft: 25, paddingBottom: 10 }}
                      name="star"
                      size={20}
                      color="white"
                    />
                    <Text style={styles.note}>Rate this</Text>
                  </View>
                  <View>
                    <View
                      style={{
                        height: 25,
                        width: 25,
                        backgroundColor: "#63C64F",
                        marginLeft: 20,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          color: "white",
                        }}
                      >
                        74
                      </Text>
                    </View>
                    <Text style={{ color: "white", paddingTop: 5 }}>
                      Metascore
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.wrapperColor}>
            <View style={styles.wrapper}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingTop: 10,
                }}
              >
                <Text style={styles.castTitle}>Top Billed Cast</Text>
                <Text style={styles.see}>SEE ALL</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  paddingTop: 10,
                }}
              >
                <ScrollView horizontal={true}>
                  <View>
                    <Image
                      source={require("./assets/actor1.jpg")}
                      style={{ height: 200, width: 100, marginRight: 6 }}
                      resizeMode="contain"
                    />
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                      Matthew Mc...
                    </Text>
                    <Text style={styles.name}>Cooper</Text>
                  </View>
                  <View>
                    <Image
                      source={require("./assets/actor2.jpg")}
                      style={{ height: 200, width: 100, marginRight: 6 }}
                      resizeMode="contain"
                    />
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                      Ellen Burstyn
                    </Text>
                    <Text style={styles.name}>Murph</Text>
                  </View>
                  <View>
                    <Image
                      source={require("./assets/actor3.jpg")}
                      style={{ height: 200, width: 100, marginRight: 6 }}
                      resizeMode="contain"
                    />
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                      Mackenzie Foy
                    </Text>
                    <Text style={styles.name}>Murph</Text>
                  </View>
                  <View>
                    <Image
                      source={require("./assets/actor4.jpg")}
                      style={{ height: 200, width: 100, marginRight: 6 }}
                      resizeMode="contain"
                    />
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                      John Lithgow
                    </Text>
                    <Text style={styles.name}>Donald</Text>
                  </View>
                  <View>
                    <Image
                      source={require("./assets/actor5.jpg")}
                      style={{ height: 200, width: 100, marginRight: 6 }}
                      resizeMode="contain"
                    />
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                      Thimotee Cha...
                    </Text>
                    <Text style={styles.name}>Tom</Text>
                  </View>
                  <View>
                    <Image
                      source={require("./assets/actor6.jpg")}
                      style={{ height: 200, width: 100, marginRight: 6 }}
                      resizeMode="contain"
                    />
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                      David Oyelowo
                    </Text>
                    <Text style={styles.name}>School P.</Text>
                  </View>
                </ScrollView>
              </View>
            </View>
          </View>
          <View>
            <Text
              style={[styles.technical, { fontWeight: "bold", marginTop: 5 }]}
            >
              Director:
            </Text>
            <Text style={styles.technical}>Christopher Nolan</Text>
          </View>
          <View>
            <Text
              style={[styles.technical, { fontWeight: "bold", marginTop: 5 }]}
            >
              Writters:
            </Text>
            <Text style={styles.technical}>
              Johnattan Nolan, Christopher Nolan
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "black",
  },

  container: {
    backgroundColor: "#393939",
    justifyContent: "center",
    height: 60,
    paddingTop: 10,
  },

  wrapper: {
    marginLeft: 10,
    marginRight: 20,
    width: 350,
    height: 330,
  },

  wrapperColor: {
    backgroundColor: "#212121",
    marginTop: 10,
  },

  titleText: {
    fontSize: 25,
    color: "white",
  },
  subTitles: {
    fontSize: 12,
    color: "white",
  },
  description: {
    fontSize: 12,
    paddingLeft: 10,
    marginRight: 20,
    paddingTop: 25,
    color: "white",
    width: 250,
  },
  button: {
    marginTop: 20,
    width: 240,
    height: 30,
    backgroundColor: "#0177BD",
    borderRadius: 5,
    paddingLeft: 10,
    marginLeft: 10,
  },
  buttonText: {
    color: "white",
    paddingTop: 7,
    textAlign: "center",
  },
  note: {
    fontSize: 12,
    paddingLeft: 10,
    marginRight: 20,
    color: "white",
  },
  castTitle: {
    color: "white",
    fontSize: 20,
  },
  see: {
    color: "#0177BD",
  },
  name: {
    color: "white",
  },
  technical: {
    color: "white",
  },
});
