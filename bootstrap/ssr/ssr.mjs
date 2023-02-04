import { useSSRContext, mergeProps, resolveComponent, withCtx, unref, createVNode, createTextVNode, toDisplayString, computed, ref, openBlock, createBlock, createCommentVNode, createSSRApp, h } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { Link, useForm, usePage } from "@inertiajs/inertia-vue3";
import { createInertiaApp } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$c = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "border border-gray-200 rounded-md p-4 shadow-sm mb-3" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Box.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const Box = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$b = {
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
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Account/Index.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$b
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$a = {
  __name: "Login",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      email: null,
      password: null
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(_attrs)}><div class="w-1/2 mx-auto"><div><label for="email" class="label">Email</label><input type="text" id="email" class="input"${ssrRenderAttr("value", unref(form).email)}>`);
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
      _push(`</div><div class="mt-4"><button class="btn-primary w-full" type="submit">Login</button><div class="mt-2 text-center">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("user-account.create"),
        class: "text-sm text-gray-500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Need an account? Click here`);
          } else {
            return [
              createTextVNode("Need an account? Click here")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></form>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$a
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$9 = {
  __name: "Filters",
  __ssrInlineRender: true,
  props: { filters: Object },
  setup(__props) {
    const props = __props;
    const filterForm = useForm({
      title: props.filters.title ?? null,
      city: props.filters.city ?? null,
      category: props.filters.category ?? null,
      demographic: props.filters.demographic ?? null
    });
    const categories = [
      { cat: "Therapy" },
      { cat: "Debt" },
      { cat: "Bereavement" },
      { cat: "Education" },
      { cat: "Anger Management" },
      { cat: "Sexual Trauma" },
      { cat: "Substance misuse" },
      { cat: "Gambling addiction" },
      { cat: "Housing" },
      { cat: "Suicide/self-harm" },
      { cat: "Mental health at work" },
      { cat: "Domestic abuse" },
      { cat: "Ethnic miniorities" },
      { cat: "Miscarriage support" },
      { cat: "Eating disorders" },
      { cat: "Specific conditions" },
      { cat: "Men's groups" },
      { cat: "General Wellbeing" },
      { cat: "Carer support" },
      { cat: "Misc" },
      { cat: "Befriending" },
      { cat: "Veterans" },
      { cat: "Food banks" }
    ];
    const demographics = [
      { type: "Young persons" },
      { type: "Adult" },
      { type: "Older adults" },
      { type: "Any age" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center" }, _attrs))}><form><div class="mb-8 mt-4 flex flex-wrap gap-2"><div class="flex flex-nowrap items-center"><input${ssrRenderAttr("value", unref(filterForm).title)} type="text" placeholder="Organisation name" class="input-filter-l"><input${ssrRenderAttr("value", unref(filterForm).city)} type="text" placeholder="Location" class="input-filter-r"></div><div class="flex flex-nowrap items-center"><select class="input-filter-l"><option${ssrRenderAttr("value", null)}>Category</option><!--[-->`);
      ssrRenderList(categories, (category) => {
        _push(`<option>${ssrInterpolate(category.cat)}</option>`);
      });
      _push(`<!--]--></select><select class="input-filter-r"><option${ssrRenderAttr("value", null)}>Demographic</option><!--[-->`);
      ssrRenderList(demographics, (demographic) => {
        _push(`<option>${ssrInterpolate(demographic.type)}</option>`);
      });
      _push(`<!--]--></select></div><button type="submit" class="btn-normal">Filter</button><button type="reset">Clear</button></div></form></div>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Index/Components/Filters.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$9
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$8 = {
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
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Index/Index.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$8
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$7 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}>Show</div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Index/Show.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Show$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$2]]);
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Show$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$6 = {
  __name: "Create",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      title: null,
      description: null,
      category: null,
      demographic: null,
      city: null,
      county: "Lancashire",
      phone_num_1: null,
      phone_num_2: null,
      text_num: null,
      website: null,
      email: null,
      twitter: null
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(_attrs)}><div class="flex flex-col h-full w-1/2 mx-auto"><div><label class="block mb-1 text-gray-500 font-medium">Name of organisation</label><input type="text"${ssrRenderAttr("value", unref(form).title)} class="block w-full p-2 rounded-md shadow-sm border border-gray-300 text-gray-500 mb-2">`);
      if (unref(form).errors.title) {
        _push(`<div><p class="input-error">Required field</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="block mb-1 text-gray-500 font-medium">Description</label><textarea type="text" class="block w-full p-2 rounded-md shadow-sm border border-gray-300 text-gray-500 mb-2">${ssrInterpolate(unref(form).description)}</textarea>`);
      if (unref(form).errors.description) {
        _push(`<div><p class="input-error">Required field</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="block mb-1 text-gray-500 font-medium">Category</label><select class="block w-full p-2 rounded-md shadow-sm border border-gray-300 text-gray-500 mb-2"><option disable value="">Please select...</option><option value="Therapy">Therapy</option><option value="Debt">Debt support</option><option value="Bereavement">Bereavement</option><option value="Education">MH related education</option><option value="Anger management">Anger Management</option><option value="Sexual trauma">Sexual trauma</option><option value="Substance misuse">Substance Misuse</option><option value="Gambling addiction"> Gambling addiction </option><option value="Housing">Housing/homelessness</option><option value="Suicide/self harm">Suicide/self harm</option><option value="Mental health at work"> Mental health at work </option><option value="Domestic abuse">Domestic Abuse</option><option value="Ethnic miniorities"> Ethnic minorities </option><option value="Miscarriage support"> Miscarriage support </option><option value="Eating disorders">Eating disorders</option><option value="Specific conditions"> Specific condition </option><option value="Men&#39;s groups">Men&#39;s Group</option><option value="General wellbeing">General wellbeing</option><option value="Carer support">Services for carers</option><option value="Misc">Miscallaneous</option><option value="Befriending">Befriending</option><option value="Veterans">Veterans</option><option value="Food banks">Food banks</option></select>`);
      if (unref(form).errors.category) {
        _push(`<div><p class="input-error">Required field</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="block mb-1 text-gray-500 font-medium">Demographics</label><select class="block w-full p-2 rounded-md shadow-sm border border-gray-300 text-gray-500 mb-2"><option disable value="">Please select...</option><option value="Young persons">Young Persons</option><option value="Adult">Adults</option><option value="Older adults">Older Adults</option><option value="Any age">Any age</option></select>`);
      if (unref(form).errors.demographic) {
        _push(`<div><p class="input-error">Required field</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="block mb-1 text-gray-500 font-medium">Town/City</label><input type="text"${ssrRenderAttr("value", unref(form).city)} class="block w-full p-2 rounded-md shadow-sm border border-gray-300 text-gray-500 mb-2">`);
      if (unref(form).errors.city) {
        _push(`<div><p class="input-error">Required field</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="block mb-1 text-gray-500 font-medium">County</label><input type="text"${ssrRenderAttr("value", unref(form).county)} class="block w-full p-2 rounded-md shadow-sm border border-gray-300 text-gray-500 mb-2">`);
      if (unref(form).errors.county) {
        _push(`<div><p class="text-right">Required field</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="block mb-1 text-gray-500 font-medium">Phone number</label><input type="text"${ssrRenderAttr("value", unref(form).phone_num_1)} class="block w-full p-2 rounded-md shadow-sm border border-gray-300 text-gray-500 mb-2">`);
      if (unref(form).errors.phone_num_1) {
        _push(`<div><p>Error with input</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="block mb-1 text-gray-500 font-medium">Second phone number (optional)</label><input type="text"${ssrRenderAttr("value", unref(form).phone_num_2)} class="block w-full p-2 rounded-md shadow-sm border border-gray-300 text-gray-500 mb-2">`);
      if (unref(form).errors.phone_num_2) {
        _push(`<div><p>Error with input</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="block mb-1 text-gray-500 font-medium">Text number (optional)</label><input type="text"${ssrRenderAttr("value", unref(form).text_num)} class="block w-full p-2 rounded-md shadow-sm border border-gray-300 text-gray-500 mb-2">`);
      if (unref(form).errors.text_num) {
        _push(`<div><p>Error with input</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="block mb-1 text-gray-500 font-medium">Website (optional)</label><input type="text"${ssrRenderAttr("value", unref(form).website)} class="block w-full p-2 rounded-md shadow-sm border border-gray-300 text-gray-500 mb-2">`);
      if (unref(form).errors.website) {
        _push(`<div><p>Error with input</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="block mb-1 text-gray-500 font-medium">Email (optional)</label><input type="email"${ssrRenderAttr("value", unref(form).email)} class="block w-full p-2 rounded-md shadow-sm border border-gray-300 text-gray-500 mb-2"></div><div><label class="block mb-1 text-gray-500 font-medium">Twitter (optional)</label><input type="text"${ssrRenderAttr("value", unref(form).twitter)} class="block w-full p-2 rounded-md shadow-sm border border-gray-300 text-gray-500 mb-2"></div><div><button type="submit" class="bg-[#81b29a] hover:bg-[#9BCCB4] text-white font-medium p-2 rounded-md w-full mt-2"> Submit </button></div></div></form>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Organisation/Create.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$6
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    organisation: Object
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      title: props.organisation.title,
      description: props.organisation.description,
      category: props.organisation.category,
      demographic: props.organisation.demographic,
      city: props.organisation.city,
      county: props.organisation.county,
      phone_num_1: props.organisation.phone_num_1,
      phone_num_2: props.organisation.phone_num_2,
      text_num: props.organisation.text_num,
      website: props.organisation.website,
      email: props.organisation.email,
      twitter: props.organisation.twitter
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(_attrs)}><div class="flex flex-col h-full w-1/2 mx-auto"><div><label class="block mb-1 text-gray-500 font-medium">Name of organisation</label><input type="text"${ssrRenderAttr("value", unref(form).title)} class="block w-full p-2 rounded-md shadow-sm border border-gray-300 text-gray-500 mb-2">`);
      if (unref(form).errors.title) {
        _push(`<div><p class="text-right text-red-800">Required field</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="block mb-1 text-gray-500 font-medium">Description</label><textarea type="text" class="block w-full p-2 rounded-md shadow-sm border border-gray-300 text-gray-500 mb-2">${ssrInterpolate(unref(form).description)}</textarea>`);
      if (unref(form).errors.description) {
        _push(`<div><p class="text-right text-red-800">Required field</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="block mb-1 text-gray-500 font-medium">Category</label><select class="block w-full p-2 rounded-md shadow-sm border border-gray-300 text-gray-500 mb-2"><option disable value="">Please select...</option><option value="Therapy">Therapy</option><option value="Debt">Debt support</option><option value="Bereavement">Bereavement</option><option value="Education">MH related education</option><option value="Anger management">Anger Management</option><option value="Sexual trauma">Sexual trauma</option><option value="Substance misuse">Substance Misuse</option><option value="Gambling addiction"> Gambling addiction </option><option value="Housing">Housing/homelessness</option><option value="Suicide/self harm">Suicide/self harm</option><option value="Mental health at work"> Mental health at work </option><option value="Domestic abuse">Domestic Abuse</option><option value="Ethnic miniorities"> Ethnic minorities </option><option value="Miscarriage support"> Miscarriage support </option><option value="Eating disorders">Eating disorders</option><option value="Specific conditions"> Specific condition </option><option value="Men&#39;s groups">Men&#39;s Group</option><option value="General wellbeing">General wellbeing</option><option value="Carer support">Services for carers</option><option value="Misc">Miscallaneous</option><option value="Befriending">Befriending</option><option value="Veterans">Veterans</option><option value="Food banks">Food banks</option></select>`);
      if (unref(form).errors.category) {
        _push(`<div><p class="text-right text-red-800">Required field</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="block mb-1 text-gray-500 font-medium">Demographics</label><select class="block w-full p-2 rounded-md shadow-sm border border-gray-300 text-gray-500 mb-2"><option disable value="">Please select...</option><option value="Young persons">Young Persons</option><option value="Adult">Adults</option><option value="Older adults">Older Adults</option><option value="Any age">Any age</option></select>`);
      if (unref(form).errors.demographic) {
        _push(`<div><p class="text-right text-red-800">Required field</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="block mb-1 text-gray-500 font-medium">Town/City</label><input type="text"${ssrRenderAttr("value", unref(form).city)} class="block w-full p-2 rounded-md shadow-sm border border-gray-300 text-gray-500 mb-2">`);
      if (unref(form).errors.city) {
        _push(`<div><p class="text-right text-red-800">Required field</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="block mb-1 text-gray-500 font-medium">County</label><input type="text"${ssrRenderAttr("value", unref(form).county)} class="block w-full p-2 rounded-md shadow-sm border border-gray-300 text-gray-500 mb-2">`);
      if (unref(form).errors.county) {
        _push(`<div><p class="text-right">Required field</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="block mb-1 text-gray-500 font-medium">Phone number</label><input type="text"${ssrRenderAttr("value", unref(form).phone_num_1)} class="block w-full p-2 rounded-md shadow-sm border border-gray-300 text-gray-500 mb-2">`);
      if (unref(form).errors.phone_num_1) {
        _push(`<div><p>Error with input</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="block mb-1 text-gray-500 font-medium">Second phone number (optional)</label><input type="text"${ssrRenderAttr("value", unref(form).phone_num_2)} class="block w-full p-2 rounded-md shadow-sm border border-gray-300 text-gray-500 mb-2">`);
      if (unref(form).errors.phone_num_2) {
        _push(`<div><p>Error with input</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="block mb-1 text-gray-500 font-medium">Text number (optional)</label><input type="text"${ssrRenderAttr("value", unref(form).text_num)} class="block w-full p-2 rounded-md shadow-sm border border-gray-300 text-gray-500 mb-2">`);
      if (unref(form).errors.text_num) {
        _push(`<div><p>Error with input</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="block mb-1 text-gray-500 font-medium">Website (optional)</label><input type="text"${ssrRenderAttr("value", unref(form).website)} class="block w-full p-2 rounded-md shadow-sm border border-gray-300 text-gray-500 mb-2">`);
      if (unref(form).errors.website) {
        _push(`<div><p>Error with input</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="block mb-1 text-gray-500 font-medium">Email (optional)</label><input type="email"${ssrRenderAttr("value", unref(form).email)} class="block w-full p-2 rounded-md shadow-sm border border-gray-300 text-gray-500 mb-2"></div><div><label class="block mb-1 text-gray-500 font-medium">Twitter (optional)</label><input type="text"${ssrRenderAttr("value", unref(form).twitter)} class="block w-full p-2 rounded-md shadow-sm border border-gray-300 text-gray-500 mb-2"></div><div><button type="submit" class="bg-[#81b29a] hover:bg-[#9BCCB4] text-white font-medium p-2 rounded-md w-full mt-2"> Edit </button></div></div></form>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Organisation/Edit.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$5
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = {
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Pagination.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  methods: {
    closeModal() {
      this.$emit("close-modal");
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed flex justify-center items-center bg-[#000000da] inset-0" }, _attrs))}><div class="bg-white w-[600px] h-[400px] rounded-md shadow-md"><button>X</button>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Modal.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Modal = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
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
const _sfc_main$2 = /* @__PURE__ */ Object.assign(__default__, {
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
      _push(ssrRenderComponent(_sfc_main$9, { filters: __props.filters }, null, _parent));
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
        _push(ssrRenderComponent(_sfc_main$4, {
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Organisation/Index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Organisation/Show.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Show = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Show
}, Symbol.toStringTag, { value: "Module" }));
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
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Account/Index.vue": __vite_glob_0_0, "./Pages/Auth/Login.vue": __vite_glob_0_1, "./Pages/Index/Components/Filters.vue": __vite_glob_0_2, "./Pages/Index/Index.vue": __vite_glob_0_3, "./Pages/Index/Show.vue": __vite_glob_0_4, "./Pages/Organisation/Create.vue": __vite_glob_0_5, "./Pages/Organisation/Edit.vue": __vite_glob_0_6, "./Pages/Organisation/Index.vue": __vite_glob_0_7, "./Pages/Organisation/Show.vue": __vite_glob_0_8, "./Pages/UserAccount/Create.vue": __vite_glob_0_9 });
      return pages[`./Pages/${name}.vue`];
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props)
      }).use(plugin);
    }
  })
);
