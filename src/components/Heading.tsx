import { useTranslation } from 'react-i18next';

export const Heading = () => {
    const { t, i18n } = useTranslation('global');

    const handleLanguage = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        i18n.changeLanguage(event.target.value);
    }

    return (
        <>
            <div className="item-center text-gray-900 font-bold mb-10">
            <select onChange={handleLanguage} >
                <option value="es">{t('spanish')}</option>
                <option value="en">{t('english')}</option>
            </select>
            </div>
            <div className="item-center text-gray-100 font-bold mb-10 text-3xl">
                Breaking Bad {t('characters')}
            </div>
        </>
    )
}


