import React, { createContext } from "react";
import { useLocalObservable } from "mobx-react";
import { AsyncTrunk } from 'mobx-sync';

import { storageKey } from "../config/storeConfig";

import { createAuthStore, TAuthStore } from "../stores/AuthStore";

export type TStore = {
  authStore: TAuthStore,
  // add new stores here
}

export const storeContext = createContext<TStore | null>(null);

export const StoreProvider = ({ children }: any) => {
  const authStore = useLocalObservable(createAuthStore);
  // add new stores here

  const stores = {
    authStore,
    // add new stores here
  }

  // This wll automatically sync localstorage and state
  if (typeof window !== "undefined") {
    const trunk = new AsyncTrunk(stores, {
      storage: localStorage,
      storageKey: storageKey,
    });
    trunk.init().then();
  }

  return <storeContext.Provider value={stores}>{children}</storeContext.Provider>
}