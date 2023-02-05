import { mergeProps, unref, useSSRContext, computed, ref, resolveComponent, withCtx, createVNode, toDisplayString, openBlock, createBlock, createTextVNode, createCommentVNode } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { Link, usePage } from "@inertiajs/inertia-vue3";
import { B as Box } from "./Box-044b28e3.mjs";
import _sfc_main$3 from "./Filters-5f4aa51a.mjs";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main$2 = {
  __name: "Pagination",
  __ssrInlineRender: true,
  props: { links: Array },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-1" }, _attrs))}><!--[-->`);
      ssrRenderList(__props.links, (link, index) => {
        _push(ssrRenderComponent(unref(Link), {
          key: index,
          class: "py-2 px-4 rounded-md",
          href: link.url
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Pagination.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  methods: {
    closeModal() {
      this.$emit("close-modal");
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed flex justify-center items-center bg-[#000000da] inset-0" }, _attrs))}><div class="bg-white w-[600px] h-[400px] rounded-md shadow-md"><button>X</button>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Modal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Modal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const __default__ = {
  components: {
    "the-modal": Modal
  },
  data() {
    return {
      showModal: false
    };
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    organisations: Object,
    filters: Object
  },
  setup(__props) {
    const page = usePage();
    computed(() => page.props.value.user);
    const arr = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      const _component_the_modal = resolveComponent("the-modal");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$3, { filters: __props.filters }, null, _parent));
      _push(`<div class="w-2/3 mx-auto"><!--[-->`);
      ssrRenderList(__props.organisations.data, (organisation) => {
        _push(ssrRenderComponent(Box, {
          key: organisation.id,
          organisation
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div${_scopeId}><div${_scopeId}><h1 class="text-2xl"${_scopeId}>${ssrInterpolate(organisation.title)}</h1><div class="text-sm tracking-tight text-gray-500 mb-2"${_scopeId}>${ssrInterpolate(organisation.demographic)} | ${ssrInterpolate(organisation.category)}</div></div></div><h2 class="mb-3 italic"${_scopeId}>${ssrInterpolate(organisation.description)}</h2><div class="pt-3 border-t-2 border-[#f2cc8f]"${_scopeId}><div class="flex flex-col gap-3 text-gray-500 text-sm"${_scopeId}><div class="flex justify-between items-center"${_scopeId}>`);
              if (organisation.phone_num_1) {
                _push2(`<p${_scopeId}>`);
                _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: "fa-solid fa-phone" }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(organisation.phone_num_1)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              if (organisation.phone_num_2) {
                _push2(`<p${_scopeId}>${ssrInterpolate(organisation.phone_num_2)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              if (organisation.text_num) {
                _push2(`<p${_scopeId}>${ssrInterpolate(organisation.text_num)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="flex justify-between items-center"${_scopeId}>`);
              if (organisation.email) {
                _push2(`<p${_scopeId}>`);
                _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: "fa-solid fa-paper-plane" }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(organisation.email)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              if (organisation.website) {
                _push2(`<p${_scopeId}><a${ssrRenderAttr("href", organisation.website)} target="_blank"${_scopeId}>${ssrInterpolate(organisation.website)}</a></p>`);
              } else {
                _push2(`<!---->`);
              }
              if (organisation.twitter) {
                _push2(`<p${_scopeId}>`);
                _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: "fa-brands fa-twitter" }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(organisation.twitter)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="flex gap-1 items-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: "fa-solid fa-location-dot" }, null, _parent2, _scopeId));
              if (organisation.city) {
                _push2(`<p${_scopeId}>${ssrInterpolate(organisation.city)},</p>`);
              } else {
                _push2(`<!---->`);
              }
              if (organisation.county) {
                _push2(`<p${_scopeId}>${ssrInterpolate(organisation.county)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div></div>`);
            } else {
              return [
                createVNode("div", null, [
                  createVNode("div", null, [
                    createVNode("h1", { class: "text-2xl" }, toDisplayString(organisation.title), 1),
                    createVNode("div", { class: "text-sm tracking-tight text-gray-500 mb-2" }, toDisplayString(organisation.demographic) + " | " + toDisplayString(organisation.category), 1)
                  ])
                ]),
                createVNode("h2", { class: "mb-3 italic" }, toDisplayString(organisation.description), 1),
                createVNode("div", { class: "pt-3 border-t-2 border-[#f2cc8f]" }, [
                  createVNode("div", { class: "flex flex-col gap-3 text-gray-500 text-sm" }, [
                    createVNode("div", { class: "flex justify-between items-center" }, [
                      organisation.phone_num_1 ? (openBlock(), createBlock("p", { key: 0 }, [
                        createVNode(_component_font_awesome_icon, { icon: "fa-solid fa-phone" }),
                        createTextVNode(" " + toDisplayString(organisation.phone_num_1), 1)
                      ])) : createCommentVNode("", true),
                      organisation.phone_num_2 ? (openBlock(), createBlock("p", { key: 1 }, toDisplayString(organisation.phone_num_2), 1)) : createCommentVNode("", true),
                      organisation.text_num ? (openBlock(), createBlock("p", { key: 2 }, toDisplayString(organisation.text_num), 1)) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "flex justify-between items-center" }, [
                      organisation.email ? (openBlock(), createBlock("p", { key: 0 }, [
                        createVNode(_component_font_awesome_icon, { icon: "fa-solid fa-paper-plane" }),
                        createTextVNode(" " + toDisplayString(organisation.email), 1)
                      ])) : createCommentVNode("", true),
                      organisation.website ? (openBlock(), createBlock("p", { key: 1 }, [
                        createVNode("a", {
                          href: organisation.website,
                          target: "_blank"
                        }, toDisplayString(organisation.website), 9, ["href"])
                      ])) : createCommentVNode("", true),
                      organisation.twitter ? (openBlock(), createBlock("p", { key: 2 }, [
                        createVNode(_component_font_awesome_icon, { icon: "fa-brands fa-twitter" }),
                        createTextVNode(" " + toDisplayString(organisation.twitter), 1)
                      ])) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "flex gap-1 items-center" }, [
                      createVNode(_component_font_awesome_icon, { icon: "fa-solid fa-location-dot" }),
                      organisation.city ? (openBlock(), createBlock("p", { key: 0 }, toDisplayString(organisation.city) + ",", 1)) : createCommentVNode("", true),
                      organisation.county ? (openBlock(), createBlock("p", { key: 1 }, toDisplayString(organisation.county), 1)) : createCommentVNode("", true)
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]-->`);
      if (__props.organisations.data.length) {
        _push(`<div class="w-full flex justify-center mt-8 mb-8">`);
        _push(ssrRenderComponent(_sfc_main$2, {
          links: __props.organisations.links
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_the_modal, {
        style: _ctx.showModal ? null : { display: "none" },
        onCloseModal: ($event) => _ctx.showModal = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>${ssrInterpolate(arr.value)}</div>`);
          } else {
            return [
              createVNode("div", null, toDisplayString(arr.value), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Organisation/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
