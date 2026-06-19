import { defineField, defineType } from "sanity";

export const nightOfGlitz = defineType({
  name: "nightOfGlitz",
  title: "The Night of Glitz (Witness Ceremony)",
  type: "document",
  fields: [
    defineField({
      name: "videoUrl",
      title: "Video Link (YouTube / Vimeo)",
      type: "string",
      description: "Paste a YouTube or Vimeo video link (e.g. https://www.youtube.com/watch?v=dQw4w9WgXcQ)",
    }),
    defineField({
      name: "videoFile",
      title: "Or Upload Video File",
      type: "file",
      description: "Directly upload a video file (.mp4, .webm)",
      options: {
        accept: "video/*",
      },
    }),
    defineField({
      name: "thumbnail",
      title: "Video Thumbnail",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
