import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Dropdown from './src/component/dropdown';
import CustomButton from './src/component/customButton';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function Feed() {
  const [selectedOption, setSelectedOption] = useState([]);
  const options = ['VAN NHS 1234', 'VAN HMRC 5678', 'VAN JUPD 3456'];

  const handleOptionSelected = (option: any) => {
    setSelectedOption(option);
  };
  const list: any = [
    {
      key: 1,
      text: 'Student Entry',
      icon: 'StudentEntry',
    },
    {
      key: 2,
      text: 'Route',
      icon: 'Route',
    },
    {
      key: 3,
      text: 'Student Shuffle',
      icon: 'StudentShuffle',
    },
    {
      key: 4,
      text: 'Van Shuffle',
      icon: 'VanShuffle',
    },
  ];
  const renderIcon = (icon: any) => {
    if (typeof icon === 'string') {
      // Return other icons based on the string value
      switch (icon) {
        case 'StudentEntry':
          return (
            <MaterialCommunityIcons
              name="van-utility"
              size={30}
              color="white"
            />
          );
        case 'Route':
          return (
            <MaterialCommunityIcons
              name="van-utility"
              size={30}
              color="white"
            />
          );
        case 'StudentShuffle':
          return (
            <MaterialCommunityIcons
              name="shuffle-variant"
              size={30}
              color="white"
            />
          );
        case 'VanShuffle':
          return (
            <MaterialCommunityIcons
              name="shuffle-variant"
              size={30}
              color="white"
            />
          );
        default:
          return null;
      }
    }
    return icon; // Return the component directly if it is already an element
  };

  return (
    <>
      <View style={[styles.container]}>
        <View style={[styles.vanContainer]}>
          <Dropdown options={options} onOptionSelected={handleOptionSelected} />

          <Text style={styles.headingTitle}>VAN Time</Text>
          <View style={[styles.vanTimeContainer]}>
            <Text style={styles.headingTitle}>Pickup Time</Text>
            <Text style={styles.headingTitleRight}>07:30 AM</Text>
          </View>
          <View style={[styles.vanTimeContainer]}>
            <Text style={styles.headingTitle}>Drop Time</Text>
            <Text style={styles.headingTitleRight}>12:30 PM</Text>
          </View>
        </View>
        <View style={[styles.routeContainer]}>
          <CustomButton onPress={handleOptionSelected} title="start route" />
        </View>
        <View style={[styles.servicesContainer]}>
          <FlatList
            data={list}
            numColumns={2}
            keyExtractor={(item: any, index: number) => item.key}
            renderItem={({item}) => (
              <View style={styles.card}>
                <View>{renderIcon(item.icon)}</View>
                <Text style={styles.text}>{item.text}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
  },
  vanContainer: {
    flex: 1.5,
    backgroundColor: '#4383e3',
    marginBottom: 15,
    borderRadius: 5,
    padding: 4,
  },
  routeContainer: {
    flex: 2,
    backgroundColor: '#4383e3',
    marginBottom: 15,
    borderRadius: 5,
  },
  servicesContainer: {
    flex: 3,
    borderRadius: 5,
    columnGap: 5,
  },
  card: {
    height: 125,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4383e3',
    borderRadius: 5,
    margin: 5,
  },
  vanTimeContainer: {
    marginTop: 5,
    padding: 4,
    flex: 1,
    flexDirection: 'row' /*it was column*/,
    alignContent: 'space-between',
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
  },
  headingTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: 'white',
    textAlign: 'left',
  },
  headingTitleRight: {
    fontWeight: '600',
    color: 'white',
    textAlign: 'right',
    flex: 6,
  },
});
function Article() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Article Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: 'SFProDisplay-Medium',
          fontWeight: '500',
        },
      }}>
      <Drawer.Screen
        name="Feed"
        component={Feed}
        options={{
          drawerLabel: 'Home',
          title: 'My Home',
        }}
      />
      <Drawer.Screen
        name="Article"
        component={Article}
        options={{title: 'My Article'}}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
