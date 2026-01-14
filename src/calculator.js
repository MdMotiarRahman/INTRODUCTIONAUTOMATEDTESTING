export function add (a, b) {
2
if (typeof a !== 'number' || typeof b !== 'number') {
throw new TypeError ('add expects two numbers');
34
}
5
return a + b;
}