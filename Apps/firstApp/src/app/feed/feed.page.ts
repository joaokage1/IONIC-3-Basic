import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  public nome_usuario:string;
  
  constructor() { }

  public mostraNome(): string{
    this.nome_usuario = "Toddynho";

    return this.nome_usuario;
  }

  ngOnInit() {
    this.mostraNome();
  }

}
