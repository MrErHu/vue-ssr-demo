import axios from "axios";

export function fetchList(tab = "good") {
    const url = `https://cnodejs.org/api/v1/topics?limit=20&tab=${tab}`;
    return axios.get(url).then((data)=>{
        return data.data;
    })
}
