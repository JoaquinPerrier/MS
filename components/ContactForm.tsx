"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState, type FormEvent } from "react";
import { useForm } from "react-hook-form";
import { Icon } from "@/components/Icon";
import { useLegalModal } from "@/components/LegalModal";
import { whatsappUrl } from "@/lib/site";
import {
  contactSchema,
  contactSubjects,
  homeSubjects,
  type ContactInput,
} from "@/lib/contact";

type Variant = "home" | "page";

type ContactFormProps = {
  variant?: Variant;
};

export function ContactForm({ variant = "page" }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      website: "",
    },
  });

  async function onSubmit(values: ContactInput) {
    setStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const payload = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(payload.error || "No pudimos enviar tu mensaje.");
      }

      reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Ocurrió un error inesperado.",
      );
    }
  }

  if (variant === "home") {
    return (
      <HomeForm
        register={register}
        errors={errors}
        isSubmitting={isSubmitting}
        status={status}
        errorMessage={errorMessage}
        onSubmit={handleSubmit(onSubmit)}
        onReset={() => setStatus("idle")}
      />
    );
  }

  return (
    <PageForm
      register={register}
      errors={errors}
      isSubmitting={isSubmitting}
      status={status}
      errorMessage={errorMessage}
      onSubmit={handleSubmit(onSubmit)}
      onReset={() => setStatus("idle")}
    />
  );
}

type FormViewProps = {
  register: ReturnType<typeof useForm<ContactInput>>["register"];
  errors: ReturnType<typeof useForm<ContactInput>>["formState"]["errors"];
  isSubmitting: boolean;
  status: "idle" | "success" | "error";
  errorMessage: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onReset: () => void;
};

function WhatsAppIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="text-[12px] text-error font-body-md">{message}</p>;
}

function HomeForm({
  register,
  errors,
  isSubmitting,
  status,
  errorMessage,
  onSubmit,
  onReset,
}: FormViewProps) {
  if (status === "success") {
    return (
      <div className="max-w-xl mx-auto text-left space-y-6 bg-surface-container p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-tertiary to-primary opacity-50" />
        <div className="flex flex-col items-center text-center gap-4 py-6">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
            <Icon name="check_circle" className="text-[32px] text-primary" />
          </div>
          <h3 className="font-headline-md text-headline-md text-on-surface">Mensaje recibido</h3>
          <p className="font-body-md text-on-surface-variant">
            Gracias por contactarnos. Nuestro equipo revisará tu consulta y te responderá a la brevedad.
          </p>
          <button
            type="button"
            onClick={onReset}
            className="text-primary font-label-caps text-label-caps border border-primary px-6 py-2 rounded-full hover:bg-primary/10 transition-colors"
          >
            Enviar otra consulta
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="max-w-xl mx-auto text-left space-y-6 bg-surface-container p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-tertiary to-primary opacity-50" />
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
        {...register("website")}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="font-label-caps text-[10px] text-on-surface-variant tracking-widest uppercase">
            Nombre Completo
          </label>
          <input
            className="w-full bg-surface-container-highest border border-white/10 rounded-lg px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary focus:shadow-[0_0_10px_rgba(207,188,255,0.2)] transition-all"
            placeholder="Ej. Ana García"
            type="text"
            {...register("name")}
          />
          <FieldError message={errors.name?.message} />
        </div>
        <div className="space-y-2">
          <label className="font-label-caps text-[10px] text-on-surface-variant tracking-widest uppercase">
            Correo Electrónico
          </label>
          <input
            className="w-full bg-surface-container-highest border border-white/10 rounded-lg px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary focus:shadow-[0_0_10px_rgba(207,188,255,0.2)] transition-all"
            placeholder="ana@empresa.com"
            type="email"
            {...register("email")}
          />
          <FieldError message={errors.email?.message} />
        </div>
      </div>
      <div className="space-y-2">
        <label className="font-label-caps text-[10px] text-on-surface-variant tracking-widest uppercase">
          Servicio de Interés
        </label>
        <select
          className="w-full bg-surface-container-highest border border-white/10 rounded-lg px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary focus:shadow-[0_0_10px_rgba(207,188,255,0.2)] transition-all appearance-none cursor-pointer"
          {...register("subject")}
        >
          <option value="">Seleccioná un servicio</option>
          {homeSubjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
        <FieldError message={errors.subject?.message} />
      </div>
      <div className="space-y-2">
        <label className="font-label-caps text-[10px] text-on-surface-variant tracking-widest uppercase">
          Detalles del Proyecto
        </label>
        <textarea
          className="w-full bg-surface-container-highest border border-white/10 rounded-lg px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary focus:shadow-[0_0_10px_rgba(207,188,255,0.2)] transition-all resize-none"
          placeholder="Describe brevemente tus objetivos..."
          rows={4}
          {...register("message")}
        />
        <FieldError message={errors.message?.message} />
      </div>
      {status === "error" ? <FieldError message={errorMessage} /> : null}
      <button
        className="w-full bg-primary text-on-primary py-4 rounded-xl font-label-caps text-label-caps hover:bg-primary-fixed-dim transition-colors shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            Enviando...
            <Icon name="progress_activity" className="text-[18px] animate-spin" />
          </>
        ) : (
          <>
            Enviar consulta
            <Icon name="send" className="text-[18px]" />
          </>
        )}
      </button>
      <div className="flex items-center gap-4 text-on-surface-variant/50">
        <span className="h-px flex-1 bg-white/10" />
        <span className="font-label-caps text-[10px] tracking-widest uppercase">o</span>
        <span className="h-px flex-1 bg-white/10" />
      </div>
      <a
        className="w-full py-4 rounded-xl font-label-caps text-label-caps border border-white/10 text-on-surface hover:border-[#25D366] hover:text-[#25D366] transition-colors flex items-center justify-center gap-2"
        href={whatsappUrl()}
        target="_blank"
        rel="noreferrer"
      >
        <WhatsAppIcon />
        Comunicate por WhatsApp
      </a>
    </form>
  );
}

