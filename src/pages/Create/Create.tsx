import { Header, Input, RoundButton } from "@/components";

export function Create() {
  function mock(value: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="bg-slate-200 pb-1">
      <Header />
      <form className="bg-slate-50 my-11 mx-48 py-12 px-60 shadow-lg rounded flex flex-col gap-y-3.5">
        <Input label="Nome completo" value={""} onChange={mock} />
        <Input label="Título do cargo" value={""} onChange={mock} />
        <div className="flex gap-5">
          <Input
            className="w-full"
            label="Email"
            type="email"
            value={""}
            onChange={mock}
          />
          <Input
            className="w-full"
            label="Celular"
            value={""}
            onChange={mock}
          />
        </div>
        <div className="flex gap-5">
          <Input
            className="w-full"
            label="Linkedin"
            value={""}
            onChange={mock}
          />
          <Input className="w-full" label="Github" value={""} onChange={mock} />
        </div>
        <label
          htmlFor="resume"
          className="flex flex-col text-slate-900 text-base cursor-pointer capitalize"
        >
          Resumo profissional
          <textarea
            className="w-full min-h-24 rounded p-2.5 bg-slate-200"
            id="resume"
            rows={5}
          ></textarea>
        </label>

        <hr className="h-px bg-slate-800 my-1" />

        <p className="text-xl text-slate-900">Experiências Profissionais</p>

        <Input label="Título" value={""} onChange={mock} />

        <div className="flex gap-5">
          <div>
            <p>Início</p>
            <div className="flex gap-5">
              <Input className="grow" label="Mês" value={""} onChange={mock} />
              <Input label="Ano" value={""} onChange={mock} />
            </div>
          </div>
          <div>
            <p>Fim</p>
            <div className="flex gap-5">
              <Input label="Mês" value={""} onChange={mock} />
              <Input label="Ano" value={""} onChange={mock} />
            </div>
          </div>
        </div>

        <label
          htmlFor="desc"
          className="flex flex-col text-slate-900 text-base cursor-pointer capitalize"
        >
          Descrição
          <textarea
            className="w-full min-h-24 rounded p-2.5 bg-slate-200"
            id="desc"
            rows={5}
          ></textarea>
        </label>

        <hr className="h-px bg-slate-800 my-1" />

        <p className="text-xl text-slate-900">Competências</p>

        <Input label="Competência" value={""} onChange={mock} />
        <RoundButton className="self-center">Adicionar Competência</RoundButton>

        <hr className="h-px bg-slate-800 my-1" />

        <p className="text-xl text-slate-900">Certificações</p>

        <div className="flex gap-6">
          <Input className="w-full" label="Título" value={""} onChange={mock} />
          <Input className="w-20" label="Ano" value={""} onChange={mock} />
        </div>
        <RoundButton className="self-center">
          Adicionar Certificação
        </RoundButton>

        <hr className="h-px bg-slate-800 my-1" />

        <RoundButton className="self-center">Finalizar Currículo</RoundButton>
      </form>
    </div>
  );
}
