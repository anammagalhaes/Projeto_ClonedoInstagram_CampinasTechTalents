import React, { useEffect } from 'react'
import { FiUser } from "react-icons/fi"
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../store/ducks/User/actions'
import { UserState, UserType } from '../../store/ducks/User/types'
import Logo from "../../img/logo-instagram.png"
import api from '../../services/api'


const Header = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    api.get(`/user`)
      .then(response => dispatch(getUser(response.data)))
  }, [])

  const name = useSelector((state: UserState) => state.user.name)

  return (
      <div className="header">
        <header>
          <img src={Logo} alt="Logo Instagram" />
          <div className="top-info"> 
            <span>
              <FiUser />
              { name }
            </span>
          </div>
        </header>
      </div>
  );
}

export default Header;