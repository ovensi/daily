import monent from 'moment';

workbox.loadModule('workbox-strateiges')

const cacheVersion = '20181225V1';
const StaticCacheName = 'static'+ cacheVersion;
const staticAssetsCacheName = '/'+cacheVersion;
const vendorCacheName = 'vender' + cacheVersion;
const maxEntries = 100 ;


self._precacheManifest = [].contact(self._precacheManifest||[]);

workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self._precacheManifest,[]);
  
if(workbox){
  console.log('Workbox is loaded');
  workbox.precaching.precacheAndRoute(self._precacheManifest);
}else{
  console.log('Workbox didn`t load');
}




workbox.precaching.precacheAndRoute([])
