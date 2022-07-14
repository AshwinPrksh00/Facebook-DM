var message = document.querySelector('.message');
var chat = document.querySelector('.chat');
message.addEventListener('click', ()=>{
    if(message.style.background == "")
    {
        message.style.background = "rgb(190, 190, 190)";
        chat.style.opacity = "1";

    }
    else
        message.style.background = "";
})



var friendmsg = document.querySelectorAll('.chatFriendMsg');
var usermsg = document.querySelectorAll('.chatUserMsg');
var fullmsgfriend = document.querySelectorAll('.fullMsgFriend');
var fullmsguser = document.querySelectorAll('.fullMsgUser');
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
for(let i=0; i<friendmsg.length; i++){
    if(i == friendmsg.length-1){
        const para = document.createElement('p');
        para.classList.add('msgtime');
        let friendName = document.querySelector('.chatTitle h1').innerHTML;
        let date = new Date();
        let timeZone = date.getHours()>=12? 'AM': 'PM';
        let datestr = date.getDate() + " "+ months[date.getMonth()]+", "+ date.getHours()+":"+ date.getMinutes()+ " "+ timeZone;
        let finalstr = friendName + " - "+datestr;
        para.innerHTML = finalstr;
        para.style.marginTop = '5px';
        para.style.fontWeight = 'bold';
        para.style.fontSize = '11px';
        fullmsgfriend[i].appendChild(para);
    }
    else
        friendmsg[i].children[0].style.opacity = "0";
}
for(let i=0; i<usermsg.length; i++){
    if(i == usermsg.length-1){
        const para1 = document.createElement('p');
        para1.classList.add('msgtime');
        let userName = 'Richard Panel';
        let date = new Date();
        let timeZone = date.getHours()>=12? 'AM': 'PM';
        let datestr = date.getDate() + " "+ months[date.getMonth()]+", "+ date.getHours()+":"+ date.getMinutes()+ " "+ timeZone;
        let finalstr = userName + " - "+datestr;
        para1.innerHTML = finalstr;
        para1.style.marginTop = '5px';
        para1.style.fontWeight = 'bold';
        para1.style.fontSize = '11px';
        fullmsguser[i].appendChild(para1);
    }
    else
        usermsg[i].children[0].style.opacity = "0";
}