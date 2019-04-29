import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    /*
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'*/
  ];
  public categorias: Array<string>=[];
  constructor() {
    this.categorias.push("Hortifruti");
    this.categorias.push("Poupas de Frutas");
    this.categorias.push("Laticínios");
    this.categorias.push("Orgânicos");
    this.categorias.push("Adubos");
    this.categorias.push("Sementes");
    this.categorias.push("Atacados");
    this.categorias.push("Cultivos");
    this.categorias.push("Carnes");
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
