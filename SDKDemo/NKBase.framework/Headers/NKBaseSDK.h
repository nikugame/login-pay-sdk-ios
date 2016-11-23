//
//  NKBaseSDK.h
//  NKBaseSDK
//
//  Created by sail on 8/6/16.
//  Copyright © 2016 sail. All rights reserved.
//

#import <Foundation/Foundation.h>

@protocol NKListenerDelegate
- (void)onInitWithErrCode:(int)errCode json:(NSDictionary *)json;
- (void)onLoginWithErrCode:(int)errCode json:(NSDictionary *)json;
- (void)onLogoutWithErrCode:(int)errCode json:(NSDictionary *)json;
- (void)onPayWithErrCode:(int)errCode json:(NSDictionary *)json;
@end

@interface NKBaseSDK : NSObject

@property(nonatomic, assign) id<NKListenerDelegate> listener;
@property(nonatomic, retain) NSString *lineID;
@property(nonatomic, retain) NSString *lineName;
@property(nonatomic, retain) NSString *gameID;
@property(nonatomic, retain) NSString *gameName;
@property(nonatomic, assign) BOOL isLandscape;
@property(nonatomic, retain) NKBaseSDK *instance;
@property(nonatomic, assign) BOOL isUserLogged;
@property(nonatomic, retain) NSString *wxappid;

+ (NKBaseSDK *)instance;

- (NSString *)getSDKVersion;

- (int)getPlatformID;

- (void)initWithGameID:(NSString *)gameID gameName:(NSString *)gameName isLandscape:(BOOL)isLandscape listener:(id<NKListenerDelegate>)listener;

- (void)login;

- (void)pay;

- (void)selectLineID:(NSString *)lineID lineName:(NSString *) lineName;

- (void)userCenter;

- (void)switchAccount;

- (void)handleOpenURL:(NSURL *)url;

- (void)applicationWillEnterForeground;


@end
