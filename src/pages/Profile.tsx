import React from 'react';

import { useSelector } from 'react-redux';

import { useAppDispatch } from '../app/store';
import { selectCurrentUser } from '../features/auth/authSlice';
import { useGetUserQuery } from '../features/profile/profileApiSlice';
import {
  selectProfile,
  setProfile,
} from '../features/profile/profileSlice';

const Profile: React.FC = () => {
  const user = useSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  const {id, name, email}=  useSelector(selectProfile);
  const {data, error} = useGetUserQuery({email: user});
  if (data){
    dispatch(setProfile(data[0]))
  }

  return (
    <div className="mx-auto max-w-7xl mt-4 overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Profile</h3>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Id</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{id}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Full name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{name}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{email}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:flex sm:flex-row sm:justify-end sm:px-6">
            <button className='rounded bg-blue-600 shadow w-28 p-2 hover:bg-blue-500 text-sm text-white' title="edit" type='button' >Edit Profile</button>
          </div>
        </dl>
      </div>
    </div>
  )
}

export default Profile;