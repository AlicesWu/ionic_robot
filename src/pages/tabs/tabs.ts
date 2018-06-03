import { Component } from '@angular/core';

import { DataPage } from '../data/data';
import { NodePage } from '../node/node';
import { HomePage } from '../home/home';
import { SerialPage } from '../serial/serial';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = DataPage;
  tab3Root = NodePage;
  tab4Root = SerialPage;

  constructor() {

  }
}
