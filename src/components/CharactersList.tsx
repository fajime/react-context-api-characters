import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ImSpinner11 } from 'react-icons/im';
import 'animate.css';

import { GlobalContext } from '../context/GlobalContext';
import { Character } from './../models/models';

export const CharactersList = () => {
    const { characters, setSelected, loading } = useContext(GlobalContext);

    const { t } = useTranslation('global');

    const handleSelected = (id: number ) => {
        setSelected(id);
    }

    return (
        <>
            { !loading && characters.length > 2 && (
                <div className="flex flex-wrap justify-center">
                    { characters.map( (character: Character) => 
                        (
                            <Link 
                                to="detail" 
                                onClick={() => handleSelected( character.char_id )} 
                                key={character.char_id} 
                                className="bg-gray-900 px-5 w-1/5 py-5 text-white shadow-2x1 m-4 animate__animated animate__zoomInDown"> 
                                    <div className="bg-gray-900 mb-5">
                                        <img src={character.img} title={character.name} alt={character.name} className="object-contain h-48 w-96" />
                                    </div>
                                    <p className="font-bold mb-2">{character.name}</p>
                                    <p>{character.portrayed}</p>
                            </Link>
                        ) 
                    )}
                </div>
            )}
            { loading && ( 
                <button type="button" className="inline-flex items-center px-4 py-2 font-semibold rounded-md text-white bg-green-500">
                    <ImSpinner11 className='mr-3'/>
                    {t('loading')}
                </button>
            )}
        </>
    )
}