function PageForm({
  register,
  errors,
  isSubmitting,
  status,
  errorMessage,
  onSubmit,
  onReset,
}: FormViewProps) {
  const { openLegal } = useLegalModal();
  const inputClass =
    "w-full bg-surface/50 text-on-surface font-body-md text-body-md px-4 py-4 rounded-xl border border-transparent focus:border-primary focus:bg-surface focus:outline-none transition-all duration-300 peer placeholder-transparent shadow-sm";
  const labelClass =
    "absolute left-4 top-4 text-on-surface-variant font-body-md text-body-md transition-all duration-300 peer-focus:-top-3 peer-focus:left-3 peer-focus:text-[12px] peer-focus:font-label-caps peer-focus:text-primary peer-focus:bg-surface peer-focus:px-2 peer-focus:rounded-full peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-[12px] peer-[:not(:placeholder-shown)]:font-label-caps peer-[:not(:placeholder-shown)]:bg-surface peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:rounded-full pointer-events-none";

  return (
    <div className="bg-surface-container/60 backdrop-blur-xl rounded-3xl p-8 lg:p-12 shadow-xl relative group">
      <div className="absolute inset-0 rounded-3xl border border-white/5 pointer-events-none" />
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
      <form onSubmit={onSubmit} className="relative z-10 flex flex-col gap-8">
        <div className="border-b border-white/10 pb-4">
          <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface">
            Envíanos un Mensaje
          </h2>
        </div>
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden
          {...register("website")}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative group/field">
            <input
              className={inputClass}
              id="name"
              placeholder="Nombre Completo"
              type="text"
              {...register("name")}
            />
            <label className={labelClass} htmlFor="name">
              Nombre Completo
            </label>
            <div className="mt-2">
              <FieldError message={errors.name?.message} />
            </div>
          </div>
          <div className="relative group/field">
            <input
              className={inputClass}
              id="email"
              placeholder="Correo Electrónico"
              type="email"
              {...register("email")}
            />
            <label className={labelClass} htmlFor="email">
              Correo Electrónico
            </label>
            <div className="mt-2">
              <FieldError message={errors.email?.message} />
            </div>
          </div>
        </div>
        <div className="relative group/field">
          <select
            className="w-full bg-surface/50 text-on-surface font-body-md text-body-md px-4 py-4 rounded-xl border border-transparent focus:border-primary focus:bg-surface focus:outline-none transition-all duration-300 appearance-none shadow-sm"
            id="subject"
            {...register("subject")}
          >
            <option className="text-on-surface-variant bg-surface" disabled value="">
              Selecciona el Asunto
            </option>
            {contactSubjects.map((subject) => (
              <option className="bg-surface" key={subject.value} value={subject.value}>
                {subject.label}
              </option>
            ))}
          </select>
          <Icon
            name="expand_more"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none"
          />
          <div className="mt-2">
            <FieldError message={errors.subject?.message} />
          </div>
        </div>
        <div className="relative group/field">
          <textarea
            className={`${inputClass} resize-none`}
            id="message"
            placeholder="Tu Mensaje"
            rows={5}
            {...register("message")}
          />
          <label className={labelClass} htmlFor="message">
            Cuéntanos sobre tu proyecto...
          </label>
          <div className="mt-2">
            <FieldError message={errors.message?.message} />
          </div>
        </div>
        {status === "error" ? <FieldError message={errorMessage} /> : null}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
          <p className="font-body-md text-[14px] text-on-surface-variant/70 max-w-xs order-2 sm:order-1">
            Al enviar este formulario, aceptas nuestra{" "}
            <button
              type="button"
              className="text-primary hover:underline"
              onClick={() => openLegal("privacy")}
            >
              política de privacidad
            </button>
            .
          </p>
          <button
            className="w-full sm:w-auto bg-primary text-on-primary font-label-caps text-label-caps px-8 py-4 rounded-full flex items-center justify-center gap-3 hover:bg-primary-container hover:text-on-primary-container transition-all duration-300 shadow-md group/btn order-1 sm:order-2 overflow-hidden relative cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
            type="submit"
            disabled={isSubmitting}
          >
            <span className="relative z-10">{isSubmitting ? "Enviando..." : "Enviar Mensaje"}</span>
            <Icon
              name={isSubmitting ? "progress_activity" : "send"}
              className={`relative z-10 ${isSubmitting ? "animate-spin" : "group-hover/btn:translate-x-1 transition-transform"}`}
            />
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </form>
      <div
        className={`absolute inset-0 z-20 bg-surface-container/95 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center p-8 text-center transition-opacity duration-500 ${
          status === "success" ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6">
          <Icon name="check_circle" className="text-[40px] text-primary" />
        </div>
        <h3 className="font-headline-xl text-headline-xl-mobile text-on-surface mb-4">
          Mensaje Recibido
        </h3>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-sm mb-8">
          Gracias por contactarnos. Nuestro equipo revisará tu mensaje y se pondrá en contacto contigo en breve.
        </p>
        <button
          className="text-primary font-label-caps text-label-caps border border-primary px-6 py-2 rounded-full hover:bg-primary/10 transition-colors"
          type="button"
          onClick={onReset}
        >
          Enviar Otro Mensaje
        </button>
      </div>
    </div>
  );
}
