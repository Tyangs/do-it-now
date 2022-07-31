export function getLocationSearch(keys: string): string | null;
export function getLocationSearch(keys: string[]): string[] | null;
export function getLocationSearch(
  keys: string | string[]
): string | Array<string | null> | null {
  const searchParams = new URLSearchParams(window.location.search);

  if (typeof keys === 'string') {
    return searchParams.get(keys);
  }

  return keys.map(key => searchParams.get(key));
}

type LocationKey =
  | 'hash'
  | 'host'
  | 'hostname'
  | 'href'
  | 'origin'
  | 'pathname'
  | 'port'
  | 'search';
/**
 * return value by location kay
 * @param key window location key
 * @returns the value of location key
 */
export function getLocationValue(key: LocationKey) {
  return window.location[key];
}
