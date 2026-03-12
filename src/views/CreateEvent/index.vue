<template>
  <div>
    <h2>创建</h2>

    <EventForm :form="form" @submit="submit" />
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useEventStore } from "@/store/event";
import EventForm from "@/components/EventForm/index.vue";

const router = useRouter();

const store = useEventStore();

const form = reactive({
  name: "",
  date: "",
  image: "",
  info: "",
});

const submit = () => {
  store.createEvent(form);

  router.push("/");
};
</script>
