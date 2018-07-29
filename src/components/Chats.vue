<template>
  <div class="chats tabcontent">
    <div class="card-status" onclick="window.location.href='#/messages'">
      <div class="profile-column"><img src="../imgs/group.png" class="profile"></div>
      <div class="descrip-column">
        <div class="title-card"><strong>Dev25-Students</strong></div>
        <div class="detail-card"> <label>+591 73548292: asfd</label></div>
      </div>
    </div>
    <div class="card-status" onclick="window.location.href='#/messages'">
      <div class="profile-column"><img src="../imgs/group.png" class="profile"></div>
      <div class="descrip-column">
        <div class="title-card"><strong>Family</strong></div>
        <div class="detail-card"> <label>Dad: dasjkdha</label></div>
      </div>
    </div>  
      <div class="card-status" onclick="window.location.href='#/messages'">
      <div class="profile-column"><img src="../imgs/group.png" class="profile"></div>
      <div class="descrip-column">
        <div class="title-card"><strong>Work</strong></div>
        <div class="detail-card"> <label>Boss: dasjkdha</label></div>
      </div>
    </div>  
    <div class="card-status" onclick="window.location.href='#/messages'">
      <div class="profile-column"><img src="../imgs/group.png" class="profile"></div>
      <div class="descrip-column des-final">
        <div class="title-card"><strong>Group</strong></div>
        <div class="detail-card"> <label>The messages in this group</label></div>
      </div>
    </div>
    <div class="bottom-icon"><img src="../imgs/my-message.png" class="profile"></div>
  </div>
</template>

<script>
export default {
  name: 'chats'
};
</script>