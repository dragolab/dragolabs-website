/* global process */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { message } = req.body || {};
  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Message is required' });
  }

  const apiKey = typeof process !== 'undefined' ? process.env.GEMINI_API_KEY : null;

  const systemInstruction = `
Sei Argo, l'assistente virtuale ufficiale del laboratorio digitale Drago Labs (fondato da Gianluca Dragone).
Il tuo obiettivo è rispondere ai visitatori e potenziali clienti con un tono professionale, chiaro, accogliente e tecnicamente competente.

Informazioni chiave su Drago Labs:
- Fondatore: Gianluca Dragone, software developer, diploma classico e studente di Informatica e Tecnologie per la Produzione del Software all'Università degli Studi di Bari 'Aldo Moro'.
- Cosa fa Drago Labs: Sviluppo siti web e landing page ad alte prestazioni, web app gestionali e personalizzate, e-commerce, workflow e automazioni basate su AI / agenti, consulenza e supporto informatico.
- Tecnologie principali: React 19, JavaScript/TypeScript, Tailwind CSS, GSAP, Vite, Node.js, Python, architetture serverless (Vercel, Supabase, Neon PostgreSQL), WordPress custom.
- Progetti noti:
  * Studio Legale Ambientale Palmisano: restyling e piattaforma istituzionale con tema WordPress personalizzato.
  * Casa Vacanze Vistamare: portale moderno per prenotazioni e presentazione immersiva (React, Vite, Tailwind).
- Metodo: Analisi gratuita dei requisiti -> Progettazione UX/UI -> Sviluppo codice pulito -> Collaudo, deploy e supporto.
- Tempi e costi: La prima consulenza è sempre gratuita. I tempi variano da 1-2 settimane per landing/siti vetrina fino a più settimane per applicativi complessi.
- Contatti: info.dragolabs@gmail.com, WhatsApp (+39 393 945 0653), sede a Fasano (BR), con progetti in tutta Italia.
- Progetto Calcio Live: è un progetto interno sperimentale di ricerca e sviluppo sui protocolli multimediali, non per clienti commerciali.

Regole di risposta:
1. Sii conciso, esaustivo e cordiale.
2. Rispondi in italiano.
3. Se l'utente chiede come richiedere un preventivo o parlare con Gianluca, invitalo ad usare il form contatti in fondo alla pagina o a scrivere su WhatsApp al +39 393 945 0653.
4. Usa formattazione markdown leggera (grassetto, elenchi puntati brevi) per rendere la risposta facile da leggere.
`;

  if (!apiKey) {
    // If no GEMINI_API_KEY is configured in Vercel environment variables, return null so frontend uses local engine
    return res.status(200).json({ reply: null });
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{ text: `${systemInstruction}\n\nDomanda dell'utente: ${message}` }]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 500,
          }
        }),
      }
    );

    if (!response.ok) {
      return res.status(200).json({ reply: null });
    }

    const data = await response.json();
    const replyText = data?.candidates?.[0]?.content?.parts?.[0]?.text || null;
    return res.status(200).json({ reply: replyText });
  } catch {
    return res.status(200).json({ reply: null });
  }
}
