import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import Globo from "./Globo";

const Hero = () => {
    return (
        <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
                    <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
                    <p className={`${styles.paragraph} ml-2`}>
                        <span className="text-white"></span> Arquitetura de software{" "}
                        <span className="text-white">POO</span> em mult-camadas
                    </p>
                </div>

                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                        Desenvolvedor <br className="sm:block hidden" />{" "}
                        <span className="text-gradient">Full Stack</span>{" "}
                    </h1>

                    {/* <div className="ss:flex hidden md:mr-4 mr-0">
                        <GetStarted />
                    </div> */}
                </div>

                {/* <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
                    Forma de pagamento.
                </h1> */}

                <p className={`${styles.paragraph} max-w-[670px] mt-5`}>
                    Olá, sou Renato. Tenho mais de 15 anos de experiência em uma ampla gama de disciplinas de desenvolvimento de software em todas as suas fazes.
                    Não gosto de me definir pelo trabalho que fiz, mas sim pelo trabalho que quero fazer, alimentado por altos níveis de energia e entusiamo sem limites,
                    gosto de desenvolver conhecimentos em diversas áreas como tenho feito na minha carreira. Atualmente trabalho remotamente com uma base de clientes freelancers e estou aberto a novas oportunidades.
                </p>
            </div>


            <div className="w-[32%] h-[40%] relative z-[5] bg-center " >
                <Globo />
            </div>



            {/* <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
            </div> */}

            <div className={`ss:hidden ${styles.flexCenter}`}>
                <GetStarted />
            </div>
        </section>
    );
};

export default Hero;
