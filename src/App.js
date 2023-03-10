import React, {lazy, Suspense} from 'react'
// import List from './List'
// import Profile from './Profile'

const List = React.lazy(() => import('./List'))
const Profile = React.lazy(() => import('./Profile'))

const App = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading Profile...</p>}>
        <Profile />
      </Suspense>

      <Suspense fallback={<p>Loading List...</p>}>
        <List />
      </Suspense>
    </div>
  )
}

export default App
