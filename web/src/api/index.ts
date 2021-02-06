export const API_HOST = 'http://localhost:3000';

async function request(path, options = {}) {
  const url = `${API_HOST}${path}`;
  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    ...options
  });

  if (response.ok) {
    return await response.json();
  } else {
    throw response;
  }
}

const api = {
  get: path => {
    return request(path);
  },
  post: (path, body) => {
    return request(path, {
      method: 'post',
      body: JSON.stringify(body)
    })
  },
  put: (path, body) => {
    return request(path, {
      method: 'put',
      body: JSON.stringify(body)
    })
  },
  delete: path => {
    return request(path, {
      method: 'delete'
    })
  }
};

export default api;