import { timingSafeEqual } from 'node:crypto';
import { Buffer } from 'node:buffer';
import process from 'node:process';

function hasValidToken(providedToken, expectedToken) {
  if (!providedToken || !expectedToken) return false;
  const provided = Buffer.from(providedToken);
  const expected = Buffer.from(expectedToken);
  return provided.length === expected.length && timingSafeEqual(provided, expected);
}

export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const expectedToken = process.env.CALCIO_LIVE_API_TOKEN;
  const authorization = req.headers.authorization;
  const providedToken = authorization?.startsWith('Bearer ')
    ? authorization.slice('Bearer '.length)
    : undefined;

  if (!hasValidToken(providedToken, expectedToken)) {
    return res.status(404).send('Not Found');
  }

  res.setHeader('Cache-Control', 'no-store');
  return res.status(200).json({
    "addon_id": "drago_calcio_01",
    "addon_name": "Calcio Live",
    "addon_version": "1.9",
    "engine_type": "AES_ENGINE_V1",
    "updateUrl": "https://dragolabs.vercel.app/drago-player.apk",
    "updateFeatures": "--"
  });
}
