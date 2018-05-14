//
//  CalendarManager.m
//  NextApp
//
//  Created by qixin on 2018/5/14.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "CalendarManager.h"
#import <React/RCTConvert.h>
#import <React/RCTUtils.h>

@implementation CalendarManager

RCT_EXPORT_MODULE();

// js 参数 -> 原生
RCT_EXPORT_METHOD(addEvent:(NSString *)name details:(NSDictionary *)details){
  NSString *location = [RCTConvert NSString:details[@"location"]];
  NSDate *time = [RCTConvert NSDate:details[@"time"]];
  NSString *des = [RCTConvert NSString:details[@"des"]];
  RCTLogInfo(@"创建日历事件 name=%@ location=%@ time=%@ des=%@", name, location, time, des);
}

// 回调函数
RCT_EXPORT_METHOD(findEvents:(RCTResponseSenderBlock)callback){
  NSArray *events = @[@"event1", @"event2", @"event3"];
  callback(@[[NSNull null], events]);
}

// promises
RCT_EXPORT_METHOD(findPromiseEvents:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject){
  NSArray *events = @[@"promise1", @"promise2", @"promise3"];
  if(events){
    resolve(events);
  } else {
    reject(@"err title", @"promise error des", nil);
  }
}

// 导出常量
- (NSDictionary *)constantsToExport{
  return @{@"firstDayOfTheWeek": @"Monday"};
}

@end
