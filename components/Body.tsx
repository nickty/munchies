import { Radio, Button } from "antd";
import React, { useState } from "react";
import type { SizeType } from "antd/es/config-provider/SizeContext";
import type { SelectProps, RadioChangeEvent } from "antd";
import DropdownSelection from "./DropdownSelection";
import Products from "./Products";
import { PlusCircleOutlined } from "@ant-design/icons";
import { PlusOutlined } from "@ant-design/icons/lib/icons";

const Body: React.FC = () => {
  const [size, setSize] = useState<SizeType>("middle");

  const handleSizeChange = (e: RadioChangeEvent) => {
    setSize(e.target.value);
  };
  const handleChange = (value: string | string[]) => {
    console.log(`Selected: ${value}`);
  };
  return (
    <>
      <div style={{ marginTop: 120, color: "#000000" }}>
        <h3>Home Kitchen</h3>
        <div style={{ marginTop: 16 }}>
          <Radio.Group value={size} onChange={handleSizeChange}>
            <Radio.Button value="large">All</Radio.Button>
            <Radio.Button value="default">Button</Radio.Button>
            <Radio.Button value="del">Free Delivery</Radio.Button>
            <Radio.Button value="new">New</Radio.Button>
            <Radio.Button value="coming">Coming</Radio.Button>
          </Radio.Group>
        </div>
        <div style={{ margin: "30 0" }}>
          <DropdownSelection />
        </div>
        <div>
          <Products />
        </div>
        <div>
          <Button icon={<PlusOutlined />}>Load More...</Button>
        </div>
      </div>
    </>
  );
};

export default Body;
