import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DEFAULT_IMAGE, pageMetadata, SITE_URL } from '../data/seoMetadata';

function upsertMeta(selector, attributes, content) {
    let element = document.head.querySelector(selector);
    if (!element) {
        element = document.createElement('meta');
        Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
        document.head.appendChild(element);
    }
    element.setAttribute('content', content);
}

export default function Seo() {
    const { pathname } = useLocation();
    const canonicalPath = pathname === '/terms' ? '/termini-e-condizioni' : pathname;
    const metadata = pageMetadata[canonicalPath] ?? pageMetadata['/'];
    const canonicalUrl = `${SITE_URL}${canonicalPath === '/' ? '/' : canonicalPath}`;

    useEffect(() => {
        document.title = metadata.title;
        upsertMeta('meta[name="description"]', { name: 'description' }, metadata.description);
        upsertMeta('meta[property="og:title"]', { property: 'og:title' }, metadata.title);
        upsertMeta('meta[property="og:description"]', { property: 'og:description' }, metadata.description);
        upsertMeta('meta[property="og:url"]', { property: 'og:url' }, canonicalUrl);
        upsertMeta('meta[property="og:image"]', { property: 'og:image' }, DEFAULT_IMAGE);
        upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title' }, metadata.title);
        upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description' }, metadata.description);
        upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image' }, DEFAULT_IMAGE);

        let canonical = document.head.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', canonicalUrl);
    }, [canonicalUrl, metadata]);

    return null;
}
