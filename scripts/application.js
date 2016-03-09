$( document ).ready( function() {
  $('form').validate({
    submitHandler: function(form) {
      var $message = $( '<div class="message">' +
                    '<p>Congratulations on successfully filling the form.</p>' +
                    '<p>Submitting your input...</p>' +
                    '</div>' );
      $( 'body' ).prepend( $message );
      setTimeout( function() {
          $( 'form' ).get( 0 ).reset();
          location.reload();
      }, 3000 );
    },

    invalidHandler: function(event, validator) {
      var errors = validator.numberOfInvalids();
      if (errors) {
        var message = errors == 1
          ? 'highlighted field'
          : errors + ' highlighted fields';
        $(".submit-error span").html(message);
        $(".submit-error").show();
      } else {
        $(".submit-error").hide();
      }
    },
    // Rules to validate on the different form elements
    rules: {
      email: {
        required: true,
        email: true
      },
      'confirm-email': {
        required: true,
        equalTo: '#email',
        email: true
      },
      zipcode: {
        required: true,
        digits: true,
        rangelength: [5, 5]
      },
      password: {
        required: true,
        rangelength: [6, 32]
      },
      'confirm-password': {
        required: true,
        equalTo: '#password'
      }
    },
     // Messages to display when a validation rule fails on a form element
    messages: {
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com"
      },
      'confirm-email': {
        equalTo: 'This does not match the email entered above.',
        required: 'Please re-enter your email address.',
        email: 'Please use a valid email address.'
      },
      zipcode: {
        required: 'Please enter your Zip Code.',
        digits: 'Please use only digits.',
        rangelength: 'Please use exactly 5 digits.'
      },
      password: {
        required: 'Please enter your password.',
        rangelength: jQuery.validator.format('Your password must be ' +
                                    'between {0}-{1} characters long.')
      },
      'confirm-password': {
        required: 'Please re-enter your password.',
        equalTo: 'This does not match the password entered above.'
      }
    }

  });

});
