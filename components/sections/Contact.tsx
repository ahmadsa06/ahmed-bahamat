"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { site, type ContactKind } from "@/content/site";
import Button from "@/components/ui/Button";
import IconChip from "@/components/ui/IconChip";
import Input from "@/components/ui/Input";
import Pill from "@/components/ui/Pill";
import Highlight from "@/components/ui/Highlight";
import Reveal from "@/components/ui/Reveal";

const INFO_ICON: Record<ContactKind, typeof Phone> = {
  phone: Phone,
  email: Mail,
  location: MapPin,
};

const EMAIL = site.contact.info.find((i) => i.kind === "email")?.value ?? "";
const initial = { name: "", email: "", phone: "", budget: "", message: "" };

export default function Contact() {
  const { contact } = site;
  const [values, setValues] = useState<Record<string, string>>(initial);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const usesFormspree = !contact.formspreeEndpoint.includes("REPLACE_WITH_YOUR_ID");

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const mailtoFallback = () => {
    const subject = `New project enquiry — ${values.name || "Website"}`;
    const body =
      `Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\n` +
      `Budget: ${values.budget}\n\n${values.message}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!usesFormspree) {
      mailtoFallback();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(contact.formspreeEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target as HTMLFormElement),
      });
      if (res.ok) {
        setStatus("sent");
        setValues(initial);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const note =
    status === "sent"
      ? "Thanks — your message is on its way. I'll reply shortly."
      : status === "error"
        ? `Something went wrong. Please email ${EMAIL} directly.`
        : usesFormspree
          ? "Sent straight to my inbox — I usually reply within a day."
          : `Opens your email app, pre-filled to ${EMAIL}.`;

  return (
    <section id="contact" aria-labelledby="contactTitle" className="relative py-section max-md:py-section-sm">
      <span aria-hidden className="absolute left-[8%] top-20 h-[9px] w-[9px] rounded-full bg-dot-blue" />
      <div className="container mx-auto px-gutter">
        <Reveal className="max-w-[640px]">
          <Pill>{contact.eyebrow}</Pill>
          <h2 id="contactTitle" className="mt-[18px] text-h2 font-bold -tracking-[0.01em]">
            <Highlight {...contact.title} />
          </h2>
        </Reveal>

        <div className="mt-14 grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="flex flex-col gap-[22px]">
            {contact.info.map((item) => {
              const Icon = INFO_ICON[item.kind];
              return (
                <div key={item.kind} className="flex items-center gap-4">
                  <IconChip className="h-[50px] w-[50px]">
                    <Icon className="h-[22px] w-[22px]" aria-hidden />
                  </IconChip>
                  <div>
                    <div className="text-sm text-muted">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="font-semibold text-ink hover:text-primary">
                        {item.value}
                      </a>
                    ) : (
                      <div className="font-semibold text-ink">{item.value}</div>
                    )}
                  </div>
                </div>
              );
            })}
          </Reveal>

          <Reveal
            as="form"
            onSubmit={onSubmit}
            className="grid gap-[18px] rounded-lg border border-border bg-white p-[34px] shadow-card sm:grid-cols-2 max-[480px]:p-6"
          >
            {contact.fields.map((f) => (
              <Input
                key={f.name}
                name={f.name}
                label={f.label}
                type={f.type}
                value={values[f.name] ?? ""}
                onChange={onChange}
                required={f.required}
                placeholder={f.placeholder}
                full={f.full}
              />
            ))}
            <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
              <Button type="submit" disabled={status === "sending"}>
                <Send className="h-[18px] w-[18px]" aria-hidden />
                {status === "sending" ? "Sending…" : contact.submitLabel}
              </Button>
              <span
                className={`text-sm ${status === "error" ? "text-primary" : "text-muted"}`}
                role={status === "error" ? "alert" : undefined}
              >
                {note}
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
