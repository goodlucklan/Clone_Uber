import {Image, View} from 'react-native';
import {Props} from './Icon.interface';
let value: any = require('../assets/home.png');
const Icon: React.FC<Props> = props => {
  const {name, size} = props;

  switch (name) {
    case 'Home':
      value = require('../assets/home.png');
    case 'Profile':
      value = require('../assets/user.png');
  }

  return (
    <View>
      <Image
        source={value}
        style={{
          width: size,
          height: size,
        }}
      />
    </View>
  );
};

export default Icon;
