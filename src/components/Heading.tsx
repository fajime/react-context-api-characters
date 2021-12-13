import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Heading = () => {
    const { t, i18n } = useTranslation('global');

    const [selectedLang] = useState<string>(i18n.language);

    const handleLanguage = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        i18n.changeLanguage(event.target.value);
    }

    return (
        <>
            <div className="item-center text-gray-900 font-bold mb-10">
            <select data-test="language" defaultValue={ selectedLang } onChange={handleLanguage} >
                <option data-text="es" value="es">{ t('spanish') }</option>
                <option data-text="en" value="en">{ t('english') }</option>
            </select>
            </div>
            <div data-test="title-page" className="item-center text-gray-100 font-bold mb-10 text-3xl">
                Breaking Bad {t('characters')}
            </div>
        </>
    )
}


