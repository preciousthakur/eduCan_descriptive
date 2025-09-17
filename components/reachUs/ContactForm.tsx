"use client";

import { useState } from "react";
import { TextField, Button, MenuItem, Alert, CircularProgress } from "@mui/material";

type FormState = {
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
};

const topics = [
  { value: "demo", label: "Product demo" },
  { value: "support", label: "Customer support" },
  { value: "partnership", label: "Partnership" },
  { value: "other", label: "Other" },
];

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "", topic: "demo", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [key]: e.target.value });
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(null);
    setError(null);
    try {
      await new Promise((r) => setTimeout(r, 800));
      setSuccess("Thanks! We'll get back to you shortly.");
      setForm({ name: "", email: "", phone: "", topic: "demo", message: "" });
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="relative py-16 sm:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(700px_300px_at_50%_0%,rgba(251,191,36,0.12),transparent)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-2xl font-semibold">Send us a message</h3>
            <p className="mt-2 text-white/70">We typically respond within one business day.</p>
            <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
              <TextField label="Full name" variant="outlined" value={form.name} onChange={handleChange("name")} required fullWidth />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <TextField label="Email" type="email" value={form.email} onChange={handleChange("email")} required fullWidth />
                <TextField label="Phone" value={form.phone} onChange={handleChange("phone")} fullWidth />
              </div>
              <TextField select label="Topic" value={form.topic} onChange={handleChange("topic")} fullWidth>
                {topics.map((t) => (
                  <MenuItem key={t.value} value={t.value}>{t.label}</MenuItem>
                ))}
              </TextField>
              <TextField label="Message" value={form.message} onChange={handleChange("message")} multiline minRows={4} required fullWidth />
              <div className="flex items-center gap-3">
                <Button type="submit" variant="contained" color="primary" disabled={submitting} sx={{ textTransform: "none", borderRadius: 9999 }}>
                  {submitting ? <CircularProgress size={18} color="inherit" /> : "Send message"}
                </Button>
                {success ? <Alert severity="success" sx={{ background: "transparent", color: "#bbf7d0" }}>{success}</Alert> : null}
                {error ? <Alert severity="error" sx={{ background: "transparent" }}>{error}</Alert> : null}
              </div>
            </form>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-2xl font-semibold">Our offices</h3>
            <p className="mt-2 text-white/70">We operate remote-first with hubs in key cities.</p>
            <ul className="mt-6 grid gap-3 text-sm text-white/75">
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" /> Bengaluru, IN</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" /> Mumbai, IN</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400" /> Delhi NCR, IN</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


