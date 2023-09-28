import React from "react";
import uuid from "react-uuid";

import { Input, RoundButton } from "@/components";
import xCircle from "@/assets/icons/xCircle.svg";

interface CompetenciesFormProps {
  id?: string;
  competency?: string;
  actionLabel: string;
  actionFunction: (args?: any) => void;
  edit?: boolean;
}

export function CompetenciesForm({
  id = "",
  competency = "",
  actionFunction,
  actionLabel,
  edit = false,
}: CompetenciesFormProps) {
  const [open, setOpen] = React.useState(edit);
  const [competencyState, setCompetency] = React.useState(competency);

  function onButtonClick() {
    if (!competencyState) {
      alert("Preencha a competência");
      return;
    }
    const comp = {
      id: id ? id : uuid(),
      title: competencyState,
    };
    actionFunction(comp);
    onCloseFormButtonClick();
  }
  function clearForm() {
    setCompetency("");
  }
  function onCloseFormButtonClick() {
    setOpen(false);
    clearForm();
  }

  return (
    <section className="flex flex-col gap-y-3.5">
      {open ? (
        <div className="flex flex-col gap-y-3.5 relative">
          {!edit ? (
            <img
              className="absolute right-0 -top-5 cursor-pointer hover:scale-105"
              src={xCircle}
              alt="Close button"
              onClick={onCloseFormButtonClick}
            />
          ) : (
            ""
          )}
          <Input
            label="Competência"
            value={competencyState}
            onChange={e => setCompetency(e.target.value)}
            minlength={1}
            maxlength={20}
            placeholder="Ex.: Scrum"
            required
          />
          <RoundButton className="self-center" onClick={onButtonClick}>
            {actionLabel}
          </RoundButton>
        </div>
      ) : (
        <RoundButton className="self-center" onClick={() => setOpen(true)}>
          {actionLabel}
        </RoundButton>
      )}
    </section>
  );
}
