import { Component, OnInit } from '@angular/core';
import { listaLibros } from 'src/app/interfaces/libros';

@Component({
  selector: 'app-mis-libros',
  templateUrl: './mis-libros.component.html',
  styleUrls: ['./mis-libros.component.scss']
})
export class MisLibrosComponent implements OnInit {

  lista=listaLibros;

  constructor() { }

  ngOnInit(): void {
  }

}
