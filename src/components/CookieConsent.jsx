import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MEASUREMENT_ID = 'G-MMVHGPDEH1';
const CONSENT_KEY = 'drago-cookie-consent';

function enableAnalytics() {
    if (window.__dragoAnalyticsLoaded) return;

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', MEASUREMENT_ID);

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
    script.dataset.dragoAnalytics = 'true';
    document.head.appendChild(script);
    window.__dragoAnalyticsLoaded = true;
}

export default function CookieConsent() {
    const [isOpen, setIsOpen] = useState(() => !window.localStorage.getItem(CONSENT_KEY));

    useEffect(() => {
        const preference = window.localStorage.getItem(CONSENT_KEY);
        if (preference === 'granted') enableAnalytics();
        const openPreferences = () => setIsOpen(true);
        window.addEventListener('drago:open-cookie-settings', openPreferences);
        return () => window.removeEventListener('drago:open-cookie-settings', openPreferences);
    }, []);

    const savePreference = (preference) => {
        window.localStorage.setItem(CONSENT_KEY, preference);
        if (preference === 'granted') enableAnalytics();
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <aside role="dialog" aria-modal="false" aria-labelledby="cookie-consent-title" className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-xl rounded-2xl border border-white/15 bg-[#132126]/95 p-5 shadow-2xl backdrop-blur-xl sm:bottom-6 sm:p-6">
            <h2 id="cookie-consent-title" className="font-sans text-lg font-bold text-white">Cookie analitici</h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-300">Con il tuo consenso utilizziamo Google Analytics 4 per comprendere in forma aggregata come viene usato il sito. Puoi cambiare scelta in qualsiasi momento dal footer.</p>
            <p className="mt-2 text-xs text-gray-400">Leggi la <Link to="/cookie-policy" className="text-drago-accent hover:underline" onClick={() => setIsOpen(false)}>Cookie Policy</Link>.</p>
            <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <button type="button" onClick={() => savePreference('denied')} className="rounded-xl border border-white/15 px-4 py-2.5 text-sm font-semibold text-gray-200 transition-colors hover:border-white/30 hover:bg-white/5">Rifiuta</button>
                <button type="button" onClick={() => savePreference('granted')} className="rounded-xl bg-drago-accent px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-drago-accent/90">Accetta analytics</button>
            </div>
        </aside>
    );
}