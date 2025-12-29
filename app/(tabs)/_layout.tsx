import { icons } from '@/constants/icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { Image, ImageBackground, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import { images } from '../../constants/images';

interface TabIconProps {
  focused: boolean;
  icon: ImageSourcePropType;
  text: string;
};

const TabIcon = ({ focused, icon, text }: TabIconProps) => {
  if (focused) {
  return (
     <ImageBackground
            source={images.highlight}
             className='flex flex-row w-full flex-1 min-w-[112px] min-h-16  mt-4 justify-center items-center rounded-full overflow-hidden'
            >
             <Image source={icon}
              tintColor='#151312' className="size-5" /> 
              <Text className='text-secondary text-base font-semibold ml-2'>{text}</Text>
            </ImageBackground>
  );
}
else {
  return (
    <View>
    <Image source={icon} tintColor='#A8B5DB' className="size-5" />
    </View>
  )
}
};

const _layout = () => {
  return (
    <Tabs 
    screenOptions={{
      tabBarShowLabel: false,
      tabBarItemStyle: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
      },
      tabBarStyle: {
        backgroundColor: '#0f0D23',
        borderRadius: 50,
        marginHorizontal: 20,
        marginBottom: 36,
        height: 52,
        position: 'absolute',
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '0f0d23'
      }
    }}>
     <Tabs.Screen
        name="home" // route index.tsx
        options={{
        title: 'Home',
        headerShown: false,
        tabBarIcon: ({focused}) => {
         return (
           <>
           <TabIcon focused={focused} icon={icons.home} text="Home" />
           </>
         );
        }
       }} />
     <Tabs.Screen
     name="profile" // route profile.tsx
     options={{
        title: 'Profile',
        headerShown: false,
        tabBarIcon: ({focused}) => {
         return (
           <>
           <TabIcon focused={focused} icon={icons.person} text="Profile" />
           </>
         );
        }
     }} />
     <Tabs.Screen
     name="search" // route search.tsx
     options={{
        title: 'Search',
        headerShown: false,
        tabBarIcon: ({focused}) => {
         return (
           <>
           <TabIcon focused={focused} icon={icons.search} text="Search" />
           </>
         );
        }
     }} />
     <Tabs.Screen
     name="saved" // route saved.tsx
     options={{
        title: 'Saved',
        headerShown: false,
        tabBarIcon: ({focused}) => {
         return (
           <>
           <TabIcon focused={focused} icon={icons.save} text="Saved" />
           </>
         );
        }
     }} />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});