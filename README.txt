

1.导入CFNetwork.framework,SystemConfiguration.framework,libstd++.6.0.9.tbd, CoreTelephony.framework,libz.dylib,libsqlite3.0.dylib,StoreKit.framework

2.导入SDKLibNK.framework,NKBase.framework,libBoring.a,libgRPC.a,libRPC-RxLibrary.a, libProtobuf.a, libRPC-ProtoRPC.a, libRPC-Core.a, libNKSDKProtos.a

3.加入nksdkres.bundle,nkconfig.plist

4.iOS 9系统策略更新，限制了http协议的访问，此外应用需要在“Info.plist”中将要使用的URL Schemes列为白名单，才可正常检查其他应用是否安装。
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


7.接入接口
	a.初始化：- (void)initWithGameID:(NSString *)gameID gameName:(NSString *)gameName isLandscape:(BOOL)isLandscape listener:(id<NKListenerDelegate>)listener;
	b.登录：[[NKBaseSDK instance] login];
    	c.选线：[[NKBaseSDK instance] selectLineID:@"Line1" lineName:@"游戏区服1"];
	d.设置支付参数，支付：
   		NKPayInfo *payInfo = [NKPayInfo instance];
		//商品名字
    		payInfo.productName = @"258来一发";
		//支付商品id
    		payInfo.productId = @"201611082580";
		//支付价格
    		payInfo.amount = 258;
		//汇率
    		payInfo.exchangeRate = 10;
		//游戏自定义参数
   		payInfo.extra = @"serverid=1&channel=1&prepaid_id=2";
    		[[NKBaseSDK instance] pay];

以上具体设置可以参考DEMO
