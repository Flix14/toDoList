<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand to="/">GYM</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/aboutUs">Acerca de</b-nav-item>
          <b-nav-item to="/" disabled>Ejercicios</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">

          <b-nav-item-dropdown right>
            <template v-slot:button-content>
              Usuario
            </template>
            <b-dropdown-item to="/">Salir</b-dropdown-item>
          </b-nav-item-dropdown>
          
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    
  </div>
</template>

<script>

export default {

}
</script>

<style>

</style>