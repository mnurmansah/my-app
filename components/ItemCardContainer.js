import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export const ItemCardContainer = ({imageSrc, title, brand, data}) => {
    const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ItemScreen", {param : data})} className="rounded-md border border-gray-300 space-y-2 px-3 py-2 shadow-md bg-white w-[182px] my-2">
        <Image 
            source={{ uri : imageSrc }}
            className="w-full h-40 rounded-md object-cover"
        />

        <Text className="text-[#428288] text-[18px] font-bold">
            {title}
        </Text>

        <View className="flex-row items-center space-x-1">
            <FontAwesome name="tags" size={20} color="#85972A2"/>
            <Text className="text-[#428288] text-[14px] font-bold">
                {brand}
            </Text>
        </View>
    </TouchableOpacity>
  )
}
