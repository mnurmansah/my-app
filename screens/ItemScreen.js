import React, {useLayoutEffect} from 'react'
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const ItemScreen = ({route}) => {
    const navigation = useNavigation();

    const data = route?.param;
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown:false,
      })
    }, [])

  return (
    <SafeAreaView className="flex-1 bg-white relative">
        <ScrollView className="flex-1 px-4 py-6">
            <View className="relative bg-white shadow-lg">
                <Image
                    source={{
                        uri:"https://i.dummyjson.com/data/products/1/thumbnail.jpg"
                    }}
                    className="w-full h-72 object-cover rounded-2xl"
                />

                
                <View className="absolute flex-row inset-x-0 top-5 justify-between px-4">
                    <TouchableOpacity
                    onPress={()=>navigation.navigate("Discover")}
                    className="w-10 h-10 rounded-md items-center justify-center bg-white"
                    >
                    <FontAwesome name="chevron-left" size={24} color="#06B2BE"/>
                    </TouchableOpacity>

                    <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-[#06B2BE]">
                    <FontAwesome name="heartbeat" size={24} color="#fff"/>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  );
}

export default ItemScreen