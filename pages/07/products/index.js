import { gql, useMutation, useQuery } from "@apollo/client";
import { Fragment } from "react";

const FETCH_PRODUCTS = gql`
  query {
    fetchProducts {
      _id
      seller
      name
      detail
      price
    }
  }
`;

const DELETE_PRODUCT = gql`
  mutation deleteProduct($productId: ID) {
    deleteProduct(productId: $productId) {
      _id
      number
    }
  }
`;

export default function FetchProductPage() {
  const { data } = useQuery(FETCH_PRODUCTS);

  const [deleteProduct] = useMutation(DELETE_PRODUCT);

  const onClickDelete = (event) => {
    deleteProduct({
      variables: {
        productId: event.target.id,
      },
      refetchQueries: [{ query: FETCH_PRODUCTS }],
    });
  };

  return (
    <Fragment>
      {data?.fetchProducts.map((el) => (
        <div>
          <span>
            <input type="checkbox" />
          </span>
          <span style={{ margin: "10px" }}>{el.seller}</span>
          <span style={{ margin: "10px" }}>{el.name}</span>
          <span style={{ margin: "10px" }}>{el.detail}</span>
          <span style={{ margin: "10px" }}>{el.price}</span>
          <button id={el._id} onClick={onClickDelete}>
            del
          </button>
        </div>
      ))}
    </Fragment>
  );
}
