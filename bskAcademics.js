const staffs = [
    { StaffNo: "BSTF0032", Name: "Mr.Bukenya Francis", Subject: "Biology" },
    { StaffNo: "BSTF0007", Name: "Mr.Ssenyange Herbert", Subject: "Physics" },
    { StaffNo: "BSTF0131", Name: "Mr. Moohi Paul", Subject: "Chemistry" },
    { StaffNo: "BSTF0012", Name: "Mr. Dhikusoka Patrick", Subject: "Mathematics" },
    { StaffNo: "BSTF0130", Name: "Mrs. Namatovu Flavia", Subject: "Economics" },
    { StaffNo: "BSTF0090", Name: "Mrs. Namuli Winnie", Subject: "Geography" },
    { StaffNo: "BSTF0100", Name: "Mr. Mugerwa Collins", Subject: "History" },
    { StaffNo: "BSTF0110", Name: "Mrs. Mudulu Anita", Subject: "General Paer" },
    { StaffNo: "BSTF0097", Name: "Mr. Mugaru Anorld", Subject: "Luaganda" },
    { StaffNo: "BSTF0173", Name: "Mrs. Odilia Kiwer", Subject: "Kiwahili" },
];

const table = document.getElementById("staffTable").getElementsByTagName('tbody')[0];

staffs.forEach(staff => {
    let row = table.insertRow();
    let StaffNoCell = row.insertCell(0);
    let NameCell = row.insertCell(1);
    let SubjectCell = row.insertCell(2);

    StaffNoCell.textContent = staff.StaffNo;
    NameCell.textContent = staff.Name;
    SubjectCell.textContent = staff.Subject;

});