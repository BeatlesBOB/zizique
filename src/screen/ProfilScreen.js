import React,{useState,useEffect,useContext} from 'react'
import { StyleSheet,Text,View,TouchableOpacity,TextInput,Image,Alert} from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import ApiContext,{Api} from '../service/Axios'
import { FancyAlert } from 'react-native-expo-fancy-alerts';
import {observer,inject} from 'mobx-react'
import Carrousel from '../component/Carrousel'
import {Header} from '../component/Header'
import StatList from '../component/StatList';

const ProfilScreen = (props) => {    
    const {storeConnexion} = props; 
    const [user,setUser] = useState({});
    const context = React.useContext(ApiContext);
     
    const [isediting,setIsEditing] = useState(false);
    const [n_username,setN_username] = useState("")
    const [isProfilEditing,setIsProfilEditing] = useState(false);
    const [stat,setStat] = useState()
    // const context = useContext(ApiContext)

    useEffect(() => {
        setN_username(storeConnexion.getLogin())
        setUser({picture:storeConnexion.getProfilPicture(),mail:storeConnexion.getMail()})
    },[storeConnexion.getProfilPicture()]);

    return(
        <View style={styles.container}>
            <View style={{flex:0.1,marginTop:40}}>
                <Header />
            </View>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>{setIsProfilEditing(!isProfilEditing)}}>
                    {
                        user.picture===0?<Image style={styles.avatar} source={require('../../assets/avatar1.png')} />
                        :null
                    }
                    {
                        user.picture===1?<Image style={styles.avatar} source={require('../../assets/avatar2.png')} />
                        :null
                    }
                    {
                        user.picture===2?<Image style={styles.avatar} source={require('../../assets/avatar3.png')} />
                        :null
                    }
                    {
                        user.picture===3?<Image style={styles.avatar} source={require('../../assets/avatar4.png')} />
                        :null
                    }
                </TouchableOpacity>
                <View style={{flexDirection:"row",alignItems:"baseline"}}>
                    <Text style={styles.username}>{n_username}</Text>
                    <TouchableOpacity onPress={()=>{setIsEditing(!isediting)}}>
                        <Feather name="edit" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
            <FancyAlert visible={isediting} style={{backgroundColor:'white',padding:5}}>
                {
                    user.picture===0?<Image style={{width:100,height:100,marginTop:-50,marginBottom:10}} source={require('../../assets/avatar1.png')} />
                    :null
                }
                {
                    user.picture===1?<Image style={{width:100,height:100,marginTop:-50,marginBottom:10}} source={require('../../assets/avatar2.png')} />
                    :null
                }
                {
                    user.picture===2?<Image style={{width:100,height:100,marginTop:-50,marginBottom:10}} source={require('../../assets/avatar3.png')} />
                    :null
                }
                {
                    user.picture===3?<Image style={{width:100,height:100,marginTop:-50,marginBottom:10}} source={require('../../assets/avatar3.png')} />
                    :null
                }
                
                <Text style={{color:"black",marginLeft:10,fontSize:20}}>{user.username}</Text>
                <Text style={{color:"grey",marginTop:10}}>Nouvelle username</Text>
                <TextInput style={styles.input} onChangeText={(text)=>{setN_username(text)}} value={n_username} placeholder={"Votre nouvelle username"}/>
                <TouchableOpacity onPress={()=>{
                    if (n_username != storeConnexion.getLogin()) {
                        context.UpdateUser({
                            username:n_username,
                            email:storeConnexion.getMail(),
                            AccessToken:storeConnexion.getAccess(),
                            profil_pic:storeConnexion.getProfilPicture()
                        }).then((res)=>{
                            if (res) {
                                storeConnexion.setLogin(n_username)    
                            } 
                        }).catch((err)=>{
                            Alert.alert('Ooppps',err, [
                                {
                                  text: 'Cancel',
                                  onPress: () => console.log('Cancel Pressed'),
                                  style: 'cancel',
                                },
                                { text: 'OK', onPress: () => console.log('OK Pressed') },
                            ]);
                        })
                    } else {
                        Alert.alert('Ooppps','Veuillez saisir un nouveau nom', [
                            {
                              text: 'Cancel',
                              onPress: () => console.log('Cancel Pressed'),
                              style: 'cancel',
                            },
                            { text: 'OK', onPress: () => console.log('OK Pressed') },
                        ]);
                    }
                    setIsEditing(!isediting)
                }} style={{padding:14,backgroundColor:"#E43F6F",width:"100%",flexDirection:"row",marginBottom:10}}>
                    <AntDesign name="checkcircleo" size={24} color="white" />
                    <Text style={{color:"white",marginLeft:10}}>Valider mes modifications</Text>
                </TouchableOpacity>
            </FancyAlert>
            <FancyAlert
                visible={isProfilEditing}
                icon={<View style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                borderRadius: 50,
                width: '100%',
                }}><TouchableOpacity
                style={{ flex: 1, alignItems: "center", justifyContent: "center",
            }}
                onPress={() => {
                    setIsProfilEditing(!isProfilEditing)
                }}
                >
                    <Text>X</Text>
                </TouchableOpacity>
                </View>}
                style={{ backgroundColor: 'white'}}
            >
            <View style={{ marginTop: -16, alignItems: "center", justifyContent: "space-between" }}>
            <Text>Veuillez choisir une image</Text>
            <View style={{ height: 200 }}>
                <Carrousel />
            </View>
            <View style={{marginBottom:30}}>
                <TouchableOpacity
                style={{
                    backgroundColor: "#5BC9D7",
                    alignItems: "center",
                    borderRadius: 18,
                    justifyContent: "center",
                    padding:10
                }}
                onPress={()=>{setIsProfilEditing(!isProfilEditing)}}

                >
                <Text style={{ color: "white" }}>Modifier son avatar</Text>
                </TouchableOpacity>
            </View>
            </View>
            </FancyAlert>
            <View style={{flex:0.6}}>
                <StatList stat={stat}/>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFB100',
    alignItems: 'center',
    justifyContent:"center"
  },
  avatar:{
    height:150,
    width:150,
    resizeMode:'contain'
  },
  header:{
    flex:.4,
    justifyContent:'center',
    alignItems:"center",
  },
  username:{
    color:"white",
    fontSize:20,
    marginRight:10,
    marginTop:15
  },
  input:{
      width:"100%",
      marginTop:10,
      marginBottom:20,
      borderBottomWidth:1
  }
  
});

export default inject('storeConnexion')(observer(ProfilScreen))