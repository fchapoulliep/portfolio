/**
 * The site used to route with the URL hash (/portfolio/#/contact). A link
 * shared at the time is moved to the matching path (/portfolio/contact)
 * before the router reads the address, so it still opens the right page.
 */
export const redirectLegacyHashUrl = () => {
  const { hash } = window.location;
  if (hash.startsWith("#/")) {
    window.history.replaceState(
      null,
      "",
      import.meta.env.BASE_URL + hash.slice(2)
    );
  }
};
