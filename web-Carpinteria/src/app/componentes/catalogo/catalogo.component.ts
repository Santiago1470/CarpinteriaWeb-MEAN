import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-catalogo',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './catalogo.component.html',
    styleUrl: './catalogo.component.css'
})

export class CatalogoComponent {
    isOrden: boolean = false;
    isFiltros: boolean = false;
    
    mostrarOrden() {
        if(this.isOrden) {
            this.isOrden = false;
        } else {
            this.isOrden = true;
        }
    }

    ocultarOrden() {
        this.isOrden = false;
    }

    mostrarFiltros(){
        this.isFiltros = true;
    }

    ocultarFiltro() {
        this.isFiltros = false;
    }

}
