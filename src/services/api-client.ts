import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key:"0a392c673bf34f9cbcd1fd50dd96101b"
    }
})