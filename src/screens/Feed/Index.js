import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import { SimpleLineIcons, AntDesign, Feather, FontAwesome5 } from '@expo/vector-icons';


function Feed() {
  const posts = [
    {
      id: "1",
      author: "Léo Serafim",
      picture_url:
        'https://raw.githubusercontent.com/leoserafim21/fotos_para_clone/main/cachu-73.jpg',
      likes: 250,
      description: 'Minha esposa consegue ver defeitos onde não tem. O desafio desse ano seria em Março fazer um #ensaio na #cahoeira que ela ama. Vou postar algumas, #semfiltro das que ela mais gostou. Cliente exigente!',
      hashtags: '#photooftheday #photo #fotografia #nikon #positivebody #corpaoquerido #corporeal #belezareal #corpolivre #plinitude #beleza #mulhertatuada #undercurt #biquini #natureza #women #mujer #mulher #empoderada #teresópolis #visiteteresópolis #riodejaneiro #brasil #brazil',
      place: "Nosso Lago do Amor",
    },
  ]

  function renderItem({ item: post }) {
    return (
      <View >
        <View style={styles.postHeader}>
          <View style={styles.userInfo}>
            <Text style={styles.author}>{post.author}</Text>
            <Text style={styles.place}>{post.place}</Text>
          </View>

          <View style={styles.postOptions}>
            <TouchableOpacity>
              <SimpleLineIcons name="options" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Image
            style={styles.picture_url}
            source={{ uri: post.picture_url }}
          />
        </View>

        <View style={styles.footer}>
          <View style={styles.actions}>
            <View style={styles.leftActions}>
              <TouchableOpacity styles={styles.action}>
                <AntDesign name="hearto" size={20} color="black" />
              </TouchableOpacity>
              <TouchableOpacity styles={styles.action}>
              <FontAwesome5 name="comment" size={20} color="black" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Feather name="send" size={20} color="black" />
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity>
                <Feather name="bookmark" size={22} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View >
              <Text style={styles.likes}>{post.likes} likes</Text>
              <Text style={styles.description}>{post.description}</Text>
              <Text style={styles.hashtags}>{post.hashtags}</Text>
          </View>         
        </View>
      </View>
    );
  }
  
  return (
    <SafeAreaView>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    post: {
        marginVertical: 15
    },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  postOptions: {},
  userInfo: {},
  author: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
  place: {
    fontSize: 12,
    color: "#666",
  },
  picture_url: {
    with: '100%',
    height: 400,
  },
  footer: {
    paddingHorizontal: 15,    
  },
  actions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 15,         
  },
  action: {
    marginRight: 10,
     
  },
  leftActions: {
    flexDirection: 'row',
  },
  likes: {
      fontWeight: 'bold',
      fontSize: 12
  },
  hashtags: {
      color: '#002D5E'
  },
  description: {
      color: '#000',
      lineHeight: 18
  },
  
})

export default Feed;
