import { Injectable } from '@angular/core';
import { Pokemon, PokemonClient } from 'pokenode-ts';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {
  public pokemonClient: PokemonClient = new PokemonClient();
  constructor() { }
  public getPokemon(id: number): Promise<Pokemon> {
    return this.pokemonClient.getPokemonById(id);
  }
}
