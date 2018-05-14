//
//  CalendarEmitter.m
//  NextApp
//
//  Created by qixin on 2018/5/14.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "CalendarEmitter.h"

#define EVENT_REMINDER @"EventReminder"

@implementation CalendarEmitter
{
  bool hasListeners;
}

RCT_EXPORT_MODULE();

-(NSArray<NSString *> *)supportedEvents{
  return @[EVENT_REMINDER];
}

// 在添加第一个监听函数时触发
-(void)startObserving {
  hasListeners = YES;
  // Set up any upstream listeners or background tasks as necessary
}

// Will be called when this module's last listener is removed, or on dealloc.
-(void)stopObserving {
  hasListeners = NO;
  // Remove upstream listeners, stop unnecessary background tasks
}

- (void)calendarEventReminderReceived:(NSNotification *)notification{
  NSString *eventName = notification.userInfo[@"name"];
  if(hasListeners){
    // Only send events if anyone is listening
    [self sendEventWithName:EVENT_REMINDER body:@{@"name": eventName}];
  }
}

// 导出常量
- (NSDictionary *)constantsToExport{
  return @{@"eventName": EVENT_REMINDER};
}

@end
