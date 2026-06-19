import { defineField, defineType } from "sanity";

export const guestOfHonour = defineType({
  name: "guestOfHonour",
  title: "Guests of Honour",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title / Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "bgImage",
      title: "Thumbnail / Background Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "videoUrl",
      title: "Video Link (YouTube)",
      type: "string",
      description: "Link of YouTube video if applicable",
    }),
    defineField({
      name: "videoFile",
      title: "Or Upload Video File",
      type: "file",
      options: {
        accept: "video/*",
      },
    }),
  ],
});
