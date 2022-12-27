import { View, Text, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState, useEffect, useLayoutEffect } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Avatar, Hotels, Attractions, Restaurants } from '../assets';
import SearchBar from '../components/SearchBar';
import { MenuContainer } from '../components/MenuContainer';
import { ItemCardContainer } from '../components/ItemCardContainer';
// import { getProductData } from '../api';
// import List from '../components/List';


const Discover = () => {
    // const [searchPhrase, setSearchPhrase] = useState("");
    // const [clicked, setClicked] = useState(false);
    // const [fakeData, setFakeData] = useState();

    const navigation = useNavigation();

    const [type, setType] = useState("logo");
    const [isLoading, setIsLoading] = useState(false);
    const [mainData, setMainData] = useState([
        {
            "id": 1,
            "title": "iPhone 9",
            "description": "An apple mobile which is nothing like apple",
            "price": 549,
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 94,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            "images": [
            "https://i.dummyjson.com/data/products/1/1.jpg",
            ]
            },
            {
            "id": 2,
            "title": "iPhone X",
            "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            "price": 899,
            "discountPercentage": 17.94,
            "rating": 4.44,
            "stock": 34,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
            "images": [
            "https://i.dummyjson.com/data/products/2/1.jpg",
            ]
            },
            {
            "id": 3,
            "title": "Samsung Universe 9",
            "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
            "price": 1249,
            "discountPercentage": 15.46,
            "rating": 4.09,
            "stock": 36,
            "brand": "Samsung",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
            "images": [
            "https://i.dummyjson.com/data/products/3/1.jpg"
            ]
            },
            {
            "id": 4,
            "title": "OPPOF19",
            "description": "OPPO F19 is officially announced on April 2021.",
            "price": 280,
            "discountPercentage": 17.91,
            "rating": 4.3,
            "stock": 123,
            "brand": "OPPO",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
            "images": [
            "https://i.dummyjson.com/data/products/4/1.jpg",
            ]
            },
            {
            "id": 5,
            "title": "Huawei P30",
            "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
            "price": 499,
            "discountPercentage": 10.58,
            "rating": 4.09,
            "stock": 32,
            "brand": "Huawei",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
            "images": [
            "https://i.dummyjson.com/data/products/5/1.jpg",
            ]
            },
            {
            "id": 6,
            "title": "MacBook Pro",
            "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
            "price": 1749,
            "discountPercentage": 11.02,
            "rating": 4.57,
            "stock": 83,
            "brand": "Apple",
            "category": "laptops",
            "thumbnail": "https://i.dummyjson.com/data/products/6/thumbnail.png",
            "images": [
            "https://i.dummyjson.com/data/products/6/1.png",
            ]
            },
            {
            "id": 7,
            "title": "Samsung Galaxy Book",
            "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
            "price": 1499,
            "discountPercentage": 4.15,
            "rating": 4.25,
            "stock": 50,
            "brand": "Samsung",
            "category": "laptops",
            "thumbnail": "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
            "images": [
            "https://i.dummyjson.com/data/products/7/1.jpg",
            ]
            },
            {
            "id": 8,
            "title": "Microsoft Surface Laptop 4",
            "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
            "price": 1499,
            "discountPercentage": 10.23,
            "rating": 4.43,
            "stock": 68,
            "brand": "Microsoft Surface",
            "category": "laptops",
            "thumbnail": "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
            "images": [
            "https://i.dummyjson.com/data/products/8/1.jpg",
            ]
            },
            {
            "id": 9,
            "title": "Infinix INBOOK",
            "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
            "price": 1099,
            "discountPercentage": 11.83,
            "rating": 4.54,
            "stock": 96,
            "brand": "Infinix",
            "category": "laptops",
            "thumbnail": "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
            "images": [
            "https://i.dummyjson.com/data/products/9/1.jpg",
            ]
            },
            {
            "id": 10,
            "title": "HP Pavilion 15-DK1056WM",
            "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
            "price": 1099,
            "discountPercentage": 6.18,
            "rating": 4.43,
            "stock": 89,
            "brand": "HP Pavilion",
            "category": "laptops",
            "thumbnail": "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
            "images": [
            "https://i.dummyjson.com/data/products/10/1.jpg",
            ]
            }
        
    ]);
 
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    // useEffect(() => {
    //     setIsLoading(true);
    //     getProductData().then((data) => {
    //         setMainData(data);
    //         setInterval(() => {
    //             setIsLoading(false);
    //         }, 2000)
    //     });
    // }, []);

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
                    <Text className="text-[#527283] text-[34px]">the products today</Text>
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

        {isLoading ? (
            <View className="flex-1 items-center justify-center">
                <ActivityIndicator size="large" color="#0B646B"/>
            </View>
        ) : (
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

                <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
                    {mainData?.length > 0 ? (
                        <>
                        {mainData?.map((data, i) => (
                            <ItemCardContainer 
                                key={i} 
                                imageSrc={data.thumbnail ? data.thumbnail : "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" }
                                // imageSrc={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"} 
                                title={data.title} 
                                brand={data.brand}/>
                        ))
                        }
                        </>
                    ) : (
                        <>
                        <View className="w-full h-[400px] bg-red-400 items-center space-y-4 justify-center">
                            <Text>Opps .. Data Not Found</Text>
                        </View>
                        </>
                    )
                    }
                </View>
            </View>
          </ScrollView>
        )}

        </SafeAreaView>
    )
}

export default Discover