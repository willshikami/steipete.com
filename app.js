---
layout: compress
# Chirpy v2.2
# https://github.com/cotes2020/jekyll-theme-chirpy
# © 2020 Cotes Chung
# MIT Licensed
---

// kill old service workers
if(window.navigator && navigator.serviceWorker) {
  navigator.serviceWorker.getRegistrations()
  .then(function(registrations) {
    for(let registration of registrations) {
      registration.unregister();
    }
  });
}