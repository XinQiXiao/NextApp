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
	 	验证功能点如下
		参考链接：https://mp.weixin.qq.com/s/5KXDVxXgJ1ho5F7Ave8nfA
		1.类似React.Fragment写法 或者 <></>写法
			React.Fragment 可以用；<></>不可用
		4.Context API 对比RN有种爷孙组件属性传递方法 ？content
			TODO 

	## t0.3.0
		验证 ScrollableTabView 组件
		git 地址：https://github.com/skv-headless/react-native-scrollable-tab-view

		# 试验了 baseExample / simpleExample / scrollableExample
		# 验证 props 
			属性讲解对照：https://www.jianshu.com/p/b7788c3d106e
		# 试验 OverlayExample / FacebookExample
			OverlayExample 是 tabBarPosition 属性应用
			FacebookExample 自定有tabBar FacebookTabBar(icon)
		# t0.3.1
		# 自定义tabbar
			链接：https://www.jianshu.com/p/b0cfe7f11ee7
			参照 自己原来项目
			
	## v0.4.0 
		js 调iOS本地系统分享 & 分享和下载文件并分享

		UIActivityViewController 系统分享（主要是 分享文字，图片， url）
		UIDocumentInteractionController 分享预览文件

		项目工程中分享文件只是分享工程中固定文件，实际项目需要具体考虑以下流程
 		* 1.文件流下载；
		* 2.文件流格式转换（如转换为PDF格式文件）；
		* 3.分享文件；
		*	4.文件清理
		（如果项目中遇到此类情况可咨询我）

		补充参考（以下这些参考主要用于下载文件处理文件时）:
			iOS 沙盒说明 url:https://www.jianshu.com/p/0dbe875d7723
			iOS 文件操作 url: https://www.jianshu.com/p/e3461a905a14
			用AFNetworking 下载文件 url: https://www.jianshu.com/p/3f154e4fd4ae

	## t0.5.0
		1.修复 TabContainer 系列中 后点击的 tabbarItem 会覆盖之前 tabbarItem navBar
		(原因是 在main 中 TabContainer是Scene 拥有者，Home,Word,Mine 只是 TabContainer中组件，调用Action.refresh 会不断更新 TabContainer的 信息，实际此时Home,Word,Mine调用的Actions.refresh 都是 TabContainer 自身)
		修复过程，目前的办法是， 在TabContainer中tabItem 点击切换时，分情况 通过Actions.refresh刷新 navBar 信息，
		2.遗留bug ,上述这种方法 navBar 中 rightClick 如法，传递，如 Home 页面参数，目前想到的办法是通过redux修改。（比如 Home rightBar 是筛选，当进入筛选，筛选完回调时，通过在 筛选页面 set homeReducer来传递给 Home页面信息）