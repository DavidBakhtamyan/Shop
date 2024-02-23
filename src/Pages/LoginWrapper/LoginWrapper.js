/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Img from '../../images/images';
import { fetchUsers } from '../../store/slices/usersSlice/usersAPI';
import { selectUsers } from '../../store/slices/usersSlice/usersSlice';
import './LoginWrapper.css'
const LoginWrapper = () => {
    const dispatch = useDispatch()
    const {usersData} = useSelector(selectUsers)
    useEffect(() => {
        if(!usersData.length){
            dispatch(fetchUsers())
        }
    },[usersData])
    return (
        <div className='LoginWrapper'>
            <div className="FromWrapper">
                <Outlet />
            </div>
            <img src={Img.loginImg} alt=""  className='BgImg'/>
        </div>
    );
}

export default LoginWrapper;
