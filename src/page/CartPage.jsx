import React from "react";
import { Table, Button } from "antd";
import { useSelector } from "react-redux";

/*
{
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 120
    }
}
*/

const cartData = [
  {
    id: 1,
    title: "Mike",
    price: 32,
    description: "10 Downing Street",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
];

const columns = [
  {
    title: "image",
    dataIndex: "image",
    key: "image",
    render: (imgUrl) => <img width={60} src={imgUrl} alt="" />,
  },
  {
    title: "Name",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "price",
    dataIndex: "price",
    key: "price",
    render: (price) => <p>{price} $</p>,
  },
  {
    title: "Info",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    render: () => (
      <Button type="primary" danger>
        Delete
      </Button>
    ),
  },
];

const CartPage = () => {
  const cartData = useSelector((store) => store.cart.cart);
  return (
    <div>
      <Table columns={columns} dataSource={cartData} />
    </div>
  );
};

export default CartPage;
