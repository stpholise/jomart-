import {ProjectsIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: ProjectsIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Project Name',
      type: 'string',
      validation: (Rule) => Rule.required().error('Project name is requried'),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (Rule) => Rule.required().error('Required'),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}]
    }),
    defineField({
      name: 'completed',
      title: 'Completed',
      type: 'boolean',
      description: 'Has this project been completed or is it still in progress?',
      initialValue: false,
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'In what state was this project executed',
      validation: (Rule) => Rule.required().error('Location is required'),
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
              options: {fieldset: 'metadata'},
            },
          ],
          fieldsets: [
            {
              name: 'metadata',
              title: 'Image Metadata',
              options: {collapsible: true, collapsed: true},
            },
          ],
        },
      ],
      description: 'Add images of the prgress and parts of this project',
      validation: (Rule) => Rule.min(4).error("Add at least 4 images to gallery")
    }),
    defineField({
        name: "video",
        title: 'Video',
        type: 'videoObject',
    }), 
    defineField({
        name: "vision",
        title: "Project Vision",
        type: "text"
    })

  ],
  preview: {
    select: {
      title: 'name',
      media: 'gallery.0.asset',
    },
  },
})
