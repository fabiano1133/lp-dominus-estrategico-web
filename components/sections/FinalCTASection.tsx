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

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      await axios.post("/api/contact", data)
      setSubmitStatus("success")
      reset()
    } catch (error: any) {
      console.error("Erro ao enviar formulário:", error)
      
      const message =
        error.response?.data?.error ||
        error.response?.data?.message ||
        "Erro ao enviar formulário. Tente novamente ou entre em contato diretamente."
      
      setErrorMessage(message)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="final-cta" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">
              Solicitar Diagnóstico Estratégico
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
            <p className="text-lg text-gray-600 pt-4">
              Preencha o formulário abaixo. Analisaremos sua situação e retornaremos 
              com uma proposta estruturada.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white border border-gray-200 rounded-lg p-8 space-y-6 shadow-sm"
          >
            <div className="space-y-2">
              <Label htmlFor="fullname" className="text-primary font-semibold">
                Nome Completo *
              </Label>
              <Input
                id="fullname"
                {...register("fullname", { required: "Nome é obrigatório" })}
                className="h-12"
                placeholder="Seu nome completo"
              />
              {errors.fullname && (
                <p className="text-sm text-red-600">{errors.fullname.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-primary font-semibold">
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
                className="h-12"
                placeholder="seu@email.com"
              />
              {errors.email && (
                <p className="text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="mobileNumber" className="text-primary font-semibold">
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
                className="h-12"
                placeholder="(00) 00000-0000"
              />
              {errors.mobileNumber && (
                <p className="text-sm text-red-600">{errors.mobileNumber.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-primary font-semibold">
                Mensagem (Opcional)
              </Label>
              <Textarea
                id="message"
                {...register("message")}
                rows={4}
                placeholder="Conte-nos brevemente sobre sua situação atual..."
                className="resize-none"
              />
            </div>

            {submitStatus === "success" && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                <p className="text-green-800 font-semibold">
                  Formulário enviado com sucesso. Retornaremos em breve.
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                <p className="text-red-800 font-semibold">
                  {errorMessage || "Erro ao enviar formulário. Tente novamente ou entre em contato diretamente."}
                </p>
              </div>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              size="lg"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-lg font-semibold"
            >
              {isSubmitting ? "Enviando..." : "Quero estruturar minhas vendas"}
            </Button>

            <p className="mt-3 text-center text-xs text-gray-500">
              Atendimento estratégico. Sem promessas vazias. Sem fórmulas prontas.
            </p>
          </form>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              Seus dados serão tratados com confidencialidade e usados apenas 
              para responder sua solicitação.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
