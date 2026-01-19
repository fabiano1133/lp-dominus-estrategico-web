import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    // Parse do body
    let body
    try {
      body = await request.json()
    } catch (parseError) {
      console.error("Erro ao fazer parse do JSON:", parseError)
      return NextResponse.json(
        { error: "Formato de dados inválido" },
        { status: 400 }
      )
    }
    
    // Validação básica
    if (!body.fullname || !body.email || !body.mobileNumber) {
      console.error("Campos obrigatórios faltando:", { 
        fullname: !!body.fullname, 
        email: !!body.email, 
        mobileNumber: !!body.mobileNumber 
      })
      return NextResponse.json(
        { error: "Nome, e-mail e telefone são obrigatórios" },
        { status: 400 }
      )
    }

    // Configuração do backend via variáveis de ambiente
    const backendUrl = process.env.BACKEND_URL || 'http://localhost:3131'
    const lpToken = process.env.X_LP_TOKEN || 'b9497d29-957d-4f90-9847-8a9a2808f4d6'
    const lpSource = process.env.X_LP_SOURCE || 'lp-dominus-estrategico'

    // Validação de variáveis obrigatórias
    if (!lpToken) {
      console.error("X_LP_TOKEN não configurado")
      return NextResponse.json(
        { error: "Configuração do servidor incompleta" },
        { status: 500 }
      )
    }

    // Preparar dados para envio
    const payload = {
      fullname: body.fullname,
      email: body.email,
      mobileNumber: body.mobileNumber,
      message: body.message || '',
    }

    // Requisição para o backend usando fetch nativo
    let response
    try {
      response = await fetch(`${backendUrl}/leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Lp-Token': lpToken,
          'X-Lp-Source': lpSource,
        },
        body: JSON.stringify(payload),
      })
    } catch (fetchError: any) {
      console.error("Erro na requisição fetch:", fetchError)
      return NextResponse.json(
        { 
          error: "Erro ao conectar com o servidor",
          details: process.env.NODE_ENV === 'development' ? fetchError.message : undefined
        },
        { status: 503 }
      )
    }

    // Verificar se a resposta foi bem-sucedida
    if (!response.ok) {
      let errorData
      try {
        errorData = await response.json()
      } catch {
        errorData = { message: response.statusText }
      }
      
      console.error("Erro do backend:", errorData)
      
      // Tratar estrutura de erro do backend: { type, message }
      const errorMessage = errorData.message || errorData.error || `Erro do servidor: ${response.statusText}`
      
      return NextResponse.json(
        { 
          error: errorMessage,
          type: errorData.type || 'SERVER_ERROR',
          status: response.status
        },
        { status: response.status }
      )
    }

    let data
    try {
      data = await response.json()
    } catch {
      data = { success: true }
    }

    return NextResponse.json(
      { message: "Formulário recebido com sucesso", data },
      { status: 200 }
    )
  } catch (error: any) {
    console.error("Erro inesperado ao processar formulário:", error)
    console.error("Stack trace:", error.stack)
    
    return NextResponse.json(
      { 
        error: "Erro ao processar solicitação",
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    )
  }
}
