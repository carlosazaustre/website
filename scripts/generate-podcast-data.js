const fs = require("fs/promises");
const path = require("path");
const fetch = require("node-fetch");

const SPOTIFY_TOKEN = process.env.SPOTIFY_TOKEN;
const SPOTIFY_SHOW_ID = "68KWuFM22vAFvrZ1JTIYec";

const DATA_FILE = path.join(__dirname, "..", "data", "latestPodcasts.json");

const getLatestPodcast = async () => {
  try {
    const url = `https://api.spotify.com/v1/shows/${SPOTIFY_SHOW_ID}/episodes?offset=0&limit=20&market=ES`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${SPOTIFY_TOKEN}`,
      },
    });
    const json = await response.json();
    console.log(json);
    return json.items;
  }
  catch (error) {
    console.error(error);
  }
};

(async () => {
    const episodes = await getLatestPodcast();
    const data = JSON.stringify(episodes, null, 2);
    await fs.writeFile(DATA_FILE, data);
    console.log("💾 Latest podcasts data stored");
})();
