import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-lock-screen',
  templateUrl: './lock-screen.component.html',
  styleUrls: ['./lock-screen.component.scss']
})
export class LockScreenComponent implements OnInit {
  public locked: boolean = true;
  @Input() public firstTime: boolean = true;
  @Output() public readonly startGame: EventEmitter<void> = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  start(): void {
    this.locked = false;
    this.firstTime = false;
    this.startGame.emit();
  }
}
