/*
 * @Author: zy9@github.com/zy410419243 
 * @Date: 2018-06-08 09:13:33 
 * @Last Modified by: zy9
 * @Last Modified time: 2018-06-29 16:09:30
 */
// 上传数据到服务器
export const upload_to_server = (url, data, callback) => {
    if(!url) return;

    let params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
    }
    params = Object.assign(params, data);

    fetch(url, params).then(result => result.text()).then(result => callback(result))
    .catch(error => {
        // console.log(error)
    });
}

export const get_by_cookie = (url, data, callback) => {
    if(!url) return;

    let params = {
        credentials: 'include', // 加入cookie
    };
    params = Object.assign(params, data);

    fetch(url, params).then(result => result.json()).then(result => callback(result))
    .catch(error => {
        // console.log(error);
    });
}