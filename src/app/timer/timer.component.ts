import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  public initialValue: number = 50;
  public timer: number = 0;
  public paused: boolean = true;
  private _subscription?: Subscription;
  @Output() public readonly timeOut: EventEmitter<void> = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
    this._subscription = interval(100).subscribe(() => this.decreaseTimer());
  }
  ngOnDestroy() {
    this._subscription?.unsubscribe();
  }
  public decreaseTimer(): void {
    if (!this.paused) {
      this.timer++;
      if (this.timer >= this.initialValue) {
        this.paused = true;
        console.log('timed1');
        this.timeOut.emit();
      }
    }
  }
  public resetTimer(): void {
    this.timer = 0;
  }
}
