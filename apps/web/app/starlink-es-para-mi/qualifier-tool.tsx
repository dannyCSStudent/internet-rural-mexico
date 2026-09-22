"use client";

import { useMemo, useState } from "react";

import { disclosure, starlinkReferralUrl } from "../site-content";

type QuestionId =
  | "propertyType"
  | "currentConnection"
  | "reliability"
  | "dependence"
  | "uses"
  | "cellSignal"
  | "budget"
  | "skyView";

type Option = {
  label: string;
  value: string;
  score: number;
};

type Question = {
  id: QuestionId;
  label: string;
  helper: string;
  options: Option[];
};

type Answers = Partial<Record<QuestionId, Option>>;

const questions: Question[] = [
  {
    id: "propertyType",
    label: "¿Qué tipo de lugar quieres conectar?",
    helper: "Esto ayuda a entender distancia, instalación y cobertura Wi-Fi.",
    options: [
      { label: "Rancho, finca o casa de campo", value: "rural-property", score: 2 },
      { label: "Negocio rural o propiedad turística", value: "business", score: 3 },
      { label: "Casa en zona urbana o semiurbana", value: "urban", score: 0 },
    ],
  },
  {
    id: "currentConnection",
    label: "¿Qué Internet tienes hoy?",
    helper: "La mejor opción depende mucho de lo que ya funciona o no funciona.",
    options: [
      { label: "No tengo Internet fijo", value: "none", score: 3 },
      { label: "Uso datos del celular o módem celular", value: "cellular", score: 2 },
      { label: "Tengo fibra, cable o cobre estable", value: "stable-wired", score: -4 },
    ],
  },
  {
    id: "reliability",
    label: "¿Qué tan grave es el problema?",
    helper: "Piensa en cortes, lentitud y momentos en los que la conexión te falla.",
    options: [
      { label: "Me impide trabajar, estudiar, vender o vigilar", value: "critical", score: 4 },
      { label: "Falla seguido, pero puedo esperar a veces", value: "frequent", score: 2 },
      { label: "Solo quiero mejorar algo que ya funciona", value: "minor", score: -1 },
    ],
  },
  {
    id: "dependence",
    label: "¿Tu conexión sostiene algo importante?",
    helper: "Trabajo, negocio, cámaras y escuela suelen justificar una revisión más seria.",
    options: [
      { label: "Sí, trabajo o negocio depende de ella", value: "business-work", score: 3 },
      { label: "Sí, cámaras, escuela o familia dependen de ella", value: "household", score: 2 },
      { label: "Principalmente entretenimiento", value: "entertainment", score: 0 },
    ],
  },
  {
    id: "uses",
    label: "¿Qué uso te importa más?",
    helper: "El uso principal orienta la tolerancia a cortes y latencia.",
    options: [
      { label: "Videollamadas, VPN, pagos o cámaras", value: "sensitive", score: 3 },
      { label: "Streaming, mensajes, redes y YouTube", value: "general", score: 1 },
      { label: "Uso ocasional de baja urgencia", value: "occasional", score: -1 },
    ],
  },
  {
    id: "cellSignal",
    label: "¿Cómo está la señal celular?",
    helper: "Si el celular ya funciona muy bien, conviene comparar antes de comprar satélite.",
    options: [
      { label: "No hay señal o es muy débil", value: "bad", score: 3 },
      { label: "Hay señal, pero se satura o se cae", value: "unstable", score: 1 },
      { label: "Hay buena señal 4G/5G estable", value: "good", score: -2 },
    ],
  },
  {
    id: "budget",
    label: "¿Qué tan sensible es el presupuesto?",
    helper: "No conviene comprar si el costo inicial o mensual te va a presionar demasiado.",
    options: [
      { label: "Puedo pagar si resuelve un problema importante", value: "workable", score: 2 },
      { label: "Necesito comparar con mucho cuidado", value: "careful", score: 0 },
      { label: "El gasto inicial o mensual me presiona mucho", value: "tight", score: -4 },
    ],
  },
  {
    id: "skyView",
    label: "¿Puedes instalar con vista despejada al cielo?",
    helper: "Árboles, cerros, techos o postes pueden afectar el servicio.",
    options: [
      { label: "Sí, tengo un punto alto o despejado", value: "clear", score: 3 },
      { label: "No sé, tendría que revisarlo", value: "unknown", score: 0 },
      { label: "No, hay muchas obstrucciones o no puedo instalar", value: "blocked", score: -6 },
    ],
  },
];

