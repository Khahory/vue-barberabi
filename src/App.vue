<template>
  <div id="app">
    <template>
      <b-navbar class="container" style="background-color: transparent">
        <template #brand>
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
            <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
            >
          </b-navbar-item>
        </template>
        <template #end>
          <b-navbar-item tag="router-link" :to="{ path: '/about' }">
            Nosotros
          </b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ path: '/gallery' }">
            Galeria
          </b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ path: '/contact' }">
            Contacto
          </b-navbar-item>
        </template>
      </b-navbar>
    </template>
    <router-view/>
  </div>
</template>
