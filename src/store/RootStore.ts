import { AppStore } from './AppStore';

export class RootStore {
  appStore: AppStore;

  constructor() {
    this.appStore = new AppStore();
  }
}

export const store = new RootStore();
