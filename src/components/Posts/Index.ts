import React, { useEffect, useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../services/api';
import { getPosts } from '../../store/ducks/Posts/actions';
import { PostItemType, PostsState } from '../../store/ducks/Posts/types';

const Posts = () => {

  const [update, setUpdate] = useState<number>(0)

  const dispatch = useDispatch()

  const listPosts = () => {
    api.get(`/posts`)
      .then(response => dispatch(getPosts(response.data.reverse())))
  }

  const showLikes = (i: PostItemType) => {
    setUpdate(update+1)
    const like = i.likes + 1
    api.patch(`/posts/${i.id}`, {
      likes: like
    })
    listPosts()
  }

  const posts = useSelector((state: PostsState) => state.posts.posts)

  useEffect(() => {
    listPosts()
  }, [update])
  return (
    <>
    {
      posts?.map((i: PostItemType) => (
          <div className="post" key={i.id}>
            <header>
              <img src={i.userPicture} alt="user" />
              <div className="post-user">
                <strong>{i.user}</strong>
                <span>{i.nickName}</span>
              </div>
            </header>
            <div className="post-image">
              <img src={i.postPicture} alt="post" />
            </div>
              <div className="post-likes">
                <FiHeart onClick={() => showLikes(i)}/>{i.likes}
                {/* <FiHeart onClick={() => setLikes(i)}/>{i.likes} */}
              </div>
            <p>{i.description}</p>
          </div>
      ))
    }
    </>
  );
}

export default Posts;