import LoginComponent from "../components/Common/LoginComponent"


const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8 px-6 mb-24">
        <div className="w-full rounded-lg shadow-xl sm:max-w-md p-6">
            <h2 className="text-center text-2xl py-4 leading-tight tracking-tight text-gray-600">
                Login / Signup
            </h2>
        <LoginComponent/>
        </div>
    </div>
  )
}

export default LoginPage