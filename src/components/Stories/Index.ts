import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import {StoriesType} from '../../types/StoriesType'

const Stories = () => {

  const [stories, setStories] = useState<StoriesType[]>()

  useEffect(() => {
    api.get(`/stories`)
     .then(response => setStories(response.data))
  }, [])


  return (
      <>
        <div className="stories">
            <h2>Stories</h2>
              {
                stories?.map((i: StoriesType) => (
                <div className="storie" key={i.id}>
                  <div className="storie-image">
                    <img src={i.userPicture} alt={i.user} />
                  </div>
                  <div className="storie-user">
                    <strong>{i.user}</strong>
                    <span>{i.time}</span>
                  </div>
                </div>
                ))
              }
          </div>
      </>
  );
}

export default Stories;