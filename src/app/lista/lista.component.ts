import { Component,OnInit} from '@angular/core';
import {Corredor} from '../app.component';
import { ServicioCorredores } from '../service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class ListaComponent implements OnInit{

  public corredores:Array<any> = [];
  
  constructor(private servicioCorredores: ServicioCorredores, private router: Router) { }
  ngOnInit(): void {
    this.servicioCorredores.disparadorCorredores.subscribe(
      data => { this.corredores.push(data) }
    )
  }
  //corredores!:Corredor[];
  borrarCorredor(Corredor: any){
    let index = this.corredores.indexOf(Corredor);
    this.corredores.splice(index,1);
  }
}
