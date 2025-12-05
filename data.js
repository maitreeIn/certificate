// Certificate data for multiple people
const certificateData = [
    {
        id: 1,
        name: "นาย สุนทร แซ่อึ๊ง",
        certNumber: "TPD-24-0300211201967-040",
        course: "ความปลอดภัยในการทำงานบนที่สูง",
        duration: "ระหว่างวันที่การฝึกอบรม ระหว่างวันที่การฝึกอบรม 6 ชั่วโมง",
        trainingDate: "วันที่อบรม วันที่ 2 ธันวาคม 2568",
        betweenDate: "ระหว่างวันที่ 2 ธันวาคม 2568",
        issueDate: "ให้ไว้ ณ วันที่ 2 ธันวาคม 2568",
        issueFullDate: "วันที่ออกใบรับรอง ให้ไว้ ณ วันที่ 1 ธันวาคม 2568"
    },
    {
        id: 2,
        name: "นาย วินัย บุญอ่อน",
        certNumber: "TPD-24-0300211201967-042",
        course: "ความปลอดภัยในการทำงานบนที่สูง",
        duration: "ระหว่างวันที่การฝึกอบรม ระหว่างวันที่การฝึกอบรม 6 ชั่วโมง",
        trainingDate: "วันที่อบรม วันที่ 2 ธันวาคม 2568",
        betweenDate: "ระหว่างวันที่ 2 ธันวาคม 2568",
        issueDate: "ให้ไว้ ณ วันที่ 2 ธันวาคม 2568",
        issueFullDate: "วันที่ออกใบรับรอง ให้ไว้ ณ วันที่ 1 ธันวาคม 2568"
    },
    {
        id: 3,
        name: "นาย ไพโรจน์ สระสม",
        certNumber: "TPD-24-0300211201967-039",
        course: "ความปลอดภัยในการทำงานบนที่สูง",
        duration: "ระหว่างวันที่การฝึกอบรม ระหว่างวันที่การฝึกอบรม 6 ชั่วโมง",
        trainingDate: "วันที่อบรม วันที่ 2 ธันวาคม 2568",
        betweenDate: "ระหว่างวันที่ 2 ธันวาคม 2568",
        issueDate: "ให้ไว้ ณ วันที่ 2 ธันวาคม 2568",
        issueFullDate: "วันที่ออกใบรับรอง ให้ไว้ ณ วันที่ 2 ธันวาคม 2568"
    }
];

// Get person ID from URL parameter, default to 1
function getPersonId() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get('id')) || 1;
    return id;
}

// Get certificate data for specific person
function getCertificateData(personId) {
    return certificateData.find(person => person.id === personId) || certificateData[0];
}

// Populate certificate with data
function populateCertificate() {
    const personId = getPersonId();
    const data = getCertificateData(personId);

    // English section
    document.getElementById('eng-header').textContent = data.name;
    document.getElementById('cert-id').textContent = data.certNumber;
    document.getElementById('student-name').textContent = data.name;
    document.getElementById('between-date').textContent = data.betweenDate;
    document.getElementById('issue-date').textContent = data.issueDate;

    // Thai section
    document.getElementById('thai-header').textContent = `เอกสารรับรอง ให้ไว้กับ ${data.name}`;
    document.getElementById('thai-student-name').textContent = data.name;
    document.getElementById('thai-course').textContent = data.course;
    document.getElementById('thai-cert-number').textContent = `ใบรับรองเลขที่ ${data.certNumber}`;
    document.getElementById('thai-duration').textContent = data.duration;
    document.getElementById('thai-training-date').textContent = data.trainingDate;
    document.getElementById('thai-issue-date').textContent = data.issueFullDate;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', populateCertificate);
