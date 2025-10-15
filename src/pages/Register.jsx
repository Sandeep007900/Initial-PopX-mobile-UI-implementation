import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    about: '',
  });

  function onChange(e) {
    const { name, value, type } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function submit() {
    // basic validation
    if (!form.fullName || !form.email) {
      alert('Please provide a name and email');
      return;
    }

    // remove sensitive fields before navigation
    const payload = { ...form };
    delete payload.password;

    // navigate to account page with state (including avatar dataURL if present)
    navigate('/account', { state: payload });
  }

  const fileInputRef = useRef(null);
  const cameraInputRef = useRef(null);

  function handleFileChange(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setForm(prev => ({ ...prev, avatar: reader.result }));
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className="card">
      <div className="card-body top">
        <h1>Create your<br/>PopX account <span className="badge">1</span></h1>

        <div className="form">
          <div style={{display:'flex',gap:12,alignItems:'center',marginBottom:12}}>
            <div className="avatar-preview">
              {form.avatar ? (
                <img src={form.avatar} alt="preview" />
              ) : (
                <img src="/avatar.svg" alt="placeholder" />
              )}
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:8}}>
              <input ref={fileInputRef} type="file" accept="image/*" style={{display:'none'}} onChange={handleFileChange} />
              <input ref={cameraInputRef} type="file" accept="image/*" capture="user" style={{display:'none'}} onChange={handleFileChange} />
              <button type="button" className="btn" onClick={()=>fileInputRef.current.click()}>Upload Photo</button>
              <button type="button" className="btn" onClick={()=>cameraInputRef.current.click()}>Take Photo</button>
            </div>
          </div>
          <label>Full Name*</label>
          <input name="fullName" value={form.fullName} onChange={onChange} placeholder="Enter full name" />

          <label>Phone number*</label>
          <input name="phone" value={form.phone} onChange={onChange} placeholder="Enter phone number" />

          <label>Email address*</label>
          <input name="email" value={form.email} onChange={onChange} placeholder="Enter email address" />

          <label>Password *</label>
          <input name="password" value={form.password} onChange={onChange} type="password" placeholder="Enter password" />

          <label>Company name</label>
          <input name="company" value={form.company} onChange={onChange} placeholder="Enter company name" />

          <label>About yourself</label>
          <textarea name="about" value={form.about} onChange={onChange} placeholder="Write a short bio about yourself" rows={4} />

          <button type="button" onClick={submit} className="btn primary block">Create Account</button>
        </div>
      </div>
    </div>
  );
}
