import React from "react";

import { Header, Input, RoundButton } from "@/components";
import {
  CompetenciesForm,
  ProfExpForm,
  CertificationsForm,
  SectionTitle,
  Line,
  ProfExpView,
} from "./components";
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
      <form className="bg-slate-50 my-11 md:mx-10 lg:mx-48 p-11 lg:px-40 shadow-lg rounded flex flex-col gap-y-3.5">
        <Input label="Nome completo" value={name} onChange={setName} required />
        <Input label="Título do cargo" value={job} onChange={setJob} required />
        <div className="flex gap-5">
          <Input
            className="w-full"
            label="Email"
            type="email"
            value={email}
            onChange={setEmail}
            required
          />
          <Input
            className="w-full"
            label="Celular"
            value={phone}
            onChange={setPhone}
            required
          />
        </div>
        <div className="flex gap-5">
          <Input
            className="w-full"
            label="Linkedin"
            value={linkedin}
            onChange={setLinkedin}
            required
          />
          <Input
            className="w-full"
            label="Github"
            value={github}
            onChange={setGithub}
            required
          />
        </div>
        <Input
          label="Resumo Profissional"
          rows={5}
          value={resume}
          onChange={setResume}
          required
        />

        {/* <Line />
        <SectionTitle>Experiências Profissionais</SectionTitle>
        <ProfExpForm />

        <Line />
        <SectionTitle>Competências</SectionTitle>
        <CompetenciesForm />

        <Line />
        <SectionTitle>Certificações</SectionTitle>
        <CertificationsForm />
        <Line /> */}

        <div className="self-center flex gap-5">
          <RoundButton type="submit">Finalizar Currículo</RoundButton>
          <RoundButton type="reset">Limpar</RoundButton>
        </div>
      </form>
    </div>
  );
}
