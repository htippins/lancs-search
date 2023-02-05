import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { useForm } from "@inertiajs/inertia-vue3";
const _sfc_main = {
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Index/Components/Filters.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
