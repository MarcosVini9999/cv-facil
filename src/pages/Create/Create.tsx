import React from "react";

import { Header, Input, RoundButton } from "@/components";
import { Competencies, ProfExp } from "./components";
import { Certifications } from "./components/Certifications";
import { CreateContext } from "@/contexts/create";

export function Create() {
  const {
    name,
    setName,
    job,
    setJob,
    email,
    setEmail,
    phone,
    setPhone,
    linkedin,
    setLinkedin,
    github,
    setGithub,
    resume,
    setResume,
  } = React.useContext(CreateContext);

  return (
    <div className="bg-slate-200 pb-1">
      <Header />
      <form className="bg-slate-50 my-11 mx-48 py-12 px-60 shadow-lg rounded flex flex-col gap-y-3.5">
        <Input label="Nome completo" value={name} onChange={setName} />
        <Input label="Título do cargo" value={job} onChange={setJob} />
        <div className="flex gap-5">
          <Input
            className="w-full"
            label="Email"
            type="email"
            value={email}
            onChange={setEmail}
          />
          <Input
            className="w-full"
            label="Celular"
            value={phone}
            onChange={setPhone}
          />
        </div>
        <div className="flex gap-5">
          <Input
            className="w-full"
            label="Linkedin"
            value={linkedin}
            onChange={setLinkedin}
          />
          <Input
            className="w-full"
            label="Github"
            value={github}
            onChange={setGithub}
          />
        </div>

        <Input
          label="Resumo Profissional"
          rows={5}
          value={resume}
          onChange={setResume}
        />

        <ProfExp />

        <Competencies />

        <Certifications />

        <hr className="h-px bg-slate-800 my-1" />

        <div className="self-center flex gap-5">
          <RoundButton type="submit">Finalizar Currículo</RoundButton>
          <RoundButton type="reset">Limpar</RoundButton>
        </div>
      </form>
    </div>
  );
}
