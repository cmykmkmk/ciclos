/* Service worker do Ciclos de Estudo.
 *
 * A versão anterior servia sempre o cache primeiro, com nome de cache fixo:
 * depois de instalado, o app nunca mais via um index.html novo. Aqui a página
 * é buscada na rede primeiro e o cache é só a rede de segurança para quando
 * não houver servidor rodando. Os arquivos de apoio (ícones, manifest) seguem
 * vindo do cache, que se atualiza em segundo plano.
 */
const CACHE = "ciclos-v4";
const ARQS = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png"];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.allSettled(ARQS.map(a => c.add(a))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* Permite forçar a troca pela própria página, sem esperar o navegador. */
self.addEventListener("message", e => {
  if (e.data === "atualizar") self.skipWaiting();
});

function ehPagina(req) {
  return req.mode === "navigate" ||
         req.destination === "document" ||
         new URL(req.url).pathname.endsWith("index.html");
}

/* Tocar no aviso traz o app para a frente. */
self.addEventListener("notificationclick", e => {
  e.notification.close();
  e.waitUntil(
    self.clients.matchAll({type: "window", includeUncontrolled: true}).then(cs => {
      for (const c of cs) if ("focus" in c) return c.focus();
      return self.clients.openWindow("./index.html");
    })
  );
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  // A sincronização (api.github.com) e qualquer outro endereço de fora passam
  // direto: guardar resposta da API em cache faria o app ler dados velhos.
  // Só as fontes do Google ficam em cache, para a página abrir sem internet.
  const u = new URL(e.request.url);
  if (u.origin !== self.location.origin &&
      !/fonts\.(googleapis|gstatic)\.com$/.test(u.hostname)) return;

  if (ehPagina(e.request)) {
    // rede primeiro: pega a versão nova assim que houver servidor
    e.respondWith(
      fetch(e.request)
        .then(resp => {
          const copia = resp.clone();
          caches.open(CACHE).then(c => c.put("./index.html", copia)).catch(() => {});
          return resp;
        })
        .catch(() => caches.match("./index.html").then(r => r || caches.match("./")))
    );
    return;
  }

  // demais arquivos: responde do cache e atualiza por trás
  e.respondWith(
    caches.match(e.request).then(cacheado => {
      const rede = fetch(e.request).then(resp => {
        const copia = resp.clone();
        caches.open(CACHE).then(c => c.put(e.request, copia)).catch(() => {});
        return resp;
      }).catch(() => cacheado);
      return cacheado || rede;
    })
  );
});
