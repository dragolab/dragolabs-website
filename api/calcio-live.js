export default function handler(req, res) {
  const isDragoPlayer = req.headers['x-drago-secret'] === 'SuperPasswordApp2024';

  if (!isDragoPlayer) {
    return res.status(404).send('Not Found');
  }

  res.status(200).json({
    "addon_id": "drago_calcio_01",
    "addon_name": "Calcio Live",
    "addon_version": "1.9",
    "engine_type": "AES_ENGINE_V1",
    "updateUrl": "https://dragolabs.vercel.app/drago-player.apk",
  "updateFeatures": "--"
}