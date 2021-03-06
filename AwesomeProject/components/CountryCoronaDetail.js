import React,{useState} from 'react';
import {View ,Text,Dimensions, Image, Button , Linking,Alert,Modal,StyleSheet,TouchableHighlight,} from 'react-native';

 const CountryCoronaDetail = ({route})=>{
    function showAlert(){
        Alert.alert(
            "You Clicked !","Tab OK",
            [
                {text:"OK",onPress:()=>console.log("OK")},
            ]
        )
    }
        return (
            <View style={{flex:1}}>
                <Image 
                    source={{uri:route.params.data.countryInfo.flag}} 
                    style={{width:'100%' ,
                    height :Dimensions.get('window').height*0.4}}>
                </Image>
                <View 
                    style={
                        {
                            flexDirection:'row',
                            justifyContent:'space-around',
                            margin:10}
                        }
                >
                <Button 
                    style={
                        { 
                            flex:0.4 ,
                            borderWidth:5 
                        }
                    } 
                    color='black' 
                    onPress={showAlert} 
                    title="Click me!">
                </Button>
                <Button 
                    style={{flex:0.4}} 
                    color='black' 
                    title="view Details" 
                    onPress=    {
                         ()=>{ Linking.openURL('https://www.accolite.com/')}
                        }>
                </Button>
                </View>
                <Text 
                    style={
                        styles.Text
                    }
                >
                Country Name : {route.params.data.country}    
                </Text>
                <Text style={styles.Text}>
                    Cases : {route.params.data.cases}    
                </Text>
                <Text style={styles.Text}>
                    Death : {route.params.data.deaths}    
                </Text>
                <Text style={styles.Text}>
                    Active Cases : {route.params.data.active}    
                </Text>

                <Text style={styles.Text}>
                    Recovered Cases : {route.params.data.recovered}    
                </Text>
                <Text style={styles.Text}>
                    Test : {route.params.data.tests}    
                </Text>
                <Text style={styles.Text}>
                    Population : {route.params.data.population}    
                </Text>
                <Text style={styles.Text}>
                    Continent : {route.params.data.continent}    
                </Text>                
                <View 
                    style={
                        styles.shadow
                    } 
                >
                <View 
                    style={
                        {
                            backgroundColor:"#ffffff",
                            margin:50,
                            padding:40,
                            borderRadius:10
                        }
                    }
                >
                <Text style={{fontSize:15}}>
                    The earliest reports of a coronavirus infection in animals occurred in the late 1920s, when an acute respiratory infection of domesticated chickens emerged in North America.[16] Arthur Schalk and M.C. Hawn in 1931 made the first detailed report which described a new respiratory infection of chickens in North Dakota. The infection of new-born chicks was characterized by gasping and listlessness with high mortality rates of 40–90%.[17] Leland David Bushnell and Carl Alfred Brandly isolated the virus that caused the infection in 1933.[18] The virus was then known as infectious bronchitis virus (IBV). Charles D. Hudson and Fred Robert Beaudette cultivated the virus for the first time in 1937.[19] The specimen came to be known as the Beaudette strain. In the late 1940s, two more animal coronaviruses, JHM that causes brain disease (murine encephalitis) and mouse hepatitis virus (MHV) that causes hepatitis in mice were discovered.[20] It was not realized at the time that these three different viruses were related.[21][13]
                    Human coronaviruses were discovered in the 1960s[22][23] using two different methods in the United Kingdom and the United States.[24] E.C. Kendall, Malcolm Bynoe, and David Tyrrell working at the Common Cold Unit of the British Medical Research Council collected a unique common cold virus designated B814 in 1961.[25][26][27] The virus could not be cultivated using standard techniques which had successfully cultivated rhinoviruses, adenoviruses and other known common cold viruses. In 1965, Tyrrell and Bynoe successfully cultivated the novel virus by serially passing it through organ culture of human embryonic trachea.[28] The new cultivating method was introduced to the lab by Bertil Hoorn.[29] The isolated virus when intranasally inoculated into volunteers caused a cold and was inactivated by ether which indicated it had a lipid envelope.[25][30] Dorothy Hamre[31] and John Procknow at the University of Chicago isolated a novel cold from medical students in 1962. They isolated and grew the virus in kidney tissue culture, designating it 229E. The novel virus caused a cold in volunteers and, like B814, was inactivated by ether.[32]
                    Transmission electron micrograph of organ cultured coronavirus OC43
                    Scottish virologist June Almeida at St. Thomas Hospital in London, collaborating with Tyrrell, compared the structures of IBV, B814 and 229E in 1967.[33][34] Using electron microscopy the three viruses were shown to be morphologically related by their general shape and distinctive club-like spikes.[35] A research group at the National Institute of Health the same year was able to isolate another member of this new group of viruses using organ culture and named one of the samples OC43 (OC for organ culture).[36] Like B814, 229E, and IBV, the novel cold virus OC43 had distinctive club-like spikes when observed with the electron microscope.[37][38]
                    The IBV-like novel cold viruses were soon shown to be also morphologically related to the mouse hepatitis virus.[20] This new group of viruses were named coronaviruses after their distinctive morphological appearance.[8] Human coronavirus 229E and human coronavirus OC43 continued to be studied in subsequent decades.[39][40] The coronavirus strain B814 was lost. It is not known which present human coronavirus it was.[41] Other human coronaviruses have since been identified, including SARS-CoV in 2003, HCoV NL63 in 2003, HCoV HKU1 in 2004, MERS-CoV in 2013, and SARS-CoV-2 in 2019.[42] There have also been a large number of animal coronaviruses identified since the 1960s.[43]
                    Microbiology
                </Text>
                </View>
            </View>

            </View>

        );
    
}

const styles = StyleSheet.create({
    shadow: {
        backgroundColor:"#000000",
        flex:1
    },
    Text: {
      marginBottom: 20,
      textAlign: "center"
    }
  });
  

export default CountryCoronaDetail;