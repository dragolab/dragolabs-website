/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../locales/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(() => {
        try {
            return localStorage.getItem('dragolabs_lang') || 'it';
        } catch {
            return 'it';
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem('dragolabs_lang', language);
        } catch {
            // Ignore storage errors
        }
        document.documentElement.lang = language;
    }, [language]);

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'it' ? 'en' : 'it'));
    };

    const t = translations[language] || translations.it;

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, isEn: language === 'en', t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        return {
            language: 'it',
            setLanguage: () => {},
            toggleLanguage: () => {},
            isEn: false,
            t: translations.it,
        };
    }
    return context;
}
