const validarEmail = (email:string) =>{
  const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.com$/;
  return alert(regexEmail.test(email));
}

const validName = (name:string) =>{
  const regexNome = /^[A-Za-z\s]+$/;
  return alert(regexNome.test(name));
}

const validPassword = (password:string,confirmPassword:string) =>{
  if(password===confirmPassword){
  }else{
    alert("As senhas digitadas não coincidem")
  }
}