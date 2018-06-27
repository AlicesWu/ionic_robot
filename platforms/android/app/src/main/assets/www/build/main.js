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
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], DataPage.prototype, "container", void 0);
    DataPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-data',template:/*ion-inline-start:"/home/weihanlin/Documents/ionic/ionic_robot/src/pages/data/data.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            Data\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content align="center" padding id="page3">\n    <button style="width:45%" ion-button color="danger" value="zuo" (click)="left_keel($event)">左侧</button>\n    <button style="width:45%" ion-button value="you" (click)="right_keel($event)">右侧</button>\n    <div #EchartsContent class="EchartsDiv"></div>\n    <div #EchartsContent2 id="chart2" class="EchartsDiv"></div>\n</ion-content>'/*ion-inline-end:"/home/weihanlin/Documents/ionic/ionic_robot/src/pages/data/data.html"*/
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
    NodePage.prototype.ionViewDidEnter = function () {
        this.hidden = new Array();
        var item = document.getElementsByClassName("list-item");
        for (var i = 0; i < item.length; i++) {
            this.hidden.push(false);
        }
        console.log("on start");
    };
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
        // get the blocks of reports
        var item = document.getElementsByClassName("list-item");
        // get the inner content of blocks
        var discript = document.getElementsByClassName("discript");
        var time = document.getElementsByClassName("time");
        var hightlight_ = '<span style="background:yellow;">';
        var _hightlight = '</span>';
        // console.log("item length ", item.length);
        // for (var i=0; i<item.length; i++)
        // 	console.log("hidden[", i ,"]", this.hidden[i]);
        // delete current highlight
        for (var i = 0; i < item.length; i++) {
            // able the all items
            // item[i].style.display="inline";
            this.hidden[i] = false;
            var contents = discript[i].innerHTML;
            var first_index = contents.indexOf(hightlight_);
            if (first_index != -1) {
                var unhighlight = contents.split(hightlight_);
                discript[i].innerHTML = unhighlight.join('');
                var contents = discript[i].innerHTML;
                var unhighlight = contents.split(_hightlight);
                discript[i].innerHTML = unhighlight.join('');
            }
            var contents = time[i].innerHTML;
            var first_index = contents.indexOf(hightlight_);
            if (first_index != -1) {
                // var pieces1 = contents.split(hightlight_);
                // var pieces2 = pieces1[1].split(_hightlight);
                // var arrayObj = new Array();
                // arrayObj. push(pieces1[0], pieces2[0], pieces2[1]);
                // time[i].innerHTML = arrayObj.join('');
                var unhighlight = contents.split(hightlight_);
                time[i].innerHTML = unhighlight.join('');
                var contents = time[i].innerHTML;
                var unhighlight = contents.split(_hightlight);
                time[i].innerHTML = unhighlight.join('');
            }
        }
        if (searchText && searchText.trim() != '') {
            console.log(searchText);
            // add highlight
            for (var i = 0; i < item.length; i++) {
                var contents = discript[i].innerHTML;
                var unhighlight = contents.split(searchText);
                var time_contents = time[i].innerHTML;
                var time_unhighlight = time_contents.split(searchText);
                if (unhighlight.length > 1) {
                    discript[i].innerHTML = unhighlight.join(hightlight_ + searchText + _hightlight);
                }
                if (time_unhighlight.length > 1) {
                    time[i].innerHTML = time_unhighlight.join(hightlight_ + searchText + _hightlight);
                    console.log("time ", i);
                    console.log(time[i].innerHTML);
                }
                if (unhighlight.length <= 1 && time_unhighlight.length <= 1) {
                    // disable the unmatched items
                    // item[i].style.display="none";
                    this.hidden[i] = true;
                }
            }
        }
    };
    NodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-node',template:/*ion-inline-start:"/home/weihanlin/Documents/ionic/ionic_robot/src/pages/node/node.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title id="pagetitle" class="center">\n      活动\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<script src="https://code.jquery.com/jquery-3.3.1.js"></script>\n<ion-content padding id="page4">\n\n 	<div padding>\n	  <ion-segment [(ngModel)]="tags" (ionChange)="node_change($event)">\n	    <ion-segment-button value="diagnosis" (ionSelect)="select_diagnosis($event)">\n	      <ion-icon name="diagnosis"></ion-icon>\n	    </ion-segment-button>\n\n	    <ion-segment-button value="activity" (ionSelect)="select_activity($event)">\n	      <ion-icon name="activity"></ion-icon>\n	    </ion-segment-button>\n\n	    <ion-segment-button value="history" (ionSelect)="select_history($event)">\n	      <ion-icon name="history"></ion-icon>\n	    </ion-segment-button>\n	  </ion-segment>\n	</div>\n\n	\n	<div [ngSwitch]="tags">\n	  <ion-searchbar (ionInput)="search($event)" *ngSwitchCase="\'diagnosis\'"></ion-searchbar>\n	  <ion-list sliding *ngSwitchCase="\'diagnosis\'">\n	    <ion-item class="list-item" [hidden]="hidden[0]" >\n	      <h5 class="time">6月15日 17:15</h5>\n	      <h6 class="discript">运动功能障碍：物理治疗师进行运动治疗、下肢运动...</h6>\n	    </ion-item>\n	    <ion-item class="list-item" [hidden]="hidden[1]" >\n	      <h5 class="time">6月8日 16:55</h5>\n	      <h6 class="discript">自我照顾障碍：作业治疗师进行上肢运动控制训练、...</h6>\n	    </ion-item>\n	    <ion-item class="list-item" [hidden]="hidden[2]" >\n	      <h5 class="time">6月4日 15:34</h5>\n	      <h6 class="discript">左侧偏身忽略：作业治疗师可作感知测验和训练，经...</h6>\n	    </ion-item>\n	    <ion-item class="list-item" [hidden]="hidden[3]" >\n	      <h5 class="time">6月1日 16:55</h5>\n	      <h6 class="discript">交流障碍：言语治疗师进行评定和治疗。</h6>\n	    </ion-item>\n	    <ion-item class="list-item" [hidden]="hidden[4]" >\n	      <h5 class="time">5月25日 15:34</h5>\n	      <h6 class="discript"><br>反应性抑郁，缺乏家庭照顾：心理工作者及康复护士...</h6>\n	    </ion-item>\n	  </ion-list>\n\n	  <ion-list sliding *ngSwitchCase="\'activity\'">\n	    <ion-item class="list-item-activity" >\n	      <h5>6月15日 17:15</h5>\n	      <h6 class="discript-activity">运动功能障碍：物理治疗师进行运动治疗、下肢运动...</h6>\n	    </ion-item>\n	    <ion-item class="list-item-activity" >\n	      <h5>6月8日 16:55</h5>\n	      <h6 class="discript-activity">自我照顾障碍：作业治疗师进行上肢运动控制训练、...</h6>\n	    </ion-item>\n	    <ion-item class="list-item-activity" >\n	      <h5>6月4日 15:34</h5>\n	      <h6 class="discript-activity">左侧偏身忽略：作业治疗师可作感知测验和训练，经...</h6>\n	    </ion-item>\n	  </ion-list>\n\n	  <ion-list sliding *ngSwitchCase="\'history\'">\n	    <ion-item class="list-item-history" >\n	      <h5>6月15日 17:15</h5>\n	      <h6 class="discript-history">运动功能障碍：物理治疗师进行运动治疗、下肢运动...</h6>\n	    </ion-item>\n	    <ion-item class="list-item-history" >\n	      <h5>6月8日 16:55</h5>\n	      <h6 class="discript-history">自我照顾障碍：作业治疗师进行上肢运动控制训练、...</h6>\n	    </ion-item>\n	    <ion-item class="list-item-history" >\n	      <h5>6月4日 15:34</h5>\n	      <h6 class="discript-history">左侧偏身忽略：作业治疗师可作感知测验和训练，经...</h6>\n	    </ion-item>\n	  </ion-list>\n\n	</div>\n\n</ion-content>'/*ion-inline-end:"/home/weihanlin/Documents/ionic/ionic_robot/src/pages/node/node.html"*/
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
            selector: 'page-home',template:/*ion-inline-start:"/home/weihanlin/Documents/ionic/ionic_robot/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>3D model</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<<<<<<< HEAD\n    <iframe src="http://47.106.73.43:5100/" width="100%" height="100%" scrolling="yes"></iframe>\n=======\n    <iframe src="http://47.106.73.43:5100" width="100%" height="100%" scrolling="yes"></iframe>\n>>>>>>> 2ab5a0a58cc0611ba2475ef6bb61d57fd8078f5e\n <!--<img src="../../assets/imgs/2XsXET5bSTiOM5E9mEBy_3D_oblique.png" style="display:block;width:13%;height:auto;margin-left:auto;margin-right:auto;" />-->\n</ion-content>\n'/*ion-inline-end:"/home/weihanlin/Documents/ionic/ionic_robot/src/pages/home/home.html"*/
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