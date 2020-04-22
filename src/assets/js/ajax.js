import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.interceptors.request.use(config => config, error => Promise.reject(error));
axios.interceptors.response.use(resp => resp, error => Promise.resolve(error.response));

export default {
  post(url, params) {
    return new Promise((resolve, reject) => {
      axios.post(url, params, {
        headers: { token: window.dataModel.token || '' }
      }).then((res) => {
        if (!res) {
          console.error(`The request url: ${url} load fail.`);
        }
        const { data } = res || {};
        if (+data.code === 200 || +data.code === 5033) {
          resolve(data);
        } else if (['2002', '202', '0007', '0006'].indexOf(data.code + '') >= 0) {
          data.loginInvalid = true;
          reject(data);
        } else {
          reject(data);
        }
      }, err => reject(err));
    });
  },
  get(url, params) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        data: params
      }, {
        headers: { token: window.dataModel.token || '' }
      }).then(response => resolve(response.data), err => reject(err));
    });
  }
};
