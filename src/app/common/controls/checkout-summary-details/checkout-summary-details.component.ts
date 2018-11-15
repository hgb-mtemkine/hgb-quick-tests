import { Component, OnInit, Input } from '@angular/core';
import { ItineraryNodeType } from 'core/tmpcode/itinerary-vm';

@Component({
  selector: 'hgb-checkout-summary-details',
  templateUrl: './checkout-summary-details.component.html',
  styleUrls: ['./checkout-summary-details.component.less']
})
export class CheckoutSummaryDetailsComponent implements OnInit {

  @Input()
  vm: CheckoutSummaryDetailsVM;

  constructor() { }

  ngOnInit() {
    this.vm = this.tmpFakeVM();
    setInterval(() => {
      this.vm = this.tmpFakeVM();
    }, 2000);
    
  }

  tmpFakeVM(): CheckoutSummaryDetailsVM {
    let guid = this.uuidv4();
    let guuu = this.uuidv4().substr(4);
    let guu = this.uuidv4().substr(5);
    let fakePrice = Math.floor((1 + Math.random()) * 0x100);
    let pricingVM = <CheckoutPricingVM> {
      price: fakePrice * 10,
      tax: fakePrice,
      feesCollectedByHotelTotal: fakePrice,
      primaryRoomAverageRate: fakePrice,
      primaryRoomAverageRateUSD: fakePrice,
      totalBeforeTax: fakePrice,
      totalBeforeTaxUSD: fakePrice,
      taxBreakdown: [
        {
          label: 'city tax',
          price: fakePrice / 3
        },
        {
          label: 'resort fee',
          price: fakePrice / 3
        },
        {
          label: 'tax',
          price: fakePrice / 3
        }
      ],
    };
    return <CheckoutSummaryDetailsVM> {
      pax: [
        <CheckoutSummaryDetailsPaxVM> {
          paxName: `paxName ${guuu}`,
          paxSeniority: 'Adult',
          total: `$${fakePrice}.99 CAD`, //'$33.99 CAD',
          items: [
            <CheckoutSummaryDetailsItemVM> {
              type: ItineraryNodeType.Flight,
              flight: <CheckoutSummaryDetailsFlightVM> {
                airlineName: `American Airlines`,
                flightNumber: `AA ${guu}`,
                from: `Toronto (${guu})`,
                to: `Miami (${guu})`,
                fareClass: ``,
                dateArrive: new Date(Math.random() * 100000000000),
                dateDepart: new Date(Math.random() * 100000000000),
              },
              pricing: pricingVM,
            },
            <CheckoutSummaryDetailsItemVM> {
              type: ItineraryNodeType.Hotel,
              hotel: <CheckoutSummaryDetailsHotelVM> {
                hotelName: `Rays Hotel ${guid}`,
                roomType: `Rays Room (455.96 ft²) ${guid}`,
                checkinDate: new Date(Math.random() * 100000000000),
                checkoutDate: new Date(Math.random() * 100000000000),
                durationNights: Math.floor(1 + Math.random() * 10),
              },
              pricing: pricingVM,
            }
          ],
        },
        <CheckoutSummaryDetailsPaxVM> {
          paxName: `Ravi Prabhakar ${guuu}`,
          paxSeniority: 'Adult',
          total: `$${fakePrice}.99 CAD`, //'$33.99 CAD',
          items: [
            <CheckoutSummaryDetailsItemVM> {
              type: ItineraryNodeType.Flight,
              flight: <CheckoutSummaryDetailsFlightVM> {
                airlineName: `American Airlines`,
                flightNumber: `AA ${guu}`,
                from: `Toronto (${guu})`,
                to: `Miami (${guu})`,
                fareClass: ``,
                dateArrive: new Date(Math.random() * 100000000000),
                dateDepart: new Date(Math.random() * 100000000000),
              },
              pricing: pricingVM,
            },
            <CheckoutSummaryDetailsItemVM> {
              type: ItineraryNodeType.Hotel,
              hotel: <CheckoutSummaryDetailsHotelVM> {
                hotelName: `Ravis Hotel ${guid}`,
                roomType: `Ravis Room (455.96 ft²) ${guid}`,
                checkinDate: new Date(Math.random() * 100000000000),
                checkoutDate: new Date(Math.random() * 100000000000),
                durationNights: Math.floor(1 + Math.random() * 10),
              },
              pricing: pricingVM,
            }
          ],
        },
      ]
    };
  }

  uuidv4(): string {
    // let template = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
    let template = 'xxxxxxxx';
    return template.replace(/[xy]/g, c => {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  

}

// TODO: move
export class CheckoutSummaryDetailsVM {
  pax: CheckoutSummaryDetailsPaxVM[];
}

export class CheckoutSummaryDetailsPaxVM {
  paxName: string;
  paxSeniority: string; // TODO: make enum?
  total: string; // TODO: number + hgb_currency pipe
  items: CheckoutSummaryDetailsItemVM[];
}


export class CheckoutSummaryDetailsItemVM {
  type: ItineraryNodeType;
  flight: CheckoutSummaryDetailsFlightVM;
  hotel: CheckoutSummaryDetailsHotelVM;
  pricing: CheckoutPricingVM;
}
export class CheckoutSummaryDetailsFlightVM {
  airlineName: string;
  flightNumber: string;
  from: string;
  to: string;
  dateDepart: Date;
  dateArrive: Date;
  fareClass: string;
}

export class CheckoutSummaryDetailsHotelVM {
  hotelName: string;
  roomType: string;
  checkinDate: Date;
  checkoutDate: Date;
  durationNights: number;
}

export class CheckoutPricingVM {
  price: number;
  tax: number;
  totalBeforeTax: number;
  totalBeforeTaxUSD: number;
  feesCollectedByHotelTotal: number;
  primaryRoomAverageRate: number;
  primaryRoomAverageRateUSD: number;
  surchargeTotal: number;
  taxBreakdown: {
    label: string;
    price: number;
  }[];
}

