import { Objeto } from './objeto';

export interface Categoria{
  id:number;
  name:string;
  deleted_at:any;
  created_at:Date;
  updated_at:Date;
  objetos?:Objeto[];
}
