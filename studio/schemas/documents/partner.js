import { GrUserManager as icon } from 'react-icons/gr'

export default {
  name: 'partner',
  type: 'document',
  title: 'Partner',
  icon,
  fields: [
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
}
