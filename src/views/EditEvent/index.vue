<template>
  <div>
    <h2>修改</h2>

    <EventForm :form="form" @submit="submit" />
  </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useEventStore } from "@/store/event";
import EventForm from "@/components/EventForm/index.vue";

const route = useRoute();

const router = useRouter();

const store = useEventStore();

const form = reactive({
  title: "",
  description: "",
  date: "",
  location: "",
});

onMounted(() => {
  const event = store.localEvents.find((e) => e.id == route.params.id);

  if (event) {
    Object.assign(form, event);
  }
});

const submit = () => {
  store.updateEvent(route.params.id, form);

  router.push("/");
};
</script>
