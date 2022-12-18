import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image src='/logo.png' width="128" height="65" />
            </div>
            <div className={styles.menu}>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className={styles.topEnd}>
                Seach and cart
            </div>
        </div>
    </div>
  )
}

export default Header