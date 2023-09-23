import ReactToPrint from "react-to-print";

import { Header, RoundButton } from "@/components";
import PrinterIcon from "@/assets/icons/printer.svg";

export function Preview() {
  const handlePrint = () => {
    const printCV = document.getElementById("cv");
    if (printCV) {
      const cvPrint: any = window.open();
      cvPrint.document.write(printCV.innerHTML);
      cvPrint.document.close();
      cvPrint.print();
    }
  };

  return (
    <div className="bg-[#E5E5E5] flex flex-col">
      <Header />
      <div className="flex justify-center self-center items-center mt-[40px] relative">
        <div
          id="cv"
          className="bg-[#F9F9F9] rounded-[5px] w-[923px] pt-[42px] pl-[38px] mb-[38px]"
        >
          <h1 className="flex text-[32px] font-bold basis-full ">
            Nome completo do usuário
          </h1>
          <div className="flex flex-col text-[16px] font-normal">
            <span className="text-[20px] font-medium mb-[12px]">CONTATO</span>
            <span>Celular: (xx) x xxxx xxxx</span>
            <span>Email: name@mail.com</span>
            <span>Linkedin: www.linkedin.com/in/perfil</span>
            <span>Github: www.github.com/perfil</span>
          </div>
          <div className="flex flex-col ">
            <span className="text-[20px] font-medium mt-[12px] mb-[7px]">
              RESUMO PROFISSIONAL
            </span>
            <span className="w-[789px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              id velit sed lorem interdum bibendum ut quis libero. Proin
              scelerisque nisi ut quam egestas venenatis. Aliquam erat volutpat.
              Etiam scelerisque felis nec augue malesuada, quis cursus tellus
              rutrum. Nulla vitae elementum lectus. Class aptent taciti sociosqu
              ad litora torquent per conubia nostra, per inceptos himenaeos.{" "}
            </span>
          </div>
          <div className="flex flex-col ">
            <span className="text-[20px] font-medium mt-[16px] mb-[12px]">
              EXPERIÊNCIA PROFISSIONAL
            </span>
            <span>
              Mês ano - Mês ano <span className="font-bold">Título</span>,
              Cidade, Estado.{" "}
            </span>
            <span className="w-[819px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              id velit sed lorem interdum bibendum ut quis libero. Proin
              scelerisque nisi ut quam egestas venenatis. Aliquam erat volutpat.{" "}
            </span>
            <span className="mt-[10px]">
              Mês ano - Mês ano <span className="font-bold">Título</span>,
              Cidade, Estado.{" "}
            </span>
            <span className="w-[819px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              id velit sed lorem interdum bibendum ut quis libero. Proin
              scelerisque nisi ut quam egestas venenatis. Aliquam erat volutpat.{" "}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[20px] font-medium mt-[16px] mb-[12px]">
              COMPETÊNCIAS
            </span>
            <div className="flex flex-row">
              <div className="flex flex-col mr-[473px]">
                <span>Tecnologia A</span>
                <span>Tecnologia B</span>
                <span>Tecnologia C</span>
                <span>Tecnologia D</span>
              </div>
              <div className="flex flex-col">
                <span>Ferramenta A</span>
                <span>Ferramenta B</span>
                <span>Ferramenta C</span>
                <span>Ferramenta D</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col mb-[38px]">
            <span className="text-[20px] font-medium mt-[16px] mb-[12px]">
              CERTIFICAÇÕES
            </span>
            <span>
              <span className="font-bold">Título,</span> Ano
            </span>
            <span>
              <span className="font-bold">Título,</span> Ano
            </span>
            <span>
              <span className="font-bold">Título,</span> Ano
            </span>
          </div>
        </div>
        <div className="flex justify-end mr-[13px] mb-[22px] absolute bottom-10 right-0">
          <ReactToPrint
            trigger={() => (
              <RoundButton
                onClick={handlePrint}
                className="w-[50px] h-[50px] flex justify-center items-center"
              >
                <img src={PrinterIcon} />
              </RoundButton>
            )}
            content={() => document.getElementById("cv")}
            pageStyle="@page {
              size: A4;
              margin: 10px;
            }"
          />
        </div>
      </div>
    </div>
  );
}
