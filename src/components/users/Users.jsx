import React from 'react'
import { useQuery } from "react-query"
import db from '../../firebase';
import {
    collection,
    getDocs,
} from 'firebase/firestore';


const fetchUsers = async () => {
  const querySnapshot = await getDocs(collection(db, "systemUsers"));
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};
export const Users = () => {
  const {
    data: users = [],
    error,
    isLoading,
  } = useQuery("systemUsers", fetchUsers);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading users</div>;
  return (
    <div>
      Users
      {users?.map((u) => (
        <li key={u.id}>{u.userName}</li>
      ))}
    </div>
  );
};
