import home_icon from './home.svg?react'
import library_icon from './library.svg?react'
import pause_icon from './pause.svg?react'
import play_icon from './play.svg?react'
import shuffle_icon from './shuffle.svg?react'
import volume_icon from './volume-high.svg?react'
import backward_icon from './backward.svg?react'
import forward_icon from './forward.svg?react'
import logo_icon from './logo.svg?react';
import arrowLeft_icon from './arrow-left.svg?react'
import arrowRight_icon from './arrow-right.svg?react'
import search__icon from './search.svg?react'
import watch_icon from './watch.svg?react'

import song1 from './Imagine Dragons - Bones.mp3'
import song2 from './Imagine Dragons - Believer.mp3'
import song3 from './Imagine Dragons - Natural.mp3'
import song4 from './Imagine Dragons - Enemy from the series Arcane League of Legends.mp3'

export const assets = {
  home_icon,
  library_icon,
  pause_icon,
  play_icon,
  shuffle_icon,
  volume_icon,
  backward_icon,
  forward_icon,
  logo_icon,
  arrowLeft_icon,
  arrowRight_icon,
  search__icon,
  watch_icon,
}

export const localMusicData = [
  {
    id: 1,
    artist: 'Imagine Dragons',
    title: 'Bones',
    image: 'https://avatars.yandex.net/get-music-content/6296749/118807fd.a.22046595-1/m1000x1000',
    audio: song1,
    duration: '2:45'
    
  },
  {
    id: 2,
    artist: 'Imagine Dragons',
    title: 'Believer',
    image: 'https://avatars.yandex.net/get-music-content/98892/a6be0789.a.5568718-1/m1000x1000',
    audio: song2,
    duration: '3:24'
  },
  {
    id: 3,
    artist: 'Imagine Dragons',
    title: 'Natural',
    image: 'https://avatars.yandex.net/get-music-content/117546/b5c6945b.a.6017186-1/m1000x1000',
    audio: song3,
    duration: '3:09'
  },
  {
    id: 4,
    artist: 'Imagine Dragons',
    title: 'Enemy from the series Arcane League of Legends',
    image: 'https://avatars.yandex.net/get-music-content/5531900/c62fdddc.a.21002416-1/m1000x1000',
    audio: song4,
    duration: '2:53'
  },
]