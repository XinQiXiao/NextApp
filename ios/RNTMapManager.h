//
//  RNTMapManager.h
//  NextApp
//
//  Created by qixin on 2018/5/15.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import <React/RCTBridgeModule.h>
#import <React/RCTViewManager.h>
#import "RNTMapView.h"
#import <MapKit/MapKit.h>

@interface RNTMapManager : RCTViewManager<RCTBridgeModule, MKMapViewDelegate>

@end
