import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCategories } from "../../redux/actions/categoryActions";
import { saveProduct } from "../../redux/actions/productActions";
import ProductDetail from "./ProductDetail";

function AddOrUpdateProduct({
  products,
  categories,
  getProducts,
  getCategories,
  saveProduct,
  history,
  ...props //mevcut componentin propları genişletiyoruz 3 nokta props ile. Böylece üstteki yazdığımız aksiyonlar ve stateler kullanılabiliyor ekstradan.
}) {
  const [product, setProduct] = useState({ ...props.product }); //set state yerine bu fonksiyon ile state'teki product bilgisi güncellenir
  useEffect(() => {
    if (categories.length === 0) {
      getCategories();
    }
    setProduct({ ...props.product });
  }, [props.product]); //[props.product] dom'a yerleştiği zaman çalışmayı durdur. Sonsuz döngüye girmeyi önler.
  function handleChange(event) {
    const { name, value } = event.target;
    setProduct((previousProduct) => ({
      ...previousProduct,
      [name]: name === "categoryId" ? parseInt(value, 10) : value, //ismi categoryId olan yere 10'a set et
    }));
  }
  function handleSave(event) {
    event.preventDefault();
    saveProduct(product).then(() => {
      history.push("/"); //reactten gelir. Daha önce ziyaret edilen sayfalara yönlendirme yapmak için kullanılır.
    });
  }
  return (
    <ProductDetail
      product={product}
      categories={categories}
      onChange={handleChange}
      onSave={handleSave}
    />
  );
}

const mapDispatchToProps = {
  getCategories,
  saveProduct, //bindactioncreators kullanmak yerine daha temiz bir kod
};
export function getProductById(products,productId) {
  let product = products.find((product) => product.id === productId) || null;
  return product;
}

function mapStateToProps(state, ownProps) {
  //ownProps componentlerin kendi içerisindeki proplardır.
  const productId = ownProps.match.params.productId;
  const product =
    productId && state.productListReducer.length > 0
      ? getProductById(state.productListReducer, productId)
      : {};
  return {
    product,
    products: state.productListReducer,
    categories: state.categoryListReducer,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateProduct);
