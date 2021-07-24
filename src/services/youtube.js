import axios from 'axios';

const KEY = process.env.API_SECRET;

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    fields: 'items(id,snippet(title,channelTitle,description,thumbnails))',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
