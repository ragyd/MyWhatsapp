<template>
  <div class="calls tabcontent">    
    <div class="card-status">
    	<div class="profile-column"><img src="../imgs/profile.png" class="profile"></div>
    	<div class="descrip-column">
    		<div class="title-card"><strong>User Name</strong></div>
    		<div class="detail-card"> <span class="received-call">/</span> <label>2 minutes ago, 18:28</label></div>
    	</div>
    </div>
    <div class="card-status">
    	<div class="profile-column"><img src="../imgs/profile.png" class="profile"></div>
    	<div class="descrip-column">
    		<div class="title-card"><strong>User Name</strong></div>
    		<div class="detail-card"> <span class="my-call">/</span> <label>2 hours ago, 18:28</label></div>
    	</div>
    </div>    
    <div class="card-status">
    	<div class="profile-column"><img src="../imgs/profile.png" class="profile"></div>
    	<div class="descrip-column des-final">
    		<div class="title-card"><strong>User Name</strong></div>
    		<div class="detail-card"> <span class="lost-call">/</span> <label>Today, 16:28</label></div>
    	</div>
    </div> 
    <div class="bottom-icon"><img src="../imgs/my-call.jpg" class="profile"></div>
  </div>
</template>

<script>
export default {
  name: 'calls'
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