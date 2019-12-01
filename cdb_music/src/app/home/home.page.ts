import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOps = {
    initialSlide: 0,
    slidesPerView: 1,
    centeredSlides: true,
    speed: 400
  };

  slides = [{
    imageUrl: 'assets/img/logoBarbera.png',
    imageAlt: 'Logo Central del barbero',
    tittle: '',
    subTitle: 'Insumos barbería y cuidado personal',
    description: `Multinivel Central Del Barbero`,
    icon: 'play'
  },
  {
    imageUrl: 'assets/img/logoBarbera.png',
    imageAlt: 'Logo Central del barbero',
    tittle: '',
    subTitle: 'Insumos barbería y cuidado personal',
    description: `Multinivel Central Del Barbero`,
    icon: 'play'
  },
  {
    imageUrl: 'assets/img/logoBarbera.png',
    imageAlt: 'Logo Central del barbero',
    tittle: '',
    subTitle: 'Insumos barbería y cuidado personal',
    description: `Multinivel Central Del Barbero`,
    icon: 'play'
  }];
  constructor() {}

}
