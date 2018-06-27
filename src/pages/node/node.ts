import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-node',
  templateUrl: 'node.html'
})
export class NodePage {

	node_change(ev: any){
	}

	select_diagnosis(ev: any){
		var pagetitle = document.getElementById("pagetitle");
		pagetitle.innerHTML = "病历";
	}

	select_activity(ev: any){
		var pagetitle = document.getElementById("pagetitle");
		//pagetitle.setAttribute("text-align", "center");
		pagetitle.innerHTML = "活动";
		//pagetitle.style.textAlign="center";
	}

	select_history(ev: any){
		var pagetitle = document.getElementById("pagetitle");
		pagetitle.innerHTML = "训练计划";
	}

	search(ev: any){
	    let searchText = ev.target.value;

	    // get the blocks of reports
	    let item = document.getElementsByClassName("list-item") as NodeListOf<HTMLElement>;
	    // get the inner content of blocks
	    let discript = document.getElementsByClassName("discript");

	    var hightlight_ = '<span style="background:yellow;">';
    	var _hightlight = '</span>';

	    // delete current highlight
    	for (var i=0; i<item.length; i++) {
    		// able the all items
    		item[i].style.display="inline";
    		var contents = discript[i].innerHTML;
    		var first_index = contents.indexOf(hightlight_);
    		if (first_index==-1) { continue; }
    		var pieces1 = contents.split(hightlight_);
    		var pieces2 = pieces1[1].split(_hightlight);
    		var arrayObj = new Array();
    		arrayObj. push(pieces1[0], pieces2[0], pieces2[1]);
    		discript[i].innerHTML = arrayObj.join('');
    	}

	    if (searchText && searchText.trim() != '') {
	    	console.log(searchText);

	    	// add highlight
	    	for (var i=0; i<item.length; i++) {
	    		var contents = discript[i].innerHTML;
	    		var unhighlight = contents.split(searchText);
	    		if (unhighlight.length>1) {
	    			discript[i].innerHTML = unhighlight.join(hightlight_ + searchText + _hightlight);
	    		}
            	else {
            		// disable the unmatched items
            		item[i].style.display="none";
            	}
	    	}
	    }
	}

  constructor(public navCtrl: NavController) {
  	
  }
}
