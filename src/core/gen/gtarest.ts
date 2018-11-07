
export enum PaymentCardType {
  AX = 1,
  MC = 3,
  VI = 4,
}


/**
 * Source class: GTA.Common.Models.CardStorage.CardToken
 */
export class CardToken {
  token: string;
  userid: string;
  nickname: string;
  last4: string;
  billingcity: string;
  billingprovince: string;
  billingcountry: string;
  billingsuite: string;
  isprefered: boolean;
  cardtype: PaymentCardType;
  addeddatetime: Date;
  modifieddatetime: Date;

  constructor(init?: Partial<CardToken>) {
    Object.assign(this, init, {
      cardtype: isNaN(init.cardtype) ? PaymentCardType[init.cardtype] : init.cardtype,
      addeddatetime: init.addeddatetime ? new Date(init.addeddatetime) : null,
      modifieddatetime: init.modifieddatetime ? new Date(init.modifieddatetime) : null,
    });
  }
}

/**
 * Source class: GTA.Common.Models.CardStorage.CardTokenDetails
 */
export class CardTokenDetails extends CardToken {
  cardtypeid: string;
  expmonth: string;
  expyear: string;
  buyerfirstname: string;
  buyerlastname: string;
  buyeraddress: string;
  buyerzip: string;

  constructor(init?: Partial<CardTokenDetails>) {
    super(init);
    Object.assign(this, {
    });
  }
}
