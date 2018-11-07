import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import * as GTARest from 'core/gen/gtarest';

@Component({
  selector: 'hgb-credit-card-select',
  templateUrl: './credit-card-select.component.html',
  styleUrls: ['./credit-card-select.component.less'],
  preserveWhitespaces: true
})
export class CreditCardSelectComponent implements OnInit {

  @Input()
  creditCardList: GTARest.CardTokenDetails[];

  @Output()
  onNewCardPressed = new EventEmitter<void>();
  @Output()
  onEditCardPressed = new EventEmitter<void>();

  //#region -------- ngModel: selectedCard ----------
  @Output()
  selectedCardChange = new EventEmitter<GTARest.CardTokenDetails>();
  @Input()
  get selectedCard(): GTARest.CardTokenDetails {
    return this._selectedCard;
  }
  set selectedCard(val: GTARest.CardTokenDetails) {
    this._selectedCard = val;
    this.selectedCardChange.emit(this._selectedCard);
  }
  private _selectedCard:GTARest.CardTokenDetails;
  //#endregion

  constructor() { }

  ngOnInit() {
  }

  setCCSelection(cc: GTARest.CardTokenDetails) {
    this.selectedCard = cc;
  }

}
