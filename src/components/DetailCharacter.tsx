import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import 'animate.css';

import { GlobalContext } from './../context/GlobalContext';

export const DetailCharacter = () => {

    const { selected } = useContext(GlobalContext);
    const { t } = useTranslation('global');

    return (
        <>
            { selected?.char_id !== 0 && (
                <>
                    <Link className="animate__animated animate__fadeInDown" to="/">
                        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mb-5">
                            <span>{t('back')}</span>
                        </button>
                    </Link>
                    <div className="flex flex-wrap justify-center animate__animated animate__zoomInDown">
                        <div className="bg-gray-900 p-10">
                            <div className="mb-5">
                                <img src={selected?.img} title={selected?.name} alt={selected?.name} className="object-fit h-58 w-96" />
                            </div>
                            <p className="font-bold mb-2">{selected?.name}</p>
                            <p>{selected?.portrayed}</p>
                        </div>
                    </div>
                </>
            )}
            { (selected?.char_id === 0  || !selected) && (
                <>
                    <p className="font-bold mb-2 text-red-800">{t('select_of_list')}</p>
                    <Link className="animate__animated animate__fadeInDown" to="/">
                        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mb-5">
                            <span>{t('back')}</span>
                        </button>
                    </Link>
                </>
            )

            }
        </>
    )
}
