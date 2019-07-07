import { observable, action } from 'mobx'


class CommentsStore {
  @observable song = []
  @observable volumeLevel = ''
  @observable songTimeLeft
}
const store = new CommentsStore()
export default store
