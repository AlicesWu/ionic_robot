import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-node',
  templateUrl: 'node.html'
})
export class NodePage {

	node_change(ev: any){
		alert("666");
	}

	select_diagnosis(ev: any){
		alert("666");
	}

	select_activity(ev: any){
		alert("777");
	}

	select_history(ev: any){
		alert("888");
	}

  constructor(public navCtrl: NavController) {
  	
  }
}
