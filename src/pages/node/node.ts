import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-node',
  templateUrl: 'node.html'
})
export class NodePage {

	public hidden;
	public hide_word;

	ionViewDidEnter() {
		this.hidden = new Array();
		let item = document.getElementsByClassName("list-item");
		for (var i=0; i<item.length; i++) {
			this.hidden.push(false);
		}
		console.log("on start");
	}

	node_change(ev: any){
	}

	select_diagnosis(ev: any){
		var pagetitle = document.getElementById("pagetitle");
		pagetitle.innerHTML = '<font size="5">病历</font>';
		this.hide_word = true;
	}

	select_activity(ev: any){
		var pagetitle = document.getElementById("pagetitle");
		pagetitle.innerHTML = '<font size="5">活动</font>';
		this.hide_word = true;
	}

	select_history(ev: any){
		var pagetitle = document.getElementById("pagetitle");
		pagetitle.innerHTML = '<font size="5">训练计划</font>';
		this.hide_word = true;
	}

	search(ev: any){
	    let searchText = ev.target.value;
	    
	    // get the blocks of reports
	    let item = document.getElementsByClassName("list-item");

	    // get the inner content of blocks
	    let discript = document.getElementsByClassName("discript");
	    let time = document.getElementsByClassName("time");

	    var hightlight_ = '<span style="background:yellow;">';
    	var _hightlight = '</span>';

    	// console.log("item length ", item.length);
	    // for (var i=0; i<item.length; i++)
	    // 	console.log("hidden[", i ,"]", this.hidden[i]);

	    // delete current highlight
    	for (var i=0; i<item.length; i++) {
    		// able the all items
    		// item[i].style.display="inline";

    		this.hidden[i] = false;

    		var contents = discript[i].innerHTML;
    		var first_index = contents.indexOf(hightlight_);
    		if (first_index!=-1) {
	    		var unhighlight = contents.split(hightlight_);
	    		discript[i].innerHTML = unhighlight.join('');
	    		var contents = discript[i].innerHTML;
	    		var unhighlight = contents.split(_hightlight);
	    		discript[i].innerHTML = unhighlight.join('');
    		}

    		var contents = time[i].innerHTML;
    		var first_index = contents.indexOf(hightlight_);
    		if (first_index!=-1) {
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
	    	for (var i=0; i<item.length; i++) {
	    		var contents = discript[i].innerHTML;
	    		var unhighlight = contents.split(searchText);
	    		var time_contents = time[i].innerHTML;
	    		var time_unhighlight = time_contents.split(searchText);
	    		if (unhighlight.length>1) {
	    			discript[i].innerHTML = unhighlight.join(hightlight_ + searchText + _hightlight);
	    		}
	    		if (time_unhighlight.length>1) {
	    			time[i].innerHTML = time_unhighlight.join(hightlight_ + searchText + _hightlight);
	    			console.log("time ", i);
	    			console.log(time[i].innerHTML);
	    		}

            	if (unhighlight.length<=1 && time_unhighlight.length<=1) {
            		// disable the unmatched items
            		// item[i].style.display="none";

				    this.hidden[i] = true;
            	}
	    	}
	    }
	}

  constructor(public navCtrl: NavController) {
  	
  }
}
