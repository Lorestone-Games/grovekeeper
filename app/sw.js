// JournalScape's phone app moved to https://journalscape.lorestonegames.com/app/ (12 November 2026).
// This replacement service worker clears the old app's cached files and removes itself, so phones that installed the
// old address see the "moved" page instead of a stale copy.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',event=>event.waitUntil((async()=>{
 for(const key of await caches.keys())await caches.delete(key);
 await self.registration.unregister();
 for(const client of await self.clients.matchAll({type:'window'}))client.navigate(client.url);
})()));
