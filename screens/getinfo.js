import React,{useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {
    Container,
    Form,
    Input,
    Item,
    Label,
    Card,
    Text,
    Header,
    Button,
  } from 'native-base';

const GetInfo=({navigation,route})=>{
    const [username, setUsername] = useState("");
    return(
        <Container style={styles.container}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }} keyboardShouldPersistTaps='handled'>
          <Card
            style={{
              height: 200,
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <Form style={{width: 300}}>
              <Item floatingLabel>
                <Label style={styles.label}>GitHub Username</Label>
                <Input value={username} onChangeText={(text)=>{setUsername(text)}}/>
              </Item>
            </Form>
            <View>
              <Button onPress={()=>{navigation.navigate("Description",{username}),setUsername('')}}>
                 
                <Text>Get Info</Text>
              </Button>
            </View>
          </Card>
        </ScrollView>
      </Container>
    )
}

export default GetInfo;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#120E43',
      justifyContent: 'center',
    },
    form: {
      height: 500,
    },
    label: {
      color: '#000',
    },
    text: {
      color: '#FFF',
      fontSize: 20,
      fontWeight: 'bold',
    },
  });
  