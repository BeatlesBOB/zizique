import React,{useEffect,useState} from "react";
import { Modal, StyleSheet,Text,TouchableOpacity, ScrollView,View,Image } from "react-native";

const ModalInfo = (props) => {
    const {toggleVisibility,visibility} = props
    const [genre,setGenre] = useState(null);
    const [description,setDescription] = useState(null);

    useEffect(() => {
        setGenre(
            {
                "href": "https://api.spotify.com/v1/browse/categories/pop",
                "icons": [
                  {
                    "height": 274,
                    "url": "https://t.scdn.co/media/derived/pop-274x274_447148649685019f5e2a03a39e78ba52_0_0_274_274.jpg",
                    "width": 274
                  }
                ],
                "id": "pop",
                "name": "Pop",
            }
        )   
        setDescription("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc faucibus nibh eu mauris dapibus, facilisis egestas ligula posuere. Morbi bibendum mollis ultricies. Vestibulum et justo pellentesque, feugiat lacus nec, rhoncus massa. Proin leo libero, aliquet dictum est ac, tristique feugiat enim. Donec elementum arcu id velit placerat interdum.")
    },[]);
    

    return (
        <Modal animationType="slide" transparent={true} visible={visibility}>   
            <View style={styles.modalView}>
                <View style={styles.modalHeader}>
                    <Image source={{uri: `${genre.icons[0].url}`}} style={styles.images} />
                    <Text style={styles.modalText}>{genre.name}</Text>
                </View>
                <ScrollView style={styles.modalScroll}>
                    <Text style={styles.modalText}>
                        {description}
                    </Text>
                </ScrollView>
                <View style={styles.modalFooter}>
                    <TouchableOpacity onPress={()=>{toggleVisibility()}} style={styles.btn}>
                        <Text style={styles.btnTxt}>Rejoindre</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalHeader:{
        flex:0.2,
        flexDirection:"row"
    },
    images:{
        width:100,
        height:100,
        borderRadius:50
    },
    modalScroll:{
        flex:0.6
    },
    modalFooter:{
        flex:0.2,
        justifyContent:"center"
    },
    btn:{
        backgroundColor:"#E43F6F",    
        alignItems: "center",
        borderRadius: 18,
        height:40,
        justifyContent:"center",
        marginBottom:10,
        marginTop:10
    },
    btnTxt:{
        color:"white"
    },
    modalView: {
        padding: 20,
        backgroundColor: "black",
        borderTopLeftRadius:29,
        borderTopRightRadius:29,
        justifyContent:"center",
        opacity:0.8,
        flex:1
    },
    modalText: {
        marginBottom: 15,
        color:"white",
        textAlign: "center"
    }
});

export default ModalInfo;