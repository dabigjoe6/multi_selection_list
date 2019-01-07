import React, { Component } from 'react';
import { View, Text, Image, FlatList, Dimensions, TouchableWithoutFeedBack, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

let data = [
  { id: 1, name: "Able God", artist: "Lil Kesh", src: require('./images/able.jpg'), duration: "4:24", selected: false },
  { id: 2, name: "Bana", artist: "Niniola", src: require('./images/bana.jpg'), duration: '3:33', selected: false },
  { id: 3, name: "Bella", artist: "MHD", src: require('./images/bella.jpg'), duration: "3:04", selected: false },
  { id: 4, name: "Damiloun", artist: "Show Dem Camp", src: require('./images/damiloun.jpg'), duration: "4:15", selected: false },
  { id: 5, name: "Kana", artist: "Olamide ft. Wizkid", src: require("./images/kana.jpg"), duration: "3:25", selected: false },
  { id: 6, name: "Kupe", artist: "A-Star", src: require("./images/kupe.jpg"), duration: "3:04", selected: false },
  { id: 7, name: "Money", artist: "Cardi-B", src: require("./images/money.jpg"), duration: "3:00", selected: false },
  { id: 8, name: "On The Low", artist: "Burna Boy", src: require('./images/on_the_low.jpg'), duration: "3:10", selected: false },
  { id: 9, name: "God's Plan", artist: "Drake", src: require('./images/plan.jpg'), duration: "3:17", selected: false },
  { id: 10, name: 'Saro', artist: "Niniola", src: require('./images/saro.jpg'), duration: "3:41", selected: false },
  { id: 11, name: "Sunflower", artist: "Post Malone and Swal Lee", src: require("./images/sunflower.jpg"), duration: "2:37", selected: false },
  { id: 12, name: "Surrender", artist: "Mr. Eazi", src: require('./images/surrender.jpg'), duration: "2:41", selected: false },
  { id: 13, name: "Uyo Meyo", artist: "Teniola", src: require('./images/uyo_meyo.jpg'), duration: "4:00", selected: false }
]

let selectedData = []

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      refresh: true
    }
    this.renderAddSongs = this.renderAddSongs.bind(this);
    this.renderSelectedSongs = this.renderSelectedSongs.bind(this);
    this.addSong = this.addSong.bind(this);


  }

  addSong(id) {
    data[id - 1].selected = true;
    this.setState({ refresh: !this.state.refresh });
  }

  removeSong(id) {
    data[id - 1].selected = false;
    this.setState({ refresh: !this.state.refresh })
  }

  renderAddSongs({ item }) {
    if (item.selected === false) {
      return (
        <TouchableOpacity onPress={() => this.addSong(item.id)}>
          <View>
            <View style={{ paddingLeft: '5%', alignItems: 'center', flexDirection: "row", flex: 1, marginVertical: '5%', }}>
              <Image resizeMode='contain' source={item.src} style={{ height: 50, width: 50, marginRight: '3%' }} />
              <View>
                <Text style={{ color: "#FFF", fontSize: 18 }}>{item.name}</Text>
                <Text style={{ color: "#A3A3A3" }}>{item.artist}</Text>
              </View>
              <Text style={{ position: "absolute", right: '5%', color: "#A3A3A3" }}>{item.duration}</Text>
            </View>
            <View style={{ marginTop: "2%", borderWidth: 1, borderBottomColor: "#000", width: Dimensions.get('window').width }} />
          </View>
        </TouchableOpacity>
      )
    }
  }

  renderSelectedSongs({ item }) {
    if (item.selected === true) {
      return (
        <TouchableOpacity onPress={() => this.removeSong(item.id)}>
          <View>
            <View style={{ paddingLeft: '5%', alignItems: 'center', flexDirection: "row", flex: 1, marginVertical: '5%', }}>
              <Image resizeMode='contain' source={item.src} style={{ height: 50, width: 50, marginRight: '3%' }} />
              <View>
                <Text style={{ color: "#FFF", fontSize: 18 }}>{item.name}</Text>
                <Text style={{ color: "#A3A3A3" }}>{item.artist}</Text>
              </View>
              <Text style={{ position: "absolute", right: '5%', color: "#A3A3A3" }}>{item.duration}</Text>
            </View>
            <View style={{ marginTop: "2%", borderWidth: 1, borderBottomColor: "#000", width: Dimensions.get('window').width }} />
          </View>
        </TouchableOpacity>
      )
    }
  }
  render() {
    return (
      <View style={{ backgroundCOlor: "#161618" }}>
        <View pointerEvents="box-none" style={{ zIndex: 1001, opacity: 1, paddingHorizontal: "4%", alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', backgroundColor: "#9e0f0b90", height: "10%", }}>
          <Icon
            name="ios-arrow-back"
            type="ionicon"
            size={30}
            color="#000"
          />
          <Text style={{ fontSize: 17, color: "#000" }}>Create Playlist</Text>
          <Icon
            name="ios-checkmark"
            type="ionicon"
            size={45}
            color="#000"
          />
        </View>
        <View style={{ flexDirection: "row", zIndex: 1000, backgroundColor: "#161618" }}>
          <View style={{ paddingTop: '5%', width: Dimensions.get('window').width - 90, borderWidth: 4, borderLeftColor: "#000" }}>
            <FlatList
              data={data}
              renderItem={this.renderAddSongs}
              extraData={this.state.refresh}
              keyExtractor={(item) => item.id}
              ListHeaderComponent={<Text style={{ color: "#A3A3A3", letterSpacing: 5, marginLeft: "7%", marginVertical: "5%", fontSize: 16 }}>ADD SONGS</Text>
              }
            />
          </View>
          <View style={{ paddingTop: "5%" }}>
            <FlatList
              data={data}
              renderItem={this.renderSelectedSongs}
              extraData={this.state.refresh}
              keyExtractor={(item) => item.id}
              ListHeaderComponent={<Text style={{ color: "#A3A3A3", letterSpacing: 5, marginLeft: "7%", marginVertical: "5%", fontSize: 16 }}>SELECTED</Text>
              }
            />
            <Text style={{ fontSize: 50, color: "white" }}>Here</Text>
          </View>
        </View>
      </View>
    )
  }
}