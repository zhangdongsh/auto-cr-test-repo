// var LRUCache = function (capacity) {
//   this.capacity = capacity;
//   this.cacheMap = new Map();
// };

// /**
//  * @param {number} key
//  * @return {number}
//  */
// LRUCache.prototype.get = function (key) {
//   if (!this.cacheMap.has(key)) return -1;
//   const val = this.cacheMap.get(key);
//   this.cacheMap.delete(key);
//   this.cacheMap.set(key, val);
//   return val;
// };

// /**
//  * @param {number} key
//  * @param {number} value
//  * @return {void}
//  */
// LRUCache.prototype.put = function (key, value) {
//   if (this.cacheMap.has(key)) {
//     this.cacheMap.delete(key);
//     this.cacheMap.set(key, value);
//     return;
//   }
//   while (this.cacheMap.size >= this.capacity) {
//     const lastKey = this.cacheMap.keys().next().value;
//     this.cacheMap.delete(lastKey);
//   }
//   this.cacheMap.set(key, value);
// };

function LRUCache(capacity: number) {
  if (capacity < 1) {
    throw Error("capacity invalid");
  }
  const map = new Map<number, number>();
  function get(key: number): number {
    if (map.has(key)) {
      const result = map.get(key);
      if (typeof result === "number") {
        //moveToHead
        map.delete(key);
        map.set(key, result);
        return result;
      }
    }
    return -1;
  }
  function put(key: any, value: any): void {
    if (map.has(key)) {
      //moveToHead
      map.delete(key);
      map.set(key, value);
    } else {
      //addToHead
      map.set(key, value);
      if (map.size > capacity) {
        //removeTail
        const firstkey = ((map) => {
          for (const key of map.keys()) {
            return key;
          }
          throw Error("empty map");
        })(map);
        map.delete(firstkey);
      }
    }
  }
  return { get, put };
}

const LRU = LRUCache(5);

LRU.put("测试1", "测试1");
LRU.put("测试2", "测试2");
LRU.put("测试3", "测试3");
