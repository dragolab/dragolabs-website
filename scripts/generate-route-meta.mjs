import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const siteUrl = 'https://dragolabs.vercel.app';
const imageUrl = `${siteUrl}/img/logo-dragolabs.png`;
const routes = {
  '/chi-sono': ['Chi sono | Drago Labs', 'Conosci Gianluca Dragone e l’approccio analitico di Drago Labs allo sviluppo web, alla consulenza IT e alla crescita digitale.'],
  '/servizi': ['Servizi digitali | Drago Labs', 'Sviluppo siti web, e-commerce, consulenza strategica e assistenza IT su misura per far crescere la presenza online del tuo business.'],
  '/portfolio': ['Portfolio | Drago Labs', 'Scopri alcuni progetti di siti web e soluzioni digitali realizzati da Drago Labs per attività e strutture ricettive.'],
  '/blog': ['Blog | Drago Labs', 'Approfondimenti di Drago Labs su sviluppo web, presenza digitale, performance e consulenza tecnologica.'],
  '/contatti': ['Contatti | Drago Labs', 'Raccontaci il tuo progetto: richiedi una consulenza a Drago Labs per sviluppo web, e-commerce e assistenza IT.'],
  '/calcio-live': ['Calcio Live | Drago Labs', 'Informazioni e aggiornamenti sull’applicazione sperimentale Calcio Live.'],
  '/termini-e-condizioni': ['Termini di servizio | Drago Labs', 'Consulta i termini di servizio di Drago Labs per lo sviluppo web, la consulenza e l’assistenza IT.'],
  '/terms': ['Termini di servizio | Drago Labs', 'Consulta i termini di servizio di Drago Labs per lo sviluppo web, la consulenza e l’assistenza IT.'],
  '/cookie-policy': ['Cookie Policy | Drago Labs', 'Informativa sui cookie utilizzati dal sito Drago Labs.'],
  '/privacy': ['Privacy Policy | Drago Labs', 'Informativa sul trattamento dei dati personali inviati tramite il modulo di contatto di Drago Labs.'],
};

function replaceMeta(html, attribute, key, content) {
  const expression = new RegExp(`<meta\\s+${attribute}=["']${key}["'][^>]*>`, 'i');
  const replacement = `<meta ${attribute}="${key}" content="${content}" />`;
  return expression.test(html) ? html.replace(expression, replacement) : html.replace('</head>', `  ${replacement}\n</head>`);
}

function documentForRoute(html, route, title, description) {
  const canonicalPath = route === '/terms' ? '/termini-e-condizioni' : route;
  const canonical = `${siteUrl}${canonicalPath}`;
  let result = html.replace(/<title>[^<]*<\/title>/i, `<title>${title}</title>`);
  result = replaceMeta(result, 'name', 'description', description);
  result = replaceMeta(result, 'property', 'og:title', title);
  result = replaceMeta(result, 'property', 'og:description', description);
  result = replaceMeta(result, 'property', 'og:url', canonical);
  result = replaceMeta(result, 'property', 'og:image', imageUrl);
  result = replaceMeta(result, 'name', 'twitter:title', title);
  result = replaceMeta(result, 'name', 'twitter:description', description);
  result = replaceMeta(result, 'name', 'twitter:image', imageUrl);
  result = result.replace(/<link rel="canonical"[^>]*>\s*/i, '');
  return result.replace('</head>', `  <link rel="canonical" href="${canonical}" />\n</head>`);
}

const rootHtml = await readFile(join('dist', 'index.html'), 'utf8');
for (const [route, [title, description]] of Object.entries(routes)) {
  const outputPath = join('dist', route.slice(1), 'index.html');
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, documentForRoute(rootHtml, route, title, description));
}
