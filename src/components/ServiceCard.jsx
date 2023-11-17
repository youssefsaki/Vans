
const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className="flex flex-col flex-1 p-[40px] sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px]  px-10 py-16 shadow-3xl">
        <div className="flex items-center justify-center rounded-full w-11 h-11 bg-coral-orange">
            <img
                src={imgURL}
                alt={label}
                height={24}
                width={24}
            />
        </div>
        <h3
            className="mt-5 text-3xl font-bold leading-normal font-palanquin "
        >{label}
        </h3>
        <p className="mt-3 text-lg leading-normal break-words font-montserrat text-slate-gray">
            {subtext}
        </p>
    </div>
  )
}

export default ServiceCard
