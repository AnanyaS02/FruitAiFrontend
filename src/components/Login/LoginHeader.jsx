function LoginHeader() {
    return (
      <>
        <h1 className="text-4xl text-center text-black">Login</h1>
        <p className="mt-2 text-2xl text-center text-sky-700">
          <span className="text-stone-500">
            By signing in you are agreeing our{' '}
          </span>
          <span className="text-sky-600">Term and privacy policy</span>
        </p>
        <div className="flex gap-5 justify-between mt-12 max-w-full text-2xl whitespace-nowrap w-[135px]">
          <button className="text-sky-700">Login</button>
          <button className="text-neutral-400">Register</button>
        </div>
      </>
    );
  }
  
  export default LoginHeader;