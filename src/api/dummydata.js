const axios =require("axios")

export const getAll = async () => {
  const response = await axios.get("https://dummyjson.com/products");
  return response.data;
};

export const getProduct=async(id)=>{
  const response= await axios.get(`https://dummyjson.com/products/${id}`)
  return response.data;
}
