import { useState, useReducer, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { VscError } from 'react-icons/vsc';
import { GlobalContext } from './GlobalContext';
import { appReducer } from './appReducer';
import { props, Actions, INITIAL_STATE } from './../models/models';

export const ContextProvider = ({ children }: props ) => {
    const [state, dispatch] = useReducer(appReducer, INITIAL_STATE);
    const { characters, selected } = state;
    const [loading, setLoading] = useState<boolean>(true);
    const { t } = useTranslation('global');

    const baseUrl: string = process.env.REACT_APP_API_URL || '';
    
    useEffect( () => {
        axios.get(`${baseUrl}/characters?limit=16`)
        .then((response) => {
            dispatch({ type: Actions.LIST_Characters, payload: { characters: response.data }});
            setLoading(false);
        })
        .catch((error) => {
            if (error) {
                setLoading(false);
                toast(
                    (tost) => (
                        <span> {t('request_error')} 
                            <button className="ml-5 text-red-800" onClick={() => toast.dismiss(tost.id)}>
                                {t('close')}
                            </button>
                        </span>
                    ),
                    { icon: <VscError color="red" />, }
                );
            }
        });  
    }, [baseUrl]);

    const setSelected = (id: number): void => {
        dispatch({ type: Actions.SELECT_Character, payload: { id } });
    }

    return (
        <GlobalContext.Provider value={{
                characters: characters, 
                selected: selected, 
                setSelected, 
                loading 
            }}>
            { children }
            <Toaster 
                position="top-center"
                reverseOrder={ true }
                toastOptions={{
                    duration: 3000,
                    style: {
                      minWidth: '400px',
                    },
                  }}
            />
        </GlobalContext.Provider>
    )
}