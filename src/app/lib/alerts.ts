import Swal from 'sweetalert2'

export class Alert {
    info(icon:string, msg:string){
		Swal.fire({         
			title:`<i class="icon-infos ${icon}"></i>`,   
            text: msg,  
			showConfirmButton: false,  
			toast: true,
			position:'bottom-end',
            customClass:{
				popup:'alert-info',
				content:'text-info',
            },
			timer: 2000,
			timerProgressBar: true
		})   
	}

	error(icon:string, msg: string){
		Swal.fire({         
			title:`<i class="icon-errors ${icon}"></i>`, 
            text: msg,  
			showConfirmButton: false,  
			toast: true,
			position:'bottom-end',
            customClass:{
				popup:'alert-error',
				content:'text-error',
            },
			timer: 2000,
			timerProgressBar: true
		})   
	}

	warning(icon:string, msg: string){
		Swal.fire({         
			title:`<i class="icon-warning ${icon}"></i>`, 
            text: msg,  
			showConfirmButton: false,  
			toast: true,
			position:'bottom-end',
            customClass:{
				popup:'alert-warning',
				content:'text-warning'
            },
			timer: 2000,
			timerProgressBar: true
		})   
	}
	success(icon:string, msg: string){
		Swal.fire({         
			title:`<i class="icon-success ${icon}"></i>`, 
            text: msg,  
			showConfirmButton: false,  
			toast: true,
			position:'bottom-end',
            customClass:{
				popup:'alert-success',
				content:'text-success'
            },
			timer: 2000,
			timerProgressBar: true
		})   
	}

	question(){	
	}
}

/*

Swal.fire({                   
            text: msg,  
            icon:'info',
			showConfirmButton: false,  
			//toast: true,
			position:'top-end',
            customClass:{
				popup:'alert-conexion', 
				icon: 'mr-2',
				content: 'text-info'
            },
			timer: 3000,					
		})   

Swal.fire({
	// title:
	// text:
	// html:
	// icon:
	// confirmButtonText:
	// footer:
	// width:
	// padding:
	// background:
	// grow:
	// backdrop:
	// timer:
	// timerProgressBar:
	// toast:
	// position:
	// allowOutsideClick:
	// allowEscapeKey:
	// allowEnterKey:
	// stopKeydownPropagation:

	// input:
	// inputPlaceholder:
	// inputValue:
	// inputOptions:
	
	//  customClass:
	// 	container:
	// 	popup:
	// 	header:
	// 	title:
	// 	closeButton:
	// 	icon:
	// 	image:
	// 	content:
	// 	input:
	// 	actions:
	// 	confirmButton:
	// 	cancelButton:
	// 	footer:	

	// showConfirmButton:
	// confirmButtonColor:
	// confirmButtonAriaLabel:

	// showCancelButton:
	// cancelButtonText:
	// cancelButtonColor:
	// cancelButtonAriaLabel:
	
	// buttonsStyling:
	// showCloseButton:
	// closeButtonAriaLabel:


	// imageUrl:
	// imageWidth:
	// imageHeight:
	// imageAlt:
});
*/