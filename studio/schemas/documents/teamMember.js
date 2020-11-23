import { GrUser as icon } from 'react-icons/gr'

export default {
  name: 'teamMember',
  type: 'document',
  title: 'Team Member',
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
      name: 'role',
      title: 'Role',
      type: 'string',
      description: 'Team member role'
    },
    {
      name: 'bio',
      type: 'text',
      title: 'Bio'
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
}
