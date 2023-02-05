import { mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { Link } from "@inertiajs/inertia-vue3";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: ["message"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "container mx-auto" }, _attrs))}><div class="flex justify-center flex-col w-1/2 mx-auto gap-8 mb-10"><h1 class="text-center text-2xl"> Welcome to Lancashire Support Network </h1><p> The purpose of this site is to serve as a centralised database of NHS and third-sector organisations that offer support to the community for a variety of social and mental health issues in Lancashire. </p><p> We encourage you to add organisations that you think others might find useful. You can do this by creating an account and clicking the &quot;Submit an Organisation&quot; button which will appear to those with registered accounts. </p><p> Once you have created an account, you can also favourite organisations you want to remember for later. </p></div><div class="flex gap-4 justify-center p-4">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("organisation.index"),
        class: "rounded-btn-index flex items-center justify-center text-center hover:bg-[#9BCCB4]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`See full list`);
          } else {
            return [
              createTextVNode("See full list")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("login"),
        class: "rounded-btn-index flex items-center justify-center text-center hover:bg-[#9BCCB4]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Log in`);
          } else {
            return [
              createTextVNode("Log in")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("user-account.create"),
        class: "rounded-btn-index flex items-center justify-center text-center hover:bg-[#9BCCB4]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Register`);
          } else {
            return [
              createTextVNode("Register")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Index/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
