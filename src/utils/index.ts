export const validarEmail = (email:string) =>{
  const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.com$/;
  const validEmail=regexEmail.test(email)
  if(validEmail===false){
    return (alert("E-mail digitado não é válido"));
  }else{
    return (regexEmail.test(email));
  }
}

export const validName = (name:string) =>{
  const regexNome = /^[A-Za-z\s]+$/;
  const validName = regexNome.test(name)
  if(validName===false){
    return alert("Nome digitado não é válido");
  }else{
    return (regexNome.test(name));
  }
}

export const validPassword = (password:string,confirmPassword:string) =>{
  if(password!==confirmPassword){
    alert("As senhas digitadas não coincidem")
  }
}