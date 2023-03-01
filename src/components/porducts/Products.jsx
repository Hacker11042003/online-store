import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store";
import { Button, Card, Spin } from "antd";
import { addItemToCart } from "../../store/cartSlice";

const { Meta } = Card;

const Products = () => {
  const products = useSelector((store) => store.products.goods);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  if (products.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "15%" }}>
        <Spin tip="Loading" size="large">
          <div className="content" />
        </Spin>
      </div>
    );
  }

  return (
     <div
        style={{
          paddingTop: "2rem",
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "15px",
      }}
    >
      {products.map((el) => {
        return (
          <div key={el.id}>
            <Card
              hoverable
              style={{ width: 250 }}
              cover={<img height={200} alt="example" src={el.image} />}
            >
              <Meta
                style={{ marginBottom: "30px" }}
                title={el.title}
                description={
                  <span>
                    {el.description.slice(0, 110)}
                    <span>
                      <b>...</b>
                    </span>
                  </span>
                }
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "10px",
                  paddingTop: "10px",
                }}
              >
                <p>PRICE:{el.price}$</p>
                <Button
                  onClick={() => {
                    dispatch(addItemToCart(el));
                  }}
                >
                  + Add to cart
                </Button>
              </div>
            </Card>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Products;
