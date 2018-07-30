<template>
  <div class="chats tabcontent">
    <div v-for="chat in chats">
      <div class="card-status" @click="goToMessages(chat.Id)">
        <div class="profile-column"><img src="../imgs/group.png" class="profile"></div>
        <div class="descrip-column">
          <div class="title-card"><strong>{{chat.Username}}</strong></div>
          <div class="detail-card"> <label>{{chat.LastNumber}}: {{chat.LastMessage}}</label></div>
        </div>
      </div>
    </div>
    <div class="bottom-icon"><img src="../imgs/my-message.png" class="profile"></div>
  </div>
</template>

<script>
import Chats from '../services/chats';
export default {
  name: 'chats',
  mounted() {
    this.getChats();
  },
  data() {
    return {
      chats: ''
    }
  }, 
  methods: {
    getChats() {
      const userId = 1;
      Chats.getChats(userId)
        .then(data => {
          console.log(data);
          if(data['Success'] === true) {
            console.log(data['Message']);           
            this.chats = data.Data.Chats;
          } else {
            console.log(data['Message']);
            alert(data['Message']);
          }
        })
        .catch(error => {
          console.log(error);
          alert(error);
        })
    },
    goToMessages: function (chatId) {
      localStorage.setItem('chatId',chatId);
      //window.location.href='/#messages?chatId='+chatId;
      this.$router.push('/messages?chatId='+chatId)
    }    
  }

};
</script>