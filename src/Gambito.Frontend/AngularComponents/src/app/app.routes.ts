import { RouterModule, Routes } from '@angular/router';
import { CategoriasListComponent } from './components/core/categorias/categorias-list/categorias-list.component';
import { BoxManagerComponent } from './components/core/box/box-manager/box-manager.component';
import { CategoriasSaveComponent } from './components/core/categorias/categorias-save/categorias-save.component';

const APP_ROUTERS: Routes = [
    /*{path:'Estudiar', component:ContentEstudiarComponent},
    {path:'HoraEstudio', component:ContentHorarioComponent},*/
    {path: 'box/:id', component: BoxManagerComponent},
    {path: 'Categorias', component: CategoriasListComponent},
    {path: 'CategoriasSave', component: CategoriasSaveComponent},
    {path: '**', pathMatch: 'full', redirectTo: ''}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTERS);
