import create from "sun-zustand-vue"
import PubStore from "zustand-pub";

const pubStore = new PubStore("app");

const Pub = pubStore.defineStore<any>("testStore",(set, get) => ({
  bears: 0,
  add() {
    set((state) => ({ bears: state.bears + 1 }));
  
  },
  clear(){
    set({ bears: 0 })
  }
}));

const testStore = create(Pub);
export { testStore }