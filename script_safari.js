document.addEventListener("DOMContentLoaded", () => {
  const chatContent = document.getElementById("chat-content");
  const chatInputField = document.getElementById("chat-input-field");
  const sendMessageBtn = document.getElementById("send-message-btn");

  let userName = "";
  let step = 0;

  const botReplies = [
    "Hi there! 👋 Welcome to Lexify! I’m here to help. Could you please tell me your name?",
    "Great to meet you, {name}! How would you like to proceed? We offer both online and in-person consultations.",
    "You’ve selected an online consultation. I’ll connect you with an expert shortly. Please wait...",
    "You’ve chosen an in-person consultation in Hong Kong. I’ll schedule your meeting. Please wait...",
    "Thank you for choosing Lexify! A confirmation email has been sent to you. If you need anything else, feel free to ask!"
  ];

  const addMessage = (message, sender = "bot") => {
    const messageDiv = document.createElement("div");
    messageDiv.className = sender === "bot" ? "bot-message" : "user-message";
    messageDiv.textContent = message;
    chatContent.appendChild(messageDiv);
    chatContent.scrollTop = chatContent.scrollHeight;
  };

  const handleUserMessage = () => {
    const userMessage = chatInputField.value.trim();
    if (!userMessage) return;

    addMessage(userMessage, "user");
    chatInputField.value = "";

    if (step === 0) {
      userName = userMessage;
      addMessage(botReplies[step].replace("{name}", userName));
      step++;
    } else if (step === 1) {
      if (userMessage.toLowerCase().includes("online")) {
        addMessage(botReplies[2]);
        step++;
      } else if (userMessage.toLowerCase().includes("in-person")) {
        addMessage(botReplies[3]);
        step++;
      } else {
        addMessage("I didn’t quite catch that. Please type 'online' or 'in-person'.");
      }
    } else if (step >= 2) {
      addMessage(botReplies[4]);
    }
  };

  sendMessageBtn.addEventListener("click", handleUserMessage);
  chatInputField.addEventListener("keypress", (event) => {
    if (event.key === "Enter") handleUserMessage();
  });

  // Start the conversation
  addMessage(botReplies[0]);
});
