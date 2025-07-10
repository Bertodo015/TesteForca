
# 📚 **Testes Unitários: Jogo da Forca com Jest**

## 🧑‍💻 **Link do site hospedado**



## 🚀 **Instruções**

O aquivo da pasta .github executará testes automáticos para cada push e pull_request realizado. Irá instalar as dependências necessárias e rodar os testes para mostrar a funcionalidade dos casos de teste utilizados.

## 🧪 **Descrição dos Casos de Teste**

### 1. **Inicialização do Jogo**

**Objetivo**: Verificar se a classe `JogoDaForca` inicializa corretamente com a palavra secreta oculta e o número de tentativas correto.

**Passos**:
- Instancie a classe `JogoDaForca` com a palavra secreta "banana".
- Verifique se o número de tentativas é 6.
- Verifique se a lista de letras chutadas está vazia.


### 2. **Chute de Letra Correta**

**Objetivo**: Verificar se o jogo lida corretamente com uma letra correta.

**Passos**:
- Instancie a classe `JogoDaForca` com a palavra "banana".
- Chute a letra "a".
- Verifique se a letra "a" foi revelada nas posições corretas (a palavra oculta deve ser `_a_a__a`).
- Verifique se o número de tentativas permanece 6.
- Verifique se a letra "a" está registrada na lista de letras chutadas.


### 3. **Chute de Letra Incorreta**

**Objetivo**: Verificar se o número de tentativas diminui corretamente quando o chute é incorreto.

**Passos**:
- Instancie a classe `JogoDaForca` com a palavra "banana".
- Chute a letra incorreta "z".
- Verifique se o número de tentativas diminui para 5.
- Verifique se a letra "z" foi registrada na lista de letras chutadas.
- Verifique se a palavra oculta não foi alterada.


### 4. **Chute de Letra Repetida**

**Objetivo**: Verificar se o jogo lida corretamente com tentativas de chutar a mesma letra repetidamente.

**Passos**:
- Instancie a classe `JogoDaForca` com a palavra "banana".
- Chute a letra "a" uma vez.
- Chute a letra "a" novamente.
- Verifique se a lista de letras chutadas contém a letra "a" apenas uma vez.
- Verifique se o número de tentativas não foi alterado.


### 5. **Vitória do Jogo**

**Objetivo**: Verificar se o jogo reconhece a vitória quando todas as letras são adivinhadas corretamente.

**Passos**:
- Instancie a classe `JogoDaForca` com a palavra "banana".
- Chute as letras corretas "b", "a", e "n" nas ordens corretas.
- Verifique se a palavra secreta foi totalmente revelada como "banana".
- Verifique se o jogo reconhece que o jogador venceu.


### 6. **Derrota do Jogo**

**Objetivo**: Verificar se o jogo reconhece a derrota quando o número de tentativas chega a 0.

**Passos**:
- Instancie a classe `JogoDaForca` com a palavra "banana".
- Chute letras incorretas até o número de tentativas chegar a 0.
- Verifique se o número de tentativas chega a 0.
- Verifique se o jogo reconhece a derrota.


### 7. **Reinício do Jogo**

**Objetivo**: Verificar se o jogo é reiniciado corretamente.

**Passos**:
- Instancie a classe `JogoDaForca` com a palavra "banana".
- Chute algumas letras (como "b" e "x").
- Chame o método de reinício do jogo.
- Verifique se a palavra secreta é ocultada novamente.
- Verifique se o número de tentativas é restaurado para 6.
- Verifique se a lista de letras chutadas está vazia.


### 8. **Validação de Entrada de Letra**

**Objetivo**: Verificar se o jogo rejeita entradas inválidas, como letras vazias, números ou caracteres especiais.

**Passos**:
- Instancie a classe `JogoDaForca` com a palavra "banana".
- Tente chutar uma entrada vazia.
- Tente chutar um número (como "1").
- Tente chutar um caractere especial (como "#").
- Verifique se o jogo rejeita essas entradas e lança uma exceção com a mensagem "Entrada inválida".



### 9. **Verificação de Maiúsculas e Minúsculas**

**Objetivo**: Testar se o jogo é insensível a maiúsculas e minúsculas.

**Passos**:
- Instancie a classe `JogoDaForca` com a palavra "banana".
- Chute a letra "b" em maiúscula e depois em minúscula.
- Verifique se a palavra oculta é atualizada corretamente e se a letra "b" foi registrada apenas uma vez.


### 10. **Verificar Tentativas Restantes**

**Objetivo**: Verificar se o número de tentativas restantes diminui corretamente após chutes incorretos.

**Passos**:
- Instancie a classe `JogoDaForca` com a palavra "banana".
- Chute algumas letras incorretas.
- Verifique se o número de tentativas diminui corretamente.
