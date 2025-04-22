
# 📚 **Exercício de Testes Unitários: Jogo da Forca com Jest**

## 🧑‍💻 **Objetivo**

O objetivo deste exercício é testar a lógica da classe `JogoDaForca` utilizando a ferramenta de testes unitários **Jest**. Você deverá escrever os testes para garantir que as funcionalidades da classe estejam corretas e funcionando conforme o esperado.

## 🚀 **Instruções**

1. **Instale o Jest**: Caso ainda não tenha o Jest instalado no seu projeto, execute o seguinte comando:

   ```bash
   npm install --save-dev jest
   ```

2. **Crie os testes**: Utilize o Jest para escrever testes unitários que validem o comportamento da classe `JogoDaForca`.

3. **Executar os testes**: Para rodar os testes, utilize o seguinte comando:

   ```bash
   npm test
   ```

## 🧪 **Casos de Teste para Implementação**

### 1. **Inicialização do Jogo**

**Objetivo**: Verificar se a classe `JogoDaForca` inicializa corretamente com a palavra secreta oculta e o número de tentativas correto.

**Passos**:
- Instancie a classe `JogoDaForca` com a palavra secreta "banana".
- Verifique se a palavra secreta está oculta corretamente (deve ser exibida como "______").
- Verifique se o número de tentativas é 6.
- Verifique se a lista de letras chutadas está vazia.

**Tarefa**:
Implemente o teste para verificar esses comportamentos. Use o método `getPalavraOculta()` para verificar a palavra oculta e `getTentativasRestantes()` para as tentativas.

---

### 2. **Chute de Letra Correta**

**Objetivo**: Verificar se o jogo lida corretamente com uma letra correta.

**Passos**:
- Instancie a classe `JogoDaForca` com a palavra "banana".
- Chute a letra "a".
- Verifique se a letra "a" foi revelada nas posições corretas (a palavra oculta deve ser `_a_a__a`).
- Verifique se o número de tentativas permanece 6.
- Verifique se a letra "a" está registrada na lista de letras chutadas.

**Tarefa**:
Implemente o teste para verificar se a letra correta é revelada e se o número de tentativas não é alterado.

---

### 3. **Chute de Letra Incorreta**

**Objetivo**: Verificar se o número de tentativas diminui corretamente quando o chute é incorreto.

**Passos**:
- Instancie a classe `JogoDaForca` com a palavra "banana".
- Chute a letra incorreta "z".
- Verifique se o número de tentativas diminui para 5.
- Verifique se a letra "z" foi registrada na lista de letras chutadas.
- Verifique se a palavra oculta não foi alterada.

**Tarefa**:
Implemente o teste para verificar se o número de tentativas diminui corretamente e se a letra incorreta foi registrada.

---

### 4. **Chute de Letra Repetida**

**Objetivo**: Verificar se o jogo lida corretamente com tentativas de chutar a mesma letra repetidamente.

**Passos**:
- Instancie a classe `JogoDaForca` com a palavra "banana".
- Chute a letra "a" uma vez.
- Chute a letra "a" novamente.
- Verifique se a lista de letras chutadas contém a letra "a" apenas uma vez.
- Verifique se o número de tentativas não foi alterado.

**Tarefa**:
Implemente o teste para garantir que a letra "a" seja registrada apenas uma vez e que o número de tentativas não diminua.

---

### 5. **Vitória do Jogo**

**Objetivo**: Verificar se o jogo reconhece a vitória quando todas as letras são adivinhadas corretamente.

**Passos**:
- Instancie a classe `JogoDaForca` com a palavra "banana".
- Chute as letras corretas "b", "a", e "n" nas ordens corretas.
- Verifique se a palavra secreta foi totalmente revelada como "banana".
- Verifique se o jogo reconhece que o jogador venceu.

**Tarefa**:
Implemente o teste para verificar se o jogo reconhece a vitória corretamente quando todas as letras forem adivinhadas.

---

### 6. **Derrota do Jogo**

**Objetivo**: Verificar se o jogo reconhece a derrota quando o número de tentativas chega a 0.

**Passos**:
- Instancie a classe `JogoDaForca` com a palavra "banana".
- Chute letras incorretas até o número de tentativas chegar a 0.
- Verifique se o número de tentativas chega a 0.
- Verifique se o jogo reconhece a derrota.

**Tarefa**:
Implemente o teste para garantir que o jogo reconheça corretamente a derrota quando as tentativas acabarem.

---

### 7. **Reinício do Jogo**

**Objetivo**: Verificar se o jogo é reiniciado corretamente.

**Passos**:
- Instancie a classe `JogoDaForca` com a palavra "banana".
- Chute algumas letras (como "b" e "x").
- Chame o método de reinício do jogo.
- Verifique se a palavra secreta é ocultada novamente.
- Verifique se o número de tentativas é restaurado para 6.
- Verifique se a lista de letras chutadas está vazia.

**Tarefa**:
Implemente o teste para garantir que o jogo reinicie corretamente e volte ao estado inicial.

---

### 8. **Validação de Entrada de Letra**

**Objetivo**: Verificar se o jogo rejeita entradas inválidas, como letras vazias, números ou caracteres especiais.

**Passos**:
- Instancie a classe `JogoDaForca` com a palavra "banana".
- Tente chutar uma entrada vazia.
- Tente chutar um número (como "1").
- Tente chutar um caractere especial (como "#").
- Verifique se o jogo rejeita essas entradas e lança uma exceção com a mensagem "Entrada inválida".

**Tarefa**:
Implemente o teste para verificar se o jogo lida corretamente com entradas inválidas.

---

### 9. **Verificação de Maiúsculas e Minúsculas**

**Objetivo**: Testar se o jogo é insensível a maiúsculas e minúsculas.

**Passos**:
- Instancie a classe `JogoDaForca` com a palavra "banana".
- Chute a letra "b" em maiúscula e depois em minúscula.
- Verifique se a palavra oculta é atualizada corretamente e se a letra "b" foi registrada apenas uma vez.

**Tarefa**:
Implemente o teste para garantir que o jogo seja insensível a maiúsculas e minúsculas.

---

### 10. **Verificar Tentativas Restantes**

**Objetivo**: Verificar se o número de tentativas restantes diminui corretamente após chutes incorretos.

**Passos**:
- Instancie a classe `JogoDaForca` com a palavra "banana".
- Chute algumas letras incorretas.
- Verifique se o número de tentativas diminui corretamente.

**Tarefa**:
Implemente o teste para garantir que o número de tentativas diminua corretamente após um chute incorreto.

---

## 🧑‍🏫 **Dicas para Implementação dos Testes**

- Utilize os métodos de acesso, como `getPalavraOculta()`, `getTentativasRestantes()`, `getLetrasChutadas()`, etc., para verificar os estados internos do jogo.
- Certifique-se de que os testes verifiquem não apenas o estado após cada ação, mas também se as exceções corretas são lançadas em casos de entradas inválidas.
- Verifique a consistência dos dados, como tentativas e letras chutadas, após cada ação.

---

## 🏅 **Conclusão**

Neste exercício, você aprendeu a escrever testes unitários com Jest para garantir que a classe `JogoDaForca` funcione corretamente. Através desses testes, você pode verificar se a lógica do jogo, como chutes corretos e incorretos, reinício do jogo, vitória e derrota, entre outros, estão sendo executadas corretamente.

Boa sorte e bons testes! 🚀

---

Se você precisar de mais informações ou detalhes sobre a implementação, não hesite em perguntar!
