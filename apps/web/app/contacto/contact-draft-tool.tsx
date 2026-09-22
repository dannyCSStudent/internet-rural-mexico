"use client";

import { useMemo, useState } from "react";

type DraftState = {
  municipality: string;
  community: string;
  propertyType: string;
  connection: string;
  mainUse: string;
  urgency: string;
  problem: string;
};

const initialState: DraftState = {
  municipality: "",
  community: "",
  propertyType: "Rancho, finca o casa rural",
  connection: "No tengo Internet fijo",
  mainUse: "Trabajo o negocio",
  urgency: "Alta: me impide hacer algo importante",
  problem: "",
};

export function ContactDraftTool() {
  const [draft, setDraft] = useState<DraftState>(initialState);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");

  const message = useMemo(
    () =>
      [
        "Hola, quiero compartir mi caso de Internet rural:",
        "",
        `Municipio: ${draft.municipality || "[pendiente]"}`,
        `Comunidad aproximada: ${draft.community || "[pendiente]"}`,
        `Tipo de propiedad: ${draft.propertyType}`,
        `Conexión actual: ${draft.connection}`,
        `Uso principal: ${draft.mainUse}`,
        `Urgencia: ${draft.urgency}`,
        "",
        "Problema actual:",
        draft.problem || "[describe el problema sin incluir datos sensibles]",
      ].join("\n"),
    [draft],
  );

  function updateDraft(field: keyof DraftState, value: string) {
    setDraft((current) => ({ ...current, [field]: value }));
    setCopyState("idle");
  }

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(message);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
  }

  return (
    <section className="contact-draft" aria-labelledby="contact-draft-title">
      <div className="contact-draft-header">
        <p className="eyebrow">Borrador seguro</p>
        <h2 id="contact-draft-title">Prepara tu caso sin enviarlo todavía.</h2>
        <p>
          Esta herramienta solo arma un texto en tu navegador. No guarda, no
          envía y no sube tus respuestas.
        </p>
      </div>

      <div className="contact-draft-grid">
        <form className="contact-form">
          <label>
            Municipio
            <input
              autoComplete="address-level2"
              onChange={(event) => updateDraft("municipality", event.target.value)}
              placeholder="Ej. Tiquicheo"
              value={draft.municipality}
            />
          </label>
          <label>
            Comunidad o zona aproximada
            <input
              onChange={(event) => updateDraft("community", event.target.value)}
              placeholder="No incluyas domicilio exacto"
              value={draft.community}
            />
          </label>
          <label>
            Tipo de propiedad
            <select
              onChange={(event) => updateDraft("propertyType", event.target.value)}
              value={draft.propertyType}
            >
              <option>Rancho, finca o casa rural</option>
              <option>Negocio rural o turismo</option>
              <option>Casa en construcción</option>
              <option>Escuela, oficina o espacio comunitario</option>
            </select>
          </label>
          <label>
            Conexión actual
            <select
              onChange={(event) => updateDraft("connection", event.target.value)}
              value={draft.connection}
            >
              <option>No tengo Internet fijo</option>
              <option>Uso datos del celular</option>
              <option>Uso módem celular</option>
              <option>Tengo Internet fijo, pero falla</option>
              <option>Tengo fibra/cable estable y quiero comparar</option>
            </select>
          </label>
          <label>
            Uso principal
            <select
              onChange={(event) => updateDraft("mainUse", event.target.value)}
              value={draft.mainUse}
            >
              <option>Trabajo o negocio</option>
              <option>Cámaras de seguridad</option>
              <option>Escuela o familia</option>
              <option>Videollamadas y comunicación</option>
              <option>Entretenimiento</option>
            </select>
          </label>
          <label>
            Urgencia
            <select
              onChange={(event) => updateDraft("urgency", event.target.value)}
              value={draft.urgency}
            >
              <option>Alta: me impide hacer algo importante</option>
              <option>Media: falla seguido pero tengo alternativas</option>
              <option>Baja: estoy investigando con tiempo</option>
            </select>
          </label>
          <label className="contact-form-wide">
            Describe el problema
            <textarea
              onChange={(event) => updateDraft("problem", event.target.value)}
              placeholder="Ej. Se cae en videollamadas, no llegan datos del celular, necesito cámaras para el rancho..."
              rows={5}
              value={draft.problem}
            />
          </label>
        </form>

        <aside className="message-preview">
          <h2>Mensaje preparado</h2>
          <pre>{message}</pre>
          <div className="message-actions">
            <button className="button-primary" onClick={copyMessage} type="button">
              Copiar mensaje
            </button>
            <button
              className="button-secondary"
              onClick={() => {
                setDraft(initialState);
                setCopyState("idle");
              }}
              type="button"
            >
              Limpiar
            </button>
          </div>
          {copyState === "copied" ? <p>Mensaje copiado.</p> : null}
          {copyState === "failed" ? (
            <p>No se pudo copiar automáticamente. Selecciona el texto y cópialo manualmente.</p>
          ) : null}
        </aside>
      </div>
    </section>
  );
}
