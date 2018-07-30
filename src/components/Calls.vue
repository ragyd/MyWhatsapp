<template>
  <div class="calls tabcontent">    
    <div class="card-status" v-for="call in calls">
    	<div class="profile-column"><img src="../imgs/profile.png" class="profile"></div>
    	<div class="descrip-column">
    		<div class="title-card"><strong>{{call.Username}}</strong></div>
    		<div class="detail-card"> 
                <span v-if="call.Status == 'received'" class="received-call">/</span> 
                <span v-if="call.Status == 'lost'" class="lost-call">/</span> 
                <span v-if="call.Status == 'answered'" class="my-call">/</span> 
                <label>{{call.Datetime}}</label></div>
    	</div>
    </div>
    <div class="bottom-icon"><img src="../imgs/my-call.jpg" class="profile"></div>
  </div>
</template>

<script>
import Calls from '../services/calls';
export default {
  name: 'calls',
  mounted() {
    this.getCalls();
  },
  data() {
    return {
      calls: ''
    }
  }, 
  methods: {
    getCalls() {
      const userId = 1;

      Calls.getCalls(userId)
        .then(data => {
          console.log(data);
          if(data['Success'] === true) {
            console.log(data['Message']);           
            this.calls = data.Data.Calls;
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

<style type="text/css">
	.received-call {
		color: #5fcd5f;
		padding: 10px;
	}

	.lost-call {
		color: red;
		padding: 10px;
	}

	.my-call {
		color: rgb(57, 183, 229);
		padding: 10px;
	}
  
	.bottom-icon {
	    position:absolute;
	    right: 50px;
	    cursor: pointer;
	}
</style>