import React, { useEffect, useRef, useState } from 'react'; 
import { useDispatch, useSelector } from 'react-redux'
import api from '../../services/api'; 
import { getPosts } from '../../store/Ducks/Posts/actions'; 
import { UserState } from '../../store/Ducks/User/types';


const Form = () => {

    const dispatch = useDispatch()
  
    const [show, setShow] = useState<boolean>(true)
  
    let inputImg = useRef<HTMLInputElement>(null)
    let inputDescription = useRef<HTMLInputElement>(null)

  
    const listPosts = () => {
      api.get(`/posts`)
        .then(response => dispatch(getPosts(response.data.reverse())))
    }
  
    const { name, username, userPicture } = useSelector((state: UserState) => state.user)
  
    const doPost = () => {
  
      const img = inputImg.current?.value
      const description = inputDescription.current?.value
  
      api.post(`/posts`, {
        user: name,
        nickName: username,
        userPicture: userPicture,
        postPicture: img,
        description: description,
        likes: 0
      })
      listPosts()
  
    }
    return (
      <div className="form">
        <input type="text" ref={inputImg} placeholder="Cole a url da imagem" />
        <input type="text" ref={inputDescription} placeholder="Digite uma descrição" />
        <button onClick={doPost}>Postar</button>
      </div>
  );
}
