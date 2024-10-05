import { atom } from "jotai";

type Message = {
  id: string;
  type: "AI" | "HUMAN";
  message: string;
};

const messageAtom = atom<Message[]>([]);

export { messageAtom };
