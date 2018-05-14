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

	## 0.0.3
		TODO 使用指南（iOS）
		1.原生模块
			1.1基础传值
			1.2回调函数
			1.3promise
			1.4多线程
			1.5导出常量
			1.6枚举常量
			1.7给JavaScript发送事件
			1.8优化无监听处理事件