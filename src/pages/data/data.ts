import {Component, ViewChild, ElementRef} from '@angular/core';
import {NavController} from 'ionic-angular';

declare var echarts;

@Component({
    selector: 'page-data',
    templateUrl: 'data.html'
})
export class DataPage {
    @ViewChild('EchartsContent') container: ElementRef;
    EChart: any;

    constructor(public navCtrl: NavController) {
    }

    ionViewDidEnter() {
        var t = 1;
        var data = [];
        var value = Math.random() * 100;

        let ctelement = this.container.nativeElement;
        this.EChart = echarts.init(ctelement);
        this.EChart.setOption({
            title: {
                text: '+'
            },
            xAxis: {
                type: 'value',
                splitLine: {
                    show: true
                }
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%'],
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
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                },
                areaStyle: {normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#de3a38'
                        }, {
                            offset: 1,
                            color: 'rgba(0,0,0,0)'
                        }]),
                    }}
            }],
        });


        setInterval(() => {
            // if (t >=20){
            //     data.shift();
            // }
            t += 1;
            data.push({value: [t, Math.round(value + Math.random() * 21 + 10)]});
            this.EChart.setOption({
                series: [{
                    data: data
                }]
            });
        }, 1000);
    }
}
