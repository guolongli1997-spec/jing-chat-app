/**
 * LLM Chat App Frontend
 *
 * Handles the chat UI interactions and communication with the backend API.
 */

// DOM elements
const chatMessages = document.getElementById("chat-messages");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");
const typingIndicator = document.getElementById("typing-indicator");

// Chat state
let chatHistory = [
	{
		role: "assistant",
		content:
			"Hello! I'm an LLM chat app powered by Cloudflare Workers AI. How can I help you today?",
	},
];
let isProcessing = false;

function scrollToBottom() {
	chatMessages.scrollTop = chatMessages.scrollHeight;
}

function resizeInput() {
	userInput.style.height = "auto";
	userInput.style.height = Math.min(userInput.scrollHeight, 140) + "px";
}

function updateSendState() {
	sendButton.disabled = isProcessing || userInput.value.trim() === "";
}
