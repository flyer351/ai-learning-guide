// Builds a link that works under the site's base path (e.g. / or /some-subfolder/).
export function url(path = '') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\//, '');
  if (!clean) return `${base}/`;
  return clean.includes('#') || clean.endsWith('/') ? `${base}/${clean}` : `${base}/${clean}/`;
}
