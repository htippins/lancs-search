import { resolveComponent, withCtx, unref, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderList, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { Link } from "@inertiajs/inertia-vue3";
import { B as Box } from "./Box-044b28e3.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: { organisations: Array },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<!--[--><h1 class="text-2xl mb-4">Organisations added by you:</h1><section class="grid grid-cols-1 md:grid-cols-2 gap-2"><!--[-->`);
      ssrRenderList(__props.organisations, (organisation) => {
        _push(ssrRenderComponent(Box, {
          key: organisation.id
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-col md:flex-row gap-2 md:items-center justify-between"${_scopeId}><div${_scopeId}><div class="flex justify-between"${_scopeId}><div class="text-lg"${_scopeId}>${ssrInterpolate(organisation.title)} <div class="text-sm mb-2 text-gray-500 tracking-tight"${_scopeId}>${ssrInterpolate(organisation.category)} | ${ssrInterpolate(organisation.demographic)}</div></div><div${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("organisation.edit", organisation.id)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_font_awesome_icon, { icon: "fa-solid fa-pen-to-square" }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_font_awesome_icon, { icon: "fa-solid fa-pen-to-square" })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`   `);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route(
                  "organisation.destroy",
                  organisation.id
                ),
                method: "DELETE",
                as: "button"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_font_awesome_icon, { icon: "fa-solid fa-trash" }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_font_awesome_icon, { icon: "fa-solid fa-trash" })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div><div class="italic text-sm mb-2"${_scopeId}>${ssrInterpolate(organisation.description)}</div><div class="text-sm mb-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: "fa-solid fa-location-dot" }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(organisation.city)}, ${ssrInterpolate(organisation.county)}</div><div class="text-sm text-gray-500"${_scopeId}><h2 class="text-lg text-black"${_scopeId}>Contact details</h2><div${_scopeId}>${ssrInterpolate(organisation.phone_num_1)} ${ssrInterpolate(organisation.phone_num_2)} ${ssrInterpolate(organisation.text_num)}</div><div${_scopeId}>${ssrInterpolate(organisation.website)}</div><div${_scopeId}>${ssrInterpolate(organisation.email)}</div><div${_scopeId}>${ssrInterpolate(organisation.twitter)}</div></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-col md:flex-row gap-2 md:items-center justify-between" }, [
                  createVNode("div", null, [
                    createVNode("div", { class: "flex justify-between" }, [
                      createVNode("div", { class: "text-lg" }, [
                        createTextVNode(toDisplayString(organisation.title) + " ", 1),
                        createVNode("div", { class: "text-sm mb-2 text-gray-500 tracking-tight" }, toDisplayString(organisation.category) + " | " + toDisplayString(organisation.demographic), 1)
                      ]),
                      createVNode("div", null, [
                        createVNode(unref(Link), {
                          href: _ctx.route("organisation.edit", organisation.id)
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_font_awesome_icon, { icon: "fa-solid fa-pen-to-square" })
                          ]),
                          _: 2
                        }, 1032, ["href"]),
                        createTextVNode("   "),
                        createVNode(unref(Link), {
                          href: _ctx.route(
                            "organisation.destroy",
                            organisation.id
                          ),
                          method: "DELETE",
                          as: "button"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_font_awesome_icon, { icon: "fa-solid fa-trash" })
                          ]),
                          _: 2
                        }, 1032, ["href"])
                      ])
                    ]),
                    createVNode("div", { class: "italic text-sm mb-2" }, toDisplayString(organisation.description), 1),
                    createVNode("div", { class: "text-sm mb-2" }, [
                      createVNode(_component_font_awesome_icon, { icon: "fa-solid fa-location-dot" }),
                      createTextVNode(" " + toDisplayString(organisation.city) + ", " + toDisplayString(organisation.county), 1)
                    ]),
                    createVNode("div", { class: "text-sm text-gray-500" }, [
                      createVNode("h2", { class: "text-lg text-black" }, "Contact details"),
                      createVNode("div", null, toDisplayString(organisation.phone_num_1) + " " + toDisplayString(organisation.phone_num_2) + " " + toDisplayString(organisation.text_num), 1),
                      createVNode("div", null, toDisplayString(organisation.website), 1),
                      createVNode("div", null, toDisplayString(organisation.email), 1),
                      createVNode("div", null, toDisplayString(organisation.twitter), 1)
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Account/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
