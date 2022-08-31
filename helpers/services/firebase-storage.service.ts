import { getDownloadURL, listAll, ref } from 'firebase/storage';

import { firebaseStorage } from '~/helpers/services/firebase-initializer.services';

class FirebaseStorage {
  public async getImageUrl(path: string) {
    return await getDownloadURL(ref(firebaseStorage, path));
  }

  private async createImageUrl(file) {
    return await getDownloadURL(ref(firebaseStorage, file));
  }

  public async getAllImageUrls(path: string) {
    return await listAll(ref(firebaseStorage, path)).then(res =>
      res.items.map(async item => {
        const link = await this.createImageUrl(item);
        const element = { name: item.name, url: link };
        console.log(element);
        return element;
      }),
    );
  }
}

export const storage = new FirebaseStorage();
