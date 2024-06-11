import axios from "axios";
import fbConfig from "./firebaseConfig";
import { Post } from "@prisma/client";
import routes from '~/routes.json';

async function getPosts(): Promise<Post[]> {
  const token = await fbConfig.auth.currentUser?.getIdToken();
  // TODO: Eliminate manual setting of auth header.
  const result = await axios.get(routes.posts, { headers: {Authorization: `Bearer ${token}`}});

  return result.data instanceof Array ? result.data : [];
}

export default {
  getPosts
};