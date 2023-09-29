import { Header } from "@/components";
import HomeImg from "@/assets/images/home.jpg"

export function Home() {
  return (
    <div>
      <Header className="shadow-none bg-white"/>
      <div className="flex justify-evenly mt-[60px]">
        <div className="w-[400px] mt-[40px]">
          <h1 className="font-bold text-[32px] leading-[56px] lg:text-[48px]">Precisa de ajuda com o currículo?</h1>
          <h2 className="font-normal text-[24px] max-w-[320px] mt-[30px]">Vem com a gente, que vamos te ajudar!</h2>
          <button className="font-normal text-[22px] h-[45px] w-[140px] text-white bg-[#FB4E4E] rounded-3xl mt-[40px]">Começar</button>
        </div>
        <div className="hidden md:block">
          <img src={HomeImg} alt="homeImg" className={`h-[450px] min-w-[400px] rounded-tr-[260px] rounded-tl-[260px] rounded-br-[260px] rounded-bl-[10px]`}/>
        </div>
      </div>
    </div>
  )
}
