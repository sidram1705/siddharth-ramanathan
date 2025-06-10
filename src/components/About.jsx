/** 
 * @copyright 2025 siddharthramanathan
 * @license Apache-2.0
 */ 

const About = () => {

    const aboutItems = [
        {
            label: 'Projects done',
            number: 15
        },
        {
            label: 'Years of experience',
            number: 4
        }
    ];
  
    return (
    <section 
        id="about"
        className="section"
    >
        <div className="container">

            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[75ch]">
                    Welcome! I&apos;m Siddharth, a graduate student in engineering with a strong focus on embedded systems, firmware development, and AI integration. With hands-on experience designing hardware-software solutions from smart IoT devices to system level inference pipelines. I bring a multidisciplinary approach to solving real-world problems. My work spans across firmware engineering, neural network interpretability, and edge computing, and I have contributed to both academic research and industry projects. I’ve served as a Teaching Assistant, interned in high-performance GPU programming, and aspire to launch a tech venture at the intersection of embedded intelligence and AI.
                </p>

                <div className="flex flex-wrap items-center gap-4 md:gap-7">
                    {
                        aboutItems.map(({ label, number }, key) => (
                            <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                    <span className="text-orange-400 font-semibold md:text-3xl">+</span>
                                </div>

                                <p className="text-sm text-zinc-400">{label}</p>
                            </div>
                        ))
                    }

                    <img src="/images/logo.ico" alt="Logo" width={30} height={30} className="ml-auto md:w-[40px] md:h-[40px]" />
                </div>
            </div>

        </div>
    </section>
  )
}

export default About