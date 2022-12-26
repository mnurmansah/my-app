import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect, useLayoutEffect } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Avatar, Hotels, Attractions, Restaurants } from '../assets';
import SearchBar from '../components/SearchBar';
import { MenuContainer } from '../components/MenuContainer';
// import List from '../components/List';


const Discover = () => {
    // const [searchPhrase, setSearchPhrase] = useState("");
    // const [clicked, setClicked] = useState(false);
    // const [fakeData, setFakeData] = useState();

    const navigation = useNavigation();

    const [type, setType] = useState("restaurant");

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    // useEffect(() => {
    //     const getData = async () => {
    //       const apiResponse = await fetch(
    //         "https://my-json-server.typicode.com/kevintomas1995/logRocket_searchBar/languages"
    //       );
    //       const data = await apiResponse.json();
    //       setFakeData(data);
    //     };
    //     getData();
    //   }, []);

    return (
        <SafeAreaView className="flex-1 bg-white relative">
            <View className="flex-row items-center justify-between px-8">
                <View>
                    <Text className="text-[40px] text-[#0B646B] font-bold">Discover</Text>
                    <Text className="text-[#527283] text-[34px]">the beauty today</Text>
                </View>

                <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg">
                    <Image 
                    source={Avatar}
                    className="w-full h-full rounded-md object-cover"
                    />
                </View>
            </View>

            <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg">
                
            <SearchBar
                // searchPhrase={searchPhrase}
                // setSearchPhrase={setSearchPhrase}
                // clicked={clicked}
                // setClicked={setClicked}
            />
            </View>

            {/* <List
            searchPhrase={searchPhrase}
            data={fakeData}
            setClicked={setClicked}
          /> */}

          <ScrollView>
            <View className="flex-row items-center justify-between px-8 mt-5">
                <MenuContainer
                    key={"hotel"}
                    title="Hotels"
                    imageSrc={Hotels}
                    type={type}
                    setType={setType}
                />
                <MenuContainer
                    key={"attractions"}
                    title="attractions"
                    imageSrc={Attractions}
                    type={type}
                    setType={setType}
                />
                <MenuContainer
                    key={"restaurants"}
                    title="Restaurants"
                    imageSrc={Restaurants}
                    type={type}
                    setType={setType}
                />
            </View>

            <View>
                <View className="flex-row items-center justify-between px-4 mt-8">
                    <Text className="text-[#2C7379] text-[28px] font-bold">
                        Top Tips
                    </Text>
                    <TouchableOpacity className="flex-row items-center justify-center space-x-2">
                        <Text className="text-[#A0C4C7] text-[20px] font-bold">
                            Explore
                        </Text>
                        <FontAwesome name="long-arrow-right" size={24} color="#A0C4C7"/>
                    </TouchableOpacity>
                </View>
            </View>


          </ScrollView>
        </SafeAreaView>
    )
}

export default Discover