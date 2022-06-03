import { atom } from "recoil";

const openMenuAtom = atom({
  key: "openMenuAtom",
  default: false,
});

const leftNavPinedAtom = atom({
  key: "leftNavPinedAtom",
  default: false,
});

export { openMenuAtom, leftNavPinedAtom };
