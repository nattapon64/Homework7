// const loginForm = document.querySelector('.login-form');
// const inp_username = document.querySelector('#username');
// const inp_password = document.querySelector('#password');

// //โจทย์ : ให้สร้าง code เพื่อ validate(ตรวจสอบ) ค่าที่ submit จาก form ดังนี้
// // 1. ทุก input ต้องไม้ใส่ค่าว่าง
// // 2. username ต้องมากกว่า 3 ตัวอักษร
// // 3. password ต้องมากกว่า ภ ตัวอักษร 

// // ถ้า validate ไม่ผ่าน ให้เปลี่ยน input เป้นสีแดง
// // ถ้า validate ผ่านให้ส่งไปที่ https://example.com
// const hdlLogin = e => {
//   e.preventDefault();
//   console.log(loginForm.element);
//   let allInput = loginForm.element
// };

// loginForm.addEventListener('submit', hdlLogin);


const loginForm = document.querySelector('.login-form');
const inp_username = document.querySelector('#username');
const inp_password = document.querySelector('#password');

const validateInput = (input, condition) => {
  if (!condition) {
    input.style.borderColor = 'red';
    return false;
  }
  input.style.borderColor = ''; // Reset border color if validation passes
  return true;
};

const hdlLogin = e => {
  e.preventDefault();

  // Reset border colors before revalidation
  inp_username.style.borderColor = '';
  inp_password.style.borderColor = '';

  // Validate conditions
  const isUsernameValid = validateInput(inp_username, inp_username.value.trim().length > 3);
  const isPasswordValid = validateInput(inp_password, inp_password.value.trim().length > 2);

  // If all validations pass, submit the form
  if (isUsernameValid && isPasswordValid) {
    window.location.href = 'https://example.com';
  }
};

loginForm.addEventListener('submit', hdlLogin);

