// console.log('register working')

const usernameField = document.querySelector('#usernameField')
const feedBackArea = document.querySelector('.invalid_feedback')
const emailField = document.querySelector('#emailField')
const emailFeedBackArea = document.querySelector('.emailFeedBackArea')
const usernamesuccessOutput = document.querySelector('.usernamesuccessOutput')

emailField.addEventListener('keyup', (e) => {
  const emailVal = e.target.value

  emailField.classList.remove('is-invalid')
  feedBackArea.style.display = 'none'
  // emailFeedBackArea.innerHTML = `<p>${data.email_error}</p>`

  if (emailVal.length > 0) {
    fetch('/authentication/validate-email', {
      body: JSON.stringify({ email: emailVal }),
      method: 'POST',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data)
        if (data.email_error) {
          emailField.classList.add('is-invalid')
          emailFeedBackArea.style.display = 'block'
          emailFeedBackArea.innerHTML = `<p>${data.email_error}</p>`
        }
      })
  }
})

usernameField.addEventListener('keyup', (e) => {
  // console.log('7777', 7777)
  const usernameVal = e.target.value
  usernamesuccessOutput.style.display = 'block'

  usernamesuccessOutput.textContent = `Checking ${usernameVal}`
  usernameField.classList.remove('is-invalid')
  feedBackArea.style.display = 'none'
  // feedBackArea.innerHTML = `<p>${data.username_error}</p>`

  if (usernameVal.length > 0) {
    fetch('/authentication/validate-username', {
      body: JSON.stringify({ username: usernameVal }),
      method: 'POST',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data)
        usernamesuccessOutput.style.display = 'none'
        if (data.username_error) {
          usernameField.classList.add('is-invalid')
          feedBackArea.style.display = 'block'
          feedBackArea.innerHTML = `<p>${data.username_error}</p>`
        }
      })
  }
})
