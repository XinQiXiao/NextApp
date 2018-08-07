//
//  RNShareManager.m
//  NextApp
//
//  Created by qixin on 2018/8/7.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "RNShareManager.h"
#import <React/RCTLog.h>

@implementation RNShareManager
{
  UIDocumentInteractionController *documentController;
}

// To export a module named CalendarManager
RCT_EXPORT_MODULE();

/*
 * 参考 url: https://reactnative.cn/docs/native-modules-ios/ 中的多线程
 * 需要在主线程执行
 */
- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}

/*
 * js 调用iOS原生打开系统分享功能(文件暂时不可以)
 */
RCT_EXPORT_METHOD(openSystemShare:(NSString *)title urlStr:(NSString *)urlStr){
  RCTLogInfo(@"openSystemShare title=%@ urlStr=%@", title, urlStr);
  // 分享标题和内容
  NSString *textToShare = title;
  NSURL *urlToShare = [NSURL URLWithString:urlStr];
  NSArray *activityItems = @[textToShare, urlToShare];
  // 分享 controller
  UIActivityViewController *activityVC = [[UIActivityViewController alloc]initWithActivityItems:activityItems applicationActivities:nil];
  // 不分享的方式
  activityVC.excludedActivityTypes = @[];
  // 原生 rootViewController 打开分享 controller
  [[UIApplication sharedApplication].keyWindow.rootViewController presentViewController:activityVC animated:YES completion:nil];
  activityVC.completionWithItemsHandler = ^(UIActivityType  _Nullable activityType, BOOL completed, NSArray * _Nullable returnedItems, NSError * _Nullable activityError) {
    if(completed){
      RCTLogInfo(@"分享成功");
    } else {
      RCTLogInfo(@"失败");
    }
  };
}

/*
 * js 调用iOS原生打开系统分享功能(文件暂时不可以)
 * promise 形式
 */
RCT_EXPORT_METHOD(asyncOpenSystemShare:(NSString *)title urlStr:(NSString *)urlStr resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject){
  RCTLogInfo(@"openSystemShare title=%@ urlStr=%@", title, urlStr);
  // 分享标题和内容
  NSString *textToShare = title;
  NSURL *urlToShare = [NSURL URLWithString:urlStr];
  NSArray *activityItems = @[textToShare, urlToShare];
  // 分享 controller
  UIActivityViewController *activityVC = [[UIActivityViewController alloc]initWithActivityItems:activityItems applicationActivities:nil];
  // 不分享的方式
  activityVC.excludedActivityTypes = @[];
  // 原生 rootViewController 打开分享 controller
  [[UIApplication sharedApplication].keyWindow.rootViewController presentViewController:activityVC animated:YES completion:nil];
  activityVC.completionWithItemsHandler = ^(UIActivityType  _Nullable activityType, BOOL completed, NSArray * _Nullable returnedItems, NSError * _Nullable activityError) {
    if(completed){
      RCTLogInfo(@"分享成功");
      NSDictionary *retDic = [NSDictionary dictionaryWithObjectsAndKeys:@"1", @"code", nil];
      resolve(retDic);
    } else {
      RCTLogInfo(@"失败");
      reject(@"share", @"fail", activityError);
    }
  };
}

/*
 * js 调用iOS原生打开系统分享预览文件
 * 这里我们只是简单的分享工程中的一个PDF文件
 * 实际项目，会设计到以下步骤
 * 1.文件流下载；2.文件流格式转换（如转换为PDF格式文件）；3.分享文件；4.文件清理
 */
RCT_EXPORT_METHOD(openShareFile){
  NSString *filesPath = [[NSBundle mainBundle] pathForResource:@"test" ofType:@"pdf"];
  documentController = [UIDocumentInteractionController new];
  documentController.URL = [NSURL fileURLWithPath:filesPath];
  documentController.UTI = @"com.adobe.pdf";
  [documentController presentOpenInMenuFromRect:CGRectZero inView:[UIApplication sharedApplication].keyWindow.rootViewController.view animated:YES];
}

@end
