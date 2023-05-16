import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from './../produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit{
  Produtos: Produto[] = [];

  constructor(private produtoService : ProdutoService){
  }
    ngOnInit(): void {
      this.loadProducts();
    }
  
    loadProducts(){
      this.produtoService.getProducts().subscribe(
        {
          next : data => this.Produtos = data,
          error: (msg)=> console.log("Erro: " + msg)
        }
      )
    }
  }