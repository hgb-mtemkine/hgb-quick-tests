import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hgb-checkout-sumamry-details',
  templateUrl: './checkout-sumamry-details.component.html',
  styleUrls: ['./checkout-sumamry-details.component.less']
})
export class CheckoutSumamryDetailsComponent implements OnInit {

  @Input()
  vm: CheckoutSumamryDetailsVM;

  constructor() { }

  ngOnInit() {
    this.vm = <CheckoutSumamryDetailsVM> {
      pax: [
        <CheckoutSumamryDetailsPaxVM> {
          paxName: 'Raydevone Sobaram',
          paxSeniority: 'Adult',
          total: '$33.99 CAD',
          items: [
            <CheckoutSumamryDetailsItemVM> {
              flight: <CheckoutSumamryDetailsFlightVM> {
              },
            },
            <CheckoutSumamryDetailsItemVM> {
              hotel: <CheckoutSumamryDetailsHotelVM> {
                hotelName: 'Rays Hotel Miami Airport',
                roomType: 'Standard King Room (455.96 ft²)',
                checkinDate: new Date(),
                checkoutDate: new Date(),
              },
            }
          ],
        },
        <CheckoutSumamryDetailsPaxVM> {
          paxName: 'Ravi Prabhakar',
          paxSeniority: 'Adult',
          total: '$33.99 CAD',
          items: [
            <CheckoutSumamryDetailsItemVM> {
              flight: <CheckoutSumamryDetailsFlightVM> {
              },
            },
            <CheckoutSumamryDetailsItemVM> {
              hotel: <CheckoutSumamryDetailsHotelVM> {
                hotelName: 'Ravis hotel',
                roomType: 'Standard Queen Room (455.96 ft²)',
                checkinDate: new Date(),
                checkoutDate: new Date(),
              },
            }
          ],
        },
      ]
    };
  }

}

// TODO: move
export class CheckoutSumamryDetailsVM {
  pax: CheckoutSumamryDetailsPaxVM[];
}

export class CheckoutSumamryDetailsPaxVM {
  paxName: string;
  paxSeniority: string; // TODO: make enum?
  total: string; // TODO: number + hgb_currency pipe
  items: CheckoutSumamryDetailsItemVM[];
}


export class CheckoutSumamryDetailsItemVM {
  flight: CheckoutSumamryDetailsFlightVM;
  hotel: CheckoutSumamryDetailsHotelVM;
}
export class CheckoutSumamryDetailsFlightVM {

}

export class CheckoutSumamryDetailsHotelVM {
  hotelName: string;
  roomType: string;
  checkinDate: Date;
  checkoutDate: Date;
  durationNights: number;
}

