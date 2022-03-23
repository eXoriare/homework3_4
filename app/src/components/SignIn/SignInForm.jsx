const SignInForm = () => (
  <form method="POST" action="/auth/signin" className="d-flex justify-content-center my-2 mx-5">
    <input name="user_email" placeholder="email" type="email" />
    <input name="user_password" placeholder="password" type="password" />
    <button type="submit" className="btn btn-success">Sign in</button>
  </form>
)

export default SignInForm
