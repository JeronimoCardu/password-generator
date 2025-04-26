import { create } from "zustand";

type PasswordProps = {
  config: string[];
  addConfig: (option: string) => void;
  deleteConfig: (option: string) => void;
  newPassword: string;
  setNewPassword: (p: string) => void;
  passwordLength: number;
  setPasswordLength: (l: number) => void;
  passwordCopied: boolean;
  setPasswordCopied: (copied: boolean) => void;
};

const usePasswordStore = create<PasswordProps>((set) => ({
  config: [],
  addConfig: (option: string) =>
    set((state) => ({ config: [option, ...state.config] })),
  deleteConfig: (option: string) =>
    set((state) => ({ config: state.config.filter((c) => c != option) })),
  newPassword: "P4$5W0rD!",
  setNewPassword: (p: string) => set({ newPassword: p }),
  passwordLength: 0,
  setPasswordLength: (l: number) => set({ passwordLength: l }),
  passwordCopied: false,
  setPasswordCopied: (copied: boolean) => set({ passwordCopied: copied }),
}));
export default usePasswordStore;
