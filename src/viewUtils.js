// The original design stores some dynamic styles as CSS declaration strings.
export function cssStyle(value) {
 return Object.fromEntries(value.split(';').filter(part => part.includes(':')).map(part => {
 const colon = part.indexOf(':');
 const name = part.slice(0, colon).trim().replace(/-([a-z])/g, (_, c) => c.toUpperCase());
 return [name, part.slice(colon + 1).trim()];
 }));
}
export const isVisible = value => value === true || value === 'true';
