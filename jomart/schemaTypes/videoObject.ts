import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'videoObject',
  title: 'video',
  type: 'object',
  fields: [
    defineField({
      name: 'file',
      title: 'Video File',
      type: 'file',
      options: {accept: 'video/*'},
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
     defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})
