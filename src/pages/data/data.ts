import {Component, ViewChild, ElementRef} from '@angular/core';
import {NavController} from 'ionic-angular';

declare var echarts;
let t = 1;
let data = [];
let value = Math.random() * 100;
var myChart;

var fd = [302, 302, 301];
var zd = [120, 132, 101];
var xd = [220, 182, 191];
var gd = [150, 212, 201];

@Component({
    selector: 'page-data',
    templateUrl: 'data.html'
})
export class DataPage {
    @ViewChild('EchartsContent') container: ElementRef;
    EChart: any;

    constructor(public navCtrl: NavController) {
        t = 0;
        data = [];
    }

    ionViewDidEnter() {
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
                data: ['合计', '右侧', '左侧']
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
        let ctelement = this.container.nativeElement;
        this.EChart = echarts.init(ctelement);
        this.EChart.setOption({
            xAxis: {
                type: 'value',
                scale: 'false',
                minInterval: 1,
                min: function () {
                    if (t > 12) {
                        return t - 10;
                    } else {
                        return 2;
                    }
                },
                max: function () {
                    if (t > 12) {
                        return t;
                    } else {
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
                label: {normal: {show: true}},
                showSymbol: true,
                hoverAnimation: true,
                data: data,
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
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


        setInterval(() => {
            if (t >= 12) {
                data.shift();
            }
            t += 1;
            data.push({value: [t, Math.round(value + Math.random() * 21 + 10)]});
            this.EChart.setOption({
                series: [{
                    data: data
                }]
            });

            fd[0] = fd[0]+1;
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

        }, 3000);
    }

    left_keel(ev: any) {
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
    }

    right_keel(ev: any) {
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
    }
}
