import { Header, IconButton, Input, Button } from "@/components";
import { useState, useEffect } from "react";
import fileText from "@/assets/icons/fileText.svg";
import userImage from "@/assets/images/user.png";
import upload from "@/assets/icons/upload.svg";
import save from "@/assets/icons/save.svg";
import refresh from "@/assets/icons/refreshCw.svg";
import trash from "@/assets/icons/trash.svg";
import apiCVFacil, { port } from "@/services/apiCVFacil";
import axios from "axios";

interface UserProps {
  avatar: string;
  email: string;
  id: string;
  name: string;
  password: string;
}

export function Profile() {
  const [useData, setUserData] = useState<UserProps>({
    avatar: "",
    email: "",
    id: "",
    name: "",
    password: "",
  });
  const [name, setName] = useState<string>(useData.name);
  const [email, setEmail] = useState<string>(useData.email);
  const [password, setPassword] = useState<string>(useData.password);
  const [confirmPassword, setconfirmPassword] = useState<string>(useData.password);

  const onNameChange = (event: any) => {
    setName(event.target.value);
  };
  const onEmailChange = (event: any) => {
    setEmail(event.target.value);
  };
  const onPasswordChange = (event: any) => {
    setPassword(event.target.value);
  };
  const onConfirmPasswordChange = (event: any) => {
    setconfirmPassword(event.target.value);
  };
  const onSaveChanges = async () => {
    const data = {
      avatar: "12",
      name: name,
      email: email,
      password: confirmPassword === password ? password : null,
    };
    const url = port + "/users/342fd874-42e8-454e-9edf-39db13ede764";
    try {
      await axios.put(url, data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchData = async () => {
    let result;
    try {
      result = await apiCVFacil.get(`/users/342fd874-42e8-454e-9edf-39db13ede764`);
    } catch (e) {
      console.log(e);
    } finally {
      setUserData(result?.data);
      setName(result?.data.name);
      setEmail(result?.data.email);
      setPassword(result?.data.password);
      setconfirmPassword(result?.data.password);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />

      <main className="max-w-[50.25rem] flex flex-col m-auto">
        <section className="mx-[1rem] mt-[6rem] mb-[2.12rem]">
          <h1 className="text-[1.5rem] not-italic font-normal">Currículos</h1>
          <div className="h-[8.5625rem] rounded-[0.625rem] bg-[#F0F0F0] shadow-5540 pt-[1rem] pb-[0.94rem] px-[2.19rem]">
            <h2 className="text-center text-[1rem] not-italic font-normal opacity-70 mb-2">
              Currículos criados.
            </h2>
            <div className="flex gap-5">
              <IconButton icon={fileText} description="1" />
              <IconButton icon={fileText} description="2" />
              <IconButton icon={fileText} description="3" />
            </div>
          </div>
        </section>

        <section className="mx-[1rem] mb-[2.12rem]">
          <h1 className="text-[1.5rem] not-italic font-normal">Perfil</h1>
          <div className="flex flex-col items-center py-[1rem] rounded-[0.625rem] bg-[#F0F0F0] shadow-5540">
            <h2 className="text-center text-[1rem] not-italic font-normal mb-[0.87rem] opacity-70">
              Informaçães do usuário.
            </h2>
            <div className="flex flex-row items-center gap-[1.25rem] mb-[0.5rem]">
              <img
                src={userImage}
                alt="imagem do usuário"
                className="rounded-[30px] w-[3.75rem] h-[3.75rem]"
              />
              <Button className="w-[8.75rem] h-[2.1875rem] bg-[#FB4E4E]" icon={upload}>
                Trocar avatar
              </Button>
            </div>
            <div className="flex flex-col max-w-[21.875rem] gap-[0.5rem] mb-[1.75rem]">
              <Input label="Nome completo" value={name} onChange={onNameChange} />
              <Input label="E-mail" value={email} onChange={onEmailChange} />
              <Input label="Senha" value={password} onChange={onPasswordChange} />
              <Input
                label="Confirme sua senha"
                value={confirmPassword}
                onChange={onConfirmPasswordChange}
              />
            </div>
            <Button
              icon={save}
              className="w-[5.625rem] h-[2.1875rem] bg-[#35DC64]"
              onClick={onSaveChanges}
            >
              Salvar
            </Button>
          </div>
        </section>

        <section className="mx-[1rem] mb-[4rem]">
          <h1 className="text-[1.5rem] not-italic font-normal">Área de Perigo</h1>
          <div className="rounded-[0.625rem] bg-[#F0F0F0] shadow-5540 pt-[1rem] pb-[1.44rem]">
            <h2 className="text-center text-[1rem] not-italic font-normal opacity-70 mb-[1.5rem]">
              Cuidado, as ações aqui não podem ser desfeitas.
            </h2>
            <div className="flex flex-col items-center gap-[1.19rem]">
              <Button className="bg-[#FF2C2C] w-[8.75rem] h-[2.1875rem]" icon={refresh}>
                Apagar CVs
              </Button>
              <Button className="bg-[#FF2C2C] w-[8.75rem] h-[2.1875rem]" icon={trash}>
                Deletar conta
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
