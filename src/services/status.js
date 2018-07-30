export default { 	
 	getStatus(userId) {
		return Promise.resolve({ 
			Success : true, 
			Message : 'List of Status', 
			Data : {
				Status : [
					{ 
						Id : 1, 
						Username : "Username1", 
						Profile : "../imgs/profile.png",
						Datetime : "Just Now, 18:28",
						Viewed : false
					},
					{ 
						Id : 2, 
						Username : "Username2", 
						Profile: "../imgs/profile.png",
						Datetime : "Yesterday, 08:00",
						Viewed : false
					},
					{ 
						Id : 3, 
						Username : "Username3", 
						Profile : "../imgs/profile.png",
						Datetime : "01/25/2018, 08:00",
						Viewed : true
					}					
				]
			}
		})
	}
}