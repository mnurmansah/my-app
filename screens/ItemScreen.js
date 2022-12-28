import React, {useState, useLayoutEffect} from 'react'
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

    const [category, setCategory] = useState([
        {
            "id": 1,
            "title": "Electronic",
        },
        {
            "id": 2,
            "title": "Smartphone",
        },
        {
            "id": 3,
            "title": "iPhone",
        },
        {
            "id": 4,
            "title": "iOS",
        },
        {
            "id": 5,
            "title": "Technology",
        },
    ])

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

                <View className="absolute flex-row inset-x-0 bottom-5 justify-between px-4">
                    <View className="flex-row space-x-2 items-center">
                        <Text className="text-[24px] font-bold text-gray-100">
                            $499
                        </Text>
                    </View>
                    <View className="px-2 py-1 rounded-md bg-teal-100">
                        <Text>
                            Contact Now
                        </Text>
                    </View>
                </View>
            </View>

            
            <View className="mt-6">
                <Text className="text-[#428288] text-[24px] font-bold">
                    iPhone 9
                </Text>
                <View className="flex-row items-center space-x-2 mt-2">
                    <FontAwesome name="tags" size={25} color="#0C9EA6"/>
                    <Text className="text-[#8C9EA6] text-[20px] font-bold ">
                        Apple
                    </Text>
                </View>
            </View>
            
            <View className="mt-4 flex-row items-center justify-between">
                    <View className="flex-row items-center space-x-2">
                        <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                            <FontAwesome name="star" size={24} color="#058574"/>
                        </View>
                        <View>
                            <Text className="text-[#515151]">10</Text>
                            <Text className="text-[#515151]">Ratings</Text>
                        </View>
                    </View>                    
                    <View className="flex-row items-center space-x-2">
                        <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                            <FontAwesome name="money" size={24} color="black"/>
                        </View>
                        <View>
                            <Text className="text-[#515151]">#123</Text>
                            <Text className="text-[#515151]">Price Levels</Text>
                        </View>
                    </View>
                    <View className="flex-row items-center space-x-2">
                        <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                            <FontAwesome name="tag" size={24} color="black"/>
                        </View>
                        <View>
                            <Text className="text-[#515151]">Smartphone</Text>
                            <Text className="text-[#515151]">Type</Text>
                        </View>
                    </View>
            </View>
            <Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#97A6AF]">
                <Text>The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface. The iPhone runs the iOS operating system, and in 2021 when the iPhone 13 was introduced, it offered up to 1 TB of storage and a 12-megapixel camera.</Text>
            </Text>
            {category && (
                <View className="flex-row gap-2 items-center justify-start flex-wrap mt-4">
                    {category.map((n) => (
                        <TouchableOpacity
                            key={n.key}
                            className="px-2 py-1 rounded-md bg-emerald-100"
                        >
                            <Text>{n.title}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}

            <View className="space-y-2 mt-4 bg-gray-100 rounded-2xl px-4 py-2">
                <View className="items-center flex-row space-x-6">
                    <FontAwesome name="phone" size={24} color="#428288"/>
                    <Text className="text-lg">022-123456</Text>
                </View>
            </View>

            <View className="mt-4 px-4 py-4 rounded-lg bg-[#0682BE] items-center justify-center mb-12">
                <Text className="text-3xl font-semibold uppercase tracking-wider text-gray-100">
                    Book Now
                </Text>
            </View>
        </ScrollView>
    </SafeAreaView>
  );
}

export default ItemScreen