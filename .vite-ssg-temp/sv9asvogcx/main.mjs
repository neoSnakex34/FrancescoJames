import { ViteSSG } from "vite-ssg";
import { defineComponent, ref, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import { RouterLink, RouterView, createRouter, createMemoryHistory } from "vue-router";
import "bootstrap";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    const buttonToggler = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><header data-v-d9313bf0><nav class="navbar navbar-dark navbar-expand-lg" data-v-d9313bf0><div class="container-fluid" data-v-d9313bf0><a class="navbar-brand" data-v-d9313bf0> neoSnakex34 </a><button class="${ssrRenderClass([{ "active": buttonToggler.value }, "navbar-toggler rounded-pill"])}" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" data-v-d9313bf0><i class="icon bi bi-list" data-v-d9313bf0></i></button><div class="collapse navbar-collapse" id="navbarNav" data-v-d9313bf0><ul class="navbar-nav" data-v-d9313bf0><li class="nav-item" data-v-d9313bf0>`);
      _push(ssrRenderComponent(unref(RouterLink), {
        to: "/",
        class: "nav-link",
        "aria-current": "page"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item" data-v-d9313bf0><a class="nav-link" href="#" data-v-d9313bf0>Skills</a></li><li class="nav-item" data-v-d9313bf0><a class="nav-link" href="#" data-v-d9313bf0>Projects</a></li></ul></div></div></nav></header><main data-v-d9313bf0>`);
      _push(ssrRenderComponent(unref(RouterView), null, null, _parent));
      _push(`</main><footer data-v-d9313bf0></footer><!--]-->`);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d9313bf0"]]);
const routes = [
  { path: "/", component: () => import("./assets/About-BDP_tdKQ.js") },
  { path: "/skills", component: () => import("./assets/Skills-YjJ7h1tI.js") }
];
const router = createRouter({
  history: createMemoryHistory(),
  routes
});
const createApp = ViteSSG(
  App,
  { routes: router.options.routes }
);
export {
  _export_sfc as _,
  createApp
};
