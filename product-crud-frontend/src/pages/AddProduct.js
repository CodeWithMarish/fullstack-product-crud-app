import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  addProduct,
  updateProduct,
  getProductById,
  uploadProductThumbnail,
} from "../features/apiCalls";

const BASE_API_URL = "http://localhost:8081";
const AddProduct = () => {
  const { id } = useParams();
  const [defaultValue, setDeafaultValue] = useState({
    productTitle: "",
    productDescription: "",
    productPrice: "",
    availableQuantity: "",
  });
  const [selectedImage, setSelectedImage] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await getProductById(id);
      console.log(data);
      if (data) setDeafaultValue({ ...data[0] });
    };
    getProduct();
  }, [id]);

  useEffect(() => {
    let url;
    if (selectedImage) {
      url = URL.createObjectURL(selectedImage);
      setPreviewUrl(url);
    }
    return () => {
      URL.revokeObjectURL(url);
    };
  }, [selectedImage]);

  const {
    productTitle,
    productDescription,
    productPrice,
    availableQuantity,
    productThumbnail,
    productId,
  } = defaultValue;
  console.log(productId);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target);
    let formData = new FormData(e.target);
    let fileFormData = new FormData();
    let files = e.target[4].files;
    const values = Object.fromEntries(formData.entries());
    const pId = !productId
      ? values.productTitle.toLowerCase().replaceAll(/[\s\t]+/g, "-")
      : productId;
    fileFormData.append("productId", pId);
    delete values.productThumbnail;
    try {
      if (!!selectedImage) {
        fileFormData.append("productThumbnail", files[0]);
        let { data, error } = await uploadProductThumbnail(fileFormData);
        if (error) throw new Error(error);
        values["productThumbnail"] = data;
      }
      if (pId && !!productId) {
        let { data, error } = await updateProduct(values, productId);
        if (error) throw new Error(error);
      } else if (pId) {
        let formValues = {
          productId: pId,
          ...values,
          productThumbnail: "test-product.jpg",
        };
        let { data, error } = await addProduct(formValues);
        if (error) throw new Error(error);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container max-w-5xl py-10">
      <div className="flex space-x-6 mb-10 items-center">
        <button
          onClick={() => navigate(-1)}
          className="h-10 leading-none text-xl"
        >
          {"<"}
        </button>
        <h2 className="text--title">
          {defaultValue.productTitle ? "Update Product" : "Add Product"}
        </h2>
      </div>
      <div className="flex flex-col">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label>Product Title</label>
            <input
              defaultValue={productTitle || ""}
              name="productTitle"
              placeholder="Enter Product Title..."
              type="text"
            />
          </div>
          <div className="mb-4">
            <label>Product Description</label>
            <textarea
              defaultValue={productDescription || ""}
              name="productDescription"
              className="resize-none"
              rows={5}
            ></textarea>
          </div>
          <div className="mb-4">
            <label>Product Price</label>
            <input
              defaultValue={productPrice}
              name="productPrice"
              placeholder="Enter Product Price..."
            />
          </div>
          <div className="mb-4">
            <label>Available Quantity</label>
            <input
              defaultValue={availableQuantity}
              name="availableQuantity"
              placeholder="Enter Available Quantity..."
            />
          </div>
          <div className="mb-10">
            <label>Product Thumnail</label>
            <input
              onChange={(e) => {
                setSelectedImage(e.target.files[0]);
              }}
              accept="image/*"
              name="productThumbnail"
              type={"file"}
            />
            {(productThumbnail || previewUrl) && (
              <img
                className="h-48"
                alt="thumbnail"
                src={
                  previewUrl
                    ? previewUrl
                    : `${BASE_API_URL}/uploads/${productThumbnail}`
                }
              />
            )}
          </div>
          <div className="flex items-center mb-5">
            <button className="w-full">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
