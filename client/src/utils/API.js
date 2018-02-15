import axios from "axios";

export default {
    signin: function(formData) {
        return axios.post("/signin", formData);
    }
}