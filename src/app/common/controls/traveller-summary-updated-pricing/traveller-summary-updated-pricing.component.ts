import { Component, OnInit, Input } from '@angular/core';
import { CheckoutPricingVM } from '../checkout-summary-details/checkout-summary-details.component';
import { ItineraryNodeType } from 'core/tmpcode/itinerary-vm';

@Component({
  selector: 'hgb-traveller-summary-updated-pricing',
  templateUrl: './traveller-summary-updated-pricing.component.html',
  styleUrls: ['./traveller-summary-updated-pricing.component.less'],
  preserveWhitespaces: true,
})
export class TravellerSummaryUpdatedPricingComponent implements OnInit {

  readonly ItineraryNodeType = ItineraryNodeType;

  @Input()
  vm: CheckoutPricingVM;

  @Input()
  itemType: ItineraryNodeType;

  constructor() { }

  ngOnInit() {
  }

}
