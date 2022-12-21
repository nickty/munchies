import React from "react";
import { Card, Col, Image, Row, Space } from "antd";
import {
  FacebookFilled,
  InstagramFilled,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
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
          marginBottom: "34px",
        }}
      >
        <div className={styles.logo}>
          <Image src="/WHAT2EAT.png" width="128" height="65" />
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
            <FacebookFilled />
            <InstagramFilled />
          </Space>
        </div>
      </div>
      <hr />
      <p style={{ textAlign: "center", marginTop: 16 }}>
        Copyright @2021 What2Eat
      </p>
    </div>
  </div>
);

export default Footer;
