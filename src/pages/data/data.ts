import { Component, ViewChild, ElementRef } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
declare var echarts;

@Component({
  selector: 'page-data',
  templateUrl: 'data.html'
})
export class DataPage {
  @ViewChild('EchartsContent') container:ElementRef;
  EChart :any;

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
	    
	    
		setInterval(() => { 
		        t+=1;
				data.push({value: [t,Math.round(value + Math.random() * 21 + 10)]});
		        this.EChart.setOption({
		        series: [{
		            data: data
		        }]
		    });
		}, 1000);
  }
}
