//
//  RNTMapView.h
//  NextApp
//
//  Created by qixin on 2018/5/15.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import <MapKit/MapKit.h>
#import <React/RCTComponent.h>

@interface RNTMapView : MKMapView

@property (nonatomic, copy) RCTBubblingEventBlock onRegionChange;

@end
