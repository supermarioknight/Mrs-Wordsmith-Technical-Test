// Define a function type that takes an arbitrary number of arguments and returns any type.
type Fn = (...args: any[]) => any;

/**
 * Function to memoize any given function.
 *
 * @param fn - The function to be memoized.
 * @returns A new function that behaves like `fn` but caches its results.
 */
function memoize(fn: Fn): Fn {
  // Initialize a new cache Map to store previously computed results.
  const cache = new Map();

  return (...args: any[]) => {
    // Convert the arguments to a string to use as a cache key.
    const key = JSON.stringify(args);
    
    // If the cache has a value for this key, return the cached value.
    if (cache.has(key)) {
      return cache.get(key);
    }
    
    // Otherwise, call `fn` with the arguments to compute a result.
    const result = fn(...args);
    // Store the computed result in the cache.
    cache.set(key, result);
    
    return result;
  };
}
