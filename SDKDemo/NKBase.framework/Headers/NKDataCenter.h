//
// Created by sail on 8/8/16.
// Copyright (c) 2016 sail. All rights reserved.
//

#import <Foundation/Foundation.h>


@interface NKDataCenter : NSObject
+ (NKDataCenter *)instance;

- (void)putData:(id)value forKey:(NSString *)key;
- (void)delDataForKey:(NSString *)key;
- (NSString *)getStringDataForKey:(NSString *)key;
- (BOOL)getBoolDataForKey:(NSString *)key;
- (NSInteger)getIntDataForKey:(NSString *)key;
@end