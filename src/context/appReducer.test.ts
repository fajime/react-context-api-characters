import { appReducer } from './appReducer';
import { Actions, AppActions, INITIAL_STATE, Character } from './../models/models';

describe('Pruebas en el appReducer', () => {
    const character = {
        char_id: 1,
        name: 'Francisco',
        portrayed: 'Francisco Jimenez',
        img: 'http://imangen.jpg',
        nickname: 'Fran',
        status: 'Vivo',
        birthday: '8-05-1980',
        occupation: ['barman', 'chofer'],
    }

    test('Debe retornar el estado pordefecto', async () => {

        const state = appReducer(INITIAL_STATE, {} as AppActions);
        expect(state).toEqual(INITIAL_STATE);

    });

    test('Debe retornar un listado de personajes vacio', async () => {

        const state = appReducer(INITIAL_STATE, {type: Actions.LIST_Characters, payload: { characters: [] as Character[]}  });
        const { characters } = state;
        expect(characters).toEqual([]);

    });

    test('Debe retornar un elemento en la lista de personajes', async () => {

        const state = appReducer(INITIAL_STATE, {type: Actions.LIST_Characters, payload: { characters: [character] }  });
        const { characters } = state;
        expect(characters.length).toEqual(1);

    });
});

