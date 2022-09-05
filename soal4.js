function IsValidPassword(pass){

  if (pass.length < 8){
    return 'INVALID : Password harus terdiri dari minimum 8 karakter'
  }
  else if (pass.search(/[a-z]/) < 0){
    return 'INVALID : Password harus berisikan ajad'
  }
  else if (pass.search(/[A-Z]/) < 0){
    return 'INVALID : Password harus mengandung huruf kapital'
  }
  else if (pass.search(/[0-9]/) < 0){
    return 'INVALID : Password harus mengandung angka'
  }
  else{
    return 'VALID'
  }
}
console.log (IsValidPassword('Meong2021'));