import { IntefaceModel } from './../interface/interface.model';
export class Categoria implements IntefaceModel<Categoria>{
    ctgCodigo: number;
    ctgDescricao: String;

    initJSON(json: any): Categoria {
        this.ctgCodigo = json.ctgCodigo;
        this.ctgDescricao = json.ctgDescricao;
        return this;
    }

    toJSON() {
        return {
            'categoria.ctgCodigo': this.ctgCodigo,
            'categoria.ctgDescricao': this.ctgDescricao
        }
    }
}