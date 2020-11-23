import { GrHelp as icon } from 'react-icons/gr'

export default {
  name: 'faq',
  title: 'FAQs',
  type: 'document',
  icon,
  fields: [
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true
    },
    {
      name: 'question',
      title: 'Question',
      type: 'string'
    },
    {
      name: 'answer',
      title: 'Answer',
      type: 'markdown',
      options: {
        minRows: 20
      }
    }
  ]
}
