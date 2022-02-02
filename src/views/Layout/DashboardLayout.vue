<template>
  <div class="wrapper" >
    <notifications></notifications>
    <side-bar>
      <template slot="links" >
        <!-- <div v-for="(items,index) in sidebarObjects" :key="index" :link="{ name: items.name, icon: items.icon }">merhaba
          <p v-for="(item) in items.item" :key="item">{{item.name}}</p>
        </div> -->
        <sidebar-item v-for="(items,index) in sidebarObjects" :key="index" :link="{ name: items.name, icon: items.icon }">
           <sidebar-item v-for="(item) in items.item" :key="item" :link="{ name: item.name, path: item.path }" />
        </sidebar-item>

        <sidebar-item :link="{
                  name: 'Examples',
                  icon: 'ni ni-ungroup text-orange'
                  }">
          <sidebar-item :link="{ name: 'Pricing', path: '/pricing' }"/>
          <sidebar-item :link="{ name: 'Login', path: '/login' }"/>
          <sidebar-item :link="{ name: 'Register', path: '/register' }"/>
          <sidebar-item :link="{ name: 'Lock', path: '/lock' }"/>
          <sidebar-item :link="{ name: 'Timeline', path: '/pages/timeline' }"/>
          <sidebar-item :link="{ name: 'Profile', path: '/pages/user' }"/>


        </sidebar-item>
      </template>

      <template slot="links-after">
        <p>{{myJson}}</p>
        <hr class="my-3">
        <h6 class="navbar-heading p-0 text-muted">Documentation</h6>

        <b-nav class="navbar-nav mb-md-3">
          <b-nav-item
               href="https://www.creative-tim.com/learning-lab/bootstrap-vue/quick-start/argon-dashboard"
               >
              <i class="ni ni-spaceship"></i>
              <b-nav-text class="p-0">Getting started</b-nav-text>
          </b-nav-item>
          <b-nav-item href="https://www.creative-tim.com/learning-lab/bootstrap-vue/colors/argon-dashboard">
              <i class="ni ni-palette"></i>
              <b-nav-text class="p-0">Foundation</b-nav-text>
          </b-nav-item>
          <b-nav-item href="https://www.creative-tim.com/learning-lab/bootstrap-vue/avatar/argon-dashboard">
              <i class="ni ni-ui-04"></i>
              <b-nav-text class="p-0">Components</b-nav-text>
          </b-nav-item>
          <b-nav-item href="https://www.creative-tim.com/learning-lab/bootstrap-vue/charts/argon-dashboard">
              <i class="ni ni-chart-pie-35"></i>
              <b-nav-text class="p-0">Plugins</b-nav-text>
          </b-nav-item>
        </b-nav>
      </template>
    </side-bar>
    <div class="main-content">
      <dashboard-navbar :type="$route.meta.navbarType"></dashboard-navbar>

      <div @click="$sidebar.displaySidebar(false)">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
      </div>
      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<script>
  /* eslint-disable no-new */
  import PerfectScrollbar from 'perfect-scrollbar';
  import 'perfect-scrollbar/css/perfect-scrollbar.css';
   import json from './json/data.json'

  function hasElement(className) {
    return document.getElementsByClassName(className).length > 0;
  }

  function initScrollbar(className) {
    if (hasElement(className)) {
      new PerfectScrollbar(`.${className}`);
    } else {
      // try to init it later in case this component is loaded async
      setTimeout(() => {
        initScrollbar(className);
      }, 100);
    }
  }

  import DashboardNavbar from './DashboardNavbar.vue';
  import ContentFooter from './ContentFooter.vue';
  import { FadeTransition } from 'vue2-transitions';

  export default {
    components: {
      DashboardNavbar,
      ContentFooter,
      FadeTransition
    },
    data () {
      return {
        myJson: json,
        sidebarObjects : [
          {name: 'Components',icon: 'ni ni-ui-04 text-info',item:[
            { name: 'Buttons', path: '/components/buttons' },
            { name: 'Cards', path: '/components/cards' },
            { name: 'Grid', path: '/components/grid-system' }
          ]},
          {name: 'Forms',icon: 'ni ni-ui-04 text-info',item:[
            { name: 'Elements', path: '/forms/elements' },
            { name: 'Components', path: '/forms/components' }]},
          {name: 'Tables',icon: 'ni ni-ui-04 text-info',item:[
            { name: 'Elements', path: '/forms/elements' },
            { name: 'Components', path: '/forms/components' }
          ]}
        ]
      }
    },
    methods: {
      detayelemanGetir() {
        alert("merhaba");
      },
      initScrollbar() {
        let isWindows = navigator.platform.startsWith('Win');
        if (isWindows) {
          initScrollbar('sidenav');
        }
      }
    },
    mounted() {
      this.initScrollbar()
    }
  };
</script>
<style lang="scss">
</style>
