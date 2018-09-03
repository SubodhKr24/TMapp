import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { ExpandableHeader } from './expandable-header/expandable-header';
import { AccordionListComponent } from './accordion-list/accordion-list';

export const components = [
  ExpandableHeader,
  AccordionListComponent,
];

@NgModule({
  declarations: [components],
  imports: [IonicModule],
  exports: [components]
})
export class ComponentsModule {}