function getResult(score: number, answers: Answers) {
  if (
    answers.currentConnection?.value === "stable-wired" ||
    answers.skyView?.value === "blocked" ||
    answers.budget?.value === "tight"
  ) {
    return {
      label: "Probablemente no es la mejor primera opción",
      tone: "low",
      summary:
        "Antes de comprar, revisa alternativas más simples o resuelve el bloqueo principal: instalación, presupuesto o una conexión fija que ya funciona.",
      nextSteps: [
        "Compara tu opción actual contra proveedores locales antes de cambiar.",
        "Revisa si puedes mejorar Wi-Fi, router, antena celular o cableado.",
        "No uses un enlace de referido hasta confirmar costos y condiciones oficiales.",
      ],
    };
  }

  if (score >= 15) {
    return {
      label: "Buena opción para investigar",
      tone: "high",
      summary:
        "Tu caso tiene señales fuertes de necesidad rural, dependencia real y factibilidad de instalación. El siguiente paso es confirmar disponibilidad, costos vigentes y obstrucciones.",
      nextSteps: [
        "Consulta disponibilidad y planes directamente en Starlink.",
        "Usa la app oficial para revisar obstrucciones donde instalarías el equipo.",
        "Calcula costo inicial, mensualidad, instalación, energía y red Wi-Fi interna.",
      ],
    };
  }

  if (score >= 8) {
    return {
      label: "Posible opción; revisa costos y alternativas",
      tone: "medium",
      summary:
        "Starlink podría tener sentido, pero tu caso necesita comparación cuidadosa. Una alternativa local, celular o radioenlace podría resolver el problema con menor costo.",
      nextSteps: [
        "Lista dos alternativas locales reales y compáralas con Starlink.",
        "Identifica si tu problema es velocidad, estabilidad, cobertura Wi-Fi o cortes de energía.",
        "Confirma precios y términos vigentes antes de decidir.",
      ],
    };
  }

  return {
    label: "Probablemente no es la mejor primera opción",
    tone: "low",
    summary:
      "Con tus respuestas actuales, parece mejor investigar alternativas o reunir más datos antes de considerar Starlink.",
    nextSteps: [
      "Prueba primero opciones locales disponibles en tu zona.",
      "Define qué problema concreto quieres resolver y cuánto vale resolverlo.",
      "Vuelve a evaluar si cambia tu conexión, presupuesto o posibilidad de instalación.",
    ],
  };
}

export function QualifierTool() {
  const [answers, setAnswers] = useState<Answers>({});

  const answeredCount = Object.keys(answers).length;
  const isComplete = answeredCount === questions.length;
  const score = useMemo(
    () =>
      Object.values(answers).reduce(
        (total, answer) => total + (answer?.score ?? 0),
        0,
      ),
    [answers],
  );
  const result = getResult(score, answers);
  const canShowReferral =
    isComplete &&
    (result.label === "Buena opción para investigar" ||
      result.label === "Posible opción; revisa costos y alternativas");

  return (
    <section className="qualifier" aria-labelledby="qualifier-title">
      <div className="qualifier-header">
        <p className="eyebrow">Herramienta inicial</p>
        <h2 id="qualifier-title">Evalúa tu caso en menos de dos minutos.</h2>
        <p>
          No guardamos tus respuestas. Este resultado es orientación inicial, no
          una garantía de disponibilidad, precio, velocidad o idoneidad.
        </p>
      </div>

      <form className="qualifier-grid">
        {questions.map((question) => (
          <fieldset className="question-card" key={question.id}>
            <legend>{question.label}</legend>
            <p>{question.helper}</p>
            <div className="option-stack">
              {question.options.map((option) => (
                <label key={option.value}>
                  <input
                    checked={answers[question.id]?.value === option.value}
                    name={question.id}
                    onChange={() =>
                      setAnswers((current) => ({
                        ...current,
                        [question.id]: option,
                      }))
                    }
                    type="radio"
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </fieldset>
        ))}
      </form>

      <aside className={`result-panel result-${result.tone}`} aria-live="polite">
        <div>
          <span>
            {answeredCount} de {questions.length} respuestas
          </span>
          {isComplete ? (
            <>
              <h2>{result.label}</h2>
              <p>{result.summary}</p>
            </>
          ) : (
            <>
              <h2>Completa las respuestas para ver una orientación.</h2>
              <p>
                El resultado aparecerá aquí cuando contestes todas las preguntas.
                Puedes cambiar cualquier respuesta y se recalcula al momento.
              </p>
            </>
          )}
        </div>
        {isComplete ? (
          <>
            <ul>
              {result.nextSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
            <div className="result-actions">
              {canShowReferral ? (
                <a
                  className="button-primary"
                  href={starlinkReferralUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  Ver disponibilidad en Starlink
                </a>
              ) : null}
              <button
                className="button-secondary"
                onClick={() => setAnswers({})}
                type="button"
              >
                Reiniciar evaluación
              </button>
            </div>
            {canShowReferral ? <p className="result-disclosure">{disclosure}</p> : null}
          </>
        ) : null}
      </aside>
    </section>
  );
}
