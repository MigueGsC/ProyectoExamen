import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-mis-quejas',
  templateUrl: './mis-quejas.component.html',
  styleUrls: ['./mis-quejas.component.scss']
})

export class MisQuejasComponent implements OnInit 
{

  formulario:FormGroup;
  queja:any;
  htmlStr: string = '';

  isVisible = true;
  submitted = false;

  constructor(public formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
    }); 
  }

  ngOnInit(): void 
  {
    this.formulario = this.formBuilder.group
    ({
        usuario: ['', Validators.required],     
        pais: ['', Validators.required],  
        observacion: ['', Validators.required]      
    });
  }

  get f() { return this.formulario.controls; }



    onSubmit()
    { 
      this.submitted = true;
      if (this.formulario.invalid) {
          return;
      }
      
      this.isVisible=false;
      this.htmlStr="-Queja recibida- Gracias por escribirnos!.";
    }     
}
