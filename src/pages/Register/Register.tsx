import { Header, Input, RoundButton } from "@/components";
import { useState } from "react";

export function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validarEmail = () =>{
    const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.com$/;
    return alert(regexEmail.test(email));
  }

  const validName = () =>{
    const regexNome = /^[A-Za-z\s]+$/;
    return alert(regexNome.test(name));
  }

  const validPassword = () =>{
    if(password===confirmPassword){
    }else{
      alert("As senhas digitadas não coincidem")
    }
  }

  return (
    <div>
      <Header className="shadow-none"/>
      <div className="w-[65%] flex justify-center">
        <div className="flex items-center flex-col">
          <h1 className="text-[30px] font-medium text-center mt-[50px] mb-[30px]">Crie sua conta</h1>
          <Input label="Nome completo" value={name} onChange={setName}/>
          <Input label="E-mail" value={email} onChange={setEmail}/>
          <Input label="Senha" value={password} onChange={setPassword} type={"password"}/>
          <Input label="Confirme sua senha" value={confirmPassword} onChange={setConfirmPassword} type="password"/>

          <RoundButton className="mt-[30px]">Cadastrar</RoundButton>
        </div>
      </div>
      <div className="h-[100vh] bg-[#FB4E4E] w-[35%] min-w-[280px] absolute right-0 top-0 flex text-white justify-center items-center">
        <div className="flex items-center flex-col text-center h-[60%]">
          <h1 className="font-bold decoration-white text-[40px] w-[250px] mb-[20px]">Olá, seja bem-vindo(a)</h1>
          <span className="mb-[30px] font-bold text-[20x] w-[250px]">Crie sua conta para assim poder criar seus currículos</span>
          <p className="font-bold text-[32px] cursor-pointer">Entrar</p>
        </div>
      </div>
    </div>
  )
}
