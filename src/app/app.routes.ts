import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { NuestrasSedesComponent } from './components/nuestras-sedes/nuestras-sedes.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { TrattoriaComponent } from './components/sedes/trattoria/trattoria.component';
import { FamigliaComponent } from './components/sedes/famiglia/famiglia.component';
import { PizzaLelaBuenavista2Component } from './components/sedes/pizza-lela-buenavista-2/pizza-lela-buenavista-2.component';
import { PizzaLelaCaimanDelRioComponent } from './components/sedes/pizza-lela-caiman-del-rio/pizza-lela-caiman-del-rio.component';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'nuestras-sedes', component: NuestrasSedesComponent },
    { path: 'contactanos', component: ContactoComponent },
    { path: 'nuestras-sedes/nena-lela-tratoria', component: TrattoriaComponent },
    { path: 'nuestras-sedes/famiglia', component: FamigliaComponent },
    { path: 'nuestras-sedes/pizza-lela-buenavista-2', component: PizzaLelaBuenavista2Component },
    { path: 'nuestras-sedes/pizza-lela-caiman', component: PizzaLelaCaimanDelRioComponent }
];
