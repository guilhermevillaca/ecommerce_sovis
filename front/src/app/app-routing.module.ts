import { FinalizarComponent } from './finalizar/finalizar.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { HomeComponent } from './home/home.component';
import { ProdutoComponent } from './produto/produto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent},  
  { path: 'categoria', component: CategoriaComponent},
  { path: 'produtos', component: ProdutoComponent},
  { path: 'produtoscat/:ctgCodigo', component: ProdutoComponent},
  { path: 'produto/:prdCodigo', component: ProdutoComponent},
  { path: 'carrinho', component: CarrinhoComponent},
  { path: 'finalizar', component: FinalizarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
