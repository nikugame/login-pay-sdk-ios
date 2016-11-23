//
// Created by sail on 8/8/16.
// Copyright (c) 2016 sail. All rights reserved.
//

#import <Foundation/Foundation.h>


@interface NKConfig : NSObject
+ (NKConfig *)instance;

- (id)getConfigElementWithKey:(NSString *)key;
//- (int)getLoginPort;
//- (NSString *)getPayHost;
//- (int)getPayPort;
//- (NSString *)getImplSDK;
@end