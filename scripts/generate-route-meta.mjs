import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const siteUrl = 'https://dragolabs.vercel.app';
const imageUrl = `${siteUrl}/img/logo-dragolabs.png`;
const routes = {
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
