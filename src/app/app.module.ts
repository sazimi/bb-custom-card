import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [CardComponent],
  imports: [BrowserModule],
  entryComponents: [CardComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const bbCard = createCustomElement(CardComponent, {
      injector: this.injector
    });
    customElements.define('bb-card', bbCard);
  }
  ngDoBootstrap() {}
}
