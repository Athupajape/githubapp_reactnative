import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, Image,View,Linking} from 'react-native';
import {Text, Card, Container, CardItem, Spinner} from 'native-base';
import Axios from 'axios';
import moment from 'moment';

const Description = ({navigation, route}) => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);

  const gitHubUserInfo = async (username) => {
    try {
      const {data} = await Axios.get(
        `https://api.github.com/users/${username}`,
      );

      setUser(data);
        console.log({data});
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const {username} = route.params;
    setUsername(username);
    gitHubUserInfo(username);
  }, []);

    if(!user){
        return (
            <Spinner/>
        )
    }else{
  return (
    <Container style={styles.container}>
      <ScrollView contentContainerStyle={{alignItems: 'center',justifyContent:'center',flexGrow:1}}>
          
          <Card style={{width: 300, alignItems: 'center'}}>
          <CardItem>
            <Image
              style={styles.image}
              source={{uri: user.avatar_url, height: 300, width: 300}}
            />
          </CardItem>
          <CardItem bordered>
            <Text>Username : {user.login}</Text>
          </CardItem>
          <CardItem bordered>
            <Text>Public Repos : {user.public_repos}</Text>
          </CardItem>
          <CardItem bordered>
            <Text>Followers : {user.followers}</Text>
          </CardItem>
          <CardItem bordered>
            <Text>Following : {user.following}</Text>
          </CardItem>
          <CardItem bordered>
            <Text>Created At : {moment(user.created_at).format("DD-MM-YY")}</Text>
          </CardItem>
          <CardItem bordered>
            <Text onPress={()=>Linking.openURL(user.url)}>Github Url : {user.url}</Text>
          </CardItem>
        </Card>
       
          
         
        
      </ScrollView>
    </Container>
  );
    }
};

export default Description;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2827CC',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#242B2E',
    marginTop: -50,
  },
});
