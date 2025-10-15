import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Account() {
  const { state } = useLocation();
  const data = state || {
    fullName: 'Marry Doe',
    email: 'Marry@Gmail.Com',
    phone: '',
    company: '',
    about: '',
  };

  return (
    <div className="card">
      <div className="card-body profile">
        <div className="header">Account Settings</div>
        <div className="profile-row">
          <div className="avatar"> 
            <img src={data.avatar || '/avatar.svg'} alt="avatar"/>
          </div>
          <div className="profile-info">
            <div className="name">{data.fullName}</div>
            <div className="email">{data.email}</div>
          </div>
        </div>

        <p className="muted">{data.company ? `${data.company} • ${data.phone}` : 'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr'}</p>

        {data.about ? (
          <div style={{marginTop:12}}>
            <div style={{marginTop:6}}>{data.about}</div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
