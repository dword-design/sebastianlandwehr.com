export default defineNuxtPlugin(() => {
  const _paq = (globalThis._paq = globalThis._paq || []);
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['trackPageView'], ['enableLinkTracking'], ['disableCookies']);
  const u = 'https://matomo.sebastianlandwehr.com/';
  _paq.push(['setTrackerUrl', u + 'matomo.php'], ['setSiteId', '2']);

  const d = document,
    g = d.createElement('script'),
    s = d.querySelectorAll('script')[0];

  g.async = true;
  g.src = u + 'matomo.js';
  s.parentNode.insertBefore(g, s);
});
