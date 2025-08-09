"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactInput } from "@/lib/validators";

export default function ContactForm() {
  const [ok, setOk] = React.useState<string | null>(null);
  const [err, setErr] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid, isSubmitSuccessful },
    reset,
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data: ContactInput) => {
    setOk(null); setErr(null);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      setOk("Pesan terkirim. Terima kasih!");
      reset();
    } else {
      setErr("Gagal mengirim. Coba lagi.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-lg">
      {ok && <div className="rounded-lg border bg-white/70 p-3 text-sm">✅ {ok}</div>}
      {err && <div className="rounded-lg border bg-white/70 p-3 text-sm">⚠️ {err}</div>}

      <div>
        <label className="block text-sm font-medium" htmlFor="name">Nama</label>
        <input
          id="name"
          className="mt-1 h-10 w-full rounded-xl border px-3"
          placeholder="Nama kamu"
          {...register("name")}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-err" : undefined}
        />
        {errors.name && <p id="name-err" className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium" htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          className="mt-1 h-10 w-full rounded-xl border px-3"
          placeholder="nama@email.com"
          {...register("email")}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-err" : undefined}
        />
        {errors.email && <p id="email-err" className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium" htmlFor="message">Pesan</label>
        <textarea
          id="message"
          className="mt-1 w-full rounded-xl border px-3 py-2 min-h-28"
          placeholder="Tulis pesanmu…"
          {...register("message")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-err" : undefined}
        />
        {errors.message && <p id="message-err" className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={!isValid || isSubmitting}
        className="h-10 rounded-xl bg-gray-900 px-4 text-white disabled:opacity-50"
      >
        {isSubmitting ? "Mengirim…" : "Kirim"}
      </button>

      {isSubmitSuccessful && !isSubmitting && (
        <p className="text-sm opacity-70">Form valid dan diproses.</p>
      )}
    </form>
  );
}
