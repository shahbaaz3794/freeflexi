import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {Image} from 'react-native-elements';
import {Avatar} from 'react-native-elements';

const Header = () => {
  return (
    <>
      <View style={styles.headerContainer}>
        <View style={styles.leftContainer}>
          <TouchableOpacity style={styles.drawerIconContainer}>
            <Image
              source={require('../assests/freeflexiLogo.png')}
              style={{width: 80, height: 40}}
              PlaceholderContent={<ActivityIndicator />}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.rightContainer}>
          <Avatar
            size="small"
            overlayContainerStyle={{backgroundColor: 'darkgrey'}}
            rounded
            // onPress={console.log('view DP')}
            // source={{uri: category.imageUrl}}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 5,
    paddingBottom: 5,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  leftContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default Header;
