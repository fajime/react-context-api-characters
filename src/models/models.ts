export interface Character {
    char_id: number;
    name: string;
    portrayed: string;
    img: string;
    nickname: string;
    status: string;
    birthday: string;
    occupation: string[];
}

export interface ContextProps {
    characters: Character[];
    selected: Character | undefined;
    setSelected(id: number): void;
    randomSentence: string | undefined;
    loading: boolean;
}

export interface props {
    children: JSX.Element | JSX.Element[];
}

export enum Actions {
    LIST_Characters = 'LIST_Characters',
    SELECT_Character = 'SELECT_Character',
  }

export type AppActions = 
| { type: Actions.LIST_Characters, payload: { characters: Character[] } }
| { type: Actions.SELECT_Character, payload: { id: number } };

export const INITIAL_STATE = {
    characters: [],
    selected: undefined,
    setSelected: (id: number) => {},
    randomSentence: '',
    loading: true
}


