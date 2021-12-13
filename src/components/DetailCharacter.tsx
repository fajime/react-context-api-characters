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
            { selected && (
                <>
                    <Link className="animate__animated animate__fadeInDown" to="/">
                        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mb-5">
                            <span>{t('back')}</span>
                        </button>
                    </Link>
                    <div className="flex flex-wrap justify-center animate__animated animate__zoomInDown">
                        <div className="bg-gray-900 p-10">
                            <div className="mb-5">
                                <img src={selected.img} title={selected.name} alt={selected.name} className="object-fit h-48 w-86"/>
                            </div>
                        </div>
                        <div className="bg-gray-900 pt-10 pr-10">
                            <p className="font-bold mb-2">
                                <span className="font-normal mb-2">{t('name')}: </span>
                                {selected.name}
                            </p>
                            <p className="font-bold mb-2">
                                <span className="font-normal mb-2">{t('portrayed')}: </span>
                                {selected.portrayed}
                            </p>
                            <p className="font-bold mb-2">
                                <span className="font-normal mb-2">{t('nickname')}: </span>
                                {selected.nickname}
                            </p>
                            <p className="font-bold mb-2">
                                <span className="font-normal mb-2">{t('status')}: </span>
                                {selected.status}
                            </p>
                            <p className="font-bold mb-2">
                                <span className="font-normal mb-2">{t('birthday')}: </span>
                                {selected.birthday}
                            </p>
                            <p className="font-bold mb-8">
                                <span className="font-normal mb-2">{t('occupation')}: </span>
                                {selected.occupation.map( (ocupation, index) => (<li className="list-none" key={index}>{ ocupation }</li>))}
                            </p>
                        </div>
                    </div>
                </>
            )}
            { !selected && (
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
