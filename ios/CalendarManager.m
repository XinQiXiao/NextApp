//
//  CalendarManager.m
//  NextApp
//
//  Created by qixin on 2018/5/14.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "CalendarManager.h"
#import <React/RCTConvert.h>

@implementation CalendarManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addEvent:(NSString *)name details:(NSDictionary *)details){
  NSString *location = [RCTConvert NSString:details[@"location"]];
  NSDate *time = [RCTConvert NSDate:details[@"time"]];
  NSString *des = [RCTConvert NSString:details[@"des"]];
  RCTLogInfo(@"创建日历事件 name=%@ location=%@ time=%@ des=%@", name, location, time, des);
}

@end
