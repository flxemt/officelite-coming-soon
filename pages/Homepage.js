import view from '../utils/view'

export default function Homepage() {
  view.innerHTML = `
    <main class="px-6 bg-pattern-header min-h-screen bg-[size:458px] bg-[top_-170px_center] bg-no-repeat md:px-10 md:bg-[size:666px] md:bg-[top_-164px_right_-310px] xl:bg-auto xl:bg-[top_-419px_right_-350px]">
      <div class="max-w-container mx-auto">
        <header class="pt-[2.875rem] flex justify-center md:justify-start md:pt-[4.5rem] xl:pt-[5.0625rem]">
          <img src="/shared/logo.svg" alt="Logo" />
        </header>
        <section class="mt-20 flex flex-col justify-between items-center gap-16 md:mt-[6.5rem] md:flex-row xl:mt-[6.375rem]">
          <img src="/home/illustration-charts.svg" class="max-w-[171px] md:order-1 md:max-w-[281px] xl:max-w-[475px]" alt="Charts illustration" />
          <div class="text-center md:text-left xl:max-w-[540px]">
            <h1 class="font-bold text-h2 leading-h2 text-dark-blue xl:text-h1 xl:leading-h1">A simple solution to complex tasks is coming soon</h1>
            <p class="mt-6 xl:text-body-1">Say goodbye to inefficient juggling of multiple apps, teams, and projects. Officelite is the new collaboration platform built with an intuitive interface to improve productivity.</p>
            <a href="/signup" data-navigo class="inline-block mt-6 leading-body-1 px-10 py-[0.875rem] bg-blue text-white font-bold rounded-btn shadow-btn xl:mt-8 hover:bg-light-blue transition-colors">Get Started</a>
          </div>
        </section>
        <section class="mt-[6.25rem] flex flex-col gap-8 leading-body-1 md:mt-[8.75rem] xl:flex-row xl:gap-[1.875rem] xl:mt-40">
          <h2 class="sr-only">Our plans</h2>
          <div class="flex-1 bg-white px-[3.25rem] py-10 rounded-card text-dark-blue text-center md:text-left md:p-12 md:pr-[4.25rem] xl:text-center xl:py-10 xl:px-0">
            <div class="flex flex-col justify-between md:flex-row md:items-end xl:flex-col xl:items-center">
              <div class="md:mb-[1.25rem] xl:mb-0">
                <h3 class="font-bold text-h3 leading-h3">Basic</h3>
                <div class="mt-10 text-h1 leading-h1 font-bold md:mt-4 xl:mt-10">Free</div>
                <p class="mt-2 md:mt-1 xl:mt-2">Up to 5 users for free</p>
              </div>
              <ul class="mt-14 text-gray flex flex-col gap-4 md:mt-0 xl:mt-14">
                <li>Basic document collaboration</li>
                <li>2 GB storage</li>
                <li>Great security and support</li>
              </ul>
            </div>
            <a href="/signup" data-navigo class="inline-block mt-8 bg-very-light-blue font-bold text-blue rounded-btn px-10 py-[0.875rem] md:mt-1 xl:mt-8 hover:bg-light-blue-hover transition-colors">Try for Free</a>
          </div>
          <div class="flex-1 bg-blue text-white px-[3.25rem] py-10 rounded-card text-center bg-pattern-pricing bg-no-repeat bg-[top_-380px_center] md:text-left md:p-12 md:pr-[6.25rem] md:bg-[left_-319px_center] xl:text-center xl:py-10 xl:px-0 xl:bg-[top_-380px_center]">
            <div class="flex flex-col justify-between md:flex-row md:items-end xl:flex-col xl:items-center">
              <div class="md:mb-[1.25rem] xl:mb-0">
                <h3 class="font-bold text-h3 leading-h3">Pro</h3>
                <div class="mt-10 text-h1 leading-h1 font-bold md:mt-4 xl:mt-10">$9.99</div>
                <p class="mt-2 md:mt-1 xl:mt-2">Per user, billed monthly</p>
              </div>
              <ul class="mt-14 text-very-light-blue flex flex-col gap-4 md:mt-0 xl:mt-14">
                <li>All essential integrations</li>
                <li>50 GB storage</li>
                <li>More control and insights</li>
              </ul>
            </div>
            <a href="/signup" data-navigo class="inline-block mt-8 bg-white font-bold text-blue rounded-btn px-10 py-[0.875rem] md:mt-1 xl:mt-8 hover:text-light-blue transition-colors">Try for Free</a>
          </div>
          <div class="flex-1 bg-white px-[3.25rem] py-10 rounded-card text-dark-blue text-center md:text-left md:p-12 md:pr-[5.75rem] xl:text-center  xl:py-10 xl:px-0">
            <div class="flex flex-col justify-between md:flex-row md:items-end xl:flex-col xl:items-center">
              <div class="md:mb-[1.25rem] xl:mb-0">
                <h3 class="font-bold text-h3 leading-h3">Ultimate</h3>
                <div class="mt-10 text-h1 leading-h1 font-bold md:mt-4 xl:mt-10">$19.99</div>
                <p class="mt-2 md:mt-1 xl:mt-2">Per user, billed monthly</p>
              </div>
              <ul class="mt-14 text-gray flex flex-col gap-4 md:mt-0 xl:mt-14">
                <li>Robust work management</li>
                <li>100 GB storage</li>
                <li>VIP support</li>
              </ul>
            </div>
            <a href="/signup" data-navigo class="inline-block mt-8 bg-very-light-blue font-bold text-blue rounded-btn px-10 py-[0.875rem] md:mt-1 xl:mt-8 hover:bg-light-blue-hover transition-colors">Try for Free</a>
          </div>
        </section>
      </div>
    </main>
    <footer class="px-6 mt-[-49.625rem] pb-[6.25rem] bg-dark pt-[55.875rem] bg-pattern-footer bg-no-repeat bg-[size:1202px] bg-[top_156px_center] md:mt-[-31.125rem] md:pt-[37.375rem] md:bg-[size:1454px] md:bg-[top_15px_center] xl:mt-[-15.875rem] xl:pt-[21rem] xl:pb-[5.6875rem] xl:bg-[size:auto] xl:bg-[left_-702px_top_-614px]">
      <div class="max-w-[448px] mx-auto text-white font-bold md:leading-body-1 xl:text-left xl:max-w-container flex flex-col items-center justify-between gap-10 xl:flex-row">
        <div class="text-center self-stretch md:max-w-[448px] xl:text-left flex-1 xl:mx-0">
          <h2 class="uppercase tracking-[5px] leading-h2">Coming <span class="text-blue" id="countdown-date"></span></h2>
          <div class="mt-[1.125rem] flex justify-center gap-3 text-[0.75rem] md:mt-2 md:text-body-2 md:gap-4 xl:mt-0 text-center">
            <div class="flex-1 max-w-[72px] bg-dark-blue rounded-sm py-[0.625rem] md:max-w-[100px] md:rounded-card md:pt-4 md:pb-[0.875rem]">
              <div class="text-[2rem] leading-[2.875rem] md:text-h1 md:leading-h1" id="days">47</div>
              <div class="text-light-gray md:mt-[0.375rem]">days</div>
            </div>
            <div class="flex-1 max-w-[72px] bg-dark-blue rounded-sm py-[0.625rem] md:max-w-[100px] md:rounded-card md:pt-4 md:pb-[0.875rem]">
              <div class="text-[2rem] leading-[2.875rem] md:text-h1 md:leading-h1" id="hours">07</div>
              <div class="text-light-gray md:mt-[0.375rem]">hours</div>
            </div>
            <div class="flex-1 max-w-[72px] bg-dark-blue rounded-sm py-[0.625rem] md:max-w-[100px] md:rounded-card md:pt-4 md:pb-[0.875rem]">
              <div class="text-[2rem] leading-[2.875rem] md:text-h1 md:leading-h1" id="minutes">56</div>
              <div class="text-light-gray md:mt-[0.375rem]">min</div>
            </div>
            <div class="flex-1 max-w-[72px] bg-dark-blue rounded-sm py-[0.625rem] md:max-w-[100px] md:rounded-card md:pt-4 md:pb-[0.875rem]">
              <div class="text-[2rem] leading-[2.875rem] md:text-h1 md:leading-h1" id="seconds">14</div>
              <div class="text-light-gray md:mt-[0.375rem]">sec</div>
            </div>
          </div>
        </div>
        <a href="/signup" data-navigo class="inline-block leading-body-1 px-10 py-[0.875rem] bg-blue text-white rounded-btn shadow-btn md:mt-12 xl:mt-0 hover:bg-light-blue transition-colors">Get Started</a>
      </div>
    </footer>
  `
}
