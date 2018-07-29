<template>
	<div class="tabcontent messages">    
    <div class="message-received" v-for="message in messages">
      <p>{{message}}</p>
		</div>
		<div class="message-sent" >
      <p>my answer</p>
		</div>
    <form class="answer">
      <input class="input-msg" name="input" placeholder="A message" autofocus>
      <a class="button-circle" href="#/messages">send</a>
    </form>
  </div>
</template>

<script>
import Messages from '../services/messages';
export default {
  name: 'messages',
    mounted() {
  	this.getMessages();
  },
  data() {
		return {
  		messages: ''
  	}
  }
  , 
  methods: {
	  getMessages() {
	  		const chatId = 1;

		  	Messages.getMessages(chatId)
		    .then(data => {
		      console.log(data);
		      if(data['Success'] === true) {
		        console.log(data['Message']);		        
		        this.messages = data.Data.Messages;
		      } else {
		        console.log(data['Message']);
		        alert(data['Message']);
		      }
		    })
		    .catch(error => {
		      console.log(error);
		      alert(error);
		    })
		}
	} 
};
</script>
<style>
.message-sent {
  background: #e1ffc7;
  border-radius: 5px 0px 5px 5px;
  float: right;
  padding: 0px 5px 5px 5px;
  text-align: right;
}

.message-received {
	width: 70%;
  background: #fff;
  padding: 0px 5px 5px 5px;
  border-radius: 0px 5px 5px 5px;
  text-align: left;
}
.messages {
	background: #b1deda;
}
.answer {
	margin-top: 80px;
	width: 100%;
}
.input-msg {
  font-size: 16px;
  padding: 10px;
  min-width: 70%;
}
.button-circle {
	float: right;
	width: 20%;
	background: #008a7c;
  border-radius: 50%;
  color: #fff;
  position: relative;
  width: 48px;
  height: 48px;
  padding: 10px;
}
</style>