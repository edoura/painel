#language: pt

    Funcionalidade: Fazer login no sistema

    Como um administrador de ONG
    desejo fazer login no painel administrativo
    Para gerenciar minha Entidade.
    
    Cenário: Login com sucesso
        Dado que estou na página de Login
        Quando eu informo dados válidos
        E clico em login
        Então eu tenho acesso a Dashboard

    Cenário: Login inválido
        Dado que estou na página de Login
        Quando eu informo dados inválidos
        E clico em login
        Então eu vejo a mensagem 'Dados inválidos, tente novamente.'