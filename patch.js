const originalStringify = JSON.stringify;
JSON.stringify = function(value, replacer, space) {
  try {
    return originalStringify(value, replacer, space);
  } catch (e) {
    if (e.message.includes('circular') || e.message.includes('Circular')) {
      const cache = new Set();
      return originalStringify(value, (key, val) => {
        if (typeof val === 'object' && val !== null) {
          if (cache.has(val)) return '[Circular]';
          cache.add(val);
        }
        if (typeof replacer === 'function') {
          return replacer(key, val);
        } else if (Array.isArray(replacer)) {
          return replacer.includes(key) ? val : undefined;
        }
        return val;
      }, space);
    }
    throw e;
  }
};
