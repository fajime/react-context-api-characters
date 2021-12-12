import { ContextProps, Character, AppActions, Actions } from '../models/models';

export const appReducer = (state: ContextProps, action: AppActions ): ContextProps => {

    switch (action.type) {
        case Actions.LIST_Characters:
            return {
                ...state, 
                characters: [...state.characters, ...action.payload]
            };
        case Actions.SELECT_Character:
            return {
                ...state, 
                selected: state.characters.find( (character: Character) => character.char_id === action.payload.id)
            };
        default:
            return state;
    }
}
