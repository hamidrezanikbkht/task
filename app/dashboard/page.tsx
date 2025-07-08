'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.scss';

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      router.push('/auth');
    }
  }, [router]);

  return (
    <div className={styles.dashboardContainer}>
      <h1>Welcome to the Dashboard</h1>
    </div>
  );
}
