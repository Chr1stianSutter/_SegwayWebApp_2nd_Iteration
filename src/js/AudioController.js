export default class AudioController {
  constructor(){
    this.volume = 1
    this.songProgress = 0
    this.currentSongData = {
      title: "string",
      artist: "string"
    }
    this.songsOnStorageDevice = {
      folders: [
        {
          path: "../circular-audio-wave-master/demo/audio/",
          title: "Demo Audios",
          songs: [
            {
              title: "Demo Audio 1",
              file: "audio1.mp3"
            },
            {
              title: "Demo Audio 2",
              file: "audio2.mp3"
            },
            {
              title: "Demo Audio 3",
              file: "audio3.mp3"
            }
          ]
        },
        {
          path: "ftp://awesomeAudio.website/files",
          title: "Awesome audio from ze interwebs!",
          songs: [
            {
              title: "Great Song",
              file: "greatSong.mp3"
            },
            {
              title: "Best Song",
              file: "bestSong.mp3"
            }
          ]
        }
      ]
    }
  }

  songPickerToggle() {
    console.error('song picker toggle undefined')
    return false
  }

  setSongPickerToggle(ref){
    this.songPickerToggle = ref
  }

  setPlayback(){
    console.error('playback setter undefined')
    return false
  }

  setSongsSetter(ref){
    this.setPlayback = ref
  }

  setVolume(level){
    if(level > 1) level = 1
    if(level < 0) level = 0
    this.volume = level
    //call wave audio and update volume
    /*
    if(this.wave){
    change
  }
    */
  }

  getVolume(){
    return this.volume
  }

  changeSongProgress(){
    console.error('songProgress setter undefined')
    return false
  }
  setChangeSongProgress(ref){
    this.changeSongProgress = ref
  }
  getSongProgress(){
    return this.songProgress
  }

  changeActiveSong(){
    console.error('changeActiveSong setter undefined')
    return false
  }
  setChangeCurrentSong(ref){
    this.changeActiveSong = ref
  }
  getCurrentSongData(){
    return this.currentSongData
  }

  getSongsOnStorageDesvice(){
    return this.songsOnStorageDevice
  }
}
