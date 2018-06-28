import {Component, ViewChild, ElementRef} from '@angular/core';
import {NavController} from 'ionic-angular';

declare var echarts;
let t = 1;
let data = [];
let value = Math.random() * 100;
var myChart;

var fd = [0, 0];
var zd = [0, 0];
var xd = [0, 0];
var gd = [0, 0];
var left = true;

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
                            fontSize: 16,
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
                            fontSize: 16,
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
                            fontSize: 16,
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
                            fontSize: 16,
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

            fd[0] = Math.round(value + Math.random() * 110 + 100);
            fd[1] = Math.round(value + Math.random() * 110 + 100);
            zd[0] = Math.round(value + Math.random() * 110 + 100);
            zd[1] = Math.round(value + Math.random() * 110 + 100);
            xd[0] = Math.round(value + Math.random() * 110 + 100);
            xd[1] = Math.round(value + Math.random() * 110 + 100);
            gd[0] = Math.round(value + Math.random() * 110 + 100);
            gd[1] = Math.round(value + Math.random() * 110 + 100);

            if (left){
                data.push({value: [t, fd[0]+zd[0]+xd[0]+gd[0]]});
            }else{
                data.push({value: [t, fd[1]+zd[1]+xd[1]+gd[1]]});
            }



            this.EChart.setOption({
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
    }

    left_keel(ev: any) {
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
    }

    right_keel(ev: any) {
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
    }
}
