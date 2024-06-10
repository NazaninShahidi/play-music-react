export interface Imusic {
  id: number;
  title: string;
  artist: string;
  img: string;
  duration: string;
  src: string;
}

const musicTracks = [
  {
    id: 1,
    title: "Field",
    artist: "Evgeny Grinko",
    img: "img/Evgeny Grinko.jfif",
    duration: "3:20",
    src: "https://dl5.download1music.ir/Music/Without-Words/0bikalam%20download1music.ir%20(1).mp3",
  },
  {
    id: 2,
    title: "Spanish Lullaby",
    artist: "___",
    img: "img/Spanish Lullaby.jpg",
    duration: "2:25",
    src: "https://dl5.download1music.ir/Music/Without-Words/0bikalam%20download1music.ir%20(10).mp3",
  },
  {
    id: 3,
    title: "Battle of Pogs",
    artist: "Komiku",
    img: "img/Battle of Pogs.png",
    duration: "1:35",
    src: "https://dl5.download1music.ir/Music/Without-Words/0bikalam%20download1music.ir%20(11).mp3",
  },
  {
    id: 4,
    title: "DEKALOG",
    artist: "Preisner",
    img: "img/DEKALOG.jfif",
    duration: "2:11",
    src: "https://dl5.download1music.ir/Music/Without-Words/0bikalam%20download1music.ir%20(12).mp3",
  },
  {
    id: 5,
    title: "Mercedes",
    artist: "Babak Bayat",
    img: "img/Mercedes.png",
    duration: "3:53",
    src: "https://dl5.download1music.ir/Music/Without-Words/0bikalam%20download1music.ir%20(2).mp3",
  },
];

export const getAllMusic = () => {
  return musicTracks;
};
