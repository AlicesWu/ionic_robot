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
            selector: 'page-tabs',template:/*ion-inline-start:"/home/weihanlin/Documents/ionic/ionic_robot/src/pages/tabs/tabs.html"*/'<ion-tabs id="tabsController" color="blue">\n  <ion-tab [root]="tab1Root" tabTitle="3D模型" tabIcon="walk" id="tabsController-tab1"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="数据" tabIcon="stats" id="tabsController-tab2"></ion-tab>\n  <!-- <button ion-button icon-only>\n    <ion-icon name="myIcon"></ion-icon>\n  </button> -->\n  <!-- <ion-tab tabIcon="myIcon_play" id="tabsController-play"></ion-tab> -->\n  <ion-tab [root]="tab3Root" tabTitle="报告" tabIcon="body" id="tabsController-tab3"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="连接" tabIcon="logo-rss" id="tabsController-tab4"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/weihanlin/Documents/ionic/ionic_robot/src/pages/tabs/tabs.html"*/
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


var DataPage = /** @class */ (function () {
    function DataPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    DataPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var t = 1;
        var data = [];
        var value = Math.random() * 100;
        var ctelement = this.container.nativeElement;
        this.EChart = echarts.init(ctelement);
        this.EChart.setOption({
            title: {
                text: '+'
            },
            xAxis: {
                type: 'value',
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%'],
                splitLine: {
                    show: false
                }
            },
            series: [{
                    type: 'line',
                    showSymbol: false,
                    hoverAnimation: false,
                    data: data
                }]
        });
        setInterval(function () {
            t += 1;
            data.push({ value: [t, Math.round(value + Math.random() * 21 + 10)] });
            _this.EChart.setOption({
                series: [{
                        data: data
                    }]
            });
        }, 1000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('EchartsContent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], DataPage.prototype, "container", void 0);
    DataPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-data',template:/*ion-inline-start:"/home/weihanlin/Documents/ionic/ionic_robot/src/pages/data/data.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Data\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page3">\n  <div #EchartsContent class="EchartsDiv"></div>\n</ion-content>'/*ion-inline-end:"/home/weihanlin/Documents/ionic/ionic_robot/src/pages/data/data.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], DataPage);
    return DataPage;
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
    NodePage.prototype.node_change = function (ev) {
    };
    NodePage.prototype.select_diagnosis = function (ev) {
        var pagetitle = document.getElementById("pagetitle");
        pagetitle.innerHTML = "病历";
    };
    NodePage.prototype.select_activity = function (ev) {
        var pagetitle = document.getElementById("pagetitle");
        //pagetitle.setAttribute("text-align", "center");
        pagetitle.innerHTML = "活动";
        //pagetitle.style.textAlign="center";
    };
    NodePage.prototype.select_history = function (ev) {
        var pagetitle = document.getElementById("pagetitle");
        pagetitle.innerHTML = "训练计划";
    };
    NodePage.prototype.search = function (ev) {
        var searchText = ev.target.value;
        // this.hidden.clear();
        // for (var i=0; i<3; i++)
        // 	this.hidden.push(false);
        // get the blocks of reports
        var item = document.getElementsByClassName("list-item");
        // let item = document.querySelectorAll(".list-item");
        // get the inner content of blocks
        var discript = document.getElementsByClassName("discript");
        var hightlight_ = '<span style="background:yellow;">';
        var _hightlight = '</span>';
        // delete current highlight
        for (var i = 0; i < item.length; i++) {
            // able the all items
            item[i].style.display = "inline";
            // item[i].visibility = "visible";
            // item[i].display="inline";
            // item[i].hide = true;
            // this.hidden[i] = false;
            var contents = discript[i].innerHTML;
            var first_index = contents.indexOf(hightlight_);
            if (first_index == -1) {
                continue;
            }
            var pieces1 = contents.split(hightlight_);
            var pieces2 = pieces1[1].split(_hightlight);
            var arrayObj = new Array();
            arrayObj.push(pieces1[0], pieces2[0], pieces2[1]);
            discript[i].innerHTML = arrayObj.join('');
        }
        if (searchText && searchText.trim() != '') {
            console.log(searchText);
            // add highlight
            for (var i = 0; i < item.length; i++) {
                var contents = discript[i].innerHTML;
                var unhighlight = contents.split(searchText);
                if (unhighlight.length > 1) {
                    discript[i].innerHTML = unhighlight.join(hightlight_ + searchText + _hightlight);
                }
                else {
                    // disable the unmatched items
                    item[i].style.display = "none";
                    // item[i].hide();
                    // item[i].visibility = "hidden";
                    // item[i].hide = true;
                    // item[i].display="none";
                    // if (this.hidden[i]) {
                    //     this.hidden.splice(i, 1); // Remove the flag if the buttons are already hidden, so that they get displayed again.
                    // } else {
                    //     this.hidden[i] = true;
                    // }
                }
            }
        }
    };
    NodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-node',template:/*ion-inline-start:"/home/weihanlin/Documents/ionic/ionic_robot/src/pages/node/node.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center id="pagetitle" class="center">\n      活动\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<script src="https://code.jquery.com/jquery-3.3.1.js"></script>\n<ion-content padding id="page4">\n <!--  <img src="../../assets/imgs/ONKOprSPOsAV00IQunwp_node.png" style="display:block;width:25%;height:auto;margin-left:auto;margin-right:auto;" /> -->\n <!-- Segment buttons with icons -->\n 	<div padding>\n	  <ion-segment [(ngModel)]="tags" (ionChange)="node_change($event)">\n	    <ion-segment-button value="diagnosis" (ionSelect)="select_diagnosis($event)">\n	      <ion-icon name="diagnosis"></ion-icon>\n	    </ion-segment-button>\n\n	    <ion-segment-button value="activity" (ionSelect)="select_activity($event)">\n	      <ion-icon name="activity"></ion-icon>\n	    </ion-segment-button>\n\n	    <ion-segment-button value="history" (ionSelect)="select_history($event)">\n	      <ion-icon name="history"></ion-icon>\n	    </ion-segment-button>\n	  </ion-segment>\n	</div>\n\n	\n	<div [ngSwitch]="tags">\n	  <ion-searchbar (ionInput)="search($event)" *ngSwitchCase="\'diagnosis\'"></ion-searchbar>\n	  <ion-list sliding *ngSwitchCase="\'diagnosis\'">\n	    <ion-item class="list-item">\n	      <h5>6月15日 17:15</h5>\n	      <h6 class="discript">运动功能障碍：物理治疗师进行运动治疗、下肢运动...</h6>\n	    </ion-item>\n	    <ion-item class="list-item">\n	      <h5>6月8日 16:55</h5>\n	      <h6 class="discript">自我照顾障碍：作业治疗师进行上肢运动控制训练、...</h6>\n	    </ion-item>\n	    <ion-item class="list-item">\n	      <h5>6月4日 15:34</h5>\n	      <h6 class="discript">左侧偏身忽略：作业治疗师可作感知测验和训练，经...</h6>\n	    </ion-item>\n	  </ion-list>\n\n	  <ion-list *ngSwitchCase="\'activity\'">\n	    <ion-item>\n	      <h2>Luna</h2>\n	    </ion-item>\n	  </ion-list>\n\n	   <ion-list *ngSwitchCase="\'history\'">\n	    <ion-item>\n	      <h2>Luna</h2>\n	    </ion-item>\n	  </ion-list>\n	</div>\n\n</ion-content>'/*ion-inline-end:"/home/weihanlin/Documents/ionic/ionic_robot/src/pages/node/node.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object])
    ], NodePage);
    return NodePage;
    var _a;
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
            selector: 'page-home',template:/*ion-inline-start:"/home/weihanlin/Documents/ionic/ionic_robot/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>3D model</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <iframe src="http://47.106.73.43:5100" width="100%" height="100%" scrolling="yes"></iframe>\n <!--<img src="../../assets/imgs/2XsXET5bSTiOM5E9mEBy_3D_oblique.png" style="display:block;width:13%;height:auto;margin-left:auto;margin-right:auto;" />-->\n</ion-content>\n'/*ion-inline-end:"/home/weihanlin/Documents/ionic/ionic_robot/src/pages/home/home.html"*/
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
            selector: 'page-serial',template:/*ion-inline-start:"/home/weihanlin/Documents/ionic/ionic_robot/src/pages/serial/serial.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Serial-COM1\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page5">\n\n  <form id="serialCOM1-form11">\n    <ion-item id="serialCOM1-toggle3">\n      <ion-label>\n        Connect\n      </ion-label>\n      <ion-toggle color="primary" checked="true"></ion-toggle>\n    </ion-item>\n    <button ion-button round color="light" align="left">\n      <ion-icon name="myIcon_refresh"></ion-icon>\n    </button>\n\n    <button ion-button round color="light" align="left">\n      <ion-icon name="myIcon_play"></ion-icon>\n    </button>\n\n    <button ion-button round color="light" align="left">\n      <ion-icon name="myIcon_stop"></ion-icon>\n    </button>\n\n    <ion-item id="serialCOM1-input3">\n      <ion-label stacked>\n        Set_gather_time\n      </ion-label>\n      <ion-input type="number" placeholder=""></ion-input>\n    </ion-item>\n    <ion-item id="serialCOM1-input2">\n      <ion-label stacked>\n        Send\n      </ion-label>\n      <ion-input placeholder=""></ion-input>\n    </ion-item>\n\n    <button ion-button round color="blue" small>\n      Confirm\n    </button>\n  </form>\n  \n</ion-content>'/*ion-inline-end:"/home/weihanlin/Documents/ionic/ionic_robot/src/pages/serial/serial.html"*/
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/weihanlin/Documents/ionic/ionic_robot/src/app/app.html"*/'\n<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/weihanlin/Documents/ionic/ionic_robot/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map