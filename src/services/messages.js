import axios from 'axios';

export default {
 	getMessages(chatId) {
		return Promise.resolve({
			Success : true, 
			Message : 'List of Messages', 
			Data : {
				Messages : [
				'jdas dasjdhaskd asjdasd sdhaklsdasdl dasdlkasjd dasdsadasd ssdfsdf',
				'dasljndas ldkasd asdjasd aksdjas ddjsad askdjasd ksjdas dksajdas dkasld',
				'asdjk asdaskd sadmsand dm,asdn sadmsand sadkasd',
				'kldnsa dasd dakdnas daskdd asdñgf ghlhk adasd',
				',.mad aslñsad sa,.d a,.sddhjf dfnmsdgf sdfsdjfhsdf',
				'kjlsad laksdj dslkajsd sadkljsda djashd asdlkdas dklasdj sad'					
				]
			}
		})
	}
}