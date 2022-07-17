import { Component, ElementRef, ViewChild } from '@angular/core';
import { Pokemon } from 'pokenode-ts';
import { GameServiceService } from './game-service.service';
import { LockScreenComponent } from './lock-screen/lock-screen.component';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('timerRef') private _timer: TimerComponent;
  @ViewChild('locker') private _locker: LockScreenComponent;
  @ViewChild('textbox') private textbox: ElementRef;
  title = 'guesspokemon';
  public pokemon?: Pokemon;
  public solved: boolean = false;
  public counter: number = 0;
  public set userText(s: string) {
    if (s.toLowerCase() == this.pokemon?.name) {
      this._correctPokemon();
      this._userText = '';
      return;
    }
    this._userText = s;
  }
  public get userText(): string {
    return this._userText;
  }
  public get pokeImg(): string {
    if (this.pokemon?.sprites.other['official-artwork'].front_default != null)
      return this.pokemon?.sprites.other['official-artwork'].front_default;
    return '';
  }
  private _userText: string = '';
  public constructor(private _gs: GameServiceService) {

  }
  private _correctPokemon(): void {
    this._timer.paused = true;
    this.solved = true;
    this.counter++;
    setTimeout(() => {
      this._gs.getPokemon(Math.floor(Math.random() * 151 + 1))
        .then((p) => {
          this.pokemon = p;
          this.solved = false;
          this._timer.resetTimer();
          this._timer.paused = false;
        });
    }, 1000);
  };

  public initializeGame(): void {
    this._gs.getPokemon(Math.floor(Math.random() * 151 + 1)).then((p) => this.pokemon = p);
    this.userText = '';
    this._timer.resetTimer();
    this.counter = 0;
    this.textbox.nativeElement.focus();
    this._timer.paused = false;
  }
  public timedOut(): void {

    this.textbox.nativeElement.blur();
    console.log('timed2')
    this._locker.locked = true;
  }
}
