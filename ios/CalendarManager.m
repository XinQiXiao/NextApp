//
//  CalendarManager.m
//  NextApp
//
//  Created by qixin on 2018/5/14.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "CalendarManager.h"

@implementation CalendarManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location){
  RCTLogInfo(@"创建日历事件 name=%@ location=%@", name, location);
}

@end
