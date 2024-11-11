
function readURL(event, input) {
  var output = document.getElementById(input);
  output.innerHTML = event.target.files[0].name;
}
 
function id_proof(event, id) {
  readURL(event, id + 's');
}
 

$(function(){
  
  // update personal info
  $('#update-personal-info-form').on('submit', function(e){
    e.preventDefault();
    $.ajax({
      url: $(this).attr('action'),
      type: 'POST',
      data: $('#update-personal-info-form').serialize(),
      success: function(results) {
        $('#btn-update-personal-info').removeAttr('disabled');
        if(results.status == 1) {
          toastr.options.timeOut = 2000;
          toastr.success(`${results.msg}`);
          
        }else {
          toastr.options.timeOut = 2000;
          toastr.error(`${results.msg}`);
        }
        //$('#update-personal-info-form')[0].reset();
      },
      error: function(err,status,res) {
        let errorObject = err.responseJSON.errors;
        for(let i in errorObject) {
          if(errorObject.hasOwnProperty(i)) {
            $('#'+i+'-error').text(errorObject[i][0]);
          }
        }
        // show server errors 
        let serverErr = err.responseJSON.msg;
        if(serverErr) {
          toastr.options.timeOut = 5000;
          toastr.error(serverErr);
        }
        $('#btn-update-personal-info').removeAttr('disabled');
      },
      beforeSend: function() {
        $(document).find('span.error-text').text('');
        $('#btn-update-personal-info').attr('disabled', 'disabled');
      }
    });
  });


  // update content manager personal info
  $('#update-manager-info').on('submit', function(e){
    e.preventDefault();
    let el  = $('#update-manager-info');
    let btn = $('#btn-manager-update');
 
    $.ajax({
      url: $(this).attr('action'),
      type: 'PUT',
      data: el.serialize(),
      success: function(results) {
        btn.removeAttr('disabled');
        if(results.status == 1) {
          toastr.options.timeOut = 2000;
          toastr.success(`${results.msg}`);
        }else {
          toastr.options.timeOut = 2000;
          toastr.error(`${results.msg}`);
        }
        //$('#update-personal-info-form')[0].reset();
      },
      error: function(err,status,res) {
        // show form input error messages
        let errorObject = err.responseJSON.errors;
        for(let i in errorObject) {
          if(errorObject.hasOwnProperty(i)) {
            $(el).find(`#${i}-error`).text(errorObject[i][0]);
          }
        }

        // show server error
        let serverErr = err.responseJSON.msg;
        if(serverErr) {
          toastr.options.timeOut = 5000;
          toastr.error(serverErr);
        }
        btn.removeAttr('disabled');
      },
      beforeSend: function() {
        $(el).find('span.error-text').text('');
        btn.attr('disabled', 'disabled');
      }
    });
  });

  // update profile password
  $('#update-profile-password').on('submit', function(e){
    e.preventDefault();
    $.ajax({
      url: $(this).attr('action'),
      type: 'POST',
      data: $('#update-profile-password').serialize(),
      success: function(results) {
        $('#btn-password-update').removeAttr('disabled');
        if(results.status == 1) {
          toastr.options.timeOut = 2000;
          toastr.success(`${results.msg}`);
          setTimeout(function(){
            location.href = results.url;
          }, 300);
        }else {
          toastr.options.timeOut = 2000;
          toastr.error(`${results.msg}`);
        }
        //$('#update-personal-info-form')[0].reset();// clear form fields
      },
      error: function(err,status,res) {
        let errorObject = err.responseJSON.errors;
        for(let i in errorObject) {
          if(errorObject.hasOwnProperty(i)) {
            $('#'+i+'-error').text(errorObject[i][0]);
          }
        }
        // show server error messages 
        let serverErr = err.responseJSON.msg;
        if(serverErr) {
          toastr.options.timeOut = 5000;
          toastr.error(serverErr);
        }
        $('#btn-password-update').removeAttr('disabled');
      },
      beforeSend: function() {
        $('#update-profile-password').find('span.error-text').text('');
        $('#btn-password-update').attr('disabled', 'disabled');
      }
    });
  });

  // update content manager password
  $('#update-manager-password').on('submit', function(e){
    let el                 = $('#update-manager-password');
    let btnManagerPassword = $('#btn-update-manager-password');  

    e.preventDefault();
    $.ajax({
      url: $(this).attr('action'),
      type: 'PUT',
      data: $(el).serialize(),
      success: function(results) {
        $(btnManagerPassword).removeAttr('disabled');
        if(results.status == 1) {
          toastr.options.timeOut = 2000;
          toastr.success(`${results.msg}`);
        }else {
          toastr.options.timeOut = 2000;
          toastr.error(`${results.msg}`);
        }
        $(el)[0].reset();
      },
      error: function(err,status,res) {
        let errorObject = err.responseJSON.errors;
        for(let i in errorObject) {
          if(errorObject.hasOwnProperty(i)) {
            $('#'+i+'-error').text(errorObject[i][0]);
          }
        }

        // show server error
        let serverErr = err.responseJSON.msg;
        if(serverErr) {
          toastr.options.timeOut = 5000;
          toastr.error(serverErr);
        }
        
        $(btnManagerPassword).removeAttr('disabled');
      },
      beforeSend: function() {
        $(el).find('span.error-text').text('');
        $(btnManagerPassword).attr('disabled', 'disabled');
      }
    });
  });
  
  // update avatar
  $('#profile-avatar-update').on('submit', function(e){
    e.preventDefault();

    let formData = new FormData($('#profile-avatar-update')[0]);
    //formData.append("avatar", $('#avatar').files[0]);

    $.ajax({
      url: $(this).attr('action'),
      type: 'POST',
      data: formData,
      contentType: false,
      cache: false,
      processData: false,
      success: function(results) {
        $('#btn-avatar').removeAttr('disabled');
        if(results.status == 1) {
          toastr.options.timeOut = 2000;
          toastr.success(`${results.msg}`);
        }else {
          toastr.options.timeOut = 2000;
          toastr.error(`${results.msg}`);
        }
        // update image after success
        $('.avatar-img').attr('src', results.path)
        // reset form
        $('#profile-avatar-update')[0].reset();
      },
      error: function(err,status,res) {
        console.log(err)
        let errorObject = err.responseJSON.errors;
        for(let i in errorObject) {
          if(errorObject.hasOwnProperty(i)) {
            $('#'+i+'-error').text(errorObject[i][0]);
          }
        }

        // show server error
        let serverErr = err.responseJSON.msg;
        if(serverErr) {
          toastr.options.timeOut = 5000;
          toastr.error(serverErr);
        }
        
        $('#btn-avatar').removeAttr('disabled');
      },
      beforeSend: function() {
        $('#profile-avatar-update').find('span.error-text').text('');
        $('#btn-avatar').attr('disabled', 'disabled');
      }
    });
  });

  // create admin profile information
  // $('#admin-profile-info').on('submit', function(e){
  //   e.preventDefault();
  //   let form  = $('#admin-profile-info');
  //   let btn = $('#btn-profile-info-create');

  //   $.ajax({
  //     url: $(this).attr('action'),
  //     type: 'POST',
  //     data: form.serialize(),
  //     success: function(results) {
  //       btn.removeAttr('disabled');
  //       if(results.status == 1) {
  //         toastr.options.timeOut = 2000;
  //         toastr.success(`${results.msg}`);
  //       }else {
  //         toastr.options.timeOut = 2000;
  //         toastr.error(`${results.msg}`);
  //       }
  //     },
  //     error: function(err,status,res) {
  //       // show form input error messages
  //       let errorObject = err.responseJSON.errors;
  //       for(let i in errorObject) {
  //         if(errorObject.hasOwnProperty(i)) {
  //           $(form).find(`#${i}-error`).text(errorObject[i][0]);
  //         }
  //       }

  //       // show server error
  //       let serverErr = err.responseJSON.msg;
  //       if(serverErr) {
  //         toastr.options.timeOut = 5000;
  //         toastr.error(serverErr);
  //       }
  //       btn.removeAttr('disabled');
  //     },
  //     beforeSend: function() {
  //       $(form).find('span.error-text').text('');
  //       btn.attr('disabled', 'disabled');
  //     }
  //   });
  // });

  // update admin profile info
  // $('#member-profile-info-update').on('submit', function(e){
  //   e.preventDefault();
  //   let form  = $('#member-profile-info-update');
  //   let btn   = $('#btn-profile-info-update');

  
  //   let church_name = $('#church_name').val();
  //   let churchLogoInput = $('#church-logo')[0];
  //   let churchLogo = churchLogoInput.files[0];

  //   let profileImgInput = $('#church-profile-img')[0];
  //   let profileImg = profileImgInput.files[0];

  //   $.ajax({
  //     url: $(this).attr('action'),
  //     type: 'PUT',
  //     data: {
  //       "church_logo": churchLogo,
  //       "profile_img": profileImg,
  //       "church_name": church_name 
  //     },
  //     dataType: 'json',
  //     //contentType: false,
  //     // processData: false,
  //     headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
  //     success: function(results) {
  //       btn.removeAttr('disabled');
  //       if(results.status == 1) {
  //         toastr.options.timeOut = 2000;
  //         toastr.success(`${results.msg}`);
  //       }else {
  //         toastr.options.timeOut = 2000;
  //         toastr.error(`${results.msg}`);
  //       }
  //     },
  //     error: function(err,status,res) {
  //       // show form input error messages
  //       let errorObject = err.responseJSON.errors;
  //       for(let i in errorObject) {
  //         if(errorObject.hasOwnProperty(i)) {
  //           $(form).find(`#${i}-error`).text(errorObject[i][0]);
  //         }
  //       }

  //       // show server error
  //       let serverErr = err.responseJSON.msg;
  //       if(serverErr) {
  //         toastr.options.timeOut = 5000;
  //         toastr.error(serverErr);
  //       }
  //       btn.removeAttr('disabled');
  //     },
  //     beforeSend: function() {
  //       $(form).find('span.error-text').text('');
  //       btn.attr('disabled', 'disabled');
  //     }
  //   });
  // });

  // country dropdown
  let isoCountries = [
    { id: 'AF', text: 'Afghanistan'},
    { id: 'AX', text: 'Aland Islands'},
    { id: 'AL', text: 'Albania'},
    { id: 'DZ', text: 'Algeria'},
    { id: 'AS', text: 'American Samoa'},
    { id: 'AD', text: 'Andorra'},
    { id: 'AO', text: 'Angola'},
    { id: 'AI', text: 'Anguilla'},
    { id: 'AQ', text: 'Antarctica'},
    { id: 'AG', text: 'Antigua And Barbuda'},
    { id: 'AR', text: 'Argentina'},
    { id: 'AM', text: 'Armenia'},
    { id: 'AW', text: 'Aruba'},
    { id: 'AU', text: 'Australia'},
    { id: 'AT', text: 'Austria'},
    { id: 'AZ', text: 'Azerbaijan'},
    { id: 'BS', text: 'Bahamas'},
    { id: 'BH', text: 'Bahrain'},
    { id: 'BD', text: 'Bangladesh'},
    { id: 'BB', text: 'Barbados'},
    { id: 'BY', text: 'Belarus'},
    { id: 'BE', text: 'Belgium'},
    { id: 'BZ', text: 'Belize'},
    { id: 'BJ', text: 'Benin'},
    { id: 'BM', text: 'Bermuda'},
    { id: 'BT', text: 'Bhutan'},
    { id: 'BO', text: 'Bolivia'},
    { id: 'BA', text: 'Bosnia And Herzegovina'},
    { id: 'BW', text: 'Botswana'},
    { id: 'BV', text: 'Bouvet Island'},
    { id: 'BR', text: 'Brazil'},
    { id: 'IO', text: 'British Indian Ocean Territory'},
    { id: 'BN', text: 'Brunei Darussalam'},
    { id: 'BG', text: 'Bulgaria'},
    { id: 'BF', text: 'Burkina Faso'},
    { id: 'BI', text: 'Burundi'},
    { id: 'KH', text: 'Cambodia'},
    { id: 'CM', text: 'Cameroon'},
    { id: 'CA', text: 'Canada'},
    { id: 'CV', text: 'Cape Verde'},
    { id: 'KY', text: 'Cayman Islands'},
    { id: 'CF', text: 'Central African Republic'},
    { id: 'TD', text: 'Chad'},
    { id: 'CL', text: 'Chile'},
    { id: 'CN', text: 'China'},
    { id: 'CX', text: 'Christmas Island'},
    { id: 'CC', text: 'Cocos (Keeling) Islands'},
    { id: 'CO', text: 'Colombia'},
    { id: 'KM', text: 'Comoros'},
    { id: 'CG', text: 'Congo'},
    { id: 'CD', text: 'Congo}, Democratic Republic'},
    { id: 'CK', text: 'Cook Islands'},
    { id: 'CR', text: 'Costa Rica'},
    { id: 'CI', text: 'Cote D\'Ivoire'},
    { id: 'HR', text: 'Croatia'},
    { id: 'CU', text: 'Cuba'},
    { id: 'CY', text: 'Cyprus'},
    { id: 'CZ', text: 'Czech Republic'},
    { id: 'DK', text: 'Denmark'},
    { id: 'DJ', text: 'Djibouti'},
    { id: 'DM', text: 'Dominica'},
    { id: 'DO', text: 'Dominican Republic'},
    { id: 'EC', text: 'Ecuador'},
    { id: 'EG', text: 'Egypt'},
    { id: 'SV', text: 'El Salvador'},
    { id: 'GQ', text: 'Equatorial Guinea'},
    { id: 'ER', text: 'Eritrea'},
    { id: 'EE', text: 'Estonia'},
    { id: 'ET', text: 'Ethiopia'},
    { id: 'FK', text: 'Falkland Islands (Malvinas)'},
    { id: 'FO', text: 'Faroe Islands'},
    { id: 'FJ', text: 'Fiji'},
    { id: 'FI', text: 'Finland'},
    { id: 'FR', text: 'France'},
    { id: 'GF', text: 'French Guiana'},
    { id: 'PF', text: 'French Polynesia'},
    { id: 'TF', text: 'French Southern Territories'},
    { id: 'GA', text: 'Gabon'},
    { id: 'GM', text: 'Gambia'},
    { id: 'GE', text: 'Georgia'},
    { id: 'DE', text: 'Germany'},
    { id: 'GH', text: 'Ghana'},
    { id: 'GI', text: 'Gibraltar'},
    { id: 'GR', text: 'Greece'},
    { id: 'GL', text: 'Greenland'},
    { id: 'GD', text: 'Grenada'},
    { id: 'GP', text: 'Guadeloupe'},
    { id: 'GU', text: 'Guam'},
    { id: 'GT', text: 'Guatemala'},
    { id: 'GG', text: 'Guernsey'},
    { id: 'GN', text: 'Guinea'},
    { id: 'GW', text: 'Guinea-Bissau'},
    { id: 'GY', text: 'Guyana'},
    { id: 'HT', text: 'Haiti'},
    { id: 'HM', text: 'Heard Island & Mcdonald Islands'},
    { id: 'VA', text: 'Holy See (Vatican City State)'},
    { id: 'HN', text: 'Honduras'},
    { id: 'HK', text: 'Hong Kong'},
    { id: 'HU', text: 'Hungary'},
    { id: 'IS', text: 'Iceland'},
    { id: 'IN', text: 'India'},
    { id: 'ID', text: 'Indonesia'},
    { id: 'IR', text: 'Iran}, Islamic Republic Of'},
    { id: 'IQ', text: 'Iraq'},
    { id: 'IE', text: 'Ireland'},
    { id: 'IM', text: 'Isle Of Man'},
    { id: 'IL', text: 'Israel'},
    { id: 'IT', text: 'Italy'},
    { id: 'JM', text: 'Jamaica'},
    { id: 'JP', text: 'Japan'},
    { id: 'JE', text: 'Jersey'},
    { id: 'JO', text: 'Jordan'},
    { id: 'KZ', text: 'Kazakhstan'},
    { id: 'KE', text: 'Kenya'},
    { id: 'KI', text: 'Kiribati'},
    { id: 'KR', text: 'Korea'},
    { id: 'KW', text: 'Kuwait'},
    { id: 'KG', text: 'Kyrgyzstan'},
    { id: 'LA', text: 'Lao People\'s Democratic Republic'},
    { id: 'LV', text: 'Latvia'},
    { id: 'LB', text: 'Lebanon'},
    { id: 'LS', text: 'Lesotho'},
    { id: 'LR', text: 'Liberia'},
    { id: 'LY', text: 'Libyan Arab Jamahiriya'},
    { id: 'LI', text: 'Liechtenstein'},
    { id: 'LT', text: 'Lithuania'},
    { id: 'LU', text: 'Luxembourg'},
    { id: 'MO', text: 'Macao'},
    { id: 'MK', text: 'Macedonia'},
    { id: 'MG', text: 'Madagascar'},
    { id: 'MW', text: 'Malawi'},
    { id: 'MY', text: 'Malaysia'},
    { id: 'MV', text: 'Maldives'},
    { id: 'ML', text: 'Mali'},
    { id: 'MT', text: 'Malta'},
    { id: 'MH', text: 'Marshall Islands'},
    { id: 'MQ', text: 'Martinique'},
    { id: 'MR', text: 'Mauritania'},
    { id: 'MU', text: 'Mauritius'},
    { id: 'YT', text: 'Mayotte'},
    { id: 'MX', text: 'Mexico'},
    { id: 'FM', text: 'Micronesia}, Federated States Of'},
    { id: 'MD', text: 'Moldova'},
    { id: 'MC', text: 'Monaco'},
    { id: 'MN', text: 'Mongolia'},
    { id: 'ME', text: 'Montenegro'},
    { id: 'MS', text: 'Montserrat'},
    { id: 'MA', text: 'Morocco'},
    { id: 'MZ', text: 'Mozambique'},
    { id: 'MM', text: 'Myanmar'},
    { id: 'NA', text: 'Namibia'},
    { id: 'NR', text: 'Nauru'},
    { id: 'NP', text: 'Nepal'},
    { id: 'NL', text: 'Netherlands'},
    { id: 'AN', text: 'Netherlands Antilles'},
    { id: 'NC', text: 'New Caledonia'},
    { id: 'NZ', text: 'New Zealand'},
    { id: 'NI', text: 'Nicaragua'},
    { id: 'NE', text: 'Niger'},
    { id: 'NG', text: 'Nigeria'},
    { id: 'NU', text: 'Niue'},
    { id: 'NF', text: 'Norfolk Island'},
    { id: 'MP', text: 'Northern Mariana Islands'},
    { id: 'NO', text: 'Norway'},
    { id: 'OM', text: 'Oman'},
    { id: 'PK', text: 'Pakistan'},
    { id: 'PW', text: 'Palau'},
    { id: 'PS', text: 'Palestinian Territory}, Occupied'},
    { id: 'PA', text: 'Panama'},
    { id: 'PG', text: 'Papua New Guinea'},
    { id: 'PY', text: 'Paraguay'},
    { id: 'PE', text: 'Peru'},
    { id: 'PH', text: 'Philippines'},
    { id: 'PN', text: 'Pitcairn'},
    { id: 'PL', text: 'Poland'},
    { id: 'PT', text: 'Portugal'},
    { id: 'PR', text: 'Puerto Rico'},
    { id: 'QA', text: 'Qatar'},
    { id: 'RE', text: 'Reunion'},
    { id: 'RO', text: 'Romania'},
    { id: 'RU', text: 'Russian Federation'},
    { id: 'RW', text: 'Rwanda'},
    { id: 'BL', text: 'Saint Barthelemy'},
    { id: 'SH', text: 'Saint Helena'},
    { id: 'KN', text: 'Saint Kitts And Nevis'},
    { id: 'LC', text: 'Saint Lucia'},
    { id: 'MF', text: 'Saint Martin'},
    { id: 'PM', text: 'Saint Pierre And Miquelon'},
    { id: 'VC', text: 'Saint Vincent And Grenadines'},
    { id: 'WS', text: 'Samoa'},
    { id: 'SM', text: 'San Marino'},
    { id: 'ST', text: 'Sao Tome And Principe'},
    { id: 'SA', text: 'Saudi Arabia'},
    { id: 'SN', text: 'Senegal'},
    { id: 'RS', text: 'Serbia'},
    { id: 'SC', text: 'Seychelles'},
    { id: 'SL', text: 'Sierra Leone'},
    { id: 'SG', text: 'Singapore'},
    { id: 'SK', text: 'Slovakia'},
    { id: 'SI', text: 'Slovenia'},
    { id: 'SB', text: 'Solomon Islands'},
    { id: 'SO', text: 'Somalia'},
    { id: 'ZA', text: 'South Africa'},
    { id: 'GS', text: 'South Georgia And Sandwich Isl.'},
    { id: 'ES', text: 'Spain'},
    { id: 'LK', text: 'Sri Lanka'},
    { id: 'SD', text: 'Sudan'},
    { id: 'SR', text: 'Suriname'},
    { id: 'SJ', text: 'Svalbard And Jan Mayen'},
    { id: 'SZ', text: 'Swaziland'},
    { id: 'SE', text: 'Sweden'},
    { id: 'CH', text: 'Switzerland'},
    { id: 'SY', text: 'Syrian Arab Republic'},
    { id: 'TW', text: 'Taiwan'},
    { id: 'TJ', text: 'Tajikistan'},
    { id: 'TZ', text: 'Tanzania'},
    { id: 'TH', text: 'Thailand'},
    { id: 'TL', text: 'Timor-Leste'},
    { id: 'TG', text: 'Togo'},
    { id: 'TK', text: 'Tokelau'},
    { id: 'TO', text: 'Tonga'},
    { id: 'TT', text: 'Trinidad And Tobago'},
    { id: 'TN', text: 'Tunisia'},
    { id: 'TR', text: 'Turkey'},
    { id: 'TM', text: 'Turkmenistan'},
    { id: 'TC', text: 'Turks And Caicos Islands'},
    { id: 'TV', text: 'Tuvalu'},
    { id: 'UG', text: 'Uganda'},
    { id: 'UA', text: 'Ukraine'},
    { id: 'AE', text: 'United Arab Emirates'},
    { id: 'GB', text: 'United Kingdom'},
    { id: 'US', text: 'United States'},
    { id: 'UM', text: 'United States Outlying Islands'},
    { id: 'UY', text: 'Uruguay'},
    { id: 'UZ', text: 'Uzbekistan'},
    { id: 'VU', text: 'Vanuatu'},
    { id: 'VE', text: 'Venezuela'},
    { id: 'VN', text: 'Viet Nam'},
    { id: 'VG', text: 'Virgin Islands}, British'},
    { id: 'VI', text: 'Virgin Islands}, U.S.'},
    { id: 'WF', text: 'Wallis And Futuna'},
    { id: 'EH', text: 'Western Sahara'},
    { id: 'YE', text: 'Yemen'},
    { id: 'ZM', text: 'Zambia'},
    { id: 'ZW', text: 'Zimbabwe'}
  ];

  $("[name='country']").select2({
    placeholder: "Select a country",
    data: isoCountries
  });

});