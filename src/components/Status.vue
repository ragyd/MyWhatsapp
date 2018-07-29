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
    <div class="card-status">
    	<div class="profile-column"><img src="../imgs/profile.png" class="profile"></div>
    	<div class="descrip-column">
    		<div class="title-card"><strong>User Name</strong></div>
    		<div class="detail-card"><label>Just Now, 18:28</label></div>
    	</div>
    </div>
    <div class="card-status">
    	<div class="profile-column"><img src="../imgs/profile.png" class="profile"></div>
    	<div class="descrip-column des-final">
    		<div class="title-card"><strong>User Name</strong></div>
    		<div class="detail-card"><label>Just Now, 16:28</label></div>
    	</div>
    </div>   
    <h4 class="text-title">Viewed updates</h4>
    <div class="card-status">
    	<div class="profile-column"><img src="../imgs/profile.png" class="profile"></div>
    	<div class="descrip-column">
    		<div class="title-card"><strong>User Name</strong></div>
    		<div class="detail-card"><label>Just Now, 18:28</label></div>
    	</div>
    </div>
    <div class="card-status">
    	<div class="profile-column"><img src="../imgs/profile.png" class="profile"></div>
    	<div class="descrip-column des-final">
    		<div class="title-card"><strong>User Name</strong></div>
    		<div class="detail-card"><label>Just Now, 16:28</label></div>
    	</div>
    </div> 
     <div class="bottom-icon"><img src="../imgs/my-status.png" class="profile"></div>
  </div>
</template>

<script>
export default {
  name: 'status'
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
