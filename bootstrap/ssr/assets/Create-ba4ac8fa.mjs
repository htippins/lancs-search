import { unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { useForm } from "@inertiajs/inertia-vue3";
const _sfc_main = {
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Organisation/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
