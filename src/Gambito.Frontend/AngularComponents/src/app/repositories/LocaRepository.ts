import { CategoriasData } from '../data/CategoriasData';

export class LocalRepository{
    datos: Array<any> = [];
    categoriasData: CategoriasData = new CategoriasData();
    constructor(){}
    add(key: string, value: any){
        const jsonObject = JSON.stringify(value);
        console.log(JSON.parse(localStorage.getItem(key)));
        if (localStorage.getItem(key) === null){
            this.datos.push(value);
        }
        else{
            this.datos = JSON.parse(localStorage.getItem(key));
        }
        localStorage.setItem(key, JSON.stringify(this.datos));
    }
    get(key: string){
        return localStorage.getItem(key);
    }
    loadFakeData(key: string){
        if (localStorage.getItem(key) === null){
            localStorage.setItem(key, JSON.stringify(this.categoriasData.getData()));
        }
    }
}
