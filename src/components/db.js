'use strict'
import idb from 'idb'
// export default function() {
//   const dbPromise = idb.open('keyval-store', 1, upgradeDB => {
//     upgradeDB.createObjectStore('keyval');
//   });

//   function addData(store, id, data) {
//     dbPromise.then(db => {
//       const tx = db.transaction('objs', 'readwrite');
//       tx.objectStore(store).put({
//         id: 123456,
//         data: {foo: "bar"}
//       });
//       return tx.complete;
//     });
//   }
// }
export default class db {
  constructor() {
    this.dbPromise = idb.open('keyval-store', 1, upgradeDB => {
      switch (upgradeDB.oldVersion) {
        case 0:
          upgradeDB.createObjectStore('keyval');
        case 1:
          upgradeDB.createObjectStore('conversions');
          // upgradeDB.createObjectStore('conversions', {keyPath: 'id'});
      }
    });
  }

  addData(store, id, data) {
    this.dbPromise.then(db => {
      const tx = db.transaction(store, 'readwrite');
      tx.objectStore(store).put(data, id);
      // tx.objectStore(store).put({
      //   id: 123456,
      //   data: {foo: "bar"}
      // });
      return tx.complete;
    });
  }

  getData(store, id) {
    this.dbPromise.then(db => {
      return db.transaction(store)
        .objectStore(store).get(id);
    }).then(obj => {
      console.log(obj)
      return obj
    });
  }
}
// module.exports = db
