Gerador de Playlists com IA

O Gerador de Playlists com IA é um aplicativo web que permite aos usuários criarem playlists personalizadas com base em textos descritivos. Por exemplo, o usuário pode inserir uma descrição como "músicas relaxantes para estudar", e o sistema gera uma playlist alinhada ao contexto ou sentimento desejado. A funcionalidade é viabilizada por uma integração com Inteligência Artificial (IA), que interpreta o texto para identificar temas, emoções e gêneros musicais adequados. Além disso, o usuário pode salvar as playlists diretamente em sua conta do Spotify.

O projeto foi desenvolvido como parte de um trabalho universitário, mas tem potencial para escalar e ser utilizado por usuários externos.

O projeto utiliza as seguintes tecnologias e ferramentas:

- Front-end: HTML5, CSS3, JavaScript.
- Back-end: Node.js com Express.js.
- Banco de Dados: MongoDB (para armazenar o histórico de playlists e dados temporários dos usuários).
- APIs:
  - Spotify API: Para autenticação via OAuth 2.0, criação de playlists e adição de músicas ao perfil do usuário.
  - OpenAI API: Para processar o texto fornecido pelo usuário e gerar recomendações de músicas com base na descrição.

Pré-requisitos:

- Node.js instalado (versão 16 ou superior).
- Conta no Spotify para Developers (para obter as credenciais da API).
- Chave de API da OpenAI.
- Conta no Firebase para configurar o Firestore.
