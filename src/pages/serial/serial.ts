import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController, Loading } from 'ionic-angular';
// import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
// import { BLE } from '@ionic-native/ble';

@Component({
  selector: 'page-serial',
  templateUrl: 'serial.html'
})
export class SerialPage {

  public hidden;
  public hidden0;
  public blue_ed;
  public hidden2;
  public hidden3;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {}

    ionViewDidEnter() {
		this.hidden = new Array();
		var item = document.getElementsByClassName("bluetooth-item");
		for (var i=0; i<item.length; i++) {
			this.hidden.push(true);
		}
		this.hidden0 = true;
		this.blue_ed = true;
		console.log("on start");
	}

  click_button(ev: any){
	function sleep(numberMillis) {
	    var now = new Date();
	    var exitTime = now.getTime() + numberMillis;
	    while (true) {
	        now = new Date();
	        if (now.getTime() > exitTime)
	            return;
	    }
	};
	// function presentLoadingDefault() {
 //        let loading = this.loadingCtrl.create({
 //            content: 'Please wait...'//数据加载中显示
 //        });

 //        loading.present();

 //        setTimeout(() => {
 //            loading.dismiss();//显示多久消失
 //        }, 3000);
 //    };
	var hightlight_ = '<font color="blue">';
	var _hightlight = '</font>';

	var item = document.getElementsByClassName("bluetooth-item");
	var button = document.getElementById("button");
	if (button.innerHTML=='寻找设备') {
		console.log("xun");
		// sleep(2300);
		for (var i=0; i<item.length; i++) {
			this.hidden[i] = Math.random() >= 0.5;
		}
		this.hidden0 = true;
		// presentLoadingDefault();
		// sleep(2300);
		this.hidden0 = false;
	}
	else {
		console.log("333");
		button.innerHTML='寻找设备';
		var label = document.getElementById("label");
  		label.innerHTML = '暂无设备连接';
		for (var i=0; i<item.length; i++) {
			var contents = item[i].innerHTML;
    		var first_index = contents.indexOf(hightlight_);
    		if (first_index!=-1) {
	    		var unhighlight = contents.split(hightlight_);
	    		item[i].innerHTML = unhighlight.join('');
	    		var contents = item[i].innerHTML;
	    		var unhighlight = contents.split(_hightlight);
	    		item[i].innerHTML = unhighlight.join('');
    		}
		}
		this.blue_ed = true;
	}
  }

  click_item(ev: any){
  	if (this.blue_ed) {
  		var button = document.getElementById("button");
  		var label = document.getElementById("label");
  		label.innerHTML = ev.target.innerHTML;
		button.innerHTML='断开连接';
	  	var content = ev.target.innerHTML;
	  	ev.target.innerHTML = '<font color="blue">'+content+'</font>'
	  	this.blue_ed = false;
  	}
  	
  }

  // constructor(private bluetoothSerial: BluetoothSerial) { }
  // constructor(private ble: BLE) { }
  
  
}
