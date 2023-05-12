import axios from "axios";

const api = axios.create({
  baseURL: "https://docs.google.com/spreadsheets/d/1rVgehZfYK2YjYqFanWuWVpnxjSWa7xa1RXEPsOYy0fs/edit?usp=sharing",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
