'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Input from '@/components/Input';
import Button from '@/components/Button';
import styles from './auth.module.scss';

export default function AuthPage() {
  const [phone, setPhone] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    if (phone.length !== 11) {
      alert('شماره تلفن باید 11 رقم باشد');
      return;
    }
    try {
      const res = await fetch('https://randomuser.me/api/?results=1&nat=us');
      const data = await res.json();
      const user = data.results[0];

      localStorage.setItem('user', JSON.stringify(user));
      router.push('/dashboard');
    } catch (error) {
      console.error('خطا در دریافت اطلاعات:', error);
    }
  };

  return (
    <div className={styles.authContainer}>
      <h1>صفحه ورود</h1>
      <Input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="شماره تلفن ایران"
      />
      <Button onClick={handleLogin}>ورود</Button>
    </div>
  );
}
