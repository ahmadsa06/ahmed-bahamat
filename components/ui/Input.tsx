import type { ChangeEvent } from "react";

interface InputProps {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea";
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  placeholder?: string;
  full?: boolean;
}

/** Labeled input/textarea (design-system: surface bg, border, focus → primary border + ring). */
export default function Input({
  name,
  label,
  type = "text",
  value,
  onChange,
  required,
  placeholder,
  full,
}: InputProps) {
  const control =
    "w-full rounded-sm border border-border bg-surface px-4 py-3 text-base text-ink outline-none transition-colors placeholder:text-muted focus:border-primary";

  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-ink-soft">
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          rows={5}
          className={control}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className={control}
        />
      )}
    </div>
  );
}
