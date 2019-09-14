<template>
  <div class="home">
    <h1>Lista del Gimnasio</h1>
    <CreateTask />
  </div>
</template>

<script>
import CreateTask from '@/components/CreateTask.vue'

export default {
  name: 'home',
  components: {
    CreateTask
  }
}
</script>
