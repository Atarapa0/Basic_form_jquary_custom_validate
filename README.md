# Delivery Job Application Form

A responsive job application form for delivery positions built with HTML, CSS (LESS), JavaScript (jQuery), and Bootstrap. Features modern styling, form validation, and data persistence.

## 🚀 Features

### Form Components
- **Personal Information Section**
  - Full Name (text input with validation)
  - Email (email input with format validation)
  - Phone Number (tel input with format validation)

- **Job Preferences Section**
  - Workplace Type (select dropdown: Remote, On-site, Hybrid)
  - Employment Type (multi-select: Full-time, Part-time, Freelance, Contract)
  - Job Location (searchable select: Istanbul, Ankara, Izmir, Remote)

### Validation & UX
- ✅ Real-time form validation
- ✅ Error messages for invalid inputs
- ✅ Name field allows only letters and spaces
- ✅ Email format validation
- ✅ Phone number format validation (Turkish format)
- ✅ Required field validation on submit
- ✅ Select2 integration for enhanced dropdowns

### Data Handling
- 📡 AJAX form submission to test endpoint
- 💾 Local Storage for data persistence
- 🔄 JSON data format
- 📅 Timestamp tracking

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3/LESS** - Styling with preprocessor
- **JavaScript/jQuery** - Form functionality and validation
- **Bootstrap 5** - Responsive framework
- **Select2** - Enhanced select dropdowns
- **Google Fonts** - Inter font family

## 📁 Project Structure

```
todolist - Copy/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   ├── style.less      # LESS stylesheet
│   │   └── style.css       # Compiled CSS (if exists)
│   ├── js/
│   │   └── script.js       # JavaScript functionality
│   └── data/
│       └── data.json       # Data file (if exists)
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser
- Internet connection (for CDN resources)

### Installation

1. Clone or download the project
```bash
git clone https://github.com/Atarapa0/Basic_form_jquary_custom_validate.git
cd Basic_form_jquary_custom_validate
```

2. Open `index.html` in your browser
```bash
# On Windows
start index.html

# Or simply double-click the index.html file
```

### Development

If you want to modify the LESS styles:

1. Install LESS compiler or use the CDN version (already included)
2. The LESS file will be compiled automatically in the browser
3. For production, compile LESS to CSS:
```bash
lessc assets/css/style.less assets/css/style.css
```

## 📋 Usage

1. **Fill Personal Information**
   - Enter your full name (letters and spaces only)
   - Provide a valid email address
   - Enter phone number in Turkish format (0XXXXXXXXXX)

2. **Select Job Preferences**
   - Choose workplace type from dropdown
   - Select one or more employment types
   - Pick your preferred job location

3. **Submit Application**
   - Click "Send application" button
   - Form validates all fields
   - Data is sent via AJAX and saved locally
  
   - <img width="769" height="485" alt="image" src="https://github.com/user-attachments/assets/d4184282-2430-4fe7-9931-c94664395223" />


## ✨ Form Validation Rules

| Field | Validation Rule | Error Message |
|-------|----------------|---------------|
| Full Name | Letters and spaces only | "Sadece harf girişine izin verilir." |
| Email | Valid email format | "Geçerli bir e-posta adresi girin." |
| Phone | 11 digits starting with 0 | "Boşluk bırakmadan geçerli bir telefon numarası girin." |
| All required fields | Not empty | Field-specific required messages |

## 🎨 Styling Features

- **Responsive Design** - Works on desktop, tablet, and mobile
- **Modern UI** - Clean and professional appearance
- **Custom Checkboxes** - Styled checkbox components
- **Inter Font** - Modern typography
- **Bootstrap Grid** - Responsive layout system
- **Custom Color Scheme** - Professional delivery app branding

## 🔧 Configuration

### Select2 Options
```javascript
// Basic select
$('#workplaceType').select2({
    placeholder: "Select workplace type",
    allowClear: true
});

// Multi-select
$('#employmentType').select2({
    placeholder: "Select employment types",
    allowClear: true
});

// Searchable select
$('#jobLocation').select2({
    placeholder: "Search and select location",
    allowClear: true
});
```

### AJAX Endpoint
Currently using `https://httpbin.org/post` for testing. Replace with your actual endpoint:

```javascript
$.ajax({
    url: 'your-api-endpoint-here',
    type: 'POST',
    dataType: 'json',
    data: JSON.stringify(data),
    contentType: 'application/json',
    // ... rest of the configuration
});
```

## 📱 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

- GitHub: [@Atarapa0](https://github.com/Atarapa0)
- Repository: [Basic_form_jquary_custom_validate](https://github.com/Atarapa0/Basic_form_jquary_custom_validate)

## 🙏 Acknowledgments

- Bootstrap team for the responsive framework
- Select2 for enhanced select components
- Google Fonts for the Inter font family
- jQuery team for the JavaScript library

---

**© 2022 Delivery App. All rights reserved.**
