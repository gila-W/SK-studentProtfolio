
import db from '../firebase';
import {
    collection,
    getDocs,
} from 'firebase/firestore';

 export const fetchUsers = async () => {
    const querySnapshot = await getDocs(collection(db, 'systemUsers'));
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  };
