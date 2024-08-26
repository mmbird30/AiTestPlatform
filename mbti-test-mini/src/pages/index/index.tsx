import Taro from "@tarojs/taro";
import {View, Image} from '@tarojs/components'
import {AtButton} from 'taro-ui';
import headerBg from "../../assets/headerBg.jpg";
import './index.scss'
import GlobalFooter from '../../components/GlobalFooter';

export default () => {
  return (
    <View className="indexPage">
      <View className='at-article__h1 tital'>
        MBTI性格测试
      </View>
      <View className='at-article__h2 subTital'>
        只需两分钟，测出你的性格类型
      </View>
      <AtButton type='primary' circle className="enterBtn" onClick={()=>{
        Taro.navigateTo({
          url: '/pages/doQuestion/index',
        })
      }}
      >
        开始测试
      </AtButton>
      <Image className="headerBg" src={headerBg} />
      <GlobalFooter />
    </View>
  );
};


