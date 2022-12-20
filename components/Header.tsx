import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";
import { Space } from "antd";
import {
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons/lib/icons";

const Header = () => {
  return (
    <div className={styles.header}>
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
              <ShoppingCartOutlined />
            </Space>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 120,
          }}
        >
          <div>
            <Space direction="vertical">
              <h1>Athenticate Home food in UK</h1>
              <p>
                What2Eat is a courier service in which authentic home cook food
                is delivered to a customer.
              </p>
              <div>
                <input type="text" />
                <button>Search</button>
              </div>
            </Space>
          </div>
          <div>
            <Image src="/cuate.png" width="520" height="435" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
