(function ($) {
  $(document).ready(function(){

	jQuery.validator.addMethod("lettersonly", function(value, element) {
		return this.optional(element) || /^[a-zéèê\s']*$/i.test(value);
	}, "Lettres only");
	
	jQuery.validator.addMethod("exactlength", function(value, element, param) {
	 return this.optional(element) || value.length == param;
	}, jQuery.format("only 5 character."));
	
	
    $('#myform').validate({ // initialize the plugin
        rules: {
			
            title: {
                required: true,
            },
            name: {
                required: true,
                lettersonly: true,
            },
            surname: {
                required: true,
				lettersonly: true,
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
				number: true,
				exactlength:10
            },
            zipcode: {
                required: true,
				number: true,
				exactlength:5
            },
            city: {
                required: true,
				lettersonly: true,
            },
            contact_at: {
                required: true,
            },
            from_hour: {
                required: true,
            },
            from_min: {
                required: true,
            },	
        },
        submitHandler: function (form) { // for demo  
		   form.submit();
        } 
		
    });
  
  });
})(jQuery);
