document.addEventListener('alpine:init', () => {
    Alpine.data('signupForm', () => ({
        firstname: '',
        lastname: '',
        email: '',
        querytype: '',
        message: '',
        check: false,
        errors: {},
        success: false,

        validateForm(){
            this.errors = {}

            if(this.firstname.length == 0){
                this.errors.firstname = "This field is required"
            }
            if(this.lastname.length == 0){
                this.errors.lastname = "This field is required"
            }
            if(this.email.length == 0){
                this.errors.email = "Please enter a valid email address"
            }
            if(!this.querytype){
                this.errors.querytype = "Please select a query type"
            }
            if(this.message.length == 0){
                this.errors.message = "This field is required"
            }
            if(this.check == false){
                this.errors.check = "To submit this form, please consent to being contacted"
            }
        },


        submitForm($event){
            this.validateForm()
            console.log(this.errors);
            if(Object.keys(this.errors).length === 0){
                 console.log(this.firstname, this.lastname, this.email, this.querytype, this.message, this.check)
                 $event.target.reset();
                 this.success = true;
            } 
        }
    }))
})