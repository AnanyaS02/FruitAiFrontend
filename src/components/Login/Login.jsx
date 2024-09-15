import React, { useState } from 'react';
import LoginHeader from './LoginHeader';
import FormSection from './FormSection';
import ActionButtons from './ActionButtons';
import SocialConnect from './SocialConnect';
import { useNavigate } from 'react-router-dom';

function Login({onLogin}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  const handleLogin = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim() || !password.trim()) {
      setError('Please fill out all fields.');
      console.log('Error: Fields are empty');
    } else if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      console.log('Error: Invalid email');
    } else {
      setError(''); 
      onLogin();
      console.log('Navigating to /home');
      navigate('/home');
    }
  };

  return (
    <section className="flex overflow-hidden flex-col items-center px-11 pt-12 mx-auto w-full bg-white max-w-[480px] rounded-[40px] shadow-[0px_4px_23px_rgba(0,0,0,0.25)]">
      <LoginHeader />
      <FormSection email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
      <ActionButtons onLoginClick={handleLogin} />
      {error && <p className="text-red-500 mt-4">{error}</p>} {/* Display error message */}
      <SocialConnect />
      <img
        loading="lazy"
        src="https://img.icons8.com/?size=100&id=ksrhyUBZGGB7&format=png&color=228BE6"
        alt="Icon"
        className="object-contain mt-16 max-w-full bg-white aspect-[1.21] rounded-[52px]"
        style={{ width: '100px', height: 'auto', marginLeft: 'auto', marginRight: 'auto', marginBottom: '5%' }} // Center the image
      />
    </section>
  );
}

export default Login;
