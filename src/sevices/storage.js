export function loadItem(key) {
  const data = localStorage.getItem(key);

  return JSON.parse(data);
}

export function saveItem(key, value) {
  return localStorage.setItem(key, JSON.stringify(value));
}
