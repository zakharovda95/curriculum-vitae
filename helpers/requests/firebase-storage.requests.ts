import { ref, getDownloadURL, listAll } from 'firebase/storage';

import { firebaseStorage } from '~/helpers/services/firebase-initializer.services';

class FirebaseStorage {
  public getImageUrl(path: string) {
    return getDownloadURL(ref(firebaseStorage, path));
  }

  private createImageUrl(file) {
    return getDownloadURL(ref(firebaseStorage, file));
  }

  public getAllImageUrls(path: string) {
    listAll(ref(firebaseStorage, path)).then(res =>
      res.items.forEach(async item => {
        const link = await this.createImageUrl(item);
        return { name: item.name, url: link };
      }),
    );
  }
}

export const storage = new FirebaseStorage();
