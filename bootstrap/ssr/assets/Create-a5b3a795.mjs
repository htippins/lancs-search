import { unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { useForm, Link } from "@inertiajs/inertia-vue3";
const _sfc_main = {
  __name: "Create",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      name: null,
      email: null,
      password: null,
      password_confirmation: null
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(_attrs)}><div class="w-1/2 mx-auto"><div><label for="name" class="label">Your Name</label><input type="text" id="name" class="input"${ssrRenderAttr("value", unref(form).name)}>`);
      if (unref(form).errors.name) {
        _push(`<div class="input-error">${ssrInterpolate(unref(form).errors.name)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label for="email" class="label">Email</label><input type="text" id="email" class="input"${ssrRenderAttr("value", unref(form).email)}>`);
      if (unref(form).errors.email) {
        _push(`<div class="input-error">${ssrInterpolate(unref(form).errors.email)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label for="password" class="label">Password</label><input type="password" id="password" class="input"${ssrRenderAttr("value", unref(form).password)}>`);
      if (unref(form).errors.password) {
        _push(`<div class="input-error">${ssrInterpolate(unref(form).errors.password)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label for="password_confirmation" class="label">Confirm Password</label><input type="password" id="password_confirmation" class="input"${ssrRenderAttr("value", unref(form).password_confirmation)}></div><div class="mt-4"><button class="btn-primary w-full" type="submit"> Create an account </button><div class="mt-2 text-center">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("login"),
        class: "text-sm text-gray-500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Already have an account? Click here`);
          } else {
            return [
              createTextVNode("Already have an account? Click here")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/UserAccount/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
