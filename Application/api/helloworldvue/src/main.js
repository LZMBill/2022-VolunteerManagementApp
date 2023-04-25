import Vue from 'vue'
import App from './App.vue'
import actionTable from './components/actionTable'
import All_Activity from './components/All_Activity'
import referralTable from './components/referralTable'
import Start_Call from './components/Start_Call'
import residentPage from './components/residentPage'
import action_page from './components/action_page'
import MyResident from './components/MyResident'
import MyVolunteers from './components/MyVolunteers'
import MyOrganisations from './components/myOrganisation'
import CreateOrganisation from './components/add form/NewOrganisationForm.vue'
import UpdateOrganisation from './components/UpdateOrganisationForm'
import NewVolunteerForm from "@/components/add form/NewVolunteerForm";
import UpdateVolunteerForm from './components/UpdateVolunteerForm'
import VueRouter from 'vue-router'
import { loremIpsum } from "lorem-ipsum"

Object.defineProperty(Vue.prototype, '$lorem', { value: loremIpsum });
Vue.config.productionTip = false

Vue.use(VueRouter)


const routes = [
  {path: '/static/src/vue/dist',component: All_Activity},
  { path: '/', component: All_Activity},
  { path: '/Actions', component: actionTable},
  { path: '/referrals', component: referralTable},
  { path: '/AllActivity', component: All_Activity},
  { path: '/Start_Call', component: Start_Call},
  { path: '/add/:id', component: residentPage, name: 'add'},
  { path: '/action_page/:id', component: action_page, name: 'action_page'},
  { path: '/residents', component: MyResident},
  { path: '/Volunteers', component: MyVolunteers },
  { path: '/organisations', component: MyOrganisations},
  { path: '/createOrganisation', component: CreateOrganisation},
  { path: '/updateOrganisation', component: UpdateOrganisation},
  { path: '/createVolunteer',component: NewVolunteerForm},
  { path: '/updateVolunteer',component: UpdateVolunteerForm}
]

const router = new VueRouter({
  mode: 'history',
  routes
})
  new Vue({
    router,
    render: h => h(App),
  }).$mount('#app')
