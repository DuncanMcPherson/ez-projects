import { Color } from './color.enum';
import { CardType } from "./card-type.enum";
import { Rarity } from "./rarity.enum";

interface ICard {
  readonly title: string;
  readonly colors: ReadonlyArray<Color>;
  readonly types: ReadonlyArray<CardType>;
  readonly setCode: string;
  readonly rarity: Rarity;
}

export interface IArtifactType extends ICard {
  readonly cost: string;
  readonly abilities: ReadonlyArray<string>;
}

export interface ICreatureType extends ICard {
  readonly cost: string;
  readonly abilities: ReadonlyArray<string>;
  readonly attack: number;
  readonly defense: number;
  readonly creatureType: string;
}

export interface IEnchantmentType extends ICard {
  readonly cost: string;
  readonly effects: ReadonlyArray<string>;
  readonly abilities?: ReadonlyArray<string>;
}

export interface IInstantType extends ICard {
  readonly cost: string;
  readonly effects: ReadonlyArray<string>;
}

export interface ILandType {
  readonly isBasic: boolean;
  readonly abilities?: ReadonlyArray<string>;
  readonly producesManaColors: ReadonlyArray<Color>;
}

export interface IPlaneswalkerType {
  readonly cost: string;
  readonly startingLoyalty: number;
  readonly abilities: ReadonlyArray<IPlaneswalkerAbility>
}
