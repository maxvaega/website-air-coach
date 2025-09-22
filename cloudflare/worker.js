// ATTENZIONE: non è un componente del sito
// Proxy tra dominio personalizzato e servizi su Vercel (API Python) e Cloudflare Pages (sito Next.js)
//
//URL: https://air-coach-proxy.aistruttore.workers.dev/
// Serve per fare da proxy tra il dominio personalizzato e i servizi su Vercel e Cloudflare Pages

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname.startsWith('/api/')) {
      // Proxy verso API Python su Vercel
      const apiUrl = `https://air-coach.vercel.app${url.pathname}${url.search}`;

      // Crea nuovi headers puliti
      const newHeaders = new Headers();
      newHeaders.set('accept', 'application/json');
      newHeaders.set('content-type', 'application/json');

      // Copia alcuni headers importanti dalla richiesta originale
      if (request.headers.get('authorization')) {
        newHeaders.set('authorization', request.headers.get('authorization'));
      }

      const newRequest = new Request(apiUrl, {
        method: request.method,
        headers: newHeaders,
        body: request.method !== 'GET' && request.method !== 'HEAD' ? request.body : null
      });

      const response = await fetch(newRequest);

      // Aggiungi headers CORS alla risposta
      const newResponse = new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: {
          ...Object.fromEntries(response.headers),
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        }
      });

      return newResponse;

    } else {
      // Proxy verso sito Next.js su Cloudflare Pages
      const siteUrl = `https://website-air-coach.pages.dev${url.pathname}${url.search}`;

      return fetch(siteUrl, {
        method: request.method,
        headers: request.headers,
        body: request.body
      });
    }
  }
}