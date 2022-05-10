// console.log(window.matchMedia('(prefers-color-scheme: dark'))
const checkbox = document.querySelector('#checkbox')
if (window.matchMedia('(prefers-color-scheme: dark').matches){
  checkbox.setAttribute('checked', true)
}
// document.body.style.setProperty()
checkbox.addEventListener('change', function(event){
  if(this.checked){
    document.body.classList.remove('is-light-mode')
    document.body.classList.add('is-dark-mode')
    // --cardGray: #252b43;
    // --gray:#8088ad;
    // --lightGray:#1d2029;
    // --baseBack:#1d2029;
    // --baseColor: white;
    // --cardTitle:#8088ad;
    // --swichSpinner:#282943;
    // --switch:linear-gradient(to right, #4796d2 0%, #37ce87 100%);
  }else{
    document.body.classList.remove('is-dark-mode')
    document.body.classList.add('is-light-mode')
  }
})