import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonAvatar, IonButton, IonButtons, IonIcon } from '@ionic/angular/standalone';
import { ApiService } from '../services/api';
import { addIcons } from 'ionicons';
import { trashOutline, downloadOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonAvatar, IonButton, IonButtons, IonIcon]
})
export class Tab3Page implements OnInit {
  
  produtos: any[] = [];
  mostrarLista: boolean = true;

  constructor(private apiService: ApiService) {
    addIcons({ trashOutline, downloadOutline });
  }

  ngOnInit() {
    this.carregarProdutos();
  }

  carregarProdutos() {
    this.apiService.getProdutos().subscribe((dadosDaInternet: any) => {
      this.produtos = dadosDaInternet;
      this.mostrarLista = true;
    });
  }

  limparDados() {
    this.mostrarLista = false; 
  }
}