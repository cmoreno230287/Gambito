import { RouterModule, Routes } from '@angular/router';
import { CategoriasListComponent } from './components/core/categorias/categorias-list/categorias-list.component';

const APP_ROUTERS: Routes = [
    /*{path:'Estudiar', component:ContentEstudiarComponent},
    {path:'HoraEstudio', component:ContentHorarioComponent},
    {path: 'test', component: DialogOverviewExample},*/
    {path: 'Categorias', component: CategoriasListComponent},
    {path: '**', pathMatch: 'full', redirectTo: ''}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTERS);
