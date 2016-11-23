微信接入
1、开发者需要在工程中链接上:SystemConfiguration.framework,libz.dylib,libsqlite3.0.dylib。
2、开发者需要在工程中链接上 CoreTelephony.framework
3. 需要在Build Phases中Link  Security.framework


4、iOS 9系统策略更新，限制了http协议的访问，此外应用需要在“Info.plist”中将要使用的URL Schemes列为白名单，才可正常检查其他应用是否安装。
受此影响，当你的应用在iOS 9中需要使用微信SDK的相关能力（分享、收藏、支付、登录等）时，需要在“Info.plist”里增加如下代码：
<key>LSApplicationQueriesSchemes</key>
<array>
<string>weixin</string>
</array>
<key>NSAppTransportSecurity</key>
<dict>
<key>NSAllowsArbitraryLoads</key>
<true/>
</dict>

5.AppDelegate类中加上[WXApi handleOpenURL:url delegate:[WXApiManager sharedManager]];
示例如下：
- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url sourceApplication:(NSString *)sourceApplication annotation:(id)annotation {
    return [WXApi handleOpenURL:url delegate:[WXApiManager sharedManager]];
}
- (BOOL)application:(UIApplication *)app openURL:(NSURL *)url options:(NSDictionary<NSString*, id> *)options{
   return [WXApi handleOpenURL:url delegate:[WXApiManager sharedManager]];
}

6.在nkconfig.plist文件总加上微信APPID。wxappid：

以上具体设置可以参考DEMO
