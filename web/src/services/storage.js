class LocalStorage {
  storage = window.localStorage;

  setItem(key, value) {
    this.storage.setItem(key, value);
  }

  getItem(key) {
    return this.storage.getItem(key);
  }
}

export default new LocalStorage();