

export const Page404NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
    <h1 className="text-5xl font-bold text-gray-700 mb-4">404</h1>
    <p className="text-xl text-gray-500 mb-6">Page not found</p>
    <a href="/auth/login" className="text-blue-600 underline">
      Go to Login
    </a>
  </div>
  )
}
