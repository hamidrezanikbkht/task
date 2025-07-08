'use client';
import React, { useState } from 'react';
import styles from './Input.module.scss';

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

export default function Input({ value, onChange, placeholder }: Props) {
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    if (/^\d*$/.test(val)) {
      onChange(e);

      if (val.length === 0) {
        setError('');
      } else if (val.length < 11) {
        setError('شماره باید 11 رقم باشد');
      } else if (val.length > 11) {
        setError('شماره بیشتر از 11 رقم است');
      } else {
        setError('');
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        maxLength={11}
        className={styles.input} // اضافه کردن کلاس استایل
      />
      {error && <p style={{ color: 'red', marginTop: '4px' }}>{error}</p>}
    </div>
  );
}
