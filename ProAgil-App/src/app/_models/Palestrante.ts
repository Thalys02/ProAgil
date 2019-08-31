import { RedeSocial } from './RedeSocial';
import { Evento } from './Evento';

export interface Palestrante{
         id: number;
         nome: string;
         miniCurriculo: string;
         imageURL: string;
         telefone: string;    
         email: string; 
         redesSociais: RedeSocial[];
         palestrantesEventos:Evento[];
}
