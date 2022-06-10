const chatForm = document.getElementById('chat-form')
const socket=io();
const chatMsg = document.querySelector('.chat-messages') 

 
const {username, room }= Qs.parse(location.search,{
    ignoreQueryPrefix: true
})


socket.on('message', message => { 
    output(message)
    chatMsg.scrollTop = chatMsg.scrollHeight
})
document.getElementById("room-name").innerHTML=room
socket.emit('join room', {username, room})





chatForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const msg = e.target.elements.msg.value;
    socket.emit('chatMessage',msg) 
    e.target.elements.msg.value = ''
    e.target.elements.msg.focus 
})


function output(message){
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `	
    <p class="meta">${message.username} <span>${message.time }</span></p>
    <p class="text">
        ${message.text}
    </p> `
chatMsg.appendChild(div)
}

