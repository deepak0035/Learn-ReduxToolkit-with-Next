'use client'
import React from 'react'
import { removeUser } from '@/store/slices/userSlices';
import { useDispatch } from 'react-redux';

const User = ({name, id}) =>
{
  const dispatch = useDispatch()
  const handleDeleteUser = () =>
  {
    dispatch(removeUser(id));
  }

  return (
    <li className="mt-2 list-none" >
      <div className="flex justify-between bg-gray-200 shadow mb-2">
        <span className="w-full text-left leading-loose p-2 pl-10 cursor-pointer">
          {name}
        </span>
        <div className='flex items-center justify-center p-4'> 
          <button onClick={handleDeleteUser} className="close-btn cursor-pointer bg-red-800 rounded-full w-5 h-5 text-white text-lg flex items-center justify-center p-2" />
        </div>
      </div>
    </li>
  );
}

export default User