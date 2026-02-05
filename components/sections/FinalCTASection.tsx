"use client"

import { useForm } from "react-hook-form"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

interface FormData {
  fullname: string
  email: string
  mobileNumber: string
  message?: string
}

export function FinalCTASection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState<string>("")

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()

  const pushDataLayer = (event: string, params: Record<string, unknown>) => {
    if (typeof window === "undefined") return
    const w = window as Window & { dataLayer?: Record<string, unknown>[] }
    w.dataLayer = w.dataLayer || []
    w.dataLayer.push({ event, ...params })
  }

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    pushDataLayer("form_submit", {
      form_id: "contact-form",
      form_name: "conversa-estrategica",
      form_action: "submit",
    })

    try {
      await axios.post("/api/contact", data)
      setSubmitStatus("success")
      reset()

      pushDataLayer("form_submit_success", {
        form_id: "contact-form",
        form_name: "conversa-estrategica",
        form_status: "success",
      })
    } catch (error: any) {
      console.error("Erro ao enviar formulário:", error)

      const message =
        error.response?.data?.error ||
        error.response?.data?.message ||
        "Erro ao enviar formulário. Tente novamente ou entre em contato diretamente."

      setErrorMessage(message)
      setSubmitStatus("error")

      pushDataLayer("form_submit_error", {
        form_id: "contact-form",
        form_name: "conversa-estrategica",
        form_status: "error",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="final-cta" className="py-20 md:py-28 bg-card" data-gtm-section="final-cta">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center space-y-4 md:space-y-6 mb-10 md:mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight px-4">
              Próximo passo: uma conversa estratégica sobre o seu cenário
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto" />
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground pt-4 px-4 leading-relaxed">
              Em 30–45 minutos, vamos mapear rapidamente seu momento, identificar gargalos na mensagem, nas páginas e
              nos canais, e mostrar caminhos práticos para você gerar mais leads e vendas. Sem compromisso: você decide
              se faz sentido seguir comigo depois.
            </p>
            <p className="text-sm md:text-base font-medium text-foreground pt-2 px-4">
              O que você leva: um mapa de gargalos e 2–3 próximos passos claros.
            </p>
            <p className="text-sm text-muted-foreground px-4">
              Nada de venda encalacrada — você decide o próximo passo.
            </p>
          </div>

          <form
            id="contact-form"
            onSubmit={handleSubmit(onSubmit)}
            className="bg-background border border-border rounded-xl p-6 md:p-8 lg:p-10 space-y-5 md:space-y-6"
            data-gtm-form="contact-form"
            data-gtm-form-name="conversa-estrategica"
          >
            <div className="space-y-2">
              <Label htmlFor="fullname" className="text-foreground font-semibold text-sm md:text-base">
                Nome Completo *
              </Label>
              <Input
                id="fullname"
                {...register("fullname", { required: "Nome é obrigatório" })}
                className="h-12 md:h-14 text-base focus:ring-2 focus:ring-primary transition-all bg-card border-border text-foreground"
                placeholder="Seu nome completo"
                data-gtm-field="fullname"
              />
              {errors.fullname && (
                <p className="text-sm text-red-400 font-medium">{errors.fullname.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-semibold text-sm md:text-base">
                E-mail *
              </Label>
              <Input
                id="email"
                type="email"
                {...register("email", {
                  required: "E-mail é obrigatório",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "E-mail inválido",
                  },
                })}
                className="h-12 md:h-14 text-base focus:ring-2 focus:ring-primary transition-all bg-card border-border text-foreground"
                placeholder="seu@email.com"
                data-gtm-field="email"
              />
              {errors.email && (
                <p className="text-sm text-red-400 font-medium">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="mobileNumber" className="text-foreground font-semibold text-sm md:text-base">
                Número de Telefone *
              </Label>
              <Input
                id="mobileNumber"
                type="tel"
                {...register("mobileNumber", {
                  required: "Telefone é obrigatório",
                  pattern: {
                    value: /^[\d\s\(\)\-\+]+$/,
                    message: "Telefone inválido",
                  },
                })}
                className="h-12 md:h-14 text-base focus:ring-2 focus:ring-primary transition-all bg-card border-border text-foreground"
                placeholder="(00) 00000-0000"
                data-gtm-field="mobile-number"
              />
              {errors.mobileNumber && (
                <p className="text-sm text-red-400 font-medium">{errors.mobileNumber.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground font-semibold">
                Mensagem (Opcional)
              </Label>
              <Textarea
                id="message"
                {...register("message")}
                rows={4}
                placeholder="Conte-nos brevemente sobre sua situação atual..."
                className="resize-none bg-card border-border text-foreground placeholder:text-muted-foreground"
                data-gtm-field="message"
              />
            </div>

            {submitStatus === "success" && (
              <div className="p-4 bg-green-950/40 border border-green-700 rounded-md" data-gtm-event="form-success" data-gtm-form-status="success">
                <p className="text-green-300 font-semibold">
                  Formulário enviado com sucesso. Retornaremos em breve.
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="p-4 bg-red-950/40 border border-red-800 rounded-md" data-gtm-event="form-error" data-gtm-form-status="error">
                <p className="text-red-300 font-semibold">
                  {errorMessage || "Erro ao enviar formulário. Tente novamente ou entre em contato diretamente."}
                </p>
              </div>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              size="lg"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 md:h-16 text-base md:text-lg font-bold shadow-lg hover:shadow-primary/30 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              data-gtm-element="cta-form-submit"
              data-gtm-action="submit"
              data-gtm-label="agendar-conversa-estrategica"
            >
              {isSubmitting ? "Enviando..." : "Agendar conversa estratégica"}
            </Button>

            <p className="mt-4 md:mt-5 text-center text-xs md:text-sm text-muted-foreground font-medium">
              Resposta em até 24h úteis. Dados só para este contato.
            </p>
          </form>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>
              Seus dados serão tratados com confidencialidade e usados apenas para responder sua solicitação.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
