import { observable, action, computed } from 'mobx';
import NaviButton from "../components/NaviButton";

class MenuStateStore {
   @observable
   NaviButton.state = {"show_menu": false};

   @action
   naviButtonOpenTheMenu = () => {
      NaviButton.setState({"show_menu": true})
   }

   @action
   naviButtonCloseTheMenu = () => {
      NaviButton.setState({"show_menu": false})
   }
};

export default MenuStateStore;
