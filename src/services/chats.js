export default { 	
 	getChats(userId) {
		return Promise.resolve({ 
			Success : true, 
			Message : 'List of Chats', 
			Data : {
				Chats : [
					{ 
						Id : 1, 
						Username : "Username1", 
						Profile : "../imgs/profile.png",
						Datetime : "Just Now, 18:28",
						LastMessage : "Hi, how are you...",
						LastNumber : "595 73453459",
						Viewed : false
					},
					{ 
						Id : 2, 
						Username : "Username2", 
						Profile : "../imgs/profile.png",
						Datetime : "A year ago, 18:28",
						LastMessage : "Hi, how are you...",
						LastNumber : "595 73453459",
						Viewed : false
					},
					{ 
						Id : 3, 
						Username : "Family", 
						Profile: "../imgs/profile.png",
						Datetime : "Yesterday, 08:00",
						LastMessage : "Hello. What is the ...",
						LastNumber : "595 237849324",						
						Viewed : false
					},
					{ 
						Id : 4, 
						Username : "Dev25-Students", 
						Profile : "../imgs/profile.png",
						Datetime : "01/25/2018, 08:00",
						LastMessage : "Yesterday, your sister lost...",
						LastNumber : "595 65462434",						
						Viewed : true
					}					
				]
			}
		})
	}
}