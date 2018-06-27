webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_data__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_node__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__serial_serial__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__data_data__["a" /* DataPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__node_node__["a" /* NodePage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__serial_serial__["a" /* SerialPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/home/cat/webstormProject/testing/ionic_robot/src/pages/tabs/tabs.html"*/'<ion-tabs id="tabsController" color="blue">\n  <ion-tab [root]="tab1Root" tabTitle="3DModel" tabIcon="walk" id="tabsController-tab1"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Data" tabIcon="stats" id="tabsController-tab2"></ion-tab>\n  <!-- <button ion-button icon-only>\n    <ion-icon name="myIcon"></ion-icon>\n  </button> -->\n  <!-- <ion-tab tabIcon="myIcon_play" id="tabsController-play"></ion-tab> -->\n  <ion-tab [root]="tab3Root" tabTitle="Node" tabIcon="body" id="tabsController-tab3"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Serial" tabIcon="bluetooth" id="tabsController-tab4"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/cat/webstormProject/testing/ionic_robot/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var t = 1;
var data = [];
var value = Math.random() * 100;
var myChart;
var fd = [0, 0];
var zd = [0, 0];
var xd = [0, 0];
var gd = [0, 0];
var left = true;
var DataPage = /** @class */ (function () {
    function DataPage(navCtrl) {
        this.navCtrl = navCtrl;
        t = 0;
        data = [];
    }
    DataPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        myChart = echarts.init(document.getElementById('chart2'));
        var optionchart = {
            legend: {
                data: ['腓部受力', '足部受力', '膝部受力', '股部受力']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value'
            },
            yAxis: {
                type: 'category',
                data: ['右侧', '左侧']
            },
            series: [
                {
                    name: '腓部受力',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                        }
                    },
                    data: fd
                },
                {
                    name: '足部受力',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                        }
                    },
                    data: zd
                },
                {
                    name: '膝部受力',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                        }
                    },
                    data: xd
                },
                {
                    name: '股部受力',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                        }
                    },
                    data: gd
                },
            ]
        };
        myChart.setOption(optionchart);
        t = 0;
        data = [];
        var ctelement = this.container.nativeElement;
        this.EChart = echarts.init(ctelement);
        this.EChart.setOption({
            xAxis: {
                type: 'value',
                scale: 'false',
                minInterval: 1,
                min: function () {
                    if (t > 12) {
                        return t - 10;
                    }
                    else {
                        return 2;
                    }
                },
                max: function () {
                    if (t > 12) {
                        return t;
                    }
                    else {
                        return 12;
                    }
                },
                splitLine: {
                    show: true
                }
            },
            yAxis: {
                type: 'value',
                splitLine: {
                    show: true
                }
            },
            series: [{
                    type: 'line',
                    label: { normal: { show: true } },
                    showSymbol: true,
                    hoverAnimation: true,
                    data: data,
                    markPoint: {
                        data: [
                            { type: 'max', name: '最大值' },
                            { type: 'min', name: '最小值' }
                        ]
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: '平均值' }
                        ]
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#de3a38'
                                }, {
                                    offset: 1,
                                    color: 'rgba(0,0,0,0)'
                                }]),
                        }
                    }
                }],
        });
        setInterval(function () {
            if (t >= 12) {
                data.shift();
            }
            t += 1;
            fd[0] = Math.round(value + Math.random() * 110 + 100);
            fd[1] = Math.round(value + Math.random() * 110 + 100);
            zd[0] = Math.round(value + Math.random() * 110 + 100);
            zd[1] = Math.round(value + Math.random() * 110 + 100);
            xd[0] = Math.round(value + Math.random() * 110 + 100);
            xd[1] = Math.round(value + Math.random() * 110 + 100);
            gd[0] = Math.round(value + Math.random() * 110 + 100);
            gd[1] = Math.round(value + Math.random() * 110 + 100);
            if (left) {
                data.push({ value: [t, fd[0] + zd[0] + xd[0] + gd[0]] });
            }
            else {
                data.push({ value: [t, fd[1] + zd[1] + xd[1] + gd[1]] });
            }
            _this.EChart.setOption({
                series: [{
                        data: data
                    }]
            });
            myChart.setOption({
                series: [
                    {
                        name: '腓部受力',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                            }
                        },
                        data: fd
                    },
                    {
                        name: '足部受力',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                            }
                        },
                        data: zd
                    },
                    {
                        name: '膝部受力',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                            }
                        },
                        data: xd
                    },
                    {
                        name: '股部受力',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                            }
                        },
                        data: gd
                    },
                ]
            });
        }, 1500);
    };
    DataPage.prototype.left_keel = function (ev) {
        left = true;
        t = 0;
        data = [];
        this.EChart.setOption({
            series: [{
                    data: data,
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#de3a38'
                                }, {
                                    offset: 1,
                                    color: 'rgba(0,0,0,0)'
                                }]),
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#de3a38',
                            shadowBlur: 8,
                            shadowColor: '#de3a38',
                            borderColor: '#de3a38',
                            borderWidth: 2,
                            backgroundColor: 'transparent'
                        }
                    },
                }]
        });
    };
    DataPage.prototype.right_keel = function (ev) {
        left = false;
        t = 0;
        data = [];
        this.EChart.setOption({
            series: [{
                    data: data,
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#00c1de'
                                }, {
                                    offset: 1,
                                    color: 'rgba(0,0,0,0)'
                                }]),
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#00c1de',
                            shadowBlur: 8,
                            shadowColor: '#25d5f0',
                            borderColor: '#00c1de',
                            borderWidth: 2,
                            backgroundColor: 'transparent'
                        }
                    },
                }]
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('EchartsContent'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _a || Object)
    ], DataPage.prototype, "container", void 0);
    DataPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-data',template:/*ion-inline-start:"/home/cat/webstormProject/testing/ionic_robot/src/pages/data/data.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            Data\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content align="center" padding id="page3">\n    <button style="width:45%" ion-button color="danger" value="zuo" (click)="left_keel($event)">左侧</button>\n    <button style="width:45%" ion-button value="you" (click)="right_keel($event)">右侧</button>\n    <div #EchartsContent class="EchartsDiv"></div>\n    <div #EchartsContent2 id="chart2" class="EchartsDiv"></div>\n</ion-content>'/*ion-inline-end:"/home/cat/webstormProject/testing/ionic_robot/src/pages/data/data.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _b || Object])
    ], DataPage);
    return DataPage;
    var _a, _b;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NodePage = /** @class */ (function () {
    function NodePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    NodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-node',template:/*ion-inline-start:"/home/cat/webstormProject/testing/ionic_robot/src/pages/node/node.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Node\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page4">\n  <img src="../../assets/imgs/ONKOprSPOsAV00IQunwp_node.png" style="display:block;width:25%;height:auto;margin-left:auto;margin-right:auto;" />\n</ion-content>'/*ion-inline-end:"/home/cat/webstormProject/testing/ionic_robot/src/pages/node/node.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], NodePage);
    return NodePage;
}());

//# sourceMappingURL=node.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.ionViewDidEnter = function () {
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/cat/webstormProject/testing/ionic_robot/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>3D model</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <iframe src="http://47.106.73.43:5100/" width="100%" height="100%" scrolling="yes"></iframe>\n <!--<img src="../../assets/imgs/2XsXET5bSTiOM5E9mEBy_3D_oblique.png" style="display:block;width:13%;height:auto;margin-left:auto;margin-right:auto;" />-->\n</ion-content>\n'/*ion-inline-end:"/home/cat/webstormProject/testing/ionic_robot/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SerialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SerialPage = /** @class */ (function () {
    function SerialPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SerialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-serial',template:/*ion-inline-start:"/home/cat/webstormProject/testing/ionic_robot/src/pages/serial/serial.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Serial-COM1\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page5">\n\n  <form id="serialCOM1-form11">\n    <ion-item id="serialCOM1-toggle3">\n      <ion-label>\n        Connect\n      </ion-label>\n      <ion-toggle color="primary" checked="true"></ion-toggle>\n    </ion-item>\n    <button ion-button round color="light" align="left">\n      <ion-icon name="myIcon_refresh"></ion-icon>\n    </button>\n\n    <button ion-button round color="light" align="left">\n      <ion-icon name="myIcon_play"></ion-icon>\n    </button>\n\n    <button ion-button round color="light" align="left">\n      <ion-icon name="myIcon_stop"></ion-icon>\n    </button>\n\n    <ion-item id="serialCOM1-input3">\n      <ion-label stacked>\n        Set_gather_time\n      </ion-label>\n      <ion-input type="number" placeholder=""></ion-input>\n    </ion-item>\n    <ion-item id="serialCOM1-input2">\n      <ion-label stacked>\n        Send\n      </ion-label>\n      <ion-input placeholder=""></ion-input>\n    </ion-item>\n\n    <button ion-button round color="blue" small>\n      Confirm\n    </button>\n  </form>\n  \n</ion-content>'/*ion-inline-end:"/home/cat/webstormProject/testing/ionic_robot/src/pages/serial/serial.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], SerialPage);
    return SerialPage;
}());

//# sourceMappingURL=serial.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_data_data__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_node_node__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_serial_serial__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_data_data__["a" /* DataPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_node_node__["a" /* NodePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_serial_serial__["a" /* SerialPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_data_data__["a" /* DataPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_node_node__["a" /* NodePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_serial_serial__["a" /* SerialPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/cat/webstormProject/testing/ionic_robot/src/app/app.html"*/'\n<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/cat/webstormProject/testing/ionic_robot/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map