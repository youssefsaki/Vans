
const Subscribe = () => {
  return (
    <section id='contact-us' className="flex">
      <div className="flex items-center justify-between flex-1 w-full gap-10 max-container max-lg:flex-col">
        <h3 className="text-4xl lg:max-w-lg leading-[68px] font-bold font-palanquin">
          Sign Up for <span className="text-coral-orange">Updates </span> & Newsletter
          </h3>
        <div
          className="flex items-center justify-between gap-7 sm:border 
          sm:border-slate-gray rounded-full w-full lg:max-w-[40%] p-3 max-sm:flex-col "
        >
          <input type="text" placeholder="Subscribe@vans.com"
            className="input"
          />
          <div className="flex items-center max-sm:w-full max-sm:justify-center">
            {/* <Button label='Sign up' className='max-sm:w-full' /> */}
            <button
              className="flex items-center justify-center w-full gap-2 py-4 text-lg leading-none text-white border-0 rounded-full outline-none px-7 font-montserrat bg-coral-orange border-coral-red"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </section>
  ) 
}

export default Subscribe
