import {  FiStar } from "react-icons/fi";
import { LuListTodo } from "react-icons/lu";
import { RiTodoLine } from "react-icons/ri";
import { GiFinishLine } from "react-icons/gi";
import { RiDeleteBinLine } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { TbLockPassword } from "react-icons/tb";


export const links = [
  { id: 1, text: "alle aufgaben", icon: <LuListTodo />, url: "/myDay" },
  { id: 2, text: "wichtig", icon: <FiStar />, url: "/myDay" },

  { id: 3, text: "in bearbeitung", icon: <RiTodoLine />, url: "/myDay" },
  { id: 4, text: "erledigt", icon: <GiFinishLine />, url: "/myDay" },
];

export const icons = [
  { id: 1, text: "Löschen", icon: <RiDeleteBinLine />, url: "/myDay" },
  { id: 2, text: "Bearbeiten", icon: <CiEdit />, url: "/myDay" },
  { id: 3, text: "Passwort", icon: <TbLockPassword />, url: "/myDay" },
];
