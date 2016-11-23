//
// Created by sail on 8/8/16.
// Copyright (c) 2016 sail. All rights reserved.
//

#import <Foundation/Foundation.h>


@interface NKDeviceUtil : NSObject
+ (NSString *)getIDFA;
+ (NSString *)getMacAddress;
+ (NSString *)getIPv4;
+ (NSString *)getIPv6;
+ (NSString *)getDeviceModel;
@end