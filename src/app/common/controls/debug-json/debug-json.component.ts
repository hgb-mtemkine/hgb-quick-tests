import { Component, Input } from '@angular/core';

@Component({
  selector: 'hgb-debug-json',
  template: `
<i class="fa fa-bug" (click)="debugPanel.hidden = !debugPanel.hidden"></i>
<pre #debugPanel [hidden]="true">{{ vm | json }}</pre>
`,
  styles: [
    ':host i.fa.fa-bug { cursor: pointer; font-size: 14px; color: red; }',
    ':host i.fa.fa-bug:hover { color: orange }',
    ':host pre { border: 1px solid black; background-color: #eee; padding: 10px; font-size: 12px; }',
  ]
})
export class DebugJsonComponent {
  @Input()
  vm: any;
}
