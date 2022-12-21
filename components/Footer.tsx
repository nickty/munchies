import React from "react";
import { Card, Col, Image, Row, Space } from "antd";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Footer: React.FC = () => (
  <div className={styles.footer}>
    <div className={styles.container}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className={styles.logo}>
          <Image src="/logo.png" width="128" height="65" />
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
          <Space>
            <SearchOutlined />
            <Link href="/cart">
              <ShoppingCartOutlined />
            </Link>
          </Space>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
