import React from 'react';
import { StyleSheet,Text, View, TextInput, Button } from 'react-native';

export default class App  extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      city: '',
      forecast: {
        main: '_',
        description: '_',
        temp: 0
}
    };
  }
  getWeather= () => {
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=+'
    + this.state.city +
    '&appid=c80b2c83bbcd20408e1402d2e482df24&units=metric';
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          forecast: {
            main: responseJson.weather[0].main,
            description: responseJson.weather[0].description,
            temp: responseJson.main.temp
          }
        });
      });
  }

  render() {
    return (
      <View style = {{flex:4,backgroundColor:'#bbdefb'}}>
        <View style={{backgroundColor:'#005ce6'}}>
           <Text style = {{padding: 10, fontSize: 20, color: 'white', textAlign:'center'}} >
            Aplikasi Cuaca
          </Text>
         </View>

        <View style={{margin:20,padding: 40,placeholder:'center' , backgroundColor:'#e3f2fd'}}>



            <TextInput style = {{height: 40}}
              placeholder="Masukan Kota"
              onChangeText={(city)=>this.setState({city})}

            />

            <Button
              onPress={() =>this.getWeather ()}
              title="Lihat"
              accessibilityLabel="Klik Untuk Mencari Kota"
            />
       </View>


        <View style={{margin:20,flex:2,backgroundColor:'#90caf9'}}>
          <Text style = {{padding: 20, fontSize: 20}} >
              Suhu =  {this.state.forecast.temp} {"\n"}
              Cuaca =  {this.state.forecast.main} {"\n"}
              Deskripsi= {this.state.forecast.description} {"\n"}

          </Text>
         </View>
         <View style={styles.box3}>
         <Text style={styles.text}></Text>
         </View>
         <View style={styles.box4}>
         <Text style={styles.text}>Copyright (C) Putu Kharisma Widya Iswari - 1715051027</Text>
         </View>


   </View>

    );
  }

}
const styles = StyleSheet.create({
  box3: {
    flex: 1, // lebar box lebih besar dari 2
    backgroundColor: '#bbdefb',
    alignItems: 'center',
    justifyContent: 'center',
    },
    text:{
      fontSize:12
    },
    box4: {
      flex: 0.4, // lebar box lebih besar dari 2
      backgroundColor: '#005ce6',
      alignItems: 'center',
      justifyContent: 'center',
      },
      text:{
        fontSize:12
      },
});
