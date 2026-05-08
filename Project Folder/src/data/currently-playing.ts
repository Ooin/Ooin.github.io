export interface CurrentlyPlaying {
  title: string;
  platform: string;
  image: string;
  hoursPlayed?: number;
  review: string;
  steamLink?: string;
}

export const currentlyPlaying: CurrentlyPlaying = {
  title: "Slay the Spire 2",
  platform: "Steam (Early Access)",
  image: "/images/games/slay-the-spire-2.jpg",
  review: "The sequel improves on the original roguelike deckbuilder with new characters, mechanics, and endless replayability. Currently addicted to the 'Watcher' ascension runs.",
  steamLink: "https://store.steampowered.com/app/3100000/Slay_the_Spire_2/",
};
