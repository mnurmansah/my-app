import axios from "axios";

export const getProductData = async () => {
    try {
        const {
            data : {data}
        } =
        await axios.get('https://api.instantwebtools.net/v1/airlines')
        return data;
    } catch (error) {
        return null;
    }
};