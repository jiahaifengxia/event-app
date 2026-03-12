<template>
  <el-form :model="form" label-width="100px">
    <el-form-item label="名称">
      <el-input v-model="form.title" />
    </el-form-item>

    <el-form-item label="时间">
      <el-date-picker
        v-model="form.date"
        type="date"
        value-format="YYYY-MM-DD"
      />
    </el-form-item>

    <el-form-item label="图片">
      <el-upload
        :show-file-list="false"
        :auto-upload="false"
        :on-change="handleImage"
      >
        <img v-if="form.image" :src="form.image" class="preview-img" />

        <el-button v-else>上传图片</el-button>
      </el-upload>
    </el-form-item>

    <el-form-item label="详情">
      <el-input type="textarea" v-model="form.info" />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="$emit('submit')">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
const props = defineProps({
  form: Object,
});

defineEmits(["submit", "back"]);

const handleImage = (file) => {
  const reader = new FileReader();

  reader.onload = (e) => {
    props.form.image = e.target.result;
  };

  reader.readAsDataURL(file.raw);
};
</script>

<style>
.preview-img {
  width: 120px;
  height: 80px;
  object-fit: cover;
  border-radius: 6px;
}
</style>
