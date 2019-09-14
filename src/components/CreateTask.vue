<template>
  <div>
    <b-container>
      <b-form-input v-model="newTask" placeholder="Ingresa una nueva tarea" @keyup.enter="addTask"></b-form-input>
      <button @click="addTask" class="btn btn-primary">Agregar</button>
    </b-container>

    <b-container>
      <div v-for="(task, n) in tasks" :key="task.id">
        <div :class="changeAlertClass(n)" role alert>
          <div class="d-flex justify-content-between">
            <router-link :to="`/task/${n}`">
              {{ task.name }}
            </router-link>
            <div>
              <button 
              @click.self="completeTask(n)" 
              class="btn btn-primary btn-sm" 
              id="btnCheck" 
              :style="`visibility: ${task.completed ? 'hidden' : 'visible'};`"
              >
                ✓
              </button> 
              <button @click="deleteTask(n)" class="btn btn-danger btn-sm">X</button>
            </div>
          </div>
        </div>
    </div>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newTask: null,
      tasks: []
    }
  },
  mounted () {
    if( localStorage.getItem('tasks')) {
      try {
        this.tasks = JSON.parse(localStorage.getItem('tasks'));
      } catch(e) {
        localStorage.removeItem('tasks');
      }
    }
  },
  methods: {
    addTask () {
      if(this.newTask) {
        let task = {
          name: this.newTask,
          completed: false
        }
        this.tasks.push(task)
        this.newTask = ''
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
      }
    },
    deleteTask (position) {
      this.tasks.splice(position, 1)
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },
    completeTask (position) {
    this.tasks[position].completed = true
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
    this.$el.querySelector('#btnCheck').remove()
    },
    changeAlertClass (position) {
      let alertClass = 'alert alert-primary'
  
      if(this.tasks[position].completed){
        alertClass += ' completed'
      }
      else{
        alertClass += ' queued'
      }
      return alertClass
    }
  }
}
</script>

<style>
.completed {
  background-color: lightgreen;
}

.queued {
  background-color: lightgray;
}
</style>