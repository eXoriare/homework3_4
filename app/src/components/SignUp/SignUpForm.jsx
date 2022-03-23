import { useEffect, useRef } from 'react'

const SignUpForm = ({
  onSubmit, userEmail = '', userName = '', userPassword = '',
}) => {
  const formRef = useRef(null)

  useEffect(() => {
    formRef.current.elements.userEmail.value = userEmail
    formRef.current.elements.userName.value = userName
    formRef.current.elements.userPassword.value = userPassword
  }, [])

  return (
    <>
      <form ref={formRef} onSubmit={onSubmit} className="d-flex justify-content-center my-2 mx-5">
        <input name="userEmail" placeholder="email" type="email" className="form-control" />
        <input name="userName" placeholder="name" type="text" className="form-control" />
        <input name="userPassword" placeholder="password" type="password" className="form-control" />
        <button type="submit" className="btn btn-success">Sign up</button>
      </form>
      <img className="rounded mx-auto d-block" src="https://preview.redd.it/h5a9elccxur61.jpg?width=640&crop=smart&auto=webp&s=8996d2d364cb48af12b8597429768ccac3ee1981" alt="" />
    </>
  )
}

export default SignUpForm
