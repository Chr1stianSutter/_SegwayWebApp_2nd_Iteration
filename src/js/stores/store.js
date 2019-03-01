import { observable, action } from 'mobx'

class Store {

  @observable activeNavElement: ""

  @action setActiveNavState(menuElement){
    this.activeNavElement = menuElement;
    console.log(this.activeNavElement);
  }
}
const navStore = new Store();
export default navStore;
