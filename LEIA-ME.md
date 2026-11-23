# Ciclos de Estudo — PC e iPhone, com histórico sincronizado

> **Novo na versão 14:** o app roda também no iPhone (instalado pela Tela de
> Início) e os dois aparelhos ficam com o mesmo histórico. O passo a passo está
> em **[iPhone e sincronização](#iphone-e-sincronização)**, logo abaixo do passo 3.
>
> **Novo na versão 15:** no iPhone, os avisos tocam também com a tela bloqueada,
> pelo Relógio do iPhone — veja o passo **E** daquela seção.

Esta pasta é o mesmo cronômetro, só que fora do Claude. Aqui a notificação do
Windows funciona: o aviso aparece por cima de qualquer programa e **fica na tela
até você dispensar**, como o despertador do app Relógio.

O motivo de funcionar aqui e não lá: o navegador só libera notificação para uma
página que é dona do próprio endereço. Dentro do Claude a página roda num quadro
isolado, e aí o recurso nem chega a ser oferecido.

---

## Passo 1 — abrir e testar (2 minutos)

Dê dois cliques em **`abrir.bat`**.

Ele sobe um servidorzinho nesta pasta e abre `http://localhost:8777` no seu
navegador. Uma janela preta de comando vai ficar aberta — é o servidor, deixe-a
de lado enquanto estiver usando.

> Precisa ter o **Python** instalado. Se não tiver, baixe em python.org e marque
> **"Add Python to PATH"** na primeira tela do instalador.

Na página, clique em **Permitir notificações** e depois em **Testar alarme**. Se
o aviso do Windows aparecer, está tudo certo.

## Passo 2 — instalar como aplicativo

Com a página aberta no **Chrome** ou no **Edge**:

1. Clique no ícone de instalar na barra de endereço (um monitor com uma seta),
   ou abra o menu **⋮** → **Transmitir, salvar e compartilhar** → **Instalar
   página como aplicativo**. No Edge: **⋯** → **Aplicativos** → **Instalar este site
   como um aplicativo**.
2. Confirme. O Windows cria um ícone no Menu Iniciar e na barra de tarefas.

A partir daí ele abre em **janela própria**, sem abas e sem barra de endereço, e
aparece no Alt+Tab como um programa separado. Clique com o botão direito no ícone
da barra de tarefas e escolha **Fixar** para deixá-lo sempre à mão.

Depois de instalado, o app abre **mesmo sem rodar o `abrir.bat`**: os arquivos
ficam guardados no próprio navegador. Se um dia ele abrir em branco, rode o
`abrir.bat` uma vez e recarregue com Ctrl+F5.

## Passo 3 — trazer seu histórico

Se você já tem dias registrados na versão do Claude:

1. Lá, abra **Ajustes e dados** → **Copiar backup (JSON)**.
2. Aqui, abra **Ajustes e dados** → **Importar backup**, cole e confirme.

A importação só **acrescenta**: os ciclos colados se somam aos que já estão aqui
(o mesmo ciclo não entra duas vezes). Nada é apagado.

> A versão 13 tinha um defeito nesse botão: ela juntava os dados, mas dava erro
> antes de gravar e mostrava "Não consegui ler esse texto". Corrigido.

---

## iPhone e sincronização

O iPhone não instala arquivos soltos: o app precisa estar publicado num endereço
`https://`. E, para os dois aparelhos terem o mesmo histórico, eles precisam de
um lugar em comum na internet. As duas coisas saem de graça de uma conta no
**GitHub**: o endereço vem do *GitHub Pages*, e o histórico fica num *gist
secreto* (um arquivo guardado na sua conta). Faz-se uma vez, leva uns 15 minutos.

### A. Criar a conta e o código de acesso (no computador)

1. Crie uma conta em **github.com** (se ainda não tiver). Anote o nome de
   usuário — ele vai no endereço do app.
2. Clique na sua foto (canto superior direito) → **Settings** → no fim do menu
   da esquerda, **Developer settings** → **Personal access tokens** →
   **Tokens (classic)** → **Generate new token** → **Generate new token (classic)**.
3. Preencha:
   - **Note:** `Ciclos de Estudo`
   - **Expiration:** *No expiration* (senão a sincronização para no dia em que vencer)
   - Marque **só a caixa `gist`**. Nenhuma outra.
4. **Generate token** e copie o código que aparece (começa com `ghp_`). O GitHub
   só mostra uma vez; se perder, é só gerar outro.

Esse código só dá acesso aos seus gists — não mexe em repositórios, e-mail ou
senha. Para cortar o acesso a qualquer hora, apague-o nessa mesma tela.

### B. Publicar o app (GitHub Pages)

1. No GitHub, **+** (canto superior direito) → **New repository**.
   Nome: `ciclos`. Deixe **Public** (o Pages gratuito exige; o repositório só
   tem o programa — seus dados **não** vão para ele). **Create repository**.
2. Na página do repositório, clique em **uploading an existing file**, arraste
   **todos os arquivos desta pasta** (`index.html`, `sw.js`,
   `manifest.webmanifest`, os três `.png`; o `abrir.bat` e este LEIA-ME podem ir
   ou não) e clique em **Commit changes**.
3. **Settings** (do repositório) → **Pages** → em *Branch*, escolha **main** e
   **/ (root)** → **Save**.
4. Espere um ou dois minutos e abra
   **`https://SEU-USUARIO.github.io/ciclos/`**. Deve aparecer o app.

### C. Conectar o computador

No app do PC: **Ajustes e dados** → **Sincronizar com outros aparelhos** → cole o
código → **Conectar**. O selo do topo passa a mostrar *sincronizado HH:MM* e todo
o seu histórico sobe para o gist.

> Opcional: no PC você também pode passar a usar o endereço do passo B no lugar
> do `abrir.bat` (e instalá-lo pelo Chrome/Edge do mesmo jeito do passo 2). As
> notificações do Windows funcionam igual, e as atualizações chegam sozinhas.
> Como é outro endereço, ele começa vazio — conecte com o mesmo código e o
> histórico desce.

### D. Instalar no iPhone

1. Mande o código para você mesmo (WhatsApp, e-mail) e copie-o no iPhone. Ou, no
   app do PC, use **Copiar código (para outro aparelho)**.
2. Abra o endereço do passo B no **Safari** (tem de ser o Safari; o Chrome do
   iPhone não instala).
3. Toque em **Compartilhar** (o quadrado com a seta para cima) → **Adicionar à
   Tela de Início** → **Adicionar**.
4. Abra o app **pelo ícone** novo. Atenção: o app do ícone e a página no Safari
   guardam dados separados — use sempre o ícone.
5. **Ajustes e dados** → **Sincronizar com outros aparelhos** → **Colar** (ou toque
   no campo e cole) → **Conectar**. Em segundos o histórico do PC aparece.
6. Toque em **Permitir notificações** e depois em **Testar alarme**.

### Como a sincronização se comporta

- Cada aparelho guarda tudo localmente e **funciona sem internet**. Quando a
  conexão volta, ele envia o que ficou pendente.
- Ele busca novidades **ao abrir**, **ao voltar para o app** e **a cada minuto**;
  e envia o que mudou **uns 3 segundos depois** de cada registro.
- Registros feitos nos dois aparelhos no mesmo dia **se somam** — nada se perde
  porque o outro aparelho não tinha.
- Um ciclo apagado num aparelho some no outro e **não volta**.
- Meta do dia e folga ficam com o ajuste **mais recente**, venha de onde vier.
  O mesmo vale para os Ajustes (ciclo, intervalos, metas, tipos e rodada).
- O cronômetro em andamento **não** é sincronizado: um ciclo iniciado no PC
  aparece no iPhone quando for encerrado.
- O gist se chama *Ciclos de Estudo — sincronização entre aparelhos* e aparece
  em **gist.github.com**. Não o apague. Ele é secreto: não aparece em buscas nem
  no seu perfil, mas quem tiver o link exato consegue abrir — não compartilhe o
  link.

### E. Alarme com a tela bloqueada (Relógio do iPhone)

Com a tela bloqueada, o iOS congela qualquer app da Tela de Início, e o som do
Ciclos não toca. O Relógio do iPhone, sim. Então cada aviso do ciclo vira um
**timer do app Relógio**, ligado por um atalho do app **Atalhos**. Ele toca alto
com a tela bloqueada, até no silencioso, e só para quando você para.

**Criar o atalho (uma vez, 5 minutos):**

1. Abra o app **Atalhos** (vem no iPhone; se você apagou, baixe de novo na App
   Store).
2. Toque em **+** no canto superior direito. Toque no nome no alto da tela e
   renomeie para **`Ciclos Alarme`** — exatamente assim, com o espaço. (Se
   quiser outro nome, troque também em *Ajustes e dados → Nome do atalho*.)
3. **Adicionar Ação** → busque **Obter Números da Entrada** → toque nela. Se o
   campo azul não estiver como *Entrada do Atalho*, toque nele e escolha
   **Entrada do Atalho**. Pode aparecer no alto um bloco "Receber … entrada" —
   deixe como está.
4. Busque **Iniciar Timer** → toque nela. Ela aparece como *Iniciar timer por
   30 minutos*.
   - Toque em **30**, apague o número e escolha **Números** na barra de
     variáveis acima do teclado.
   - Toque em **minutos** e troque para **segundos**.
5. Toque em **OK**. O atalho fica assim:

   > Obter números de **Entrada do Atalho**
   > Iniciar timer por **Números** **segundos**

6. No app **Relógio** → **Timer** → **Ao Terminar**, escolha um toque bem
   audível (não *Parar Reprodução*). É esse som que vai tocar.

**Ligar e testar:**

1. No Ciclos (pelo ícone): **Ajustes e dados** → marque **Usar o Relógio do
   iPhone para os avisos** → **Testar (timer de 10 s)**.
2. O iPhone abre o Atalhos por um instante. Na primeira vez ele pode perguntar
   se permite — toque em **Permitir**. Um timer de 10 s começa no Relógio.
3. Bloqueie a tela e espere tocar. Se tocou, está pronto.

**No dia a dia:**

- **Iniciar ciclo** → o iPhone pula para o Atalhos por um instante e o timer dos
  20 min começa. Volte tocando em **◀ Ciclos** no canto superior esquerdo, ou
  simplesmente bloqueie a tela.
- **Aos 20 min o Relógio toca.** Pare o alarme e faça a pausa de 30 s olhando
  para longe. Não precisa abrir o Ciclos para isso: quando você abrir, ele já
  conta que a pausa aconteceu na hora e que você continuou estudando depois.
- Ao abrir, um cartão laranja embaixo dos botões mostra *Próximo aviso:
  intervalo dos 40 min, às HH:MM:SS* → toque em **Armar alarme**. Ele pula para
  o Atalhos, liga o timer certo, e o cartão fica verde: *Relógio armado*.
- Aos 40 min, o mesmo; o último timer é o do **fim do ciclo**. Quando ele tocar,
  abra o Ciclos e encerre.
- Se você usar **Voltar agora** numa pausa ou **Adiar 5 min** no fim do ciclo,
  o próximo timer é armado sozinho.

**Cancelar:** o Atalhos do iOS 16 não consegue cancelar um timer (só o iOS 17
em diante). Por isso, se você **pausar**, **encerrar antes** ou **descartar**
com um timer correndo, o cartão fica laranja e lembra: cancele no app
**Relógio → Timer → Cancelar** e toque em **Já cancelei**. Ao retomar depois de
uma pausa, o cartão pede para armar de novo com a hora nova.

> Ainda não pude testar num iPhone de verdade duas coisas: se o iOS 16 pergunta
> algo ao ligar um timer quando já existe outro correndo (se perguntar, confirme
> a troca), e se o atalho recebe o número direto quando chamado pelo app. O
> **Testar (timer de 10 s)** tira essa dúvida em segundos.

### O que esperar do iPhone

**Funciona:** cronômetro, intervalos, registro, calendário, saldo, edição da
rodada, tempo avulso, sem internet, a sincronização e — com o atalho do passo
E — os avisos com a tela bloqueada.

**Limites do iPhone (do sistema, não do app):**
- **Sem o atalho, o alarme só toca com o app aberto na tela.** Com ele, quem
  toca é o Relógio, e aí vale a tela bloqueada.
- O tempo continua contando certo quando o app fica congelado: ao voltar, o
  cronômetro considera que os intervalos aconteceram na hora e que você seguiu
  estudando. Se não foi assim (você largou o estudo), use **Encerrar** no
  ponto em que estiver, ou **Descartar**.
- Com o app aberto, o som dele mesmo segue a **chave de silencioso**. O timer do
  Relógio, não: toca de qualquer jeito.
- Enquanto o ciclo corre com o app aberto, ele mantém a tela acesa.

---

## Editar a rodada e lançar tempo avulso

No cartão **Rodada**, o botão **Editar** abre dois blocos:

- **Ordem das etapas** — cada linha é uma etapa. Troque o bloco pelo menu, mova
  com ↑ e ↓, remova no ×, e acrescente quantas quiser em **+ Acrescentar etapa**.
- **Tipos de bloco** — renomeie à vontade. O nome da esquerda aparece no
  cronômetro; o da direita é a etiqueta curta das fichas. **+ Novo tipo** cria
  outro. Um tipo com ciclos já registrados não pode ser apagado, só renomeado.

No cartão do dia, **Tempo avulso** lança o que você estudou sem cronômetro:
escolha o bloco, os minutos e clique em **Lançar tempo**. O tempo é repartido em
ciclos cheios — 140 min viram 2 ciclos de 50 e 40 min de sobra, que ficam como
parcial —, então uma tarde inteira lançada de uma vez fecha a meta do dia do
mesmo jeito que os ciclos cronometrados fechariam. O seletor de data no alto do
cartão leva a qualquer dia, inclusive para lançar ou apagar coisas de dias
passados; o × ao fim de cada linha remove aquele ciclo.

**O dia tem duas leituras, lado a lado.** À direita, a **linha do tempo**: cada
sessão como aconteceu, com hora de início e fim, a duração real e a marca de
parcial quando não chegou aos 50 min. Nada é reescrito — é o seu histórico
fiel. À esquerda, o **saldo de ciclos**: o tempo total do dia repartido em
blocos de 50 min, sem olhar de onde veio. Um dia de 3h29m56s aparece como
50 · 50 · 50 · 50 e 9m56s de sobra.

É daí que sai a contagem do dia. **Todo minuto conta**, venha do cronômetro ou
de um lançamento avulso, tenha a sessão fechado os 50 min ou não. A sobra fica
visível na caixa *sobra para o próximo*; ela encerra com o dia, porque sobras
não atravessam a meia-noite.

**A rodada conta diferente, e de propósito.** Um ciclo da rodada precisa ter
dono — não existe "ciclo de nada" —, então ali o tempo é somado **por bloco**:
50 min de Anki fazem um Anki. Por isso a rodada pode mostrar menos ciclos que o
dia: um dia com 40 min de Anki e 40 de TEC tem 1 ciclo no total e nenhum na
rodada. Os dois números medem coisas diferentes e é normal discordarem.

O bloco **Organização** já vem pronto para quando o tempo de estudo vira
manutenção do sistema. Ele conta na meta do dia, porque é tempo gasto, e fica
fora da rodada até você acrescentá-lo como etapa.

---

## Trancar um dia ou baixar a meta dele

No cartão do dia, a faixa **Meta deste dia** atende aos imprevistos:

- **Baixar a meta** — digite outro número no campo. Vale **só para aquele dia**;
  o padrão da semana fica intacto. Um dia com meta 3 em que você fez 3 fecha
  normalmente, sem falta.
- **Folga** — tranca o dia. Ele sai da conta do saldo: **não cobra falta e não
  gera crédito**. O que você estudar num dia de folga continua contando no tempo
  líquido, na semana, no mês e na rodada — só o saldo ignora aquele dia.
- **Voltar ao padrão** — aparece quando o dia está alterado e desfaz tudo.

No calendário, um dia de folga fica com borda tracejada, nem verde nem vazio.
Dá para marcar dias à frente: viagem, prova, semana puxada no trabalho.

---

## Saldo

O saldo é **mensal e fecha na virada do mês** — nada atravessa para o mês
seguinte, nem crédito nem dívida.

- **Crédito:** o tempo que passou da meta do dia.
- **Falta:** o tempo que faltou para a meta, nos dias já encerrados.
- **Saldo do mês:** crédito − falta − o que você lançou em *Usar saldo*. Pode
  ficar negativo, e aparece em vermelho quando fica.

O dia de hoje só entra pelo lado positivo: a falta de hoje só passa a pesar
amanhã, porque o dia ainda não acabou. Dias anteriores ao seu primeiro ciclo
registrado não geram falta. O cartão do saldo acompanha o mês escolhido no
cartão **Mês**, então dá para olhar meses fechados.

---

## Atualizar para uma versão nova

Substitua os arquivos desta pasta pelos novos (seus dados **não** ficam nos
arquivos, e sim guardados pelo navegador, então nada se perde).

No GitHub, entre no repositório `ciclos` → **Add file** → **Upload files**,
arraste os arquivos novos e **Commit changes** — o iPhone pega a versão nova na
próxima vez que abrir com internet (feche e abra o app duas vezes, se preciso).

No PC com o `abrir.bat`, depois de trocar os arquivos:

1. Abra o app e pressione **Ctrl+F5**.
2. Confira a versão em **Ajustes e dados** — a primeira linha do rodapé mostra,
   por exemplo, *Versão 5 · 31/10/2026*.
3. Se ainda aparecer a versão antiga, rode o **`abrir.bat`**, volte ao app e
   clique em **Procurar atualização**.

> A primeira versão entregue tinha um defeito aqui: ela guardava os arquivos em
> cache e servia sempre os antigos, então trocar a pasta não adiantava. Desta
> versão em diante a página é buscada na rede primeiro, e o cache só entra em
> ação quando não há servidor rodando. Para sair da versão presa, o Ctrl+F5 do
> passo 1 basta.

---

## O que esperar — e o que não esperar

**Funciona:**
- Aviso do Windows por cima de outros programas, que fica na tela até ser dispensado.
- Alarme sonoro em laço, que só para no botão **Parar som**.
- Clicar no aviso traz a janela do app para a frente.
- Funciona sem internet.

**Não funciona:**
- **O app precisa estar aberto** (pode estar minimizado) para o ciclo correr. O
  Relógio do Windows é um programa do sistema e roda sozinho; este não. Se você
  fechar a janela no meio de um ciclo, o alarme não toca.
- Se o **Assistente de foco** do Windows estiver ligado, ele segura os avisos.
  Veja em *Configurações → Sistema → Notificações*.

**Os dados ficam guardados pelo navegador** de cada aparelho e, se você conectar
a sincronização, também no gist do GitHub — que serve de cópia de segurança. Sem
sincronização, faça o backup JSON de vez em quando, principalmente antes de
limpar dados de navegação.

---

## Se quiser ir além: um .exe de verdade

Para ter uma janela que **se levanta sozinha por cima de tudo**, iniciar junto com
o Windows e ficar na bandeja do relógio, o caminho é empacotar em **Electron** ou
**Tauri** e gerar um instalador `.exe`. É mais trabalho — exige instalar o Node.js
e rodar alguns comandos — mas é o que chega mais perto do app Relógio de verdade.
Se quiser, é só pedir que eu monto o projeto pronto para compilar.

## Arquivos

| Arquivo | Para quê |
|---|---|
| `index.html` | O aplicativo inteiro |
| `manifest.webmanifest` | Nome e ícones, o que permite instalar |
| `sw.js` | Faz funcionar sem internet |
| `icon-192.png`, `icon-512.png` | Ícone do Menu Iniciar |
| `apple-touch-icon.png` | Ícone da Tela de Início do iPhone |
| `abrir.bat` | Sobe o servidor local e abre o app |
