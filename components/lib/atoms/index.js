import { atom } from "recoil";

// ----------- atom with one value here ------------------------

const openMenuAtom = atom({
  key: "openMenuAtom",
  default: false,
});

const leftNavPinedAtom = atom({
  key: "leftNavPinedAtom",
  default: false,
});

export { openMenuAtom, leftNavPinedAtom };
