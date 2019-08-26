import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Component } from '@angular/core';
import { Estudante } from '../../components/estudante/estudante.model';

/**
 * Generated class for the JediPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jedi',
  templateUrl: 'jedi.html',
})
export class JediPage {

  // students: Estudante[] = [
  //   { name: 'Luke', isJedi: true, templo: 'MaisVida' },
  //   { name: 'leia', isJedi: false },
  //   { name: 'Han solo', isJedi: false},
  // ]

  luke = { name: 'Luke', isJedi: true, templo: 'MaisVida' };
  leia = { name: 'leia', isJedi: false, templo: 'MaisVida' };
  han = { name: 'Han solo', isJedi: false, templo: 'MaisVida' };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

}
