import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Main from './components/Main/Main'
import Header from './components/Header/Header'
import Info from './components/Info/Info'
import Posts from './components/Posts/Posts'
import PageNotFound from './components/404/404'
import PostsDetail from './components/Posts/PostsDetail/PostsDetail'
import SignUpForm from './components/SignUp/SignUpForm'

const App = () => (

  <BrowserRouter>
    <Header />
    <div className="container py-5">
      <Routes>
        <Route path="/SignUp" element={<SignUpForm />} />
        <Route path="/info" element={<Info />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:postsId" element={<PostsDetail />} />
        <Route path="/" element={<Main />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  </BrowserRouter>

)

export default App
