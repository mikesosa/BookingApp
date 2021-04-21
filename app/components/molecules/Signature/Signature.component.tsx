import React, { useRef, useState } from 'react';
import { StyleSheet, View, Button, Image } from 'react-native';
import SignatureScreen from 'react-native-signature-canvas';

export const Sign = () => {
  const [signature, setSignature] = useState('');
  const ref = useRef();

  const perro = (x: any) => {
    setSignature(x);
  };

  const handleSignature = (sig: any) => {
    console.log(sig);
    perro(sig);
  };

  const handleClear = () => {
    ref.current.clearSignature();
  };

  const handleConfirm = () => {
    console.log('end');
    ref.current.readSignature();
  };

  const style = '.m-signature-pad--footer {display: none; margin: 0px;}';

  return (
    <View style={styles.container}>
      <SignatureScreen ref={ref} onOK={handleSignature} webStyle={style} />
      <View style={styles.row}>
        <Button title="Clear" onPress={handleClear} />
        <Button title="Confirm" onPress={handleConfirm} />
      </View>
      <View style={styles.preview}>
        {signature ? (
          <Image
            resizeMode={'contain'}
            style={{ width: 335, height: 114 }}
            source={{ uri: signature }}
          />
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  preview: {
    width: 335,
    height: 114,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 15,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 250,
    padding: 10,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
});
