import { atom } from "recoil";

// ----------- atom with one value here ------------------------

const openMenuAtom = atom<boolean>({
  key: "openMenuAtom",
  default: false,
});

const leftNavPinedAtom = atom<boolean>({
  key: "leftNavPinedAtom",
  default: false,
});


const displaySettingsModalAtom = atom<boolean>({

  key: "displaysettingsModalAtom",
  default: false,
});

export { openMenuAtom, leftNavPinedAtom, displaySettingsModalAtom };
