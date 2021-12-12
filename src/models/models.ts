export interface Character {
    char_id: number;
    name: string;
    img: string;
    status: string;
    nickname: string;
    portrayed: string;
}

export interface ContextProps {
    characters: Character[];
    selected: Character | undefined;
    setSelected(id: number): void;
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

export const INITIAL_CHARACTER = {
    char_id: 0,
    name: '',
    img: '',
    status: '',
    nickname: '',
    portrayed: ''
}

export const INITIAL_STATE = {
    characters: [],
    selected: INITIAL_CHARACTER,
    setSelected: (id: number) => {},
    loading: true
}


