import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonIcon, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBackOutline, chevronForwardOutline } from 'ionicons/icons';
import { ApiService } from '../services/api';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonIcon, IonGrid, IonRow, IonCol] // <-- CommonModule AQUI
})
export class Tab2Page implements OnInit {
  
  produtos: any[] = []; 
  indiceAtual: number = 0;

  constructor(private apiService: ApiService) {
    addIcons({ chevronBackOutline, chevronForwardOutline });
  }

  ngOnInit() {
    this.carregarProdutos();
  }

  carregarProdutos() {
    this.apiService.getProdutos().subscribe((dadosDaInternet: any) => {
      this.produtos = dadosDaInternet;
    });
  }

  // --- LÓGICA DOS BOTÕES ---
  proximoProduto() {
    if (this.indiceAtual < this.produtos.length - 1) {
      this.indiceAtual++;
    }
  }

  produtoAnterior() {
    if (this.indiceAtual > 0) {
      this.indiceAtual--;
    }
  }
}