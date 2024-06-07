import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center max-lg:flex-col" id="contact-us">
      <h3 className="text-4xl leading-[64px] lg:max-w-md font-palanquin font-bold">
        Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
      </h3>

      <div className="flex w-full lg:max-w-[40%] sm:border p-3 rounded-full border-slate-gray gap-5 justify-end sm:mt-10 max-sm:flex-col">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="">
          <Button label="Sign Up" fullWidth={true}></Button>
        </div>
      </div>
    </section>
  )
}

export default Subscribe