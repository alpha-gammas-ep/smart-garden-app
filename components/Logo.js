import React from 'react';

import {View, Image} from 'react-native';

const Logo = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image
        source={require('../assets/smart-garden-logo.png')}
        style={{
          width: 35,
          height: 35,
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          marginLeft: 15,
          marginBottom: 5,
          marginRight: 0
        }}
        resizeMode='contain'
      />
    </View>
  );
};

export default Logo;