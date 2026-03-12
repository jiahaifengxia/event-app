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

const route = useRoute();
const router = useRouter();

const event = ref(null);

onMounted(async () => {
  if (!route.params.id) {
    router.push("/");
    return;
  }
  const res = await getEventDetail(route.params.id);
  if (res) {
    event.value = res.data;
  }
});

const back = () => {
  router.push("/");
};
</script>
