import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';

const Story = props => {
  return (
    <View style={{padding: 10}}>
      <Image
        source={{
          uri: props.gambar,
        }}
        style={{width: 60, height: 60, borderRadius: 100}}
      />
      <Text style={{maxWidth: 50, textAlign: 'center'}}> {props.judul} </Text>
    </View>
  );
};

const PropDinamis = () => {
  return (
    <View>
      <Text>Latihan Prop Dinamis </Text>
      <View style={{flexDirection: 'row'}}>
        <ScrollView horizontal>
          <Story
            judul="Genius Man"
            gambar="https://instagram.fjog3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/239239435_578475146612536_4576264412422636559_n.jpg?_nc_ht=instagram.fjog3-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=xTxqcGbVhkMAX-GEzsX&edm=AIQHJ4wBAAAA&ccb=7-4&oh=e67a0fd1e09207308124cd117983944e&oe=615F2BDE&_nc_sid=7b02f1"
          />
          <Story
            judul="SuryaElz"
            gambar="https://instagram.fjog3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/240826849_580001849713804_2689356602315152894_n.jpg?_nc_ht=instagram.fjog3-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=6HdXpymXIyQAX8xQXYl&edm=ALlQn9MBAAAA&ccb=7-4&oh=b9a3b86886df8bce6c5b13c6c4d86e14&oe=615EC53F&_nc_sid=48a2a6"
          />
          <Story
            judul="Keren"
            gambar="https://instagram.fjog3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/230501655_2623115131324424_1577011881793112765_n.jpg?_nc_ht=instagram.fjog3-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=2oZfiSGHltkAX8l8gig&tn=12GPFZpcFsukkXYK&edm=ALlQn9MBAAAA&ccb=7-4&oh=f16d3ad5b09300976eac6e27b2b64321&oe=615E2D52&_nc_sid=48a2a6"
          />
          <Story
            judul="Keren"
            gambar="https://instagram.fjog3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/230501655_2623115131324424_1577011881793112765_n.jpg?_nc_ht=instagram.fjog3-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=2oZfiSGHltkAX8l8gig&tn=12GPFZpcFsukkXYK&edm=ALlQn9MBAAAA&ccb=7-4&oh=f16d3ad5b09300976eac6e27b2b64321&oe=615E2D52&_nc_sid=48a2a6"
          />
          <Story
            judul="Keren"
            gambar="https://instagram.fjog3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/230501655_2623115131324424_1577011881793112765_n.jpg?_nc_ht=instagram.fjog3-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=2oZfiSGHltkAX8l8gig&tn=12GPFZpcFsukkXYK&edm=ALlQn9MBAAAA&ccb=7-4&oh=f16d3ad5b09300976eac6e27b2b64321&oe=615E2D52&_nc_sid=48a2a6"
          />
          <Story
            judul="Keren"
            gambar="https://instagram.fjog3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/230501655_2623115131324424_1577011881793112765_n.jpg?_nc_ht=instagram.fjog3-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=2oZfiSGHltkAX8l8gig&tn=12GPFZpcFsukkXYK&edm=ALlQn9MBAAAA&ccb=7-4&oh=f16d3ad5b09300976eac6e27b2b64321&oe=615E2D52&_nc_sid=48a2a6"
          />
          <Story
            judul="Keren"
            gambar="https://instagram.fjog3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/230501655_2623115131324424_1577011881793112765_n.jpg?_nc_ht=instagram.fjog3-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=2oZfiSGHltkAX8l8gig&tn=12GPFZpcFsukkXYK&edm=ALlQn9MBAAAA&ccb=7-4&oh=f16d3ad5b09300976eac6e27b2b64321&oe=615E2D52&_nc_sid=48a2a6"
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default PropDinamis;
