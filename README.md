####
	### bug 解决 
	“iOS RN 0.45以上版本所需的第三方编译库(boost等)”问题， 链接http://bbs.reactnative.cn/topic/4301/ios-rn-0-45以上版本所需的第三方编译库-boost等
	，或者拷贝之前项目中的node_modules/react-native/third-party,下文件（0.45以上）。
	
	### 项目说明
		采用 react-native-router-flux 导航组件
				react-native-storage  AsyncStorage 

		## 
		适配 iOS
		采用原生 LaunchImage 和 React-native 提供的 SafeAreaView 组件


	### 组件导入补充说明
		## react-native-device-info 获取设备信息
			#链接：https://github.com/rebeccahughes/react-native-device-info#getmodel
			
			在*node_modules*里找到*react-native-device-info/deviceinfo.js*在文件的末尾添加方法：
			```js
			getAllDeviceInfo: function(){
				return RNDeviceInfo;
			}
			```

	### 隐私问题 如下文件并为上传
		#helpers 下
			config.js


	### 热更新

		## code-push 
		参考gitHub： https://github.com/Microsoft/react-native-code-push
		iOS 配置 https://github.com/Microsoft/react-native-code-push/blob/master/docs/setup-ios.md

		参考链接：https://www.jianshu.com/p/61af70e4d281
		参考链接：https://www.jianshu.com/p/fa362da953c7

		遇到回滚问题,在 index.js中有解决方法

		# 打包 release
			react-native bundle --entry-file index.js --platform ios --dev false --bundle-output ./bundles/ios.jsbundle --assets-dest ./bundles --dev false
		# 发布到code-push Staging
			code-push release-react NextApp ios

		# 查看历史版本
			code-push deployment history NextApp Staging