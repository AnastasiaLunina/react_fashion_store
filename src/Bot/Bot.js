



const chatWidget = document.querySelector('.chat-widget');
const inputField = document.querySelector('.chat-widget__input');
const messages = document.querySelector( '.chat-widget__messages' );
const messageText = document.querySelector( '.message__text' );
const messageClient = document.querySelector( '.message_client' );
const enter = 13;
let timer;

const botReplies = ['Добрый день!',
                    'Вы не купили ни одного товара для того, чтобы так с нами разговаривать!',
                    'Кто тут?',
                    'Где ваша совесть?',
                    'К сожалению, все операторы сейчас заняты. Не пишите нам больше',
                    'Добрый день! До свидания!',
                    'Добрый день, мы ещё не проснулись. Позвоните через 10 лет',
                    'Мы ничего не будем вам продавать!',
                    ];

chatWidget.addEventListener('click', getChatWidget);

inputField.addEventListener('keydown', function(e) {
    if (e.keyCode === enter) {
        userSendMessage();
        setTimeout(botReplyMessage, 1000);
    }
});

function startTimer() {
    return timer === setTimeout(askQuestion, 30000);
}
                    
function stopTimer() {
    return clearTimeout(timer);
}

function askQuestion() {
    if (chatWidget.classList.contains('chat-widget_active')){
        messages.innerHTML += `
        <div class="message">
          <div class="message__time">${getTime()}</div>
          <div class="message__text">Спите что ли?</div>
        </div>
      `;
        messages.scrollIntoView(false);
    }
}

function getChatWidget() {
    chatWidget.classList.add('chat-widget_active');
    messageText.style.display = 'none';
    messageClient.style.display = 'none';
}

function getRandomReply() {
    let randomReply = botReplies[Math.floor(Math.random() * botReplies.length)];
    messageText.textContent = randomReply;
    return messageText.textContent;
}

function getTime() {
   return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function userSendMessage() {
    startTimer();
    messages.innerHTML += `
    <div class="message message_client">
        <div class="message__time">${getTime()}</div>
        <div class="message__text">${inputField.value}</div>
    </div>
`;
    inputField.value = '';
    messages.scrollIntoView(false);
    stopTimer();
}

function botReplyMessage() {
    messages.innerHTML += `
    <div class="message">
        <div class="message__time">${getTime()}</div>
        <div class="message__text">${getRandomReply()}</div>
    </div>
`;
    messages.scrollIntoView(false);
}