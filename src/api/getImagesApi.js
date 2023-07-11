import axios from "axios";

const API_KEY = "32068008-acb4b1bc1aee14e726f03befc";
axios.defaults.baseURL = "https://pixabay.com/api/";

async function getImagesApi(page, text) {
  const response = await axios.get(
    `?q=${text}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  );

  return response.data;
}
export { getImagesApi };
