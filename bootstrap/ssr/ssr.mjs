import { useSSRContext, mergeProps, resolveComponent, withCtx, unref, createVNode, createTextVNode, toDisplayString, computed, ref, openBlock, createBlock, createCommentVNode, createSSRApp, h as h$1 } from "vue";
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
const _sfc_main$d = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "border border-gray-200 rounded-md p-4 shadow-sm mb-3" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Box.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const Box = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$c = {
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
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Account/Index.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$c
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$b = {
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
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$b
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$a = {
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
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Index/Components/Filters.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$a
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$9 = {
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
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Index/Index.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$9
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$8 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}>Show</div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Index/Show.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const Show$1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$2]]);
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Show$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$7 = {
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
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Organisation/Create.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$7
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$6 = {
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Organisation/Edit.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$6
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = {
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Pagination.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Modal.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Modal = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
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
const _sfc_main$3 = /* @__PURE__ */ Object.assign(__default__, {
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
      _push(ssrRenderComponent(_sfc_main$a, { filters: __props.filters }, null, _parent));
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
        _push(ssrRenderComponent(_sfc_main$5, {
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Organisation/Index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$3
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Organisation/Show.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Show = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Show
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = {
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/UserAccount/Create.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
function t() {
  return t = Object.assign ? Object.assign.bind() : function(t4) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var r2 = arguments[e2];
      for (var n2 in r2)
        Object.prototype.hasOwnProperty.call(r2, n2) && (t4[n2] = r2[n2]);
    }
    return t4;
  }, t.apply(this, arguments);
}
var e = String.prototype.replace, r = /%20/g, n = { default: "RFC3986", formatters: { RFC1738: function(t4) {
  return e.call(t4, r, "+");
}, RFC3986: function(t4) {
  return String(t4);
} }, RFC1738: "RFC1738", RFC3986: "RFC3986" }, o = Object.prototype.hasOwnProperty, i = Array.isArray, u = function() {
  for (var t4 = [], e2 = 0; e2 < 256; ++e2)
    t4.push("%" + ((e2 < 16 ? "0" : "") + e2.toString(16)).toUpperCase());
  return t4;
}(), a = function(t4, e2) {
  for (var r2 = e2 && e2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, n2 = 0; n2 < t4.length; ++n2)
    void 0 !== t4[n2] && (r2[n2] = t4[n2]);
  return r2;
}, s = { arrayToObject: a, assign: function(t4, e2) {
  return Object.keys(e2).reduce(function(t5, r2) {
    return t5[r2] = e2[r2], t5;
  }, t4);
}, combine: function(t4, e2) {
  return [].concat(t4, e2);
}, compact: function(t4) {
  for (var e2 = [{ obj: { o: t4 }, prop: "o" }], r2 = [], n2 = 0; n2 < e2.length; ++n2)
    for (var o2 = e2[n2], u2 = o2.obj[o2.prop], a2 = Object.keys(u2), s2 = 0; s2 < a2.length; ++s2) {
      var f2 = a2[s2], c2 = u2[f2];
      "object" == typeof c2 && null !== c2 && -1 === r2.indexOf(c2) && (e2.push({ obj: u2, prop: f2 }), r2.push(c2));
    }
  return function(t5) {
    for (; t5.length > 1; ) {
      var e3 = t5.pop(), r3 = e3.obj[e3.prop];
      if (i(r3)) {
        for (var n3 = [], o3 = 0; o3 < r3.length; ++o3)
          void 0 !== r3[o3] && n3.push(r3[o3]);
        e3.obj[e3.prop] = n3;
      }
    }
  }(e2), t4;
}, decode: function(t4, e2, r2) {
  var n2 = t4.replace(/\+/g, " ");
  if ("iso-8859-1" === r2)
    return n2.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n2);
  } catch (t5) {
    return n2;
  }
}, encode: function(t4, e2, r2, o2, i2) {
  if (0 === t4.length)
    return t4;
  var a2 = t4;
  if ("symbol" == typeof t4 ? a2 = Symbol.prototype.toString.call(t4) : "string" != typeof t4 && (a2 = String(t4)), "iso-8859-1" === r2)
    return escape(a2).replace(/%u[0-9a-f]{4}/gi, function(t5) {
      return "%26%23" + parseInt(t5.slice(2), 16) + "%3B";
    });
  for (var s2 = "", f2 = 0; f2 < a2.length; ++f2) {
    var c2 = a2.charCodeAt(f2);
    45 === c2 || 46 === c2 || 95 === c2 || 126 === c2 || c2 >= 48 && c2 <= 57 || c2 >= 65 && c2 <= 90 || c2 >= 97 && c2 <= 122 || i2 === n.RFC1738 && (40 === c2 || 41 === c2) ? s2 += a2.charAt(f2) : c2 < 128 ? s2 += u[c2] : c2 < 2048 ? s2 += u[192 | c2 >> 6] + u[128 | 63 & c2] : c2 < 55296 || c2 >= 57344 ? s2 += u[224 | c2 >> 12] + u[128 | c2 >> 6 & 63] + u[128 | 63 & c2] : (c2 = 65536 + ((1023 & c2) << 10 | 1023 & a2.charCodeAt(f2 += 1)), s2 += u[240 | c2 >> 18] + u[128 | c2 >> 12 & 63] + u[128 | c2 >> 6 & 63] + u[128 | 63 & c2]);
  }
  return s2;
}, isBuffer: function(t4) {
  return !(!t4 || "object" != typeof t4 || !(t4.constructor && t4.constructor.isBuffer && t4.constructor.isBuffer(t4)));
}, isRegExp: function(t4) {
  return "[object RegExp]" === Object.prototype.toString.call(t4);
}, maybeMap: function(t4, e2) {
  if (i(t4)) {
    for (var r2 = [], n2 = 0; n2 < t4.length; n2 += 1)
      r2.push(e2(t4[n2]));
    return r2;
  }
  return e2(t4);
}, merge: function t2(e2, r2, n2) {
  if (!r2)
    return e2;
  if ("object" != typeof r2) {
    if (i(e2))
      e2.push(r2);
    else {
      if (!e2 || "object" != typeof e2)
        return [e2, r2];
      (n2 && (n2.plainObjects || n2.allowPrototypes) || !o.call(Object.prototype, r2)) && (e2[r2] = true);
    }
    return e2;
  }
  if (!e2 || "object" != typeof e2)
    return [e2].concat(r2);
  var u2 = e2;
  return i(e2) && !i(r2) && (u2 = a(e2, n2)), i(e2) && i(r2) ? (r2.forEach(function(r3, i2) {
    if (o.call(e2, i2)) {
      var u3 = e2[i2];
      u3 && "object" == typeof u3 && r3 && "object" == typeof r3 ? e2[i2] = t2(u3, r3, n2) : e2.push(r3);
    } else
      e2[i2] = r3;
  }), e2) : Object.keys(r2).reduce(function(e3, i2) {
    var u3 = r2[i2];
    return e3[i2] = o.call(e3, i2) ? t2(e3[i2], u3, n2) : u3, e3;
  }, u2);
} }, f = Object.prototype.hasOwnProperty, c = { brackets: function(t4) {
  return t4 + "[]";
}, comma: "comma", indices: function(t4, e2) {
  return t4 + "[" + e2 + "]";
}, repeat: function(t4) {
  return t4;
} }, l = Array.isArray, p = String.prototype.split, h = Array.prototype.push, y = function(t4, e2) {
  h.apply(t4, l(e2) ? e2 : [e2]);
}, d = Date.prototype.toISOString, b = n.default, v = { addQueryPrefix: false, allowDots: false, charset: "utf-8", charsetSentinel: false, delimiter: "&", encode: true, encoder: s.encode, encodeValuesOnly: false, format: b, formatter: n.formatters[b], indices: false, serializeDate: function(t4) {
  return d.call(t4);
}, skipNulls: false, strictNullHandling: false }, m = function t3(e2, r2, n2, o2, i2, u2, a2, f2, c2, h2, d2, b2, m2, g2) {
  var j2, w2 = e2;
  if ("function" == typeof a2 ? w2 = a2(r2, w2) : w2 instanceof Date ? w2 = h2(w2) : "comma" === n2 && l(w2) && (w2 = s.maybeMap(w2, function(t4) {
    return t4 instanceof Date ? h2(t4) : t4;
  })), null === w2) {
    if (o2)
      return u2 && !m2 ? u2(r2, v.encoder, g2, "key", d2) : r2;
    w2 = "";
  }
  if ("string" == typeof (j2 = w2) || "number" == typeof j2 || "boolean" == typeof j2 || "symbol" == typeof j2 || "bigint" == typeof j2 || s.isBuffer(w2)) {
    if (u2) {
      var O2 = m2 ? r2 : u2(r2, v.encoder, g2, "key", d2);
      if ("comma" === n2 && m2) {
        for (var $2 = p.call(String(w2), ","), E2 = "", S2 = 0; S2 < $2.length; ++S2)
          E2 += (0 === S2 ? "" : ",") + b2(u2($2[S2], v.encoder, g2, "value", d2));
        return [b2(O2) + "=" + E2];
      }
      return [b2(O2) + "=" + b2(u2(w2, v.encoder, g2, "value", d2))];
    }
    return [b2(r2) + "=" + b2(String(w2))];
  }
  var R2, x2 = [];
  if (void 0 === w2)
    return x2;
  if ("comma" === n2 && l(w2))
    R2 = [{ value: w2.length > 0 ? w2.join(",") || null : void 0 }];
  else if (l(a2))
    R2 = a2;
  else {
    var C2 = Object.keys(w2);
    R2 = f2 ? C2.sort(f2) : C2;
  }
  for (var N = 0; N < R2.length; ++N) {
    var k = R2[N], T = "object" == typeof k && void 0 !== k.value ? k.value : w2[k];
    if (!i2 || null !== T) {
      var _ = l(w2) ? "function" == typeof n2 ? n2(r2, k) : r2 : r2 + (c2 ? "." + k : "[" + k + "]");
      y(x2, t3(T, _, n2, o2, i2, u2, a2, f2, c2, h2, d2, b2, m2, g2));
    }
  }
  return x2;
}, g = Object.prototype.hasOwnProperty, j = Array.isArray, w = { allowDots: false, allowPrototypes: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decoder: s.decode, delimiter: "&", depth: 5, ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1e3, parseArrays: true, plainObjects: false, strictNullHandling: false }, O = function(t4) {
  return t4.replace(/&#(\d+);/g, function(t5, e2) {
    return String.fromCharCode(parseInt(e2, 10));
  });
}, $ = function(t4, e2) {
  return t4 && "string" == typeof t4 && e2.comma && t4.indexOf(",") > -1 ? t4.split(",") : t4;
}, E = function(t4, e2, r2, n2) {
  if (t4) {
    var o2 = r2.allowDots ? t4.replace(/\.([^.[]+)/g, "[$1]") : t4, i2 = /(\[[^[\]]*])/g, u2 = r2.depth > 0 && /(\[[^[\]]*])/.exec(o2), a2 = u2 ? o2.slice(0, u2.index) : o2, s2 = [];
    if (a2) {
      if (!r2.plainObjects && g.call(Object.prototype, a2) && !r2.allowPrototypes)
        return;
      s2.push(a2);
    }
    for (var f2 = 0; r2.depth > 0 && null !== (u2 = i2.exec(o2)) && f2 < r2.depth; ) {
      if (f2 += 1, !r2.plainObjects && g.call(Object.prototype, u2[1].slice(1, -1)) && !r2.allowPrototypes)
        return;
      s2.push(u2[1]);
    }
    return u2 && s2.push("[" + o2.slice(u2.index) + "]"), function(t5, e3, r3, n3) {
      for (var o3 = n3 ? e3 : $(e3, r3), i3 = t5.length - 1; i3 >= 0; --i3) {
        var u3, a3 = t5[i3];
        if ("[]" === a3 && r3.parseArrays)
          u3 = [].concat(o3);
        else {
          u3 = r3.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var s3 = "[" === a3.charAt(0) && "]" === a3.charAt(a3.length - 1) ? a3.slice(1, -1) : a3, f3 = parseInt(s3, 10);
          r3.parseArrays || "" !== s3 ? !isNaN(f3) && a3 !== s3 && String(f3) === s3 && f3 >= 0 && r3.parseArrays && f3 <= r3.arrayLimit ? (u3 = [])[f3] = o3 : "__proto__" !== s3 && (u3[s3] = o3) : u3 = { 0: o3 };
        }
        o3 = u3;
      }
      return o3;
    }(s2, e2, r2, n2);
  }
}, S = function(t4, e2) {
  var r2 = function(t5) {
    if (!t5)
      return w;
    if (null != t5.decoder && "function" != typeof t5.decoder)
      throw new TypeError("Decoder has to be a function.");
    if (void 0 !== t5.charset && "utf-8" !== t5.charset && "iso-8859-1" !== t5.charset)
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    return { allowDots: void 0 === t5.allowDots ? w.allowDots : !!t5.allowDots, allowPrototypes: "boolean" == typeof t5.allowPrototypes ? t5.allowPrototypes : w.allowPrototypes, arrayLimit: "number" == typeof t5.arrayLimit ? t5.arrayLimit : w.arrayLimit, charset: void 0 === t5.charset ? w.charset : t5.charset, charsetSentinel: "boolean" == typeof t5.charsetSentinel ? t5.charsetSentinel : w.charsetSentinel, comma: "boolean" == typeof t5.comma ? t5.comma : w.comma, decoder: "function" == typeof t5.decoder ? t5.decoder : w.decoder, delimiter: "string" == typeof t5.delimiter || s.isRegExp(t5.delimiter) ? t5.delimiter : w.delimiter, depth: "number" == typeof t5.depth || false === t5.depth ? +t5.depth : w.depth, ignoreQueryPrefix: true === t5.ignoreQueryPrefix, interpretNumericEntities: "boolean" == typeof t5.interpretNumericEntities ? t5.interpretNumericEntities : w.interpretNumericEntities, parameterLimit: "number" == typeof t5.parameterLimit ? t5.parameterLimit : w.parameterLimit, parseArrays: false !== t5.parseArrays, plainObjects: "boolean" == typeof t5.plainObjects ? t5.plainObjects : w.plainObjects, strictNullHandling: "boolean" == typeof t5.strictNullHandling ? t5.strictNullHandling : w.strictNullHandling };
  }(e2);
  if ("" === t4 || null == t4)
    return r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n2 = "string" == typeof t4 ? function(t5, e3) {
    var r3, n3 = {}, o3 = (e3.ignoreQueryPrefix ? t5.replace(/^\?/, "") : t5).split(e3.delimiter, Infinity === e3.parameterLimit ? void 0 : e3.parameterLimit), i3 = -1, u3 = e3.charset;
    if (e3.charsetSentinel)
      for (r3 = 0; r3 < o3.length; ++r3)
        0 === o3[r3].indexOf("utf8=") && ("utf8=%E2%9C%93" === o3[r3] ? u3 = "utf-8" : "utf8=%26%2310003%3B" === o3[r3] && (u3 = "iso-8859-1"), i3 = r3, r3 = o3.length);
    for (r3 = 0; r3 < o3.length; ++r3)
      if (r3 !== i3) {
        var a3, f3, c2 = o3[r3], l2 = c2.indexOf("]="), p2 = -1 === l2 ? c2.indexOf("=") : l2 + 1;
        -1 === p2 ? (a3 = e3.decoder(c2, w.decoder, u3, "key"), f3 = e3.strictNullHandling ? null : "") : (a3 = e3.decoder(c2.slice(0, p2), w.decoder, u3, "key"), f3 = s.maybeMap($(c2.slice(p2 + 1), e3), function(t6) {
          return e3.decoder(t6, w.decoder, u3, "value");
        })), f3 && e3.interpretNumericEntities && "iso-8859-1" === u3 && (f3 = O(f3)), c2.indexOf("[]=") > -1 && (f3 = j(f3) ? [f3] : f3), n3[a3] = g.call(n3, a3) ? s.combine(n3[a3], f3) : f3;
      }
    return n3;
  }(t4, r2) : t4, o2 = r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i2 = Object.keys(n2), u2 = 0; u2 < i2.length; ++u2) {
    var a2 = i2[u2], f2 = E(a2, n2[a2], r2, "string" == typeof t4);
    o2 = s.merge(o2, f2, r2);
  }
  return s.compact(o2);
};
class R {
  constructor(t4, e2, r2) {
    var n2, o2;
    this.name = t4, this.definition = e2, this.bindings = null != (n2 = e2.bindings) ? n2 : {}, this.wheres = null != (o2 = e2.wheres) ? o2 : {}, this.config = r2;
  }
  get template() {
    return `${this.config.absolute ? this.definition.domain ? `${this.config.url.match(/^\w+:\/\//)[0]}${this.definition.domain}${this.config.port ? `:${this.config.port}` : ""}` : this.config.url : ""}/${this.definition.uri}`.replace(/\/+$/, "");
  }
  get parameterSegments() {
    var t4, e2;
    return null != (t4 = null == (e2 = this.template.match(/{[^}?]+\??}/g)) ? void 0 : e2.map((t5) => ({ name: t5.replace(/{|\??}/g, ""), required: !/\?}$/.test(t5) }))) ? t4 : [];
  }
  matchesUrl(t4) {
    if (!this.definition.methods.includes("GET"))
      return false;
    const e2 = this.template.replace(/(\/?){([^}?]*)(\??)}/g, (t5, e3, r3, n3) => {
      var o3;
      const i2 = `(?<${r3}>${(null == (o3 = this.wheres[r3]) ? void 0 : o3.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+"})`;
      return n3 ? `(${e3}${i2})?` : `${e3}${i2}`;
    }).replace(/^\w+:\/\//, ""), [r2, n2] = t4.replace(/^\w+:\/\//, "").split("?"), o2 = new RegExp(`^${e2}/?$`).exec(r2);
    return !!o2 && { params: o2.groups, query: S(n2) };
  }
  compile(t4) {
    const e2 = this.parameterSegments;
    return e2.length ? this.template.replace(/{([^}?]+)(\??)}/g, (r2, n2, o2) => {
      var i2, u2, a2;
      if (!o2 && [null, void 0].includes(t4[n2]))
        throw new Error(`Ziggy error: '${n2}' parameter is required for route '${this.name}'.`);
      if (e2[e2.length - 1].name === n2 && ".*" === this.wheres[n2])
        return encodeURIComponent(null != (a2 = t4[n2]) ? a2 : "").replace(/%2F/g, "/");
      if (this.wheres[n2] && !new RegExp(`^${o2 ? `(${this.wheres[n2]})?` : this.wheres[n2]}$`).test(null != (i2 = t4[n2]) ? i2 : ""))
        throw new Error(`Ziggy error: '${n2}' parameter does not match required format '${this.wheres[n2]}' for route '${this.name}'.`);
      return encodeURIComponent(null != (u2 = t4[n2]) ? u2 : "");
    }).replace(/\/+$/, "") : this.template;
  }
}
class x extends String {
  constructor(e2, r2, n2 = true, o2) {
    if (super(), this.t = null != o2 ? o2 : "undefined" != typeof Ziggy ? Ziggy : null == globalThis ? void 0 : globalThis.Ziggy, this.t = t({}, this.t, { absolute: n2 }), e2) {
      if (!this.t.routes[e2])
        throw new Error(`Ziggy error: route '${e2}' is not in the route list.`);
      this.i = new R(e2, this.t.routes[e2], this.t), this.u = this.l(r2);
    }
  }
  toString() {
    const e2 = Object.keys(this.u).filter((t4) => !this.i.parameterSegments.some(({ name: e3 }) => e3 === t4)).filter((t4) => "_query" !== t4).reduce((e3, r2) => t({}, e3, { [r2]: this.u[r2] }), {});
    return this.i.compile(this.u) + function(t4, e3) {
      var r2, o2 = t4, i2 = function(t5) {
        if (!t5)
          return v;
        if (null != t5.encoder && "function" != typeof t5.encoder)
          throw new TypeError("Encoder has to be a function.");
        var e4 = t5.charset || v.charset;
        if (void 0 !== t5.charset && "utf-8" !== t5.charset && "iso-8859-1" !== t5.charset)
          throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var r3 = n.default;
        if (void 0 !== t5.format) {
          if (!f.call(n.formatters, t5.format))
            throw new TypeError("Unknown format option provided.");
          r3 = t5.format;
        }
        var o3 = n.formatters[r3], i3 = v.filter;
        return ("function" == typeof t5.filter || l(t5.filter)) && (i3 = t5.filter), { addQueryPrefix: "boolean" == typeof t5.addQueryPrefix ? t5.addQueryPrefix : v.addQueryPrefix, allowDots: void 0 === t5.allowDots ? v.allowDots : !!t5.allowDots, charset: e4, charsetSentinel: "boolean" == typeof t5.charsetSentinel ? t5.charsetSentinel : v.charsetSentinel, delimiter: void 0 === t5.delimiter ? v.delimiter : t5.delimiter, encode: "boolean" == typeof t5.encode ? t5.encode : v.encode, encoder: "function" == typeof t5.encoder ? t5.encoder : v.encoder, encodeValuesOnly: "boolean" == typeof t5.encodeValuesOnly ? t5.encodeValuesOnly : v.encodeValuesOnly, filter: i3, format: r3, formatter: o3, serializeDate: "function" == typeof t5.serializeDate ? t5.serializeDate : v.serializeDate, skipNulls: "boolean" == typeof t5.skipNulls ? t5.skipNulls : v.skipNulls, sort: "function" == typeof t5.sort ? t5.sort : null, strictNullHandling: "boolean" == typeof t5.strictNullHandling ? t5.strictNullHandling : v.strictNullHandling };
      }(e3);
      "function" == typeof i2.filter ? o2 = (0, i2.filter)("", o2) : l(i2.filter) && (r2 = i2.filter);
      var u2 = [];
      if ("object" != typeof o2 || null === o2)
        return "";
      var a2 = c[e3 && e3.arrayFormat in c ? e3.arrayFormat : e3 && "indices" in e3 ? e3.indices ? "indices" : "repeat" : "indices"];
      r2 || (r2 = Object.keys(o2)), i2.sort && r2.sort(i2.sort);
      for (var s2 = 0; s2 < r2.length; ++s2) {
        var p2 = r2[s2];
        i2.skipNulls && null === o2[p2] || y(u2, m(o2[p2], p2, a2, i2.strictNullHandling, i2.skipNulls, i2.encode ? i2.encoder : null, i2.filter, i2.sort, i2.allowDots, i2.serializeDate, i2.format, i2.formatter, i2.encodeValuesOnly, i2.charset));
      }
      var h2 = u2.join(i2.delimiter), d2 = true === i2.addQueryPrefix ? "?" : "";
      return i2.charsetSentinel && (d2 += "iso-8859-1" === i2.charset ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), h2.length > 0 ? d2 + h2 : "";
    }(t({}, e2, this.u._query), { addQueryPrefix: true, arrayFormat: "indices", encodeValuesOnly: true, skipNulls: true, encoder: (t4, e3) => "boolean" == typeof t4 ? Number(t4) : e3(t4) });
  }
  p(e2) {
    e2 ? this.t.absolute && e2.startsWith("/") && (e2 = this.h().host + e2) : e2 = this.v();
    let r2 = {};
    const [n2, o2] = Object.entries(this.t.routes).find(([t4, n3]) => r2 = new R(t4, n3, this.t).matchesUrl(e2)) || [void 0, void 0];
    return t({ name: n2 }, r2, { route: o2 });
  }
  v() {
    const { host: t4, pathname: e2, search: r2 } = this.h();
    return (this.t.absolute ? t4 + e2 : e2.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/")) + r2;
  }
  current(e2, r2) {
    const { name: n2, params: o2, query: i2, route: u2 } = this.p();
    if (!e2)
      return n2;
    const a2 = new RegExp(`^${e2.replace(/\./g, "\\.").replace(/\*/g, ".*")}$`).test(n2);
    if ([null, void 0].includes(r2) || !a2)
      return a2;
    const s2 = new R(n2, u2, this.t);
    r2 = this.l(r2, s2);
    const f2 = t({}, o2, i2);
    return !(!Object.values(r2).every((t4) => !t4) || Object.values(f2).some((t4) => void 0 !== t4)) || Object.entries(r2).every(([t4, e3]) => f2[t4] == e3);
  }
  h() {
    var t4, e2, r2, n2, o2, i2;
    const { host: u2 = "", pathname: a2 = "", search: s2 = "" } = "undefined" != typeof window ? window.location : {};
    return { host: null != (t4 = null == (e2 = this.t.location) ? void 0 : e2.host) ? t4 : u2, pathname: null != (r2 = null == (n2 = this.t.location) ? void 0 : n2.pathname) ? r2 : a2, search: null != (o2 = null == (i2 = this.t.location) ? void 0 : i2.search) ? o2 : s2 };
  }
  get params() {
    const { params: e2, query: r2 } = this.p();
    return t({}, e2, r2);
  }
  has(t4) {
    return Object.keys(this.t.routes).includes(t4);
  }
  l(e2 = {}, r2 = this.i) {
    null != e2 || (e2 = {}), e2 = ["string", "number"].includes(typeof e2) ? [e2] : e2;
    const n2 = r2.parameterSegments.filter(({ name: t4 }) => !this.t.defaults[t4]);
    return Array.isArray(e2) ? e2 = e2.reduce((e3, r3, o2) => t({}, e3, n2[o2] ? { [n2[o2].name]: r3 } : "object" == typeof r3 ? r3 : { [r3]: "" }), {}) : 1 !== n2.length || e2[n2[0].name] || !e2.hasOwnProperty(Object.values(r2.bindings)[0]) && !e2.hasOwnProperty("id") || (e2 = { [n2[0].name]: e2 }), t({}, this.m(r2), this.g(e2, r2));
  }
  m(e2) {
    return e2.parameterSegments.filter(({ name: t4 }) => this.t.defaults[t4]).reduce((e3, { name: r2 }, n2) => t({}, e3, { [r2]: this.t.defaults[r2] }), {});
  }
  g(e2, { bindings: r2, parameterSegments: n2 }) {
    return Object.entries(e2).reduce((e3, [o2, i2]) => {
      if (!i2 || "object" != typeof i2 || Array.isArray(i2) || !n2.some(({ name: t4 }) => t4 === o2))
        return t({}, e3, { [o2]: i2 });
      if (!i2.hasOwnProperty(r2[o2])) {
        if (!i2.hasOwnProperty("id"))
          throw new Error(`Ziggy error: object passed as '${o2}' parameter is missing route model binding key '${r2[o2]}'.`);
        r2[o2] = "id";
      }
      return t({}, e3, { [o2]: i2[r2[o2]] });
    }, {});
  }
  valueOf() {
    return this.toString();
  }
  check(t4) {
    return this.has(t4);
  }
}
const C = { install: (t4, e2) => {
  const r2 = (t5, r3, n2, o2 = e2) => function(t6, e3, r4, n3) {
    const o3 = new x(t6, e3, r4, n3);
    return t6 ? o3.toString() : o3;
  }(t5, r3, n2, o2);
  t4.mixin({ methods: { route: r2 } }), parseInt(t4.version) > 2 && t4.provide("route", r2);
} };
const _imports_0 = "/build/assets/lsn-logo-72964939.png";
const _sfc_main = {
  __name: "MainLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    const flashSuccess = computed(() => page.props.value.flash.success);
    const user = computed(() => page.props.value.user);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<!--[--><header class="border-b border-gray-200 w-full"><div class="container mx-auto"><nav class="p-4 flex items-center justify-between"><div class="text-xl text-[#81b29a] font-bold text-center">`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/",
        class: "tracking-tight"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-10 h-10"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} class="object-cover"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "w-10 h-10" }, [
                createVNode("img", {
                  src: _imports_0,
                  class: "object-cover"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(user)) {
        _push(`<div class="flex gap-4 items-center text-gray-500">`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("account.organisation.index")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: "fa-solid fa-house" }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_font_awesome_icon, { icon: "fa-solid fa-house" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="text-sm">Hello, ${ssrInterpolate(unref(user).name)}!</div>`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("organisation.create"),
          class: "bg-[#81b29a] hover:bg-[#9BCCB4] text-white font-medium p-2 rounded-md"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`+ Submit an organisation`);
            } else {
              return [
                createTextVNode("+ Submit an organisation")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div>`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("logout"),
          method: "delete",
          as: "button"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Logout`);
            } else {
              return [
                createTextVNode("Logout")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<div class="flex items-center gap-2">`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("user-account.create")
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
        _push(` | `);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("login")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Sign in`);
            } else {
              return [
                createTextVNode("Sign in")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</nav></div></header><main class="container mx-auto p-4 w-full">`);
      if (unref(flashSuccess)) {
        _push(`<div class="mb-4 border rounded-md shadow-sm border-green-200 bg-green-50 p-2">${ssrInterpolate(unref(flashSuccess))}</div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`Default`);
      }, _push, _parent);
      _push(`</main><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/MainLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Account/Index.vue": __vite_glob_0_0, "./Pages/Auth/Login.vue": __vite_glob_0_1, "./Pages/Index/Components/Filters.vue": __vite_glob_0_2, "./Pages/Index/Index.vue": __vite_glob_0_3, "./Pages/Index/Show.vue": __vite_glob_0_4, "./Pages/Organisation/Create.vue": __vite_glob_0_5, "./Pages/Organisation/Edit.vue": __vite_glob_0_6, "./Pages/Organisation/Index.vue": __vite_glob_0_7, "./Pages/Organisation/Show.vue": __vite_glob_0_8, "./Pages/UserAccount/Create.vue": __vite_glob_0_9 });
      const page2 = pages[`./Pages/${name}.vue`]();
      page2.default.layout = page2.default.layout || _sfc_main;
      return page2;
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h$1(App, props)
      }).use(plugin).use(C);
    }
  })
);
