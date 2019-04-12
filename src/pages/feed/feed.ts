import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public objeto_feed = {
    titulo : "Helcias Junior",
    data : "November 29, 1988",
    descricao : "Estou criando um app incrível...",
    qntd_likes : 12,
    qntd_comments : 4,
    time_comment: "11h ago"
  }

  public nome_usuario:string = "Helcias Junior do código";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

/*  public somaDoisNumeros(num1:number, num2:number):void {
    alert(num1 + num2);
  }*/

  //executa ao completar o carregamento da página
  ionViewDidLoad() {
    //this.somaDoisNumeros(10, 99);
  }

}
