export const words = [
  "apple", "apricot", "avocado", "banana", "berry", "cherry", "coconut", "grape", "lemon", "mango",
  "melon", "orange", "papaya", "peach", "plumage", "pumpkin", "radish", "spinach", "tomato", "walnut",
  "badger", "beetle", "bison", "buffalo", "cheetah", "dolphin", "falcon", "ferret", "foxhound", "giraffe",
  "hamster", "jaguar", "leopard", "lobster", "meerkat", "monkey", "otter", "penguin", "rabbit", "raccoon",
  "salmon", "sparrow", "squirrel", "tiger", "toucan", "turtle", "walrus", "weasel", "whale", "zebra",
  "autumn", "breeze", "canyon", "cloud", "comet", "desert", "forest", "glacier", "harbour", "island",
  "jungle", "lagoon", "meadow", "mountain", "ocean", "pebble", "planet", "prairie", "river", "shadow",
  "spring", "summer", "sunset", "thunder", "valley", "volcano", "water", "winter", "woodland", "zephyr",
  "anchor", "basket", "blanket", "bridge", "button", "camera", "candle", "compass", "curtain", "drawer",
  "garden", "hammer", "jacket", "kettle", "lantern", "mirror", "pencil", "pillow", "pocket", "window",
];

export default function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)]
}

