import React, { useRef, useState } from 'react';
import { View, Button, Image } from 'react-native';
import styles from './SignatureScreen.style';
import SignatureScreen from 'react-native-signature-canvas';
import { Container, Content } from 'native-base';

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
    // @ts-ignore: Object is possibly 'null'.
    ref.current.clearSignature();
  };

  const handleConfirm = () => {
    console.log('end');
    // @ts-ignore: Object is possibly 'null'.
    ref.current.readSignature();
  };

  const style = '.m-signature-pad--footer {display: none; margin: 0px;}';

  return (
    <Container>
      <Content padder style={styles.content}>
        {/* @ts-ignore: Object is possibly 'null'. */}
        <SignatureScreen ref={ref} onOK={handleSignature} webStyle={style} />
        <View style={styles.row}>
          <Button title="Clear" onPress={handleClear} />
          <Button title="Confirm" onPress={handleConfirm} />
        </View>
        <View style={styles.preview}>
          {signature ? (
            <Image
              resizeMode={'contain'}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{ width: 335, height: 114 }}
              source={{ uri: signature }}
            />
          ) : null}
        </View>
      </Content>
    </Container>
  );
};
