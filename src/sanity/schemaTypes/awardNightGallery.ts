import { defineField, defineType } from "sanity";

export const awardNightGallery = defineType({
  name: "awardNightGallery",
  title: "Award Night 2026 Gallery",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Alt Text / Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Gallery Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
