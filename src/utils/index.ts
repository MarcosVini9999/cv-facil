export const validarEmail = (email:string) =>{
  const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.com$/;
  const validEmail=regexEmail.test(email)
}

export const validName = (name:string) =>{
  const regexNome = /^[A-Za-z\s]+$/;
  const validName = regexNome.test(name)
}

export const validPassword = (password:string,confirmPassword:string) =>{

}