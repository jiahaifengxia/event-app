<template>
  <div>
    <el-input
      v-model="keyword"
      placeholder="搜索"
      style="width: 300px; margin-bottom: 20px"
    />

    <el-table :data="filteredEvents" v-loading="store.loading">
      <el-table-column label="图片" width="150">
        <template #default="scope">
          <img
            :src="scope.row.image || scope.row.images?.[0]?.url"
            class="event-img"
          />
        </template>
      </el-table-column>
      <el-table-column label="名称">
        <template #default="scope">
          {{ scope.row.name || scope.row.title }}
        </template>
      </el-table-column>

      <el-table-column label="时间">
        <template #default="scope">
          {{ scope.row.dates?.start?.localDate || scope.row.date }}
        </template>
      </el-table-column>

      <el-table-column label="操作" width="120">
        <template #default="scope">
          <el-button type="text" @click="detail(scope.row.id)">
            详情
          </el-button>

          <el-button type="text" @click="edit(scope.row.id)">修改</el-button>

          <el-button type="text" @click="remove(scope.row.id)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px; text-align: right">
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="store.size"
        :total="store.total"
        @current-change="changePage"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useEventStore } from "../../store/event";

const router = useRouter();

const store = useEventStore();

const keyword = ref("");

onMounted(() => {
  store.fetchEvents();
});

const filteredEvents = computed(() => {
  return store.allEvents.filter((e) => {
    const name = e.name || e.title || "";

    return name.toLowerCase().includes(keyword.value.toLowerCase());
  });
});

// 详情
const detail = (id) => {
  router.push(`/event/${id}`);
};

// 修改
const edit = (id) => {
  router.push(`/edit/${id}`);
};

// 删除
const remove = (id) => {
  store.deleteEvent(id);
};

// 修改页码
const changePage = (page) => {
  store.fetchEvents(page - 1);
};
</script>

<style>
.event-img {
  width: 100px;
  height: 70px;
  object-fit: cover;
  border-radius: 4px;
}
</style>
