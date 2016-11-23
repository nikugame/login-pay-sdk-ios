//
// Created by sail on 8/10/16.
// Copyright (c) 2016 sail. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "NKBaseSDK.h"

@interface NKBaseSDK (Implement)

- (void)sdkInit;
- (void)sdkPay;
- (void)sdkLogin;
- (void)sdkSwitchAccount;
- (void)sdkUserCenter;
- (void)sdkHandleOpenURL:(NSURL *)url;
- (void)sdkApplicationWillEnterForeground;
- (NSString *)sdkVersion;
- (int)platformID;
- (void)createOder:(NSString*)productId amount:(int)amount productName:(NSString*)productName extra:(NSString*)extra mode:(NSString*)mode;
- (void)processPayErro:(NSError*) error;
@end