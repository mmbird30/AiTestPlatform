export default defineAppConfig({
  pages: [
    'pages/index/index',//主页
    'pages/doQuestion/index',//答题页面
    'pages/result/index'//结果页面
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'MBTI性格测试',
    navigationBarTextStyle: 'black'
  }
})
