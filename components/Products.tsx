import React from "react";
import { Button, Card, List } from "antd";
import { ShopFilled, ShoppingFilled } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart.slice";
import Link from "next/link";

const data = [
  {
    id: 1,
    name: "Biriyani",
    price: 120, // price
    quantity_available: 3,
    image: "https://image.com/image",
    vat: 5, // 5% vat
    addons: [
      {
        name: "Biriyani half",
        is_default: true,
        price: 120,
      },
      {
        name: "Biriyani full",
        price: 220,
      },
    ],
  },
  {
    id: 2,
    name: "Kacchi",
    price: 220, // price
    quantity_available: 10, // max addedable products
    image: "https://image.com/image",
    vat: 12, // 5% vat
    addons: [
      {
        name: "Kacchi half",
        is_default: true,
        price: 120,
      },
      {
        name: "Kacchi full",
        price: 220,
      },
    ],
  },
];

const Products: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <List
      // grid={{
      //   gutter: 16,
      //   xs: 1,
      //   sm: 2,
      //   md: 4,
      //   lg: 4,
      //   xl: 6,
      //   xxl: 3,
      // }}
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Card
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h3>{item.name}</h3>
              <p>{item.price} TK</p>
            </div>
            <Button
              icon={<ShopFilled />}
              onClick={() => dispatch(addToCart(item))}
            >
              <Link href="/cart">Add to cart</Link>
            </Button>
          </Card>
        </List.Item>
      )}
    />
  );
};

export default Products;
