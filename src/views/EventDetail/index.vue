<template>
  <div v-if="event">
    <h2>{{ event.name || event.title }}</h2>

    <p>
      {{ event.info || event.description }}
    </p>

    <p>
      时间:
      {{ event.dates?.start?.localDate || event.date }}
    </p>

    <el-button @click="back">返回</el-button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getEventDetail } from "@/api/event";
import { useEventStore } from "@/store/event";

const route = useRoute();
const router = useRouter();
const store = useEventStore();

const event = ref(null);

onMounted(async () => {
  if (!route.params.id) {
    router.push("/");
    return;
  }
  if (route.params.test) {
    const res = await getEventDetail(route.params.id);
    event.value = res.data;
  } else {
    console.log(store.allEvents, route.params.id);

    event.value = store.allEvents.find((e) => e.id == route.params.id);
    console.log(event.value);
  }
});

const back = () => {
  router.push("/");
};
</script>
