import { Pipe, PipeTransform } from '@angular/core';
import * as GTARest from 'core/gen/gtarest';

enum PaymentCardNames {
  'American Express' = GTARest.PaymentCardType.AX,
  'Master Card' = GTARest.PaymentCardType.MC,
  'Visa' = GTARest.PaymentCardType.VI
}
enum PaymentCardImageFilenames {
  'amex.png' = GTARest.PaymentCardType.AX,
  'mastercard.png' = GTARest.PaymentCardType.MC,
  'visa.png' = GTARest.PaymentCardType.VI
}


/**
 * Converts GTARest.PaymentCardType to its string description
 */
@Pipe({
  name: 'creditCardName'
})
export class CreditCardNamePipe implements PipeTransform {
  transform(value: GTARest.PaymentCardType): string {
    if (!value)
      return '';
    return PaymentCardNames[value];
  }
}

/**
 * Converts GTARest.PaymentCardType to its string description
 */
@Pipe({
  name: 'creditCardImageFilename'
})
export class CreditCardImageFilenamePipe implements PipeTransform {
  transform(value: GTARest.PaymentCardType): string {
    if (!value)
      return '';
    return '/assets/images/creditcards/' + PaymentCardImageFilenames[value];
  }
}

