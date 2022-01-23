const fs = require("fs/promises");
const path = require("path");
const fetch = require("node-fetch");

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const YOUTUBE_API_URL = `https://www.googleapis.com/youtube/v3`;
const YOUTUBE_CHANNEL_PLAYLIST = `UUJgGc8pQO1lv04VXrBxA_Hg`;
const NUMBER_OF_VIDEOS = 5;

const DATA_FILE = path.join(__dirname, "..", "data", "latestVideos.json");

const getLatestYoutubeVideos = async () => {
  const queryEndpoint = `/playlistItems?part=snippet&playlistId=${YOUTUBE_CHANNEL_PLAYLIST}&maxResults=${NUMBER_OF_VIDEOS}`;

  const response = await fetch(
    `${YOUTUBE_API_URL}${queryEndpoint}&key=${YOUTUBE_API_KEY}`
  )

  const data = await response.json();
  return data.items;
};

(async () => {
  const videos = await getLatestYoutubeVideos();
  const data = JSON.stringify(videos);
  await fs.writeFile(DATA_FILE, data);
  console.log("💾 Latest videos data stored");
})();
