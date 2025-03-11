import { useQuery } from "react-query";
import {
  fetchStudentEducationDetailsList,
  fetchStudentsList,
} from "./Services";
import { fetchUsers } from "./Services";

export const useUsers = () => {
  return useQuery("systemUsers", fetchUsers);
};
export const useStudents = () => {
  return useQuery("studentsPersonalDetails", fetchStudentsList);
};
export const useEducation = () => {
  return useQuery("studentsEducationDetails", fetchStudentEducationDetailsList);
};
