import axios from "axios";

const API_KEY = "AJIubp2Y9E8NY4rBrYmVt2nJqHjghF8S";

const request = axios.create({
  baseURL: "https://app.ticketmaster.com/discovery/v2",
});

// 获取活动列表
export const getEvents = (data) => {
  return request.get("/events.json", {
    params: {
      apikey: API_KEY,
      ...data,
    },
  });
};

// 获取活动详情
export const getEventDetail = (id) => {
  return request.get(`/events/${id}.json`, {
    params: {
      apikey: API_KEY,
    },
  });
};
