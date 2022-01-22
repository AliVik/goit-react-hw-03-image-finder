import axios from "axios";

const API_settings = {
  url: "https://pixabay.com/api/",
  key: "24371502-78d84e7e9c9a76cd0b2a52a11",
  page: 1,
  per_page: 12,
  image_type: "photo",
  orientation: "horizontal",
};

const GetImagesFromApi = async (searchName) => {
  let { url, key, page, per_page, image_type, orientation } = API_settings;
  const response = await axios.get(
    `${url}?q=${searchName}&page=${page}&key=${key}&image_type=${image_type}&orientation=${orientation}&per_page=${per_page}`
  );
  // page += 1;
  return response.data;
};

export default GetImagesFromApi;
