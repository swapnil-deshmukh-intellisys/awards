import { defineField, defineType } from "sanity";

export const aboutImage = defineType({
  name: "aboutImage",
  title: "About the Awards Image",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
