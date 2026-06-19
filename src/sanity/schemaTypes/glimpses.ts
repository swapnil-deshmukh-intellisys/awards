import { defineField, defineType } from "sanity";

export const glimpses = defineType({
  name: "glimpses",
  title: "Glimpses of Global Awards",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title / Label",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tag",
      title: "Tag (e.g. Highlights, Panel, Keynote)",
      type: "string",
    }),
    defineField({
      name: "mediaType",
      title: "Media Type",
      type: "string",
      options: {
        list: [
          { title: "Image", value: "image" },
          { title: "Video", value: "video" },
        ],
        layout: "radio",
      },
      initialValue: "image",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      hidden: ({ parent }) => parent?.mediaType !== "image",
    }),
    defineField({
      name: "videoUrl",
      title: "Video Link (YouTube)",
      type: "string",
      hidden: ({ parent }) => parent?.mediaType !== "video",
    }),
    defineField({
      name: "videoFile",
      title: "Or Upload Video File",
      type: "file",
      options: {
        accept: "video/*",
      },
      hidden: ({ parent }) => parent?.mediaType !== "video",
    }),
  ],
});
