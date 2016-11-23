//
//  ViewController.m
//  SDKDemo
//
//  Created by sail on 8/10/16.
//  Copyright © 2016 sail. All rights reserved.
//

#import <NKBase/NKPayInfo.h>
#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    [self.view setBackgroundColor:[UIColor grayColor]];
    UIButton *button = [UIButton buttonWithType:UIButtonTypeRoundedRect];
    button.frame = CGRectMake(95, 20, 200, 27);
    [button setTitle:@"登录" forState:UIControlStateNormal];
    [button addTarget:self action:@selector(loginClick:) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:button];

    UIButton *button2 = [UIButton buttonWithType:UIButtonTypeRoundedRect];
    button2.frame = CGRectMake(95, 90, 200, 27);
    [button2 setTitle:@"切换账号" forState:UIControlStateNormal];
    [button2 addTarget:self action:@selector(switchAccountClick:) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:button2];


    UIButton *button3 = [UIButton buttonWithType:UIButtonTypeRoundedRect];
    button3.frame = CGRectMake(95, 120, 200, 27);
    [button3 setTitle:@"支付" forState:UIControlStateNormal];
    [button3 addTarget:self action:@selector(payClick:) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:button3];

    UIButton *button4 = [UIButton buttonWithType:UIButtonTypeRoundedRect];
    button4.frame = CGRectMake(95, 160, 200, 27);
    [button4 setTitle:@"用户中心" forState:UIControlStateNormal];
    [button4 addTarget:self action:@selector(userCenterClick:) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:button4];

}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (void)userCenterClick:(id)userCenterClick {
    [[NKBaseSDK instance] userCenter];
}

- (void)payClick:(id)payClick {
    NKPayInfo *payInfo = [NKPayInfo instance];
    payInfo.productName = @"258来一发";
    // payInfo.productId = @"20161108180";
    payInfo.productId = @"201611082580";
    payInfo.amount = 258;
    payInfo.exchangeRate = 10;
    payInfo.extra = @"serverid=1&channel=1&prepaid_id=2";
    [[NKBaseSDK instance] pay];
}

- (void)switchAccountClick:(id)switchAccountClick {
    [[NKBaseSDK instance] switchAccount];
}

- (void)loginClick:(id)loginClick {
    [[NKBaseSDK instance] login];
    [[NKBaseSDK instance] selectLineID:@"Line1" lineName:@"游戏区服1"];
}

- (void)onInitWithErrCode:(int)errCode json:(NSDictionary *)json {
    NSLog(@"onInitWithErrCode errorCode:%d json:%@", errCode, json);
}

- (void)onLoginWithErrCode:(int)errCode json:(NSDictionary *)json {
    NSLog(@"onLoginWithErrCode errorCode:%d json:%@", errCode, json);
}

- (void)onLogoutWithErrCode:(int)errCode json:(NSDictionary *)json {
    NSLog(@"onLogoutWithErrCode errorCode:%d json:%@", errCode, json);
}

- (void)onPayWithErrCode:(int)errCode json:(NSDictionary *)json {
    NSLog(@"onPayWithErrCode errorCode:%d json:%@", errCode, json);
}


@end
