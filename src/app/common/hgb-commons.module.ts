import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LargeTooltipComponent } from './controls/large-tooltip/large-tooltip.component';
import { CreditCardSelectComponent } from './controls/credit-card-select/credit-card-select.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as Mat from '@angular/material';
import { CreditCardImageFilenamePipe } from './pipes/cedit-card-name.pipe';
import { CheckoutSummaryDetailsComponent } from './controls/checkout-summary-details/checkout-summary-details.component';
import { TravellerSummaryUpdatedPricingComponent } from './controls/traveller-summary-updated-pricing/traveller-summary-updated-pricing.component';
import { Pipe_hgb_currency } from './pipes/zzz-unimplemented-pipes';
import { DebugJsonComponent } from './controls/debug-json/debug-json.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    Mat.MatMenuModule,
    Mat.MatButtonModule,
  ],
  declarations: [
    CreditCardImageFilenamePipe,
    Pipe_hgb_currency,
    
    LargeTooltipComponent,
    CreditCardSelectComponent,
    CheckoutSummaryDetailsComponent,
    TravellerSummaryUpdatedPricingComponent,
    DebugJsonComponent,
  ],
  exports: [
    LargeTooltipComponent,
    CreditCardSelectComponent,
    CheckoutSummaryDetailsComponent,
    DebugJsonComponent,
  ],
})
export class CommonComponentsModule { }
