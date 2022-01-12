import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

const OTPValidation = ({navigation}) => {
  const [loading, setLoading] = React.useState(true);
  const [otp, setOTP] = React.useState('');
  const [disableBtn,setDisableBtn] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setOTP(Math.floor(Math.random()*10000).toString());
      setDisableBtn(true)
      setLoading(false);
    //   navigation.navigate('home')
    }, 3000);
  }, []);
  console.log(otp);
  let a = '0';
  return (
    <>
      <View style={{flexDirection: 'row'}}>
        <TextInput style={{borderWidth: 1}} value={otp.charAt(0)} />
        <TextInput style={{borderWidth: 1}} value={otp.charAt(1)} />
        <TextInput style={{borderWidth: 1}} value={otp.charAt(2)} />
        <TextInput style={{borderWidth: 1}} value={otp.charAt(3)} />
      </View>
      <View>
        <TouchableOpacity 
        style={{backgroundColor:'green'}}
        // disabled={disableBtn}

        >
          <Text>Validate otp</Text>
        </TouchableOpacity>
      </View>
      <View>
        {loading && (
          <ActivityIndicator accessibilityRole="button" size='large'></ActivityIndicator>
        )}
      </View>
    </>
  );
};

export default OTPValidation;
