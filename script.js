const defaultData = {
  name: "Warsa Khan",
  avatar: "avatar.png",
  rollNo: "22091857",
  email: "garimakim03@gmail.com",
  phone: "9084655503",
  fatherName: "Shabir ah khan ",
  motherName: "Gulshan shabir ",
  dob: "03-01-2006",
  officialEmail: "garimakim03@gmail.com",
  course: "BACHELOR OF BUSINESS ADMINISTRATION",
  courseCard: "BACHELOR OF BUSINESS ADMINISTRATION",
  year: "6",
  section: "FIN-D",
  classRoll: "0",
  enrollNo: "GE-22244351",
  uniRoll: "2404351",
  highSchool: "53.8",
  intermediate: "66.4",
  status: "Alumni",
  batch: "2025-2029",
  contactNo: "9084655503",
  bloodGroup: "A+ve",
  resiAddress: "Lane 12, Turner Road,Dehradun",
  validThrough: "30-06-2025",
  emergencyContact: "7417385008"
};

// Function to populate HTML elements based on their ID matching "val-key" from the data object
function applyDataToDOM() {
  const data = defaultData;
  
  for (const key in data) {
    const elId = `val-${key}`;
    const el = document.getElementById(elId);
    
    // Some elements might be used multiple times on the same page, so we also support classes 
    // but here we just safely map if the exact ID exists
    if (el) {
      if (el.tagName === 'IMG') {
        el.src = data[key];
      } else {
        el.textContent = data[key];
      }
    }
  }

  // Handle elements that share the same data value but need a different ID
  const bottomNoEl = document.getElementById('val-bottomNo');
  if (bottomNoEl) {
    bottomNoEl.textContent = data.rollNo;
  }
}

// Run this immediately on script load
document.addEventListener('DOMContentLoaded', applyDataToDOM);
