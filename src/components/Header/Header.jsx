import React from 'react'

const Header = () => {
  return (
    <div>
<div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
  <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl rounded-2xl sm:rounded-3xl sm:px-24 xl:py-32">
    <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
      Keep Updated
    </h2>
    <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
      Keep pace with SecureCloud advancements! Join our mailing list for
      selective, noteworthy updates.
    </p>
    <form className="mx-auto mt-10 flex max-w-md gap-x-4">
      <label htmlFor="email-address" className="sr-only">
        Email address
      </label>
      <input
        id="email-address"
        name="email"
        type="email"
        autoComplete="email"
        required=""
        className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
        placeholder="Enter your email"
      />
      <button
        type="submit"
        className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        Notify me
      </button>
    </form>
   
  </div>
</div>

    </div>
  )
}

export default Header