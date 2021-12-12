import { useState, useReducer, useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { GlobalContext } from './GlobalContext';
import { appReducer } from './appReducer';
import { props, Actions, INITIAL_STATE } from './../models/models';

export const ContextProvider = ({children}: props ) => {
    const [state, dispatch] = useReducer(appReducer, INITIAL_STATE);
    const [loading, setLoading] = useState<boolean>(true);

    const baseUrl: string = process.env.REACT_APP_API_URL || '';
    
    const errorNotify = (error: string) => toast.error(error);

    useEffect( () => {
        axios.get(`${baseUrl}/characters?limit=16`)
            .then((response) => {
                dispatch({ type: Actions.LIST_Characters, payload: response.data});
                setLoading(false);
            })
            .catch((error) => {
                if (error) {
                    setLoading(false);
                    errorNotify('No se ha podido procesar la petición.');
                }
            });     
    }, [baseUrl]);

    const setSelected = ( id: number ): void => {
        dispatch({ type: Actions.SELECT_Character, payload: {id}});
    }

    return (
        <GlobalContext.Provider value={{
                characters: state.characters, 
                selected: state.selected, 
                setSelected, 
                loading 
            }}>
            {children}
            <Toaster 
                position="top-center"
                reverseOrder={true}
            />
        </GlobalContext.Provider>
    )
}