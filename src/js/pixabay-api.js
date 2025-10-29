import axios from "axios";

export async function getImgRequest(query) {
const parameters = {
    key : '52994233-7ffb60f08ba14b4da4bef7a73',
    q : query,
    image_type : 'photo',
    orientation : 'horizontal',
    safesearch : true,
};
const response = await axios.get('https://pixabay.com/api/', { params : parameters});
  return response.data;
}