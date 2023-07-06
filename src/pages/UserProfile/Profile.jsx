import React, { useEffect } from 'react'
import "./Profile.scss"
import { useDispatch, useSelector } from 'react-redux';
import { registerActions } from '../../stores/slices/userRegister.slice';
import Loading from "@components/Loadings/Loading";


export default function Profile() {
    const dispatch = useDispatch();
    const userRegisterStore = useSelector(
        (store) => store.userRegisterStore.users
    );
     useEffect(() => {
       localStorage.getItem("loginUser");
     }, []);
    useEffect(() => {}, [userRegisterStore]);

    const loginUser = localStorage.getItem("loginUser");
   

  return (
      <div className="profile-container">
          {userRegisterStore.loading ? <Loading /> : <></>}
        
      </div>
  );
}
