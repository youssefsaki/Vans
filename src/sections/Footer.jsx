import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <section className="max-container">
      <div className="flex flex-wrap items-start justify-between gap-10 max-lg:flex-col">
        <div className="flex flex-col items-star">
          <img
            src={footerLogo}
            alt='footer-logo'
            width={90}
            height={90}
          />
          <p className="text-base leading-7 font-montserrat text-white-400 mt-7 sm:max-w-sm">
          Get shoes ready for the new term at your 
          nearest Nike store. Find Your perfect Size In Store. Get Rewards.
          </p>
          <div className="flex items-center gap-4 mt-8">
            {socialMedia.map((icon, index) => (
              <div key={index} 
                className="flex items-center justify-center w-12 h-12 bg-white rounded-full"
              >
                <a href="/">
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    width={24}
                    height={24}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap justify-between flex-1 gap-10 sm:gap-20">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="mb-6 text-2xl font-medium leading-normal text-white font-montserrat">{section.title}</h4>
              <ul className="text-white-400 ">
                {section.links.map((link, index) => (
                  <li key={index}
                    className="mt-3 text-base leading-normal cursor-pointer text-white-400 font-montserrat hover:text-slate-gray"
                  >
                    <a>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-24 text-white max-sm:flex-col max-sm:items-center">
          <div className="flex items-center justify-center gap-2 cursor-pointer">
            <img
              src={copyrightSign}
              alt='copy-right-sign'
              width={20}
              height={20}
              className="m-0 rounded-full"
            />
            <p
              className="font-montserrat"
            >Copyright. All rights reserved.</p>
          </div>
          <p className="cursor-pointer font-montserrat">Terms & Conditions</p>
        </div>
    </section>
  )
}

export default Footer
