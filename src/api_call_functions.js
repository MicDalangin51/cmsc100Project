import http from 'http';
import axios from 'axios';
import { getBlogs,saveBlogs } from './utils/db/index.js';

export async function getManyBlogPosts (uri) {
  const route = `${uri}/api/blog`;
  http.get(route, res => {
    const data = [];
    const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
    console.log('Status Code:', res.statusCode);
    console.log('Date in Response header:', headerDate);

    res.on('data', chunk => {
      data.push(chunk);
    });

    res.on('end', () => {
      console.log('Response ended: ');
      const blogList = JSON.parse(data.toString());
      console.log(blogList);
    });
  }).on('error', err => {
    console.log('Error: ', err.message);
  });
}


export async function createPost (uri, title, author, content) {
  const route = `${uri}/api/blog`;
  const data = {
    title: title,
    author: author,
    content: content
  };
  try {
    const res = await axios.post(`${uri}/api/blog`, data)
    console.log(`Status: ${res.status}`)
    console.log('Body: ', res.data)
  } catch (err) {
    console.error(err)
  }
}

// await getManyBlogPosts('http://127.0.0.1:8080');
await createPost('http://127.0.0.1:8080','Sampleee','Martin','This is just another test');
