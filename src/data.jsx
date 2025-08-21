import { FaBars, FaTimes } from "react-icons/fa";
import { FiSun, FiStar } from "react-icons/fi";
import { LuListTodo } from "react-icons/lu";
import { RiTodoLine } from "react-icons/ri";
import { GiFinishLine } from "react-icons/gi";
import { IoPersonOutline } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { TbLockPassword } from "react-icons/tb";

export const links = [
  { id: 1, text: "mein Tag", icon: <FiSun />, url: "/myDay" },
  { id: 2, text: "wichtig", icon: <FiStar />, url: "/myDay" },
  { id: 3, text: "alle aufgaben", icon: <LuListTodo />, url: "/myDay" },
  { id: 4, text: "geplant", icon: <RiTodoLine />, url: "/myDay" },
  { id: 5, text: "erledigt", icon: <GiFinishLine />, url: "/myDay" },
  
];

export const icons = [
  { id: 1, text: "Löschen", icon: <RiDeleteBinLine />, url: "/myDay" },
  { id: 2, text: "Bearbeiten", icon: <CiEdit />, url: "/myDay" },
  { id: 3, text: "Passwort", icon: <TbLockPassword />, url: "/myDay" },
];
