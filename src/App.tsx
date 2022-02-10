import 'styles/fonts.css'
import GlobalStyles from 'styles/global'

import AvatarUpload from './components/AvatarUpload'

const App = () => (
  <>
    <GlobalStyles />
    <AvatarUpload onSaveAvatar={console.log} />
  </>
)

export default App
