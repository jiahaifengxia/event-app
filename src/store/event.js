import { defineStore } from "pinia";
import { getEvents } from "@/api/event";

export const useEventStore = defineStore("event", {
  state: () => ({
    apiEvents: [],
    localEvents: [],
    loading: false,

    page: 1,
    size: 10,
    total: 0,
  }),

  getters: {
    // 全部
    allEvents(state) {
      return [...state.localEvents, ...state.apiEvents];
    },
  },

  actions: {
    async fetchEvents(page = 1) {
      this.loading = true;
      let data = {
        page,
        size: this.size,
      };

      const res = await getEvents(data);

      this.apiEvents = res.data._embedded?.events || [];

      this.total = res.data.page.totalElements;

      this.page = page;

      this.loading = false;
    },

    // 创建
    createEvent(event) {
      event.id = Date.now();

      this.localEvents.unshift(event);
    },

    // 修改
    updateEvent(id, data) {
      const index = this.localEvents.findIndex((e) => e.id == id);

      if (index !== -1) {
        this.localEvents[index] = {
          ...this.localEvents[index],
          ...data,
        };
      }
    },

    // 删除
    deleteEvent(id) {
      this.localEvents = this.localEvents.filter((e) => e.id != id);
    },
  },
});
