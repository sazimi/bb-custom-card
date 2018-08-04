import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'bb-card',
  template: `
  <div class='main__shadow'>
  <img id='shadow-image' class='shadow__image' src='{{ src }}' alt='title'>
  <div id='shadow-info' class='shadow__info'>
    <h1 name='title' id='title' role='header' class='shadow__title'>{{ title }}</h1>
    <p name='description' id='description' class='shadow__description'>{{ description }}</p>
  </div>
  </div>
  `,
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class CardComponent {
  @Input() title?: string = '<no title set>';
  @Input() description?: string = '<no description set>';
  @Input() src?  : string = 'https://goo.gl/STZhS6';
}
