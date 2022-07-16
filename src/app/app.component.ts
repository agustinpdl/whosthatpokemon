import { Component } from '@angular/core';
import { Pokemon } from 'pokenode-ts';
import { GameServiceService } from './game-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'guesspokemon';
  public pokemon?: Pokemon;
  public solved: boolean = false;
  public counter: number = 0;
  public set userText(s: string) {
    if (s == this.pokemon?.name) {
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
    this._gs.getPokemon(Math.floor(Math.random() * 151 + 1)).then((p) => this.pokemon = p);
  }
  private _correctPokemon(): void {
    this.solved = true;
    this.counter++;
    setTimeout(() => { this._gs.getPokemon(Math.floor(Math.random() * 151 + 1)).then((p) => { this.pokemon = p; this.solved = false }); }, 1000);
  };
}
