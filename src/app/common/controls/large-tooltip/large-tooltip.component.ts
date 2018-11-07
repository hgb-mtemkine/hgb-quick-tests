import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'hgb-large-tooltip',
  templateUrl: './large-tooltip.component.html',
  styleUrls: ['./large-tooltip.component.less']
})
export class LargeTooltipComponent implements OnInit, OnChanges {

  @Input()
  anchor: string; // NOTE: supported values: 'left', 'right', 'center'

  public anchorClass: string;

  constructor() { }

  ngOnInit() {}
  ngOnChanges() {
    this.anchorClass = 'anchor-' + (this.anchor || 'center');
  }

}
