import { Header, RoundButton } from "@/components";
import { Input } from "@/components/Input/Input3";
import { validName, validPassword, validarEmail } from "@/utils";
import { useState } from "react";

export function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validInfos = (e:React.FormEvent) =>{
    e.preventDefault()
    validarEmail(email)
    validName(name)
    validPassword(password,confirmPassword)
  }

  return (
    <div>
      <Header className="shadow-none bg-white"/>
      <div className="h-[290px] w-[100vw] top-[0px] sm:absolute
        sm:h-[100vh] bg-[#FB4E4E] sm:w-[35%] min-w-[280px] relative right-0 flex text-white justify-center sm:items-center">
        <div className="flex items-center flex-col text-center h-[60%]">
          <h1 className="font-bold decoration-white text-[40px] w-[250px] mb-[20px] sm:mt-[0] mt-[15px]">Olá, seja bem-vindo(a)</h1>
          <span className="mb-[30px] font-bold text-[20x] w-[250px]">Crie sua conta para assim poder criar seus currículos</span>
          <p className="font-bold text-[32px] cursor-pointer">Entrar</p>
        </div>
      </div>

      <div className="w-[100%] sm:w-[65%] flex justify-center">
        <form className="flex items-center flex-col" onSubmit={validInfos}>
          <h1 className="text-[30px] font-medium text-center mt-[50px] mb-[30px]">Crie sua conta</h1>

          <Input label="Nome completo" value={name} onChange={e=>setName(e.target.value)} pattern="[A-Za-z\s]+" required/>
          <Input label="E-mail" value={email} onChange={e=>setEmail(e.target.value)} pattern="[A-Za-z0-9._]+@[A-Za-z0-9]+\.[a-z]+" required/>
          <Input label="Senha" value={password} onChange={e=>setPassword(e.target.value)} type="password" required/>
          <Input label="Confirme sua senha" value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)} type="password" required/>

          <RoundButton className="mt-[30px] mb-[30px]">Cadastrar</RoundButton>
        </form>
      </div>
      
    </div>
  )
}
