import { get, ref, set } from 'firebase/database';

import { firebaseDatabase } from '~/helpers/services/firebase-initializer.service';

class FirebaseDatabase {
  public async getData(path: string) {
    return await get(ref(firebaseDatabase, path)).then(snapshot => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log('No Data:(');
      }
    });
  }

  public async setData(path: string, data: any) {
    await set(ref(firebaseDatabase, path), data);
  }

  public async deleteData(path: string) {
    await set(ref(firebaseDatabase, path), null);
  }
}

export const database = new FirebaseDatabase();
