import { ViteSSG     } from 'vite-ssg'
import './style.css'
import App from './App.vue'

import router from './router'
import './assets/variables.scss'
import './assets/styles.css'

export const createApp = ViteSSG(
    App,
    { routes: router.options.routes },
    
    (ctx) => {
        if (ctx.isClient) {
            import('./utils/importBootstrap')
        }
    }
)