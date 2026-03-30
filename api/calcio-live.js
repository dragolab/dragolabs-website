export default function handler(req, res) {
  const isDragoPlayer = req.headers['x-drago-secret'] === 'SuperPasswordApp2024';

  if (!isDragoPlayer) {
    return res.status(404).send('Not Found');
  }

  res.status(200).json({
    "addon_id": "drago_calcio_01",
    "addon_name": "Calcio Live",
    "addon_version": "1.8",
    "engine_type": "AES_ENGINE_V1",
    // Questo è il tuo link Techlabapi criptato con le tue chiavi
    "encrypted_endpoint": "i6Y78X2iN/E8YmI3z7B8uO4U2rX9uP1vK9YV09z9J0x2X5A/p7P9m8Q3n5vL6z9X8C5A/p7P9m8Q3n5vL6z9X8C",
    "icon_url": "https://dragolabs.vercel.app/icons/calcio.png",
    "description": "Add-on ufficiale Drago Labs per il calcio."
  });
}
