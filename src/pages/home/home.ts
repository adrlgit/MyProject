import { NavController } from 'ionic-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  user = {
    name: 'Luke Skywalker',
  };
  searchQuery: string = '';
  items: string[];

  constructor(public navCtrl: NavController) {
    this.initializeItems();
  }
  initializeItems() {
    this.items = ['CESAI', 'Casa do Indio', 'Muro Valparaiso'];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return item.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    }
  }
  public goNew() {
    this.navCtrl.push('NovaPage');
  }
  public goOld() {
    this.navCtrl.push('VelhaPage');
  }
  public goFab() {
    this.navCtrl.push('FabsPage');
  }
  public goPopover() {
    this.navCtrl.push('PaginapopoverPage');
  }
  public goRadio() {
    this.navCtrl.push('RadioGroupPage');
  }
  public data() {
    this.navCtrl.push('DataComponent');
  }
  irJedi() {
    this.navCtrl.push('JediPage');
  }
}
