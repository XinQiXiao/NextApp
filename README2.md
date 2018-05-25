####
	for version history
	## 0.0.1
		1.创建项目;
		2.用router-flux创建页面导航;
		3.做了iOS界面适配，iOS原生启动图，iOS icon;
		4.创建helperApi,创建Storage;
		5.获取device-info;
		6.添加并测试了code-push;

	## 0.0.2
		1.运用 react-native-router-flux 中scene场景中 onRight rightTitle rightButtonImage等属性可以建立系统支持的 rightBar，（下面两种自定义NavBar都有bug）
		bug：  a.页面完全 自定义 NavBar还不支持，SafeView 中 StatusBar 和NavBar位置颠倒,
					 b.在container  componentWillMount中 Actions.refresh({}) 中 renderRightButton 也不能显示
		
		2.tabbar container 页面设置了navBar

	## 0.0.3 使用指南（iOS）
		1.原生模块 tag v0.0.3.1
			1.1 基础传值
			1.2 回调函数
			1.3 promise
			1.4 多线程
			1.5 导出常量
			1.6 枚举常量
			1.7 给JavaScript发送事件
			1.8 优化无监听处理事件
		2.原生UI模块 tag v0.0.3.2
			2.1 iOS MapView样式
			2.2 属性
			2.3 事件
			2.4 样式
			参考 https://reactnative.cn/docs/0.51/native-component-ios.html#content
			参考 https://facebook.github.io/react-native/docs/native-components-ios.html
			（RN中文网，部分内容有错误）
		3.和原生通信
			
	## 0.1.0 
		1.解决Actions.replace 应用时存在的bug，降级react-native-router-flux到 4.0.0-beta.27,
			调整start/login 路由顺序使路由跳转更合理 
		2.完善 InputComponent组件
		3.完善登录界面

	## 0.2.0
	 TODO	验证功能点如下
		参考链接：https://mp.weixin.qq.com/s/5KXDVxXgJ1ho5F7Ave8nfA
		1.类似React.Fragment写法 或者 <></>写法
		2.探究componentDidCatch 方法
		3.React.createPortal方法
		4.Context API 对比RN有种爷孙组件属性传递方法 ？content