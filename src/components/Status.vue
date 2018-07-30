<template>
  <div class="status tabcontent">    
    <div class="card-status">
    	<div class="profile-column"><img src="../imgs/my-status.png" class="profile"></div>
    	<div class="descrip-column des-final">
    		<div class="title-card"><strong>My Status</strong></div>
    		<div class="detail-card"><label>tap to add status update</label></div>
    	</div>
    </div>
    <h4 class="text-title">Recent updates</h4>
    <div class="card-status"  v-for="state in status" v-if="state.Viewed==true">
      <div class="profile-column"><img src="../imgs/profile.png" class="profile"></div>
      <div class="descrip-column">
        <div class="title-card"><strong>{{state.Username}}</strong></div>
        <div class="detail-card"><label>{{state.Datetime}}</label></div>
      </div>
    </div>  
    <h4 class="text-title">Viewed updates</h4>
    <div class="card-status"  v-for="state in status" v-if="state.Viewed==false">
      <div class="profile-column"><img src="../imgs/profile.png" class="profile"></div>
      <div class="descrip-column">
        <div class="title-card"><strong>{{state.Username}}</strong></div>
        <div class="detail-card"><label>{{state.Datetime}}</label></div>
      </div>
    </div>
    <div class="bottom-icon"><img src="../imgs/my-status.png" class="profile"></div>
  </div>
</template>

<script>
import Status from '../services/status';
export default {
  name: 'status',
  mounted() {
    this.getStatus();
  },
  data() {
    return {
      status: ''
    }
  }, 
  methods: {
    getStatus() {
      const userId = 1;

      Status.getStatus(userId)
        .then(data => {
          console.log(data);
          if(data['Success'] === true) {
            console.log(data['Message']);           
            this.status = data.Data.Status;
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
.card-status {
	width: 100%;
	height: 100px;
  cursor: pointer;
}

.profile-column {
  float: left;
  width: 15%;
  padding: 5px;
}

.descrip-column {
  float: left;
  text-align: left;
  width: 80%;
  padding: 5px;
  border-bottom: solid 2px #d6d4d4;
}

.des-final{
  border-bottom: solid 0px #d6d4d4;
}

.profile {
	height: 70px;
	width: 70px;
}

.title-card {
	padding: 10px;
}

.detail-card {
	padding: 0px 0px 20px 10px;
	color: grey;
}
.text-title {
	color: #005e54;
	text-align: left;
	padding: 10px;	
	background: #d6d4d4;
}
</style>
