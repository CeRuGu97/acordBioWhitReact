/* eslint-disable no-restricted-globals */
import { clientsClaim } from 'workbox-core';
import { precacheAndRoute, matchPrecache } from 'workbox-precaching';
import { registerRoute, setCatchHandler } from 'workbox-routing';
import { StaleWhileRevalidate, NetworkFirst, CacheFirst } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { ExpirationPlugin } from 'workbox-expiration';

clientsClaim();

self.skipWaiting();

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  new RegExp('\\.js'),
  NetworkFirst({
    cacheName: 'JS',
  })
)

registerRoute(
  ({ url }) => url.origin === 'https://use.fontawesome.com/releases/v5.15.4/css/all.css',
  new StaleWhileRevalidate({
    cacheName: 'icon-cache',
  })
);
registerRoute(
  ({ url }) => url.origin === /^https?:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/,
  new CacheFirst({
    cacheName: 'google-fonts-cache',
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 30 * 24 * 60 * 60
      })
    ]
  })
);
// Cache page navigations (html) with a Network First strategy
//por defecto va al final del todo 
registerRoute(
  new RegExp(/^http?.*/),
  // Check to see if the request is a navigation to a new page
  ({ request }) => request.mode === 'navigate',
  // Use a Network First caching strategy
  new NetworkFirst({
    // Put all cached files in a cache named 'pages'
    cacheName: 'pages',
    plugins: [
      // Ensure that only requests that result in a 200 status are cached
      new CacheableResponsePlugin({
        statuses: [200],
      }),
    ],
  }),
);
//para redireccionar a la pagina de inicio si es que no existe una coneccion
setCatchHandler(async ({ event }) => {
  // Return the precached offline page if a document is being requested
  if (event.request.destination === 'document') {
    return matchPrecache('./index.html');
  }

  return Response.error();
});
