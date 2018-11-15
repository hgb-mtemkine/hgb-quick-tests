import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LargeTooltipComponent } from './controls/large-tooltip/large-tooltip.component';
import { CreditCardSelectComponent } from './controls/credit-card-select/credit-card-select.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as Mat from '@angular/material';
import { CreditCardImageFilenamePipe } from './pipes/cedit-card-name.pipe';
import { CheckoutSumamryDetailsComponent } from './controls/checkout-sumamry-details/checkout-sumamry-details.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    Mat.MatMenuModule,
    Mat.MatButtonModule,
  ],
  declarations: [
    LargeTooltipComponent,
    CreditCardSelectComponent,
    CreditCardImageFilenamePipe,
    CheckoutSumamryDetailsComponent,
  ],
  exports: [
    LargeTooltipComponent,
    CreditCardSelectComponent,
    CheckoutSumamryDetailsComponent
  ],
})
export class CommonComponentsModule { }
