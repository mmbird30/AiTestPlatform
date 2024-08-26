import Taro from "@tarojs/taro";
import {View, Image} from '@tarojs/components'
import {AtButton} from 'taro-ui';
import headerBg from "../../assets/headerBg.jpg";
import './index.scss'
import GlobalFooter from '../../components/GlobalFooter';
import questionResults from "../../data/question_Results.json";
import {getBestQuestionResult} from "../../utils/BizUtils";
import questions from "../../data/questions.json";


/*
*测试结果页面
 */
export default () => {
  //获取答案
  const answerList = Taro.getStorageSync("answerList");
  if(!answerList || answerList.length < 1){
    Taro.showToast({
      title: '答案为空',
      icon: 'error',
      duration: 3000//持续的时间
    })
  }
//获取计算结果
  const result = getBestQuestionResult(answerList, questions, questionResults);
  return (
    <View className="resultPage">
      <View className='at-article__h1 tital'>
        {result.resultName}
      </View>
      <View className='at-article__h2 subTital'>
        {result.resultDesc}
      </View>
      <AtButton type='primary' circle className="enterBtn" onClick={()=>{
        Taro.reLaunch({
          url: '/pages/index/index',
        })
      }}
      >
        返回主页
      </AtButton>
      <Image className="headerBg" src={headerBg} />
      <GlobalFooter />
    </View>
  );
};

