'use client';
import React from 'react';
import styles from './Button.module.scss';

type Props = {
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
};

export default function Button({ onClick, children, disabled }: Props) {
  return (
    <button onClick={onClick} disabled={disabled} className={styles.button}>
      {children}
    </button>
  );
}
