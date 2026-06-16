import { defineField, defineType } from "sanity";

export const category = defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "bgGradient",
      title: "Background Gradient",
      type: "string",
      description: "CSS gradient class name or inline gradient style (e.g. linear-gradient(135deg, #12c2e9, #c471ed, #f64f59))",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      description: "Quick descriptive badge label (e.g. '01', 'Featured')",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
