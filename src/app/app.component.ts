import { Component } from '@angular/core';
import * as GTARest from 'core/gen/gtarest';


@Component({
  selector: 'hgb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'hgb-quick-tests';

  creditCardList = [
    <GTARest.CardTokenDetails>{
      cardtypeid: '1',
      expmonth: '1',
      expyear: '2021',
      buyerfirstname: 'Mia',
      buyerlastname: 'Malkova',
      buyeraddress: '316-1600 Steeles Avenue West',
      buyerzip: 'L4K4M2',
      token: '2222868415821000',
      userid: '932afa59-94e8-43e5-839c-459fed9aaf79',
      nickname: '9aa13e4f-5714-4fc2-988c-88af901d83ab63633063653925',
      last4: '1000',
      billingcity: 'Concord',
      billingprovince: 'ON',
      billingcountry: 'CA',
      billingsuite: '316',
      isprefered: false,
      cardtype: GTARest.PaymentCardType.AX,
      addeddatetime: new Date('2017-11-06T21:55:27'),
      modifieddatetime: new Date('2017-11-06T21:55:27')
    },
    <GTARest.CardTokenDetails>{
      cardtypeid: '4',
      expmonth: '2',
      expyear: '2024',
      buyerfirstname: 'Sunny',
      buyerlastname: 'Leone',
      buyeraddress: '123 Test Drive',
      buyerzip: 'M6B1T5',
      token: '9999859099571111',
      userid: '932afa59-94e8-43e5-839c-459fed9aaf79',
      nickname: 'a77e1cb7-0a8e-489a-b7fc-f4dd9da533f863645156655782',
      last4: '1111',
      billingcity: 'BlahCity',
      billingprovince: 'ON',
      billingcountry: 'CA',
      billingsuite: '',
      isprefered: false,
      cardtype: GTARest.PaymentCardType.VI,
      addeddatetime: new Date('2017-11-06T21:55:27'),
      modifieddatetime: new Date('2017-11-06T21:55:27')
    }]
}
