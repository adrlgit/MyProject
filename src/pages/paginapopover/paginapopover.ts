import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  PopoverController,
} from 'ionic-angular';
import { PopoverPadraoComponent } from '../../components/popover-padrao/popover-padrao';

/**
 * Generated class for the PaginapopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paginapopover',
  templateUrl: 'paginapopover.html',
})
export class PaginapopoverPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private popoverCtrl: PopoverController,
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaginapopoverPage');
  }

  public presentPopoverSave(myEvent, salvar) {
    const popover = this.popoverCtrl.create(PopoverPadraoComponent, {
      salvar,
    });
    popover.present({
      ev: myEvent,
    });
  }
}
