import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { BtnPrimaryComponent } from '../../components/btn-primary/btn-primary.component';
import { NewsletterFormComponent } from '../../components/newsletter-form/newsletter-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, BtnPrimaryComponent, NewsletterFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy{
  contador: number = 0;
  clientes: number = 0;
  investimentos: number = 0;

  clientesFinal: number = 87;
  numeroFinal: number = 150;
  investimentoFinal: number = 20;

  private intervaloContador: any;
  private intervaloClientes: any;
  private intervaloInvestimentos: any;

  constructor() {}

  ngOnInit(): void {
    this.iniciarContadores();
  }

  private iniciarContadores() {
    this.iniciarContador('contador', this.numeroFinal, (value) => this.contador = value);
    this.iniciarContador('clientes', this.clientesFinal, (value) => this.clientes = value);
    this.iniciarContador('investimentos', this.investimentoFinal, (value) => this.investimentos = value);
  }

  private iniciarContador(nome: string, finalValue: number, updateFunction: (value: number) => void) {
    const intervalo = 50;
    let value = 0;
    const incremento = () => {
      if (value < finalValue) {
        value++;
        updateFunction(value);
        setTimeout(incremento, intervalo);
      }
    };
    incremento();
  }

  ngOnDestroy(): void {
    // Limpar intervalos para evitar vazamentos de memória
    if (this.intervaloContador) {
      clearInterval(this.intervaloContador);
    }
    if (this.intervaloClientes) {
      clearInterval(this.intervaloClientes);
    }
    if (this.intervaloInvestimentos) {
      clearInterval(this.intervaloInvestimentos);
    }
  }

}
