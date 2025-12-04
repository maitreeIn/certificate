# Certificate Project

A responsive certificate generation system for training completion certificates.

## Features

- **Dynamic Certificate Generation**: Supports multiple people with different certificate data
- **Responsive Design**: Works on desktop and mobile devices
- **Dual Language**: English and Thai sections
- **Easy to Update**: Simply edit `data.js` to add more people

## How to Use

### View Certificates

Open `index.html` in a web browser. Use the navigation buttons to switch between different people's certificates.

You can also use URL parameters:
- `index.html?id=1` - First person
- `index.html?id=2` - Second person
- `index.html?id=3` - Third person

### Add More People

Edit the `data.js` file and add new entries to the `certificateData` array:

```javascript
{
    id: 4,
    name: "ชื่อผู้ได้รับ",
    certNumber: "รหัสใบรับรอง",
    course: "ชื่อหลักสูตร",
    duration: "ระยะเวลา",
    trainingDate: "วันที่อบรม",
    betweenDate: "ระหว่างวันที่",
    issueDate: "วันที่ออกใบรับรอง",
    issueFullDate: "วันที่ออกใบรับรองแบบเต็ม"
}
```

## Files

- `index.html` - Main HTML file
- `style.css` - Stylesheet
- `data.js` - Certificate data for all people
- `cer_bg.png` - Background image for English section
- `logo.png` - Company logo

## Technologies

- HTML5
- CSS3 (with responsive design)
- Vanilla JavaScript
- Google Fonts (Sarabun)
