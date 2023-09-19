import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
  baseUrl:'http://localhost:8083/api/v1/';
};

function fetchTodoList(){
  //return axios.get(config.baseUrl + 'news/1.json');
  return axios.get(`${config.baseUrl}todo`);
}