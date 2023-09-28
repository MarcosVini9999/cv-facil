import iconCV from "@/assets/icons/file-textWhite.svg";
import { RoundButton } from "@/components";
import iconView from "@/assets/icons/view.png";
import React from "react";

export function Login() {
  const [login, setLogin] = React.useState({
    email: "",
    password: "",
  });
  const [validEmail, setValidEmail] = React.useState(true);
  const [seePassword, setSeePassword] = React.useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "email") {
      const emailRegex = /^\w+@[a-z]+(\.[a-z]+)+$/;
      setValidEmail(false);
      if (emailRegex.test(value)) {
        console.log("valido");
        setValidEmail(true);
      }
    }
    setLogin((prevState) => ({ ...prevState, [name]: value }));
  };

  const SeePasswordButtonClick = () => {
    setSeePassword(!seePassword);
  };

  return (
    <div className="flex flex-row h-screen ">
      <div className="flex flex-col bg-[#FB4E4E] text-[#F7F7F7] w-[422px] items-center h-full gap-y-[20%]">
        <div className="flex gap-x-16 pl-6 pr-6 mt-8 items-center mr-[12px] ml-[12px]">
          <a className="text-[2x'6px] font-bold flex flex-row items-center">
            <img src={iconCV} />
            CV-facil
          </a>
          <a className="text-[14px] font-medium cursor-pointer">Início</a>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-[30px]">
          <span className="text-[30px] font-bold  text-center">
            Que bom que voltou!
          </span>
          <span className=" flex font-bold w-[205px] text-[15px] text-center">
            Entre na sua conta e veja seus currículos, ou crie um novo
          </span>
          <a className="cursor-pointer font-bold text-[22px]" target="_blank">
            Cadastrar
          </a>
        </div>
      </div>
      <div className="bg-[#FFF] w-screen flex flex-col items-center justify-center ml-[12px] mr-[12px]">
        <span className="text-[35px] font-medium mb-[34px]">
          Entre em sua conta
        </span>
        <div className="flex flex-col">
          <label className="text-[20px] font-normal">E-mail</label>
          <input
            className={`${
              !validEmail && login.email != "" ? "border border-red-600" : ""
            } bg-[#E5E5E5] w-[300px] h-[40px] p-2 mb-[15px]`}
            type="email"
            placeholder="seuemail@email.com"
            onChange={handleInputChange}
            value={login.email}
            name="email"
          />
          <label className="text-[20px] font-normal">Senha</label>
          <div className="flex flex-row items-center gap-x-2">
            <input
              className="bg-[#E5E5E5] w-[300px] h-[40px] p-2"
              type={seePassword ? "text" : "password"}
            />
            <img
              className="h-[24px] w-[24px]"
              src={iconView}
              onClick={SeePasswordButtonClick}
            />
          </div>
        </div>
        <span className="mt-[37px] text-[16px] font-normal opacity-80 cursor-pointer text-[#FB4E4ECC] underline italic">
          Esqueceu sua senha?
        </span>
        <RoundButton className="mt-[35px] w-[100px]">Entrar</RoundButton>
      </div>
    </div>
  );
}
