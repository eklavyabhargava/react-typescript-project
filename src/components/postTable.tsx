// post table component
import { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Posts from '../models/posts';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'userId', headerName: 'User ID', width: 100 },
  { field: 'title', headerName: 'Title', width: 300 },
  { field: 'body', headerName: 'Body', width: 500 },
];

const PostTable = () => {
  const [posts, setPosts] = useState<Posts[]>([]);

  useEffect(() => {
    // fetch posts from API
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const fetchedPosts: Posts[] = response.data;
        setPosts(fetchedPosts);
      } catch (error) {
        console.log('Error fetching posts: ', error);
      }
    }

    fetchPosts();
  });

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={posts} columns={columns} autoPageSize checkboxSelection />
    </div>
  );
}

export default PostTable;