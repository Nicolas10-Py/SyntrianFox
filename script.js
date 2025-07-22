const sendBtn = document.getElementById("sendBtn");
const micBtn = document.getElementById("micBtn");
const input = document.getElementById("userInput");
const chat = document.getElementById("chat");
const themeBtn = document.getElementById("themeBtn");
const html = document.documentElement;

sendBtn.onclick = () => {
  const msg = input.value.trim();
  if (msg) {
    addUserMessage(msg);
    addBotMessage("Essa é uma resposta simulada.");
    input.value = "";
  }
};

micBtn.onclick = () => {
  alert("🎤 Função de voz ainda não implementada");
};

themeBtn.onclick = () => {
  html.classList.toggle("dark");
  const isDark = html.classList.contains("dark");
  themeBtn.innerHTML = isDark
    ? '<i class="fas fa-sun"></i> Claro'
    : '<i class="fas fa-moon"></i> Escuro';
};

function addUserMessage(text) {
  const msg = document.createElement("div");
  msg.className = "user-message";
  msg.innerHTML = `<p style="text-align:right;">${text}</p>`;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

function addBotMessage(text) {
  const msg = document.createElement("div");
  msg.className = "bot-message";
  msg.innerHTML = `
    <p>${text}</p>
    <div class="actions">
      <span>👍</span><span>👎</span><span>🔊</span><span>✏️</span><span>🔁</span><span>↻</span>
    </div>`;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}
