/** 
 * @copyright 2025 siddharthramanathan
 * @license Apache-2.0
 */ 

import { ButtonPrimary, ButtonOutline } from "./Button"

const Hero = () => {
  return (
    <section 
        id="home"
        className="pt-28 lg:pt-36"
    >
        <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
            <div>
                <div className="flex items-center gap-3">
                    <figure className="img-box w-12 h-12 rounded-lg">
                        <img src="/images/Potrait.jpeg" width={40} height={40} alt="Siddharth Ramanathan potrait" className="img-cover"/>
                    </figure>

                    <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                        <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                            <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                        </span>

                        Available for work
                    </div>
                </div>

                <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                    SIDDHARTH RAMANATHAN
                </h2>

                <div className="flex items-center gap-3">
                    <ButtonPrimary 
                        href="https://drive.google.com/file/d/147kmvBuLvfkRf_JQFD2rc2E5No-t0qI-/view?usp=sharing"
                        label="Download CV"
                        icon="download"
                    />
                </div>

            </div>

            <div className="hidden lg:block">
                <figure className="w-full max-w-[480px] h-full max-h-[600px] ml-auto bg-gradient-to-t from-orange-400 via-25% via-orange-400/40 to-65% rounded-[60px] overflow-hidden">
                    <img src="/images/bg.png" width={447} height={780} alt="Siddharth Ramanathan" className="w-full" />
                </figure>
            </div>

        </div>
    </section>
  )
}

export default Hero