import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Início',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Anúncios',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Inserir novo anúncio',
      url: '/list',
      icon: 'add'
    },
    {
      title: 'Minha conta',
      url: '/list',
      icon: 'cloud'
    },
    {
      title: 'login',
      url: '/login',
      icon: 'user'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
