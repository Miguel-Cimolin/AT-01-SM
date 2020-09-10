import React from 'react';
import { View , Text , Image, StyleSheet} from 'react-native';

export function Profile(){
    return (
        //<View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between', }}>
        <View style={styles.container}>
            <Text></Text>
            <Image style= {{ width: 150, height: 150, borderRadius: 250}} source={require("../pages/Loli3.gif")}/>
                <Text></Text>
                <Text style={{fontSize:25 ,fontWeight: 'bold', color:'#FFFFFF'}}>Miguelito</Text>
                <Text style={{fontSize: 20 ,fontWeight: 'bold', color:'#FFFFFF'}}>17</Text>
                <Text style={{fontSize: 15 ,color:'#FFFFFF'}}>Tecnico de Informatica</Text>
                
            <View style={[styles.views, styles.Quadro]}>
                <Text></Text>
                <Text style={{fontSize: 18, fontWeight: 'bold', color:'#696969'}}>  Tecnologias e Linguagens</Text>
                <Text style={{fontSize: 12, color:'#DEDEDE'}}>   Python, C#, Java, JavaScrypt, MySQL, HTML {"\n\n\n\n\n\n"}</Text>
                
                <Text style={{fontSize: 18, fontWeight: 'bold', color:'#696969'}}>  Plataformas</Text>
                <Text style={{fontSize: 12, color:'#DEDEDE'}}>   IntelliJ, VSCode, Pycharm {"\n\n\n\n\n\n"}</Text>

                <Text style={{fontSize: 18, fontWeight: 'bold', color:'#696969'}}>  Gostaria de trabalhar com:</Text>
                <Text style={{fontSize: 12, color:'#DEDEDE'}}>   Desenvolvimento de Frontend e Backend</Text>
            </View>
        </View>
    )    
}

const styles = StyleSheet.create(
    {
        container: 
        {
          flex: 1,
          backgroundColor: '#DEDEDE',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        },
      
        views: 
        {
          width: 280, //largura
          height: 350, //altura
          margin: 15,
        },
      
        Quadro: 
        {
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          backgroundColor: '#FFF',
          shadowColor: '#DEDEDE',
          shadowOffset: {widht: 5, height: 5},
          shadowOpacity: 0.8,
          shadowRadius: 3,
          borderRadius: 5,
        },
    });
