//
// Created by sail on 8/10/16.
// Copyright (c) 2016 sail. All rights reserved.
//

#import <Foundation/Foundation.h>


@interface NKPayInfo : NSObject
+ (NKPayInfo *)instance;
@property(nonatomic,retain)NSString *orderId;
@property(nonatomic,retain)NSString *productId;
@property(nonatomic,retain)NSString *productName;
@property(nonatomic,assign)int amount;
@property(nonatomic,assign)int exchangeRate;
@property(nonatomic,retain)NSString *extra;
@end