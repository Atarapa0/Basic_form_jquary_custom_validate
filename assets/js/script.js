/*$(document).ready(function () {
  $("#addTaskButton").click(function () {
    console.log("Add Task button clicked");
    var inputValue = $("#taskInput").val();
    console.log("Input value: " + inputValue);
    if (inputValue != "") {
      $("#taskList").append(
        '<li><input type="checkbox" id="taskCheckbox" class="removeTaskButton"> <label for="taskCheckbox">' +
          inputValue +
          "</label></li>"
      );
      console.log("Added task: " + inputValue);
      $("#taskInput").val("");
    }
    console.log("Task input cleared");
  });
});

$(document).click(function (event) {
  $(".removeTaskButton").on("click", function () {
    // $(this).parent().remove(); 
    var checked = $(this).is(":checked");
    if (checked) {
      console.log("Checkbox is checked" + $(this).is(":checked"));
      $(this)
        .next("label")
        .css("text-decoration", "line-through", "color", "red");
    }else{
        console.log("Checkbox is not checked" + $(this).is(":not(:checked)"));
        $(this).next("label").css("text-decoration", "none", "color", "black");
    }
  });
});*/


$(document).ready(function () {
  $('#addTaskButton').click(function () {
    const taskText = $('#taskInput').val().trim();
    if (taskText !== '') {
      addTask(taskText);
      $('#taskInput').val('');
    }
  });

  function addTask(text) {
    const taskItem = `
            <li class="task-item">
                <label class="custom-checkbox">
                    <input type="checkbox" class="checkbox-input">
                    <span class="checkmark">
                        <svg class="icon-checkmark">
                            <use xlink:href="#icon-checkmark"></use>
                        </svg>
                    </span>
                    <span class="task-text">${text}</span>
                </label>
            </li>
        `;
    $('#taskList').append(taskItem);
  }

  // Enter tuşu ile görev ekleme
  $('#taskInput').keypress(function (e) {
    var taskText = $('#taskInput').val().trim();
    if (e.which === 13 && taskText !== '') {
      addTask(taskText);
    }
  });
});
// boşlukta uyarı versin


$(document).ready(function () {
  // Basit Select2
  $('#workplaceType').select2({
    placeholder: "Select workplace type",
    allowClear: true
  });

  // Çoklu seçim
  $('#employmentType').select2({
    placeholder: "Select employment types",
    allowClear: true
  });

  // Arama özellikli
  $('#jobLocation').select2({
    placeholder: "Search and select location",
    allowClear: true
  });

  // ...existing code...
});


$(function () {
  var name = $("#name").val();


  validateNameField(name, event);
})

$(document).ready(function () {
  $("#name").blur(function () {
    if (this.value.match(/[^a-zA-Z\s]/g)) {
      this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
      $("#name-error").text("Sadece harf girişine izin verilir.").show();
    } else {
      $("#name-error").hide();
    }
  });
  $("#email").blur(function () {
    // Email formatını kontrol et
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!emailRegex.test(this.value)) {
      $("#email-error").text("Geçerli bir e-posta adresi girin.").show();
    } else {
      $("#email-error").hide();
    }
  });

  $("#phone").blur(function(){
    var phoneRegex= /^0[0-9]{10}$/; // 10 haneli telefon numarası için basit bir regex
    if (!phoneRegex.test(this.value)) {
      $("#phone-error").text("Boşluk bırakmadan geçerli bir telefon numarası girin. Örn: 0555 555 55 55").show();
    } else {
      $("#phone-error").hide();
    }
  });
});


$(document).ready(function () {
  // Submit butonu click eventi
  $("#submitBtn").click(function(e) {
    e.preventDefault();
    
    if (validateForm()) {
      var formData = collectFormData();
      submitData(formData);
    }
  });

  // Form validation diğerleride gelecek seçimler
  function validateForm() {
    var isValid = true;
    
    if ($("#name").val().trim() === "") {
      $("#name-error").text("Ad soyad zorunludur.").show();
      isValid = false;
    }
    
    if ($("#email").val().trim() === "") {
      $("#email-error").text("Email zorunludur.").show();
      isValid = false;
    }
    
    if ($("#phone").val().trim() === "") {
      $("#phone-error").text("Telefon zorunludur.").show();
      isValid = false;
    }
    
    return isValid;
  }
  
  // Form verilerini topla
  function collectFormData() {
    return {
      name: $("#name").val().trim(),
      email: $("#email").val().trim(),
      phone: $("#phone").val().trim(),
      workplaceType: $("#workplaceType").val(),
      employmentType: $("#employmentType").val(),
      jobLocation: $("#jobLocation").val(),
      timestamp: new Date().toISOString()
    };
  }
  
  // POST isteği simülasyonu
  function submitData(data) {
    $.ajax({
      url: 'https://httpbin.org/post', // Test endpoint
      type: 'POST',
      dataType: 'json',
      data: JSON.stringify(data),
      contentType: 'application/json',
      success: function(response) {
        console.log("POST Response:", response);
        saveToLocalStorage(data);
        alert("Form başarıyla gönderildi! Network tab'ı kontrol edin.");
      },
      error: function(xhr, status, error) {
        console.log("Error:", error);
        alert("POST isteği gönderildi ama hata aldı. Network tab'ı kontrol edin.");
      }
    });
  }
  
  // LocalStorage'a kaydet
  function saveToLocalStorage(data) {
    var applications = JSON.parse(localStorage.getItem('applications')) || [];
    applications.push(data);
    localStorage.setItem('applications', JSON.stringify(applications));
    console.log("LocalStorage'a kaydedildi:", data);
  }
});
