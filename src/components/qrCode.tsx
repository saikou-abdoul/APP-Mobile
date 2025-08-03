import { View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';



export const MyqrCode = () => {
     return (
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <QRCode
           value="http://ec2lt.sn"
        />
       </View>
  );
}