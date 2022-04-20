import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-fact-entry',
  templateUrl: './fact-entry.component.html',
  styleUrls: ['./fact-entry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FactEntryComponent {
  @Input() text: string = '';
  @Input() index: number = 0;
}
