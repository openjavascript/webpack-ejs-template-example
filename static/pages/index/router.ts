import Vue from 'vue'
import VueRouter, { Location, Route, RouteConfig } from 'vue-router'
import { makeHot, reload } from '@static/utils/hot-reload'

const homeComponent = () => import( './subpages/home' ).then((item) => {
    return item.HomeComponent 
})
if (process.env.ENV === 'development' && module.hot) {
  makeHot('./subpages/home', homeComponent,
    module.hot.accept('./subpages/home', () => reload('./subpages/home', (require('./subpages/home') as any).HomeComponent)))
}

const aboutComponent = () => import( './subpages/about' ).then((item) => {
    return item.AboutComponent 
})
if (process.env.ENV === 'development' && module.hot) {
  makeHot('./subpages/about', aboutComponent,
    module.hot.accept('./subpages/about', () => reload('./subpages/about', (require('./subpages/about') as any).AboutComponent)))
}

const listComponent = () => import( './subpages/list' ).then((item) => {
    return item.ListComponent 
})
if (process.env.ENV === 'development' && module.hot) {
  makeHot('./subpages/list', listComponent,
    module.hot.accept('./subpages/list', () => reload('./subpages/list', (require('./subpages/list') as any).ListComponent)))
}

Vue.use(VueRouter)

export const createRoutes: () => RouteConfig[] = () => [
  {
    path: '/',
    component: homeComponent
  },
  {
    path: '/index.html',
    component: homeComponent
  },
  {
    path: '/about',
    component: aboutComponent
  },
  {
    path: '/list',
    component: listComponent
  }
]

export const createRouter = () => new VueRouter({ mode: 'history', routes: createRoutes() })
