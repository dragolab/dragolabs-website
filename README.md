# Drago Labs website

## Environment variables

The Calcio Live endpoint requires a server-side token. Set `CALCIO_LIVE_API_TOKEN` in the Vercel project environment before deploying. Clients must send the same value as a `Bearer` token in the `Authorization` header.

The token must never be committed to this repository or embedded in a public client. If a native client cannot keep a credential private, use a short-lived, user-specific token service instead of relying on a shared app secret.
