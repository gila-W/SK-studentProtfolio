import db from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export const fetchUsers = async () => {
  const querySnapshot = await getDocs(collection(db, "systemUsers"));
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};
export const fetchStudentsList = async () => {
  const querySnapshot = await getDocs(collection(db, "studentPersonalDetails"));
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};
export const fetchStudentEducationDetailsList = async () => {
  const querySnapshot = await getDocs(collection(db, "studentEducationDetails"));
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};
