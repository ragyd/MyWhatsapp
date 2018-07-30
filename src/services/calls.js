export default { 	
 	getCalls(userId) {
		return Promise.resolve({ 
			Success : true, 
			Message : 'List of Calls', 
			Data : {
				Calls : [
					{ 
						Id : 1, 
						Username : "Username1", 
						Profile : "../imgs/profile.png",
						Datetime : "Just Now, 18:28",
						Status : 'lost'
					},
					{ 
						Id : 2, 
						Username : "Username2", 
						Profile: "../imgs/profile.png",
						Datetime : "Yesterday, 08:00",
						Status : 'received'
					},
					{ 
						Id : 3, 
						Username : "Username3", 
						Profile : "../imgs/profile.png",
						Datetime : "01/25/2018, 08:00",
						Status : 'answered'
					}					
				]
			}
		})
	}
}