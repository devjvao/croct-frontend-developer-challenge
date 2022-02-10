import { Story, Meta } from '@storybook/react/types-6-0'
import { action } from '@storybook/addon-actions'

import AvatarUpload from '.'

export default {
  title: 'Avatar Upload',
  component: AvatarUpload
} as Meta

export const Basic: Story = (args) => (
  <AvatarUpload onSaveAvatar={action} {...args} />
)
