import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";
import { Space } from "antd";
import {
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons/lib/icons";
import Link from "next/link";

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

              <Link href="/cart">
                <ShoppingCartOutlined />
              </Link>
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
              <h1 style={{ fontSize: 70 }}>Athenticate Home food in UK</h1>
              <p>
                What2Eat is a courier service in which authentic home cook food{" "}
                <br />
                is delivered to a customer.
              </p>
              <div style={{ marginTop: 40 }}>
                <input
                  type="text"
                  placeholder="Search food type you love"
                  style={{
                    padding: 19,
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                    border: "none",
                    width: 398,
                  }}
                />
                <button
                  style={{
                    padding: 19,
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    border: "none",
                    backgroundColor: "#F3BA00",
                    color: "white",
                  }}
                >
                  Search
                </button>
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
