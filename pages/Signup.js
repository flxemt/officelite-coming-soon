import view from '../utils/view'

export default function Signup() {
  view.innerHTML = `
    <main class="sign-up pb-[5.375rem] relative px-6 bg-pattern-header min-h-screen bg-[size:458px] bg-[top_-170px_center] bg-no-repeat md:px-10 after:bg-dark after:absolute after:bg-pattern-side after:bg-no-repeat after:bg-[size:1202px] after:bg-center after:right-0 after:bottom-0 after:w-full after:h-[320px] after:-z-10 md:after:h-[380px] md:after:bg-[size:1454px] md:pb-[7.875rem] xl:after:w-[30%] xl:after:h-full">
      <div class="max-w-container mx-auto">
        <header class="pt-[2.875rem] flex justify-center md:justify-start md:pt-[4.5rem] xl:pt-[5.0625rem]">
          <img src="/shared/logo.svg" alt="Logo" />
        </header>
        <section class="mt-20 flex flex-col justify-between items-center gap-16 md:gap-[6.5rem] md:mt-[6.5rem] xl:flex-row xl:mt-[7.875rem]">
          <div class="text-center xl:text-left xl:max-w-[540px]">
            <div class="max-w-[573px]">
              <h1 class="font-bold text-h2 leading-h2 text-dark-blue xl:text-h1 xl:leading-h1">Work smarter. Save time.</h1>
              <p class="mt-4 xl:text-body-1 md:mt-6">Easily manage your projects. Get on the list and receive in-app perks available only to early subscribers. We are moving into final development and getting ready for official launch soon.</p>
            </div>
            <div class="mt-16 text-center md:max-w-[448px] mx-auto xl:text-left xl:mx-0 md:mt-10 font-bold text-blue">
              <h2 class="uppercase tracking-[5px] leading-h2">Coming <span class="text-dark-blue" id="countdown-date"></span></h2>
              <div class="mt-[1.125rem] flex justify-center gap-3 text-[0.75rem] md:mt-2 md:text-body-2 md:gap-4 text-center xl:mt-2">
                <div class="flex-1 max-w-[72px] bg-card-light-blue rounded-sm py-[0.625rem] md:max-w-[100px] md:rounded-card md:py-4">
                  <div class="text-[2rem] leading-[2.875rem] md:text-h1 md:leading-h1" id="days">00</div>
                  <div class="text-light-gray md:mt-[0.375rem]">days</div>
                </div>
                <div class="flex-1 max-w-[72px] bg-card-light-blue rounded-sm py-[0.625rem] md:max-w-[100px] md:rounded-card md:py-4">
                  <div class="text-[2rem] leading-[2.875rem] md:text-h1 md:leading-h1" id="hours">00</div>
                  <div class="text-light-gray md:mt-[0.375rem]">hours</div>
                </div>
                <div class="flex-1 max-w-[72px] bg-card-light-blue rounded-sm py-[0.625rem] md:max-w-[100px] md:rounded-card md:py-4">
                  <div class="text-[2rem] leading-[2.875rem] md:text-h1 md:leading-h1" id="minutes">00</div>
                  <div class="text-light-gray md:mt-[0.375rem]">min</div>
                </div>
                <div class="flex-1 max-w-[72px] bg-card-light-blue rounded-sm py-[0.625rem] md:max-w-[100px] md:rounded-card md:py-4">
                  <div class="text-[2rem] leading-[2.875rem] md:text-h1 md:leading-h1" id="seconds">00</div>
                  <div class="text-light-gray md:mt-[0.375rem]">sec</div>
                </div>
              </div>
            </div>
          </div>
          <form class="w-full form p-6 bg-white text-dark-blue self-stretch rounded-card leading-body-1 shadow-form max-w-[445px] mx-auto md:p-10 md:pb-[3.25rem] xl:m-0" id="form" autocomplete="off">
            <div class="input-group">
              <input name="name" placeholder="Name" aria-label="Enter your name" type="text" class="w-full px-4 pb-4 border-b-[1px] border-form-line" />
            </div>
            <div class="input-group">
              <input type="text" name="email" placeholder="Email Address" aria-label="Enter your Email address" class="mt-6 w-full px-4 pb-4 border-b-[1px] border-form-line relative after:absolute after:bottom-0 after:h-[1px] after:w-full" />
            </div>
            <div class="select-container relative">
              <input type="hidden" id="plan" name="plan" value="basic" />
              <button class="select relative mt-6 w-full border-b-[1px] border-form-line px-4 pb-4 pr-5 flex justify-between items-center font-bold" id="select-btn" aria-haspopup="listbox" aria-expanded="false" type="button">
                <div>
                  <span id="plan-type">Basic Pack</span>
                  <span class="ml-2 opacity-40" id="plan-price">Free</span>
                </div>
                <img src="/sign-up/icon-arrow-down.svg" alt="Arrow down" class="transition-transform" />
              </button>
              <div class="select-body absolute left-0 top-[50px] bg-white w-full shadow-select px-8 py-6 rounded-md z-10 border-[1px] border-select-line cursor-default font-bold" role="listbox" aria-labelledby="select-btn" aria-hidden="true">
                <button class="w-full flex justify-between items-center pb-4 border-b-[1px] border-b-select-line-2" data-slug="basic" data-type="Basic Pack" data-price="Free" type="button" role="option" aria-selected="true">
                  <div>
                    <span>Basic Pack</span>
                    <span class="ml-2 opacity-40">Free</span>
                  </div>
                  <img src="/sign-up/icon-check.svg" alt="Check icon" aria-hidden="false" />
                </button>
                <button class="mt-4 w-full flex justify-between items-center pb-4 border-b-[1px] border-b-select-line-2" data-slug="pro" data-type="Pro Pack" data-price="$9.99" type="button" role="option" aria-selected="false">
                  <div>
                    <span>Pro Pack</span>
                    <span class="ml-2 opacity-40">$9.99</span>
                  </div>
                  <img src="/sign-up/icon-check.svg" class="hidden" alt="Check icon" aria-hidden="true" />
                </button>
                <button class="mt-4 w-full flex justify-between items-center" data-slug="ultimate" data-type="Ultimate Pack" data-price="$19.99" type="button" role="option" aria-selected="false">
                  <div>
                    <span>Ultimate Pack</span>
                    <span class="ml-2 opacity-40">$19.99</span>
                  </div>
                  <img src="/sign-up/icon-check.svg" class="hidden" alt="Check icon" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div class="input-group">
              <input type="text" name="phone" placeholder="Phone Number" aria-label="Enter your phone number" class="mt-6 w-full px-4 pb-4 border-b-[1px] border-form-line" />
            </div>
            <div class="input-group">
              <input type="text" name="company" placeholder="Company" aria-label="Enter your company" class="mt-6 w-full px-4 pb-4 border-b-[1px] border-form-line" />
            </div>
            <button class="mt-10 bg-blue text-white w-full py-[0.875rem] font-bold rounded-btn transition-colors hover:bg-light-blue disabled:bg-light-blue disabled:cursor-not-allowed" id="btn-submit">Get on the list</button>
          </form>
        </section>
      </div>
    </main>
  `

  const form = document.querySelector('#form')
  const selectContainer = document.querySelector('.select')
  const selectBtn = document.querySelector('#select-btn')
  const selectBody = document.querySelector('.select-body')
  const selectButtons = document.querySelectorAll('.select-body button')
  const plan = document.querySelector('#plan')
  let isSelectOpen = false

  const validations = {
    name: /^(\w{2,})(\s(\w{2,}))?$/,
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    phone: /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
  }

  function updateSelect() {
    if (isSelectOpen) {
      selectBody.classList.add('select-body-show')
    } else {
      selectBody.classList.remove('select-body-show')
    }

    selectBtn.querySelector('img').style.transform = `rotate(${isSelectOpen ? '180' : '0'}deg)`
    selectBtn.setAttribute('aria-expanded', isSelectOpen)
    selectBody.setAttribute('aria-hidden', !isSelectOpen)
  }

  function toggleSelect() {
    isSelectOpen = !isSelectOpen
    updateSelect()
  }

  function handleDocumentClick(event) {
    if (selectContainer.contains(event.target) || selectBody.contains(event.target)) return
    isSelectOpen = false
    updateSelect()
  }

  function handleSelect(event) {
    const element = event.currentTarget
    const { slug, type, price } = element.dataset

    selectButtons.forEach(button => {
      button.querySelector('img').classList.add('hidden')
      button.setAttribute('aria-selected', false)
    })

    element.querySelector('img').classList.remove('hidden')
    element.setAttribute('aria-selected', true)

    plan.value = slug
    selectBtn.querySelector('#plan-type').textContent = type
    selectBtn.querySelector('#plan-price').textContent = price

    isSelectOpen = false
    updateSelect()
  }

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const submitBtn = event.target.querySelector('#btn-submit')
    let isValidationError = false

    for (const [key, value] of formData.entries()) {
      const inputGroup = form.querySelector(`[name="${key}"]`).parentElement

      if (!value.match(validations[key])) {
        inputGroup.classList.add('input-error')
        isValidationError = true
      } else {
        inputGroup.classList.remove('input-error')
      }
    }

    if (isValidationError) return
    submitBtn.disabled = true
    submitBtn.textContent = 'Success'
  }

  selectBtn.addEventListener('click', toggleSelect)
  selectButtons.forEach(button => button.addEventListener('click', handleSelect))
  document.addEventListener('click', handleDocumentClick)
  form.addEventListener('submit', handleSubmit)
}
